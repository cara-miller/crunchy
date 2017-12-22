class SupplySerializer < ActiveModel::Serializer
  attributes :id,
            :name,
            :sold_in_quantity,
            :unit_of_measurement,
            :cost
end
