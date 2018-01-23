FactoryBot.define do
  factory :productlabor do
    labor
    product
    cost_for_this_job 20
    time_per_job 30
    user
  end
end
