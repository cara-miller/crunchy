require 'rails_helper'
require 'spec_helper'
require 'json'

RSpec.describe Api::V1::ProductsController, type: :controller do
  let!(:first_product) do
    Product.create(
      name: 'Green Pom-Pom',
      retail_price: 15
    )
  end

  let!(:second_product) do
    Product.create(
      name: 'Stuffed Pink Worm',
      retail_price: 40
    )
  end

  describe 'GET#index' do
    it 'should return a list of all the products' do
      get :index
      returned_json = JSON.parse(response.body)
      returned_json = returned_json

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(returned_json.length).to eq 2
      expect(returned_json[0]['name']).to eq 'Green Pom-Pom'
      expect(returned_json[0]['retail_price']).to eq 15

      expect(returned_json[1]['name']).to eq 'Stuffed Pink Worm'
      expect(returned_json[1]['retail_price']).to eq 40
    end
  end


  describe 'GET#show' do
    before do
        get :show, params: { id: first_product.id }
        @body = JSON.parse(response.body)
      end

      it 'should return json for one product as a hash' do
      expect(@body.class).to eq(Hash)

      expect(@body['name']).to eq 'Green Pom-Pom'
      expect(@body['retail_price']).to eq 15
    end
  end
end
