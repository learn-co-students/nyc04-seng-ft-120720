
Rails.application.routes.draw do
# most specific > least specific 


  # how does rails know which controller and which method/action in that controller should be invoked based on the route
  get '/items', to: 'items#index', as: 'items'

  get '/items/new', to: 'items#new'
  post '/items', to: 'items#create', as: 'new_item'

  #dynamic route
  # /items/29
  # /items/30
  # /items/drake
  get '/items/:id', to: 'items#show'

  get '/wishlistItems', to: 'wishlist_items#index', as: 'wishlist_items'
  
  # send me a form to create a new item 
  # "/wishlistItems/29"
  get '/wishlistItems/new', to: 'wishlist_items#new'

  # post already describes that we are adding something 
  # what resource are we adding to? 
  post '/wishlistItems', to: 'wishlist_items#create'
end
