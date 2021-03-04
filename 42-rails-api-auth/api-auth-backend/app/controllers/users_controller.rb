class UsersController < ApplicationController
  before_action :authenticate, only: [:show, :update]

  # POST /login
  def login
    # TODO: check the username and password
    # if they are who they say they are, 
    # give them a token (wristband) and send the user and their token as the response
    # otherwise, send an error message

    # fake auth (stub)
    user = User.first
    render json: user
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
