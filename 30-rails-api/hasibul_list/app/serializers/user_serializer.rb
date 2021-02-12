class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :shops_owned

  has_many :shops
end
