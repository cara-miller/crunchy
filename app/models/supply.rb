class Supply < ApplicationRecord
  has_many :products, through: :productsupplies
  belongs_to :user
  validates_presence_of :sold_in_quantity, :unit_of_measurement, :cost
end
