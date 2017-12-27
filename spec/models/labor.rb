require 'spec_helper'
require 'rails_helper'
require_relative '../../app/models/labor'

describe Labor do
  it { should have_valid(:description).when('decoupage') }
  it { should_not have_valid(:description).when(nil, '') }

  it { should have_valid(:cost_per_hour).when(2000) }
  it { should_not have_valid(:cost_per_hour).when(nil, '') }
end
