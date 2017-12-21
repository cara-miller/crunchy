Rails.application.routes.draw do
  devise_for :users
  root 'homes#index'

  resources :supplies, only: [:show]
  resources :homes, only: [:index]
  resources :products, only: [:index, :show, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :show, :new, :create]
      resources :supplies, only: [:index, :show, :new, :create]
      resources :supply_categories, only: [:index, :show,  :new, :create]
    end
  end
end
