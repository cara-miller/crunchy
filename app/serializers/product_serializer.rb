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
end
