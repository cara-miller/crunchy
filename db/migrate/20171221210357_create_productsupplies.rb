class CreateProductsupplies < ActiveRecord::Migration[5.1]
  def change
    create_table :productsupplies do |t|
      t.integer :supply_id, null: false
      t.integer :product_id, null: false
    end
  end
end
