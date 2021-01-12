Rails.application.routes.draw do

  # how does rails know which controller and which method/action in that controller should be invoked based on the route
  get '/items', to: 'items#index'

  #dynamic route
  # /items/29
  # /items/drake
  get '/items/:id', to: 'items#show'

  get '/wishlistItems', to: 'wishlist_items#index'
  
  # send me a form to create a new item 
  get '/wishlistItems/new', to: 'wishlist_items#new'

  # post already describes that we are adding something 
  # what resource are we adding to? 
  post '/wishlistItems', to: 'wishlist_items#create'
end
