Rails.application.routes.draw do

  devise_for :users

  devise_scope :user do
  authenticated :user do
    root 'products#index', as: :authenticated_root
  end

  unauthenticated do
    root 'devise/sessions#new', as: :unauthenticated_root
  end
end

  resources :users, only: [:index, :show, :destroy]
  resources :supplies, only: [:index, :show]
  resources :homes, only: [:index]
  resources :products, only: [:index, :show, :new, :create, :update]
  resources :labors, only: [:index, :show,  :new, :create]

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :show, :new, :create, :update, :destroy]
      resources :supplies, only: [:index, :show, :new, :create]
      resources :labors, only: [:index, :show,  :new, :create]
      resources :productsupplies, only: [:index, :create, :destroy, :update]
      resources :productlabors, only: [:index, :create, :destroy, :update]
    end
  end
end
