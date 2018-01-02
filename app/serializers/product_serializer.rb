class ProductSerializer < ActiveModel::Serializer
  attributes :name,
            :id,
            :retail_price,
            :profit_margin,
            :image,
            :supplies,
            :productsupplies,
            :labors,
            :productlabors
            # :user_id,
            # :current_user

  # def current_user
  #     scope.current_user
  # end
end
