class ProductsupplySerializer < ActiveModel::Serializer
  attributes :supply,
            :supply_id,
            :product,
            :product_id,
            :quantity,
            :productsupplycost,
            :user,
            :user_id,
            :current_user
  
  def current_user
    scope.current_user
  end
end
