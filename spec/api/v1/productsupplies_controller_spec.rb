require 'rails_helper'
require 'spec_helper'
require 'json'

RSpec.describe Api::V1::ProductsuppliesController, type: :controller do

  describe 'GET#index' do
    it 'should have an index method' do
      @user = FactoryBot.create(:user)
      sign_in @user
      p1 = FactoryBot.create(:product)
      s1 =FactoryBot.create(:supply)
      ps1 = FactoryBot.create(:productsupply)

      get :index
      assert_response :success
    end
  end

  describe 'POST create' do
    it 'should make a new productsupply object' do
      p1 = FactoryBot.create(:product)
      s1 =FactoryBot.create(:supply)
      @user = FactoryBot.create(:user)
      sign_in @user
      params = {
        productsupply: {
          quantity: 10,
          supply_id: s1.id,
          product_id: p1.id,
          user_id: @user.id
        },
        user: User.where({ id: @user.id })
      }
      post :create, params: params
    end
  end
end
