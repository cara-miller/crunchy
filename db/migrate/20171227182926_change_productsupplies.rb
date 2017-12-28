class ChangeProductsupplies < ActiveRecord::Migration[5.1]
  def up
    remove_column :productsupplies, :cost
    add_column :productsupplies, :productsupplycost, :integer
  end
  def down
    add_column :productsupplies, :cost, :integer
    remove_column :productsupplies, :productsupplycost
  end
end
