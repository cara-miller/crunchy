# require 'rails_helper'
# require 'spec_helper'
# require 'json'
#
# RSpec.describe Api::V1::ProductsuppliesController, type: :controller do
#   prod = FactoryBot.create(:product)
#   sup = FactoryBot.create(:supply)
#
#   let!(:ps1) do
#     Productsupply.create(
#       product: prod,
#       supply: sup,
#       product_id: prod.id,
#       supply_id: sup.id,
#       quantity: 2,
#       productsupplycost: 120
#     )
#   end
#
#   describe 'GET#index' do
#     it 'should return a json object of all the products' do
#       get 'index'
#       returned_json = JSON.parse(response.body)
#
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq('application/json')
#
#       expect(returned_json.length).to eq(1)
#       expect(returned_json['productsupplies'][0]['quantity']).to eq(2)
#       expect(returned_json['productsupplies'][0]['productsupplycost']).to eq(120)
#       expect(returned_json['productsupplies'][0]['supply_id']).to eq(sup.id)
#       expect(returned_json['productsupplies'][0]['product_id']).to eq(prod.id)
#
#
#     end
#   end


#
# end
