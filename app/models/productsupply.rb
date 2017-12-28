class Productsupply < ApplicationRecord
  belongs_to :supply
  belongs_to :product
  validates_presence_of :supply_id, :product_id, :productsupplycost, :quantity
end
