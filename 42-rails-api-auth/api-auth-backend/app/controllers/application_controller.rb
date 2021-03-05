class ApplicationController < ActionController::API

  def authenticate
    # get the header
    auth_header = request.headers["Authorization"]
    # read the token from the header
    token = auth_header.split.last
    # decode the token
    payload = JWT.decode(token, 'my$ecretK3y', true, { algorithm: 'HS256' })[0]
    # find the user!
    @current_user = User.find_by(id: payload["user_id"])
  rescue
    # if something breaks, the user isn't authorized for this request
    render json: { errors: ["unauthorized!"] }, status: :unauthorized
  end

end
