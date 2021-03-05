class UsersController < ApplicationController
  before_action :authenticate, only: [:show, :update]

  # POST /login
  def login
    # find the user based on their username
    user = User.find_by(username: params[:username])
    # check their password
    if user && user.authenticate(params[:password])
      # save the user id in an encoded token
      token = JWT.encode({ user_id: user.id }, 'my$ecretK3y', 'HS256')
      render json: { user: UserSerializer.new(user), token: token }
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
    # if they are who they say they are, 
    # give them a token (wristband) and send the user and their token as the response
    # otherwise, send an error message

    # fake auth (stub)
    # user = User.first
  end

  # POST /signup
  def signup
    # get the user info from the form (params)
    user_params = params.permit(:username, :image, :bio, :password)
    # create a new user in the database (User.create)
    user = User.create(user_params)
    if user.valid?
      # send back a response with new user
      token = JWT.encode({ user_id: user.id }, 'my$ecretK3y', 'HS256')
      render json: { user: UserSerializer.new(user), token: token }, status: :created
    else
      # error messages
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # GET /me
  # authenticate
  def show
    # stub
    render json: @current_user
  end

  # PATCH /me
  # authenticate
  def update
    @current_user.update(bio: params[:bio], image: params[:image])
    # response!
    render json: user
  end

  # authenticate
  # Photo >- User
  # def create
  #   user = User.first
  #   user.photos.create(img: params[:img])
  # end

end
