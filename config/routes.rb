Rails.application.routes.draw do
  devise_for :users
  root 'products#index'
  resources :products

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :show, :create]
    end
  end

end
