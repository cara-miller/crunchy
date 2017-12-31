class Product < ApplicationRecord
  belongs_to :user
  has_many :productsupplies
  has_many :supplies, through: :productsupplies

  has_many :productlabors
  has_many :labors, through: :productlabors

  validates_presence_of :name, :retail_price
end
