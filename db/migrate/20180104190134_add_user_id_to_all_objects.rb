class AddUserIdToAllObjects < ActiveRecord::Migration[5.1]
  def change
    add_column :labors, :user_id, :integer, null: false
    add_column :productlabors, :user_id, :integer, null: false
    add_column :products, :user_id, :integer, null: false
    add_column :productsupplies, :user_id, :integer, null: false
    add_column :supplies, :user_id, :integer, null: false
  end
end
