# Rails API Auth

## Outline

### Part 1: Setup & Fake Auth

**Goal**: be able to work with a user object in the frontend and backend, so
that you can work on more interesting features without worrying actual auth.

- [ ] Review Rails API setup
- [ ] Create user model
- [ ] Add routes + controller actions for fake auth
  - `POST /login`: login with a form
  - `GET /me`: auto-login
- [ ] Test routes with Postman

### Part 2: JWT Auth

**Goal**: login or sign up from the frontend, and stay logged in after reloading
the page.

- [ ] Authenticate users with username + password
- [ ] Generate JWT token
- [ ] Store token in frontend

## Auth Discussion

## Fake It Till You Make It

Building out these features takes a significant amount of time, which means less
time spent building out features that are unique to _your_ project. (Honestly,
when's the last time you've been impressed seeing someone log into a site as
part of their demo?)

Here's a fake auth solution that will:

- Give you a current user object in React state for frontend auth features
- Give you a current user object in Rails for backend auth features

### Routes

```rb
# config/routes.rb
get "/me", to: "users#show"
```

### Controllers

```rb
# app/controllers/application_controller.rb
class ApplicationController < ActionController::API

  # this will run before _every_ request, so you'll always have a @current_user instance variable
  def authenticate
    @current_user = User.first
  end

end

# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :authenticate, only: [:show]

  def show
    render json: @current_user
  end

end
```

### React

```js
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // auto-login
  useEffect(() => {
    fetch("http://localhost:3000/me")
      .then((r) => r.json())
      .then(setCurrentUser);
  }, []);

  // manual login
  function handleLogin() {
    fetch("http://localhost:3000/me")
      .then((r) => r.json())
      .then(setCurrentUser);
  }

  // manual logout
  function handleLogout() {
    setCurrentUser(null);
  }

  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
      <button onClick={handleLogin}>Log in</button>
      {currentUser ? <h1>Welcome, {currentUser.name}</h1> : null}
    </div>
  );
}
```

## Creating Users

Let's start building our real auth implementation, starting with a **sign in**
feature to allow users to create an account.

First, create the route:

```rb
# config/routes.rb
post "/signin", to: "users#signin"
```

And set up the `signin` action:

```rb
class UsersController < ApplicationController

  def signin
    user_params = params.permit(:username, :password, :bio, :image)

    user = User.create(user_params)

    if user.valid?
      render json: user, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

end
```

We can use the
[built in Rails HTTP status code symbols](https://gist.github.com/mlanett/a31c340b132ddefa9cca)
when sending responses to the client; `status: :bad_request`, for instance.

Now, test out the request using a client like
[Postman](https://www.postman.com/downloads/) and make sure you are able to
create new users.

## A Brief Review of Auth

As you'll recall from working with MVC applications in Rails, the umbrella topic
of **auth** consists of two key components:

- **Authentication**: Verifying that a user is who they say they are
- **Authorization**: Giving permissions to users after they've been authenticated

For **authenticating** users, we ask our users to provide a username and a password
when they register for an account; and then ask them to provide the same
username and password to log back into that same account.

As a part of creating our user account, we store a _salted and hashed_ version
of the user's password in our database, instead of the user's plaintext
password, by using the [`bcrypt` gem][bcrypt] to handle our password hashing.

In order to authenticate the user for requests after they've logged in, we also
used an _encrypted session token_, which we stored in a _browser cookie_. Since
that browser cookie is automatically sent with every request to our server,
we could use that cookie to **authenticate** the user and also to **authorize**
the user for specific actions (such as updating their profile).

![MVC auth diagram](./images/mvc-auth-flow.png)

For an MVC app, our `signin` method would look more like this:

```rb
class UsersController < ApplicationController

  def signin
    user_params = params.permit(:username, :password, :bio, :image)

    user = User.create(user_params)

    if user.valid?
      # save the user_id to an encrypted session cookie
      session[:user_id] = user.id
      redirect_to "/"
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to "/register"
    end
  end

end
```

## JWT Authentication

Our new authentication flow for APIs won't involve sending cookies, but we'll
still need some special token to authenticate our users.

For that token we'll be using JWT.

![jwt auth flow](https://miro.medium.com/max/960/1*l-FS80RhxUgjZOKGgOXnTQ.jpeg)

Here is the JWT authentication flow for logging in:

1. An already existing user requests access with their username and password
2. The app validates these credentials
3. The app gives a signed token to the client
4. The client stores the token and presents it with every request. This token is effectively the user's access pass––it proves to our server that they are who they claim to be.

JWTs are composed of three strings separated by periods:

```txt
aaaaaaaaaaaaaaa.bbbbbbbbbbbbbbbbbbbbb.ccccccccccccccccccc
```

- The first part (`aaaaaaaaaaaa`) is the header
- The second part (`bbbbbbbbbbbb`) is the payload - the good stuff, like who
  this person is, and their id in our database.
- The third part (`ccccccccccccc`) is the signature. The signature is a hash of
  the header and the payload. It is hashed with a secret key, that we will
  provide, using something like `Rails.application.secrets.secret_key_base`.

Head on over to [jwt.io](http://jwt.io/#debugger) and see for yourself:

![jwt](https://cloud.githubusercontent.com/assets/25366/9151601/2e3baf1a-3dbc-11e5-90f6-b22cda07a077.png)

Since we've already added [`gem jwt`](https://github.com/jwt/ruby-jwt) to our
Gemfile, let's explore some JWT methods by opening a `rails console`:

`JWT.encode` takes up to three arguments: a payload to encode, an application
secret of the user's choice, and an optional third that can be used to specify
the hashing algorithm used. Typically, we don't need to show the third. This
method returns a JWT as a string.

`JWT.decode` takes three arguments as well: a JWT as a string, an application
secret, and––optionally––a hashing algorithm.

```ruby
# in rails console
secret = 'my_secret'
payload = { beef: 'steak' }
jwt = JWT.encode(payload, secret, 'HS256')
# => "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
decoded_hash = JWT.decode(jwt, secret, true, { algorithm: 'HS256' })
# => [{"beef"=>"steak"}, {"alg"=>"HS256"}]
data = decoded_hash[0]
# => {"beef"=>"steak"}
```

Now that we know how to encode a token, let's issue our users a JWT token when they create an account, and include it in the response:

```rb
class UsersController < ApplicationController

  def signin
    user_params = params.permit(:username, :password, :bio, :image)

    user = User.create(user_params)

    if user.valid?
      token = JWT.encode({ user_id: user.id }, 'my_secret', 'HS256')
      render json: { user: UserSerializer.new(user), token: token }, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

end
```

Now, when users need to authenticate themselves for subsequent requests, they'll
need to send that token as part of the request so we can verify it.

The token will be sent in a special `Authorization` header as a bearer token,
like so:

```js
headers: {
  "Content-Type": "application/json",
  "Authorization: "Bearer asd213a.asdsad.123fdsdf"
}
```

We can set up our login action now as well. It'll be similar to the
sign in action, except instead of creating a new user, we'll use
the username and password to look up an existing user:

```rb
# config/routes.rb
post "/login", to: "users#login"
```

And set up the `login` action:

```rb
class UsersController < ApplicationController

  def login
    user = User.find_by(username: params[:usernames])
    if user && user.authenticate(params[:password])
      token = JWT.encode({ user_id: user.id }, 'my_secret', 'HS256')
      render json: { user: UserSerializer.new(user), token: token }
    else
      render json: { error: user.errors.full_messages }, status: :unauthorized
    end
  end

  # rest of code omitted ...
end
```

The key logic going on here is the `user.authenticate(params[:password])`. This
method is available on our `User` model because of the `has_secure_password`
macro, and it uses `bcrypt` to compare the user's plaintext password to the
salted and hashed password saved in the `password_digest` field in the database.

Just like with the register action, we want to send back a token with the
response so that the user can authenticate themselves on subsequent requests.

## Authorization

Now that we have authentication actions in place, and we're able to issue JWT
tokens, we need some way to decode those tokens and authorize the user for other
requests. For example, let's build out a feature that allows users to edit their
profile. We can start by adding a new route:

```rb
patch "/me", to: "users#update"
```

In the controller action, we want to do the following:

- Read the token from the Authorization header
- Decode the token using JWT, and get the `user_id` from its payload
  - If the token is missing or invalid, we want to send an `unauthorized` response
- Find a user using the `user_id`
- Update the user in the database
- Respond with the updated user object

```rb
class UsersController < ApplicationController

  def update
    auth_token = headers['Authorization'].split.last if headers['Authorization'].present?
    begin
      decoded_token = JWT.decode(auth_token, Rails.application.secrets.secret_key_base, true, { algorthim: 'HS256' })[0]
      user = User.find(decoded_token['user_id'])
      user.update(image: params[:image], bio: params[:bio])
      render json: user
    rescue
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

end
```

As you can see, that's a lot of logic in one controller action. And we'll likely
want to reuse that functionality in other actions as well. So let's make a new class to handle the logic of:

- Reading the token from the Authorization header
- Decoding the token using JWT, and get the `user_id` from its payload
- Finding a user using the `user_id`

```rb
# app/services/authorize_request.rb
class AuthorizeRequest
  def initialize(headers = {})
    @headers = headers
  end

  def user
    User.find_by(id: decoded_token['user_id']) if decoded_token
  end

  private

  attr_reader :headers

  def decoded_token
    JWT.decode(auth_token, Rails.application.secrets.secret_key_base, true, { algorthim: 'HS256' })[0]
  rescue
    nil
  end

  def auth_token
    headers['Authorization'].split.last if headers['Authorization'].present?
  end
end
```

Now, we can update our controller action like so:

```rb
def update
  user = AuthorizeRequest.new(request.headers).user
  if user
    user.update(image: params[:image], bio: params[:bio])
    render json: user
  else
    render json: { error: "Unauthorized" }, status: :unauthorized
  end
end
```

We can take it a step further, and create a reusable action in our
ApplicationController to authenticate our users for any request:

```rb
class ApplicationController < ActionController::API

  def authenticate
    @current_user = AuthorizeRequest.new(request.headers).user
    render json: { error: 'Not Authorized' }, status: :unauthorized unless @current_user
  end

end
```

This means the `@current_user` instance variable will be set for any
action we use this `authenticate` action before. So our profile action simply becomes:

```rb
class UsersController < ApplicationController
  before_action :authenticate

  def show
    @current_user.update(image: params[:image], bio: params[:bio])
    render json: @current_user
  end
end
```
