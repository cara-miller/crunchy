class AddUsersToObjects < ActiveRecord::Migration[5.1]
  def up
    add_column :productsupplies, :user_id, :integer
    add_column :supplies, :user_id, :integer
    add_column :labors, :user_id, :integer
    add_column :productlabors, :user_id, :integer
    add_column :products, :user_id, :integer
  end
  def down
    remove_column :productsupplies, :user_id
    remove_column :supplies, :user_id
    remove_column :labors, :user_id
    remove_column :productlabors, :user_id
    remove_column :products, :user_id
  end
end
