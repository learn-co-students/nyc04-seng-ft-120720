Rails.application.routes.draw do
  post "/login", to: "users#login"
  get "/me", to: "users#show"
  patch "/me", to: "users#update"
end
