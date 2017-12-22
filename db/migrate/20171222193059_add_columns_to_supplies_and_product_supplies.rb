class AddColumnsToSuppliesAndProductSupplies < ActiveRecord::Migration[5.1]
  def up
    add_column :productsupplies, :quantity, :integer
    add_column :productsupplies, :cost, :integer
    remove_column :supplies, :supply_category_id
    remove_column :supplies, :supplier_id
    remove_column :supplies, :product_code

  end
  def down
    add_column :supplies, :supply_category_id, :integer
    add_column :supplies, :supplier_id, :integer
    add_column :supplies, :product_code, :string
    remove_column :productsupplies, :cost
    remove_column :productsupplies, :quantity
  end
end
