require 'rails_helper'
require 'spec_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:first_name).when('John') }
  it { should_not have_valid(:first_name).when(nil, '') }

  it { should have_valid(:last_name).when('Pugliese') }
  it { should_not have_valid(:last_name).when(nil, '') }

  it { should have_valid(:email).when('jpug@gmail.com') }
  it do
    should_not have_valid(:email)
      .when(nil, '', 'asdf', 'usersr.com', 'user@com')
  end

  it { should have_valid(:username).when('apple134') }
  it { should_not have_valid(:username).when(nil, '') }

  it 'has a matching password confirmation for the password' do
    user = User.new
    user.password = 'password'
    user.password_confirmation = 'anotherpassword'

    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end

  # describe '#admin?' do
  #   it 'is not an admin if the role is not admin' do
  #     user = FactoryBot.create(:user, role: 'member')
  #     expect(user.admin?).to eq(false)
  #   end

    # it 'is an admin if the role is admin' do
    #   user = FactoryBot.create(:user, role: 'admin')
    #   expect(user.admin?).to eq(true)
    # end
  # end
end
