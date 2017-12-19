require 'spec_helper'
require 'rails_helper'
require_relative '../../app/models/supplier'

describe Supplier do
  it { should have_valid(:name).when('Yarn Supply Company') }
  it { should_not have_valid(:name).when(nil, '') }
end
