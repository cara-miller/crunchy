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
      assert_response :success
      render_template :index
    end
  end
end
