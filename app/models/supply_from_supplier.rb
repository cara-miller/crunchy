class SupplyFromSupplier < ApplicationRecord
  belongs_to :supply
  belongs_to :supplier

  validates_presence_of :supply_id, :supplier_id, :sold_in_quantity, :unit_of_measurement, :cost
end
