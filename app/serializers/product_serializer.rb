class ProductSerializer < ActiveModel::Serializer
  attributes :id,
            :name,
            :retail_price,
            :profit_margin,
            :image,
            :supplies,
            :productsupplies
end
