class CreateProductlabors < ActiveRecord::Migration[5.1]
  def change
    create_table :productlabors do |t|
      t.integer :product_id, null: false
      t.integer :labor_id, null: false
      t.integer :time_per_job, null: false
      t.integer :cost_for_this_job
    end
  end
end
