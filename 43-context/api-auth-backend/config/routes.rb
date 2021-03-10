Rails.application.routes.draw do
  post "/login", to: "users#login"
  post "/signup", to: "users#signup"
  get "/me", to: "users#show"
  patch "/me", to: "users#update"
end
