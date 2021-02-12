class UsersController < ApplicationController

  def index 
    users = User.all 

    # render :index # aka HTML
    render json: users
  end 

  def show 
    params[:embed]

    user = User.find(params[:id])

    render json: user
  end

  def get_all_names
    users = User.pluck(:name)

    render json: users
  end 
end
