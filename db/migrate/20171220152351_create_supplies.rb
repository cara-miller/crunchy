class CreateSupplies < ActiveRecord::Migration[5.1]
  def change
    create_table :supplies do |t|
      t.integer :supply_category_id, null: false
      t.integer :supplier_id, null: false
      t.integer :sold_in_quantity, null: false
      t.string :unit_of_measurement, null: false
      t.integer :cost, null: false
      t.string :product_code
    end
  end
end
