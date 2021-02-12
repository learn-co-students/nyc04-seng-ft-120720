class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :open_year
  
  has_many :items
end
