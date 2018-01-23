require 'rails_helper'
require 'spec_helper'
require 'json'

RSpec.describe Api::V1::ProductlaborsController, type: :controller do

  describe 'GET#index' do
    it 'should have an index method' do
      @user = FactoryBot.create(:user)
      sign_in @user
      @product = FactoryBot.create(:product)
      @labor =FactoryBot.create(:labor)
      @productsupply = FactoryBot.create(:productlabor)

      get :index
      assert_response :success
    end
  end

  describe 'POST create' do
    it 'should make a new productlabor object' do
      @product = FactoryBot.create(:product)
      @labor =FactoryBot.create(:labor)
      @user = FactoryBot.create(:user)
      sign_in @user
      params = {
        productlabor: {
          cost_for_this_job: 10,
          time_per_job: 30,
          labor_id: @labor.id,
          product_id: @product.id,
          user_id: @user.id
        },
        user: User.where({ id: @user.id })
      }
      post :create, params: params
    end
  end
end
