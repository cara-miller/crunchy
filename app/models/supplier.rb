class Supplier < ApplicationRecord
  has_many :supplies
  has_many :supply_categories, through: :supplies

  validates_presence_of :name
end
