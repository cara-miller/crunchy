class Product < ApplicationRecord
  has_many :productsupplies
  has_many :supplies, through: :productsupplies
  validates_presence_of :name, :retail_price
end
