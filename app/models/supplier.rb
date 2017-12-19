class Supplier < ApplicationRecord
  has_many :supplies_from_suppliers
  has_many :supplies, through: :supplies_from_suppliers

  validates_presence_of :name
end
