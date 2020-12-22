class Person < ActiveRecord::Base

    has_many :plant_parenthoods
    has_many :plants, through: :plant_parenthoods

    has_many :waterings
    has_many :waterees, through: :waterings
end