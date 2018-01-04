require 'rails_helper'
require 'spec_helper'
require 'json'

RSpec.describe Api::V1::ProductsController, type: :controller do

  # describe 'GET#index' do
  #   it 'should return a json object of all the products' do
  #     p1 = FactoryBot.create(:product)
  #     get 'index'
  #     returned_json = JSON.parse(response.body)
  #
  #     expect(response.status).to eq 200
  #     expect(response.content_type).to eq('application/json')
  #
  #     expect(returned_json.length).to eq 1
  #     expect(returned_json['products'][0]['name']).to eq 'Green Pom-Pom'
  #     expect(returned_json['products'][0]['retail_price']).to eq 15
  #   end
  # end
  #
  #
  # describe 'GET#show' do
  #   it 'should return json for one product as a hash' do
  #   p1 = FactoryBot.create(:product)
  #   get :show, params: { id: p1.id }
  #   @body = JSON.parse(response.body)
  #
  #   expect(@body.class).to eq(Hash)
  #   expect(@body['product']['name']).to eq 'Green Pom-Pom'
  #   expect(@body['product']['retail_price']).to eq 15
  #   end
  # end

end
