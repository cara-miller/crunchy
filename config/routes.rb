Rails.application.routes.draw do
  devise_for :users
  root 'homes#index'

  resources :supplies, only: [:index, :show]
  resources :homes, only: [:index]
  resources :products, only: [:index, :show, :new, :create]
  resources :labors, only: [:index, :show,  :new, :create]

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :show, :new, :create]
      resources :supplies, only: [:index, :show, :new, :create]
      resources :labors, only: [:index, :show,  :new, :create]
      resources :productsupplies, only: [:index, :create]
    end
  end
end
