class PlantCategory < ActiveRecord::Base
    belongs_to :plant
    belongs_to :category
end