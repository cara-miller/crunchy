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
end
