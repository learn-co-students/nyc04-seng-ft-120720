class UsersController < ApplicationController
    # skip_before_action allows us to see the page without being logged in
    skip_before_action :authorized, only: [:new, :create, :login, :please_login]

    def show
        @user = User.find(params[:id])
    end

    def new
        @user = User.new
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            session[:user_id] = @user.id
            redirect_to items_path
        else    
            redirect_to new_user_path
        end
    end



    def login
    end

    def please_login
        @user = User.find_by(username: params[:username])

        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            # We know that if the above line is true:
                # - A user exists with that username
                # - The password they provided matches the one we have stored 
            redirect_to items_path
        else
            redirect_to login_user_path
        end

    end


    def logout  
        session[:user_id] = nil
        redirect_to login_user_path
    end


    private

    def user_params
        params.require(:user).permit(:username, :age, :password, :password_confirmation)
    end

end
