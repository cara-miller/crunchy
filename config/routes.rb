Rails.application.routes.draw do
  root 'homes#index'

  devise_for :users, controllers: { sessions: "users/sessions"}

  resources :supplies, only: [:index, :show]
  resources :homes, only: [:index]
  resources :products, only: [:index, :show, :new, :create]
  resources :labors, only: [:index, :show,  :new, :create]
  # resources :productsupplies, only: [:destroy]

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :show, :new, :create]
      resources :supplies, only: [:index, :show, :new, :create]
      resources :labors, only: [:index, :show,  :new, :create]
      resources :productsupplies, only: [:index, :create, :destroy, :update]
      resources :users
      resources :productlabors, only: [:index, :create, :destroy, :update]
    end
  end
end
