require 'spec_helper'
require 'rails_helper'

feature 'user signs in', %(
  As an authenticated user
  I want to sign in
  So that I can post items and review them
) do

  scenario 'an existing user specifies valid email and password' do
    user = FactoryBot.create(:user)
    visit root_path
    click_link 'Sign In'
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In!'

    expect(page).to have_content('Signed in')
    expect(page).to have_content('Sign Out')
  end

  scenario 'a nonexistant email and password is supplied' do
    visit root_path
    click_link 'Sign In'
    fill_in 'Email', with: 'nobody@example.com'
    fill_in 'Password', with: 'password'
    click_button 'Sign In!'

    expect(page).to have_content('Invalid Email or password.')
    expect(page).to_not have_content('Signed in')
    expect(page).to_not have_content('Sign Out')
  end

  scenario 'an existing email with the wrong password is denied access' do
    user = FactoryBot.create(:user)
    visit root_path
    click_link 'Sign In'
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'incorrectPassword'
    click_button 'Sign In!'

    expect(page).to have_content('Invalid Email or password.')
    expect(page).to_not have_content('Sign Out')
  end

  scenario 'an already authenticated user cannot re-sign in' do
    user = FactoryBot.create(:user)
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In!'

    expect(page).to have_content('Sign Out')
    expect(page).to_not have_content('Sign In!')

    visit new_user_session_path
    expect(page).to have_content('You are already signed in.')
  end
end
