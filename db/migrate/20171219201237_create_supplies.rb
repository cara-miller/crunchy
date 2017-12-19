class CreateSupplies < ActiveRecord::Migration[5.1]
  def change
    create_table :supplies do |t|
      t.string :name, null: false
      t.string :description

      t.timestamps null: false
    end
  end
end
