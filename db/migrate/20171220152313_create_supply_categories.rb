class CreateSupplyCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :supply_categories do |t|
      t.string :name, null: false
      t.string :description

      t.timestamps null: false
    end
  end
end
