class Supply < ApplicationRecord
  belongs_to :supply_category
  belongs_to :supplier

  validates_presence_of :supply_category_id, :supplier_id, :sold_in_quantity, :unit_of_measurement, :cost
end
