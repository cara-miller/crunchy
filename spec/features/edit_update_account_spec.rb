require 'spec_helper'
require 'rails_helper'

feature 'user edits account', %(
  As an authenticated user
  I want to update my information
  So that I can keep my profile up to date
) do

  let!(:user) { FactoryBot.create(:user) }

  scenario 'updating account information' do
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In!'
    visit edit_user_registration_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'newpassword'
    fill_in 'Password confirmation', with: 'newpassword'

    fill_in 'Current password', with: user.password
    click_button 'Update'

    expect(page).to have_content(
      'Your account has been updated successfully.'
    )
  end
  scenario 'update account information incorrectly' do
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In!'
    visit edit_user_registration_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'newpassword'
    fill_in 'Password confirmation', with: 'newpassword'

    fill_in 'Current password', with: 'wrong password'
    click_button 'Update'

    expect(page).to have_content(
      'Please review the problems below'
    )
  end
end
