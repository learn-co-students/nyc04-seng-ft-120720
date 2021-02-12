Rails.application.routes.draw do
  resources :items
  resources :shops
  # resources :users

  get '/users', to: 'users#index'
  get '/users/names', to: 'users#get_all_names'
  get '/users/:id', to: 'users#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
