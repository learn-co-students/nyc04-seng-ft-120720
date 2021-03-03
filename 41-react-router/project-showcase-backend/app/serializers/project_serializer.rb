class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :about, :phase, :link, :image
  has_many :users
end
