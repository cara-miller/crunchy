require 'spec_helper'
require 'rails_helper'
require_relative '../../app/models/productsupply'

describe Productlabor do
  it { should have_valid(:product_id).when(2) }
  it { should_not have_valid(:product_id).when(nil, '') }

  it { should have_valid(:supply_id).when(2000) }
  it { should_not have_valid(:supply_id).when(nil, '') }
end
