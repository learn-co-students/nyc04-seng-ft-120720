
Rails.application.routes.draw do

  # Welcome Page (Go to staticController#welcome method)
  root "static#welcome"

  # Functionality to add Item to Wishlists
  # Button_to add the item is in the index page of items
  post "/wishlistItems/add/:item_id", to: "wishlist_items#add_item"
  
  # LOGIN FUNCTIONALITY
  # The form_tag is in the login.html.erb
  get "/users/login", to: "users#login", as: "login_user"
  post "/please_login", to: "users#please_login"
  
  # LOGOUT FUNCTIONALITY
  # Button_to logout is in the application.html.erb
  delete "/logout", to: "users#logout", as: "logout"
  
  # REGISTER FUNCTIONALITY
  resources :users, only: [:new, :create]
  
  # DELETE ITEMS IS ON THE INDEX ACTION OF WISHLIST ITEMS
  delete '/wishlistItems/:id', to: "wishlist_items#destroy"
  



  
  get "/users/:id", to: "users#show", as: "user"


  
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
  

  get '/wishlistItems/new', to: 'wishlist_items#new'
  post '/wishlistItems', to: 'wishlist_items#create'

end
