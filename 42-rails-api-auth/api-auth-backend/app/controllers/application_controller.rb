class ApplicationController < ActionController::API

  def authenticate
    # TODO: check the user's token from the request
    # if the token is valid, use it to find a user from the database
    # otherwise, send an error message

    @current_user = User.first
  end

end
