class DropEverything < ActiveRecord::Migration[5.1]
  def up
    drop_table :supply_categories
    drop_table :suppliers
    add_column :supplies, :name, :string, null: false
  end
  def down
    create_table :supply_categories do |t|
      t.string :name, null: false
      t.string :description

      t.timestamps null: false
    end
    create_table :suppliers do |t|
      t.string :name, null: false
      t.string :notes
      t.string :website
      t.integer :phone_number
    end
  end
end
