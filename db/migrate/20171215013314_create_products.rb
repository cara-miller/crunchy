class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :retail_price, null: false
      t.integer :profit_margin
      t.string :image

      t.timestamps null: false
    end
  end
end
