require 'rails_helper'
require 'spec_helper'
require 'json'

RSpec.describe Api::V1::SuppliesController, type: :controller do

  describe 'GET#show' do
    it 'renders a json obj of one supply and relevant supply category and supplier information' do

      @supply = FactoryBot.create(:supply)
      get :show, params: {id: @supply.id}
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(json.class).to eq(Hash)
      expect(json['supply']['supply_category_id']).to eq @supply.supply_category.id
      expect(json['supply']['supplier_id']).to eq @supply.supplier.id
      expect(json['supply']['sold_in_quantity']).to eq 120
      expect(json['supply']['unit_of_measurement']).to eq 'units'
      expect(json['supply']['cost']).to eq 8
    end
  end

  describe 'GET#show' do
    it 'should return an hash of supply_category in a key :supply_category' do
      @supply = FactoryBot.create(:supply)
      get :show, params: {id: @supply.id}
      json = JSON.parse(response.body)

      expect(json['supply_category']).to be_truthy
      expect(json['supply_category'].class).to eq(Hash)
      end
    end
    
  describe 'GET#show' do
  it 'should return an hash of supplier in a key :supplier' do
      @supply = FactoryBot.create(:supply)
      get :show, params: {id: @supply.id}
      json = JSON.parse(response.body)

      expect(json['supplier']).to be_truthy
      expect(json['supplier'].class).to eq(Hash)
    end
  end
end
