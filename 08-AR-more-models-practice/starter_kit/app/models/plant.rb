class Plant < ActiveRecord::Base
    has_many :plant_parenthoods
    has_many :plant_parents, through: :plant_parenthoods
    belongs_to :category
end
