# require 'spec_helper'
# require 'rails_helper'
#
# feature 'user sign up', %(
#   As a unauthenticated user
#   I want to sign up
#   So I can add products and see their profit margins.
# ) do
#
#   scenario 'specifying valid and required information' do
#     visit root_path
#     click_link 'Sign Up'
#     fill_in 'First Name', with: 'Jeff'
#     fill_in 'Last Name', with: 'Miller'
#     fill_in 'Username', with: 'apple123'
#     fill_in 'Email', with: 'Dan@gmail.com'
#     fill_in 'user_password', with: 'password'
#     fill_in 'Password Confirmation', with: 'password'
#     click_button 'Sign Up!'
#
#     expect(page).to have_content(
#       'Welcome! You have signed up successfully.'
#     )
#     expect(page).to have_content('Sign Out')
#   end
#
#   scenario 'required information is not supplied' do
#     visit root_path
#     click_link 'Sign Up'
#     click_button 'Sign Up!'
#
#     expect(page).to have_content("can't be blank")
#     expect(page).to_not have_content('Sign Out')
#   end
#
#   scenario 'password confirmation does not match confirmation' do
#     visit root_path
#     click_link 'Sign Up'
#
#     fill_in 'user_password', with: 'password'
#     fill_in 'Password Confirmation', with: 'somethingDifferent'
#     click_button 'Sign Up!'
#
#     expect(page).to have_content("doesn't match")
#     expect(page).to_not have_content('Sign Out')
#   end
# end
