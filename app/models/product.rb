class Product < ApplicationRecord
  validates_presence_of :name, :retail_price
end
