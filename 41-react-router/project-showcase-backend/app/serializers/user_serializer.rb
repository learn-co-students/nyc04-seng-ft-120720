class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :bio, :cohort, :linkedin, :github
end
