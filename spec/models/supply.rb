require 'spec_helper'
require 'rails_helper'
require_relative '../../app/models/supply'

describe Supply do
  it { should have_valid(:supply_id).when(1) }
  it { should_not have_valid(:supply_id).when(nil, '') }

  it { should have_valid(:supplier_id).when(1) }
  it { should_not have_valid(:supplier_id).when(nil, '') }

  it { should have_valid(:sold_in_quantity).when(1) }
  it { should_not have_valid(:sold_in_quantity).when(nil, '') }

  it { should have_valid(:unit_of_measurement).when('foot') }
  it { should_not have_valid(:unit_of_measurement).when(nil, '') }

  it { should have_valid(:cost).when(20) }
  it { should_not have_valid(:cost).when(nil, '') }
end
