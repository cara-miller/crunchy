class Supply < ApplicationRecord
  has_many :supplies_from_suppliers
  has_many :suppliers, through: :supplies_from_suppliers

  validates_presence_of :name
end
