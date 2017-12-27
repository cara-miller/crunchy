class CreateLabors < ActiveRecord::Migration[5.1]
  def change
    create_table :labors do |t|
      t.string :description, null: false
      t.integer :cost_per_hour, null: false
    end
  end
end
