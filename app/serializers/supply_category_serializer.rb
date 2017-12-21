class SupplyCategorySerializer < ActiveModel::Serializer
  attributes :id,
            :name,
            :description,
            :supplies,
            :suppliers
end
