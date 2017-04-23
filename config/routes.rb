Rails.application.routes.draw do
  get "/flights" => "flights#index"
  # post '/updated_flight' => "flights#show"
end
