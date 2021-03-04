# Rails API Setup

## Environment Setup

Make sure you are running a [Ruby version supported by Heroku](https://devcenter.heroku.com/articles/ruby-support#ruby-versions) to make your app easier to deploy later. At the time of writing, that is:

- 2.6.6
- 2.7.2
- 3.0.0

If you don't have that version, install it using RVM:

```sh
rvm install 2.6.6
rvm use 2.6.6
```

You will also need [Postgresql](https://www.postgresql.org/download/) installed for the database in order to deploy your app to Heroku later. Check if Postgres is installed and running:

```sh
psql -p 5432 -h localhost -U postgres
```

Once connection is verified, you can quit by typing:

```sh
\q
```

## Creating the Backend

Create Rails API:

```sh
rails new project-server --api -T --database=postgresql
```

Here's what those option flags mean:

- `--api`: Generate a project in API mode (no sessions/cookies; no view helpers; etc).
- `--database=postgresql`: Use Postgresql as the database. Optional, but if you
  plan on deploying, you must use Postgresql.
- `-T`: Skip test files.

### Add Gems

Add the [`jwt`](https://github.com/jwt/ruby-jwt) gem if you plan on implementing auth:

```sh
bundle add jwt
```

Add [`Active Model Serializers`](https://github.com/rails-api/active_model_serializers/tree/v0.10.6/docs) gem for serializing your JSON response:

```sh
bundle add active_model_serializers
```

Uncomment [`bcrypt`](https://github.com/codahale/bcrypt-ruby) and [`rack-cors`](https://github.com/cyu/rack-cors) gems in Gemfile:

```rb
# Gemfile

# Use Active Model has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'
```

And install:

```sh
bundle install
```

### CORS

Set up [CORS config](https://github.com/cyu/rack-cors#rails-configuration) to allow requests from your frontend to your backend:

```rb
# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # change this when you deploy, please!

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

### User Model (for auth)

Generate a User model (make sure your model has a `password_digest` field so
that `bcrypt` will work; otherwise the attributes on your user model are up to
you):

```sh
rails g resource User username password_digest image bio
```

Add [password logic](https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password) to model, and optionally, validations:

```rb
# app/models/user.rb
class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
end
```

Create seed data:

```rb
# db/seeds.rb
User.create(
  username: "Ian",
  password: "123",
  bio: "Lead Instructor",
  image: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
)
```

### Database Setup

Setup database:

```sh
rails db:create db:migrate db:seed
```

Test:

```sh
rails c
> User.first
 => #<User id: 1, username: "Ian", password_digest: [FILTERED], bio: "Lead Instructor" ...>
```

### Next Steps

- Create routes
- Create controllers
- Add additional models
- Add serializers for models
- ???
- Profit
