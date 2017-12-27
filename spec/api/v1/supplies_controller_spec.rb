require 'rails_helper'
require 'spec_helper'
require 'json'

RSpec.describe Api::V1::SuppliesController, type: :controller do

  describe 'GET#show' do
    it 'renders a json obj of one supply' do

      @supply = FactoryBot.create(:supply)
      get :show, params: {id: @supply.id}
      json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq('application/json')

      expect(json.class).to eq(Hash)
      expect(json['supply']['name']).to eq 'sequins'
      expect(json['supply']['sold_in_quantity']).to eq 120
      expect(json['supply']['unit_of_measurement']).to eq 'units'
      expect(json['supply']['cost']).to eq 8
    end
  end


end
