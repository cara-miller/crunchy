class Productlabor < ApplicationRecord
  belongs_to :user
  belongs_to :product
  belongs_to :labor
  validates_presence_of :product_id, :labor_id, :time_per_job
end
