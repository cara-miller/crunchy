FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "person#{n}@example.com" }
    first_name 'John'
    last_name 'Smith'
    username 'apple123'
    password 'password'
    password_confirmation 'password'
  end
end
