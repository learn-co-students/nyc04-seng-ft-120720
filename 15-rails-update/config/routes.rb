
Rails.application.routes.draw do
# most specific > least specific 


  # how does rails know which controller and which method/action in that controller should be invoked based on the route
  
  # UPDATE

  resources :items

  patch "/items/:id/increase", to: "items#increase"

  # get '/items', to: 'items#index', as: 'items'
  # get '/items/new', to: 'items#new', as: 'new_item'
  # post '/items', to: 'items#create'
  # get '/items/:id', to: 'items#show', as: 'item'
  # get "/items/:id/edit", to: "items#edit", as: "edit_item"
  # patch "/items/:id", to: 'items#update'
  # delete "/items/:id", to: 'items#destroy'



  get '/wishlistItems', to: 'wishlist_items#index', as: 'wishlist_items'
  
  # send me a form to create a new item 
  # "/wishlistItems/29"
  get '/wishlistItems/new', to: 'wishlist_items#new'

  # post already describes that we are adding something 
  # what resource are we adding to? 
  post '/wishlistItems', to: 'wishlist_items#create'
end
