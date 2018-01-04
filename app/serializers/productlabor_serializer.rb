class ProductlaborSerializer < ActiveModel::Serializer
  attributes :labor,
            :labor_id,
            :product,
            :product_id,
            :time_per_job,
            :user_id,
            :current_user

  # def current_user
  #   scope.current_user
  # end
end
