require 'rails_helper'
require 'spec_helper'
require 'json'

RSpec.describe Api::V1::ProductsController, type: :controller do

  describe 'GET#index' do
    it 'should have an index method' do
      @user = FactoryBot.create(:user)
      sign_in @user
      p1 = FactoryBot.create(:product)

      get :index
      assert_response :success
    end
  end


  describe 'GET#show' do
    it 'should have an show method that renders the index template' do
      @user = FactoryBot.create(:user)
      sign_in @user
      p1 = FactoryBot.create(:product)
      get :show, params: { id: p1.id }
      render_template :index
      assert_response :success
    end
  end

  describe 'POST create' do
    it 'should make a new product object' do
      @user = FactoryBot.create(:user)
      sign_in @user
      params = {
        product: {
          name: 'product',
          retail_price: 25,
          user_id: @user.id
        },
        user: User.where({ id: @user.id })
      }
      post :create, params: params
    end
  end

  # describe 'POST update' do
  #   it 'should update existing product object' do
  #     @user = FactoryBot.create(:user)
  #     @product = FactoryBot.create(:product)
  #     sign_in @user
  #     get :update, product_id: @product.id
  #     params = {
  #       product: {
  #         id: @product.id,
  #         name: 'updated name',
  #         retail_price: @product.retail_price,
  #         user_id: @user.id
  #       },
  #       user: User.where({ id: @user.id })
  #      }
  #
  #      render_template :index
  #      assert_response :success
  #   end
  # end

end
