class SupplySerializer < ActiveModel::Serializer
  attributes :id,
            :name,
            :sold_in_quantity,
            :unit_of_measurement,
            :cost
            :user_id
            :current_user

  # def current_user
  #   scope.current_user
  # end
end
