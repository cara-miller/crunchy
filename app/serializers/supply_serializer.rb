class SupplySerializer < ActiveModel::Serializer
  attributes :id,
            :supply_category_id,
            :supplier_id,
            :sold_in_quantity,
            :unit_of_measurement,
            :cost,
            :product_code,
            :supply_category,
            :supplier
end
