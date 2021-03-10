class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image, :bio
end
