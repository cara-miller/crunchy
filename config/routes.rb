Rails.application.routes.draw do
  root 'products#index'
  resources :products

  namespace :api do
      namespace :v1 do
        resources :products, only: [:index, :show, :create]
      end
    end
end
