Rails.application.routes.draw do

  # how does rails know which controller and which method/action in that controller should be invoked based on the route
  get '/items', to: 'items#index'

  #dynamic route
  # /items/29
  get '/items/:id', to: 'items#show'
  # get '/items/id', to: 'items#show'

  # get '/users/profile', to: 'users#show'
end
