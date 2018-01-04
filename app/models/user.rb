class User < ApplicationRecord
  has_many :products
  has_many :supplies
  has_many :productsupplies
  has_many :labors
  has_many :productlabors


  validates_presence_of :first_name, :last_name, :username, :email

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
