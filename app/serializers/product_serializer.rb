class ProductSerializer < ActiveModel::Serializer
  attributes :name,
            :id,
            :retail_price,
            :profit_margin,
            :current_user,
            :supplies,
            :productsupplies,
            :labors,
            :productlabors,
            :user_id,


  def current_user
      scope.current_user
  end
end
