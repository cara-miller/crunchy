require 'spec_helper'
require 'rails_helper'
require_relative '../../app/models/supply_category'

describe SupplyCategory do
  it { should have_valid(:name).when('Pink Sparkly Glue') }
  it { should_not have_valid(:name).when(nil, '') }
end
