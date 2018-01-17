require 'rails_helper'
require 'spec_helper'
require 'json'

RSpec.describe Api::V1::LaborsController, type: :controller do

  describe 'GET#index' do
    it 'should have an index method' do
      @user = FactoryBot.create(:user)
      sign_in @user
      l1 = FactoryBot.create(:labor)

      get :index
      assert_response :success
    end
  end

  # describe 'POST create' do
  #   it 'should make a new labor object' do
  #     @user = FactoryBot.create(:user)
  #     sign_in @user
  #     params = {
  #       labor: {
  #         cost_per_hour: 10,
  #         description: 'labor',
  #         user_id: @user.id
  #       },
  #       user: User.where({ id: @user.id })
  #     }
  #     post :create, params: params
  #   end
  # end
end
