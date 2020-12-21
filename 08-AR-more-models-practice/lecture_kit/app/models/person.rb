class Person < ActiveRecord::Base

    has_many :plant_parenthoods
    has_many :plant_children, through: :plant_parenthoods
end