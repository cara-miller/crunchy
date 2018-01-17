require 'rails_helper'
require 'spec_helper'
require 'json'

RSpec.describe Api::V1::SuppliesController, type: :controller do

  describe 'GET#index' do
    it 'should have an index method' do
      @user = FactoryBot.create(:user)
      sign_in @user
      s1 = FactoryBot.create(:supply)

      get :index
      assert_response :success
    end
  end

  describe 'GET#show' do
    it 'should have an index method' do
      @user = FactoryBot.create(:user)
      sign_in @user
      @supply = FactoryBot.create(:supply)
      get :show, params: {id: @supply.id}


        get :index
        assert_response :success
      end
    end

  describe 'POST create' do
    it 'should make a new supply object' do
      @user = FactoryBot.create(:user)
      sign_in @user
      params = {
        supply: {
          sold_in_quantity: 10,
          unit_of_measurement: 'feet',
          cost: 25,
          name: 'supply',
          user_id: @user.id
        },
        user: User.where({ id: @user.id })
      }
      post :create, params: params
    end
  end
end
