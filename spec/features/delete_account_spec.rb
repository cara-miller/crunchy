require 'spec_helper'
require 'rails_helper'

feature 'user deletes their own account', %(
  As an authenticated user
  I want to delete my account
  So that my information is no longer retained by the app
) do

  let!(:user) { FactoryBot.create(:user) }

  scenario 'account is deleted' do
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In!'
    visit edit_user_registration_path
    click_link 'Cancel my account'

    expect(page).to have_content('Bye! Your account has been successfully
     cancelled. We hope to see you again soon.')
    expect(page).to_not have_content('Sign Out')
  end
end
