class ApplicationController < ActionController::Base
    
    # helper_method allows us to use that method in the views
        # Allows you to render information in the view files
    helper_method :check_if_someone_is_logged_in?, :current_user

    # For every action, check to see if someone is logged in
        # skip_before_action :authorized, only: [:METHOD_NAME] <- Allows you to make exceptions
        # See the UserController's skip_before_action
    before_action :authorized
    
    def current_user
        # Sets and returns an instance from the session ID
        @current_user ||= User.find_by(id: session[:user_id])
    end

    def check_if_someone_is_logged_in?
        # Returns true if someone is logged in properly
        # Returns false is nobody is logged in
        !current_user.nil?
    end

    def authorized
        # If not logged_in, send them to the login page
        # If logged in, carry on
        redirect_to login_user_path unless check_if_someone_is_logged_in?
    end


end
