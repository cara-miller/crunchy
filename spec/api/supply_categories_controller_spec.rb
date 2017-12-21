# require 'rails_helper'
# require 'spec_helper'
# require 'json'
#
# RSpec.describe Api::V1::SupplyCategoriesController, type: :controller do
#   let!(:first_supply_category) do
#     SupplyCategory.create(
#       name: '4" Glass Tray',
#       description: 'Thick curved glass'
#     )
#   end
#
#   let!(:second_supply_category) do
#     SupplyCategory.create(
#       name: 'Medium Tin Bin'
#     )
#   end
#
#   describe 'GET#index' do
#     it 'should return a list of all the supply categories' do
#       get :index
#       returned_json = JSON.parse(response.body)
#       returned_json = returned_json
#
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq('application/json')
#
#       expect(returned_json.length).to eq 2
#       expect(returned_json[0]['name']).to eq 'Green String'
#       expect(returned_json[0]['description']).to eq 'Thick curved glass'
#
#       expect(returned_json[1]['name']).to eq 'Medium Tin Bin'
#       expect(returned_json[1]['description']).to eq Null
#     end
#   end
# end
