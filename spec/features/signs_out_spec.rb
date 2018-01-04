require 'spec_helper'
require 'rails_helper'

feature 'user signs out', %(
  As an authenticated
  I want to sign out
  So that no one else can post items or reviews on my behalf
) do

  scenario 'an authenticated user signs out by clicking the sign out button' do
    user = FactoryBot.create(:user)
    visit root_path
    click_link 'Sign In'
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In!'
    click_link 'Sign Out'

    expect(page).to have_content('Sign Up')
    expect(page).to have_content('Signed out successfully')
  end
end
