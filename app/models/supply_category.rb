class SupplyCategory < ApplicationRecord
  has_many :supplies
  has_many :suppliers, through: :supplies

  validates_presence_of :name
end
