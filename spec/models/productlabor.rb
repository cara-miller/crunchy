require 'spec_helper'
require 'rails_helper'
require_relative '../../app/models/productlabor'

describe Productlabor do
  it { should have_valid(:product_id).when(2) }
  it { should_not have_valid(:product_id).when(nil, '') }

  it { should have_valid(:labor_id).when(2000) }
  it { should_not have_valid(:labor_id).when(nil, '') }

  it { should have_valid(:time_per_job).when(2000) }
  it { should_not have_valid(:time_per_job).when(nil, '') }
end
