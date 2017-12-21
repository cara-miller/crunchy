FactoryBot.define do
  factory :supply do
    sold_in_quantity 120
    unit_of_measurement 'units'
    cost 8
    supply_category
    supplier
  end
end
