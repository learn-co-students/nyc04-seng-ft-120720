class Category < ActiveRecord::Base
    has_many :plant_categories
    has_many :plants, through: :plant_categories
end
