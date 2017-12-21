class CreateSuppliers < ActiveRecord::Migration[5.1]
  def change
    create_table :suppliers do |t|
      t.string :name, null: false
      t.string :notes
      t.string :website
      t.integer :phone_number
    end
  end
end
