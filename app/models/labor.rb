class Labor < ApplicationRecord
  belongs_to :user
  has_many :productlabors
  has_many :products, through: :productlabor
  validates_presence_of :description, :cost_per_hour
end
