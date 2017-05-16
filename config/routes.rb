Rails.application.routes.draw do
  get "/flights" => "flights#index"
  get "/flightstwo" => "flights#indextwo"
  # post '/updated_flight' => "flights#show"
end
