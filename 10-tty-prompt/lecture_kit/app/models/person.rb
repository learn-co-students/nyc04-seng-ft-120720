class Person < ActiveRecord::Base
    has_many :plant_parenthoods
    has_many :plants, through: :plant_parenthoods
    has_many :waterings
    has_many :waterees, through: :waterings

    def water_plant(plant)
        Watering.create(person_id: self.id, plant_id: plant.id)
         plant_parenthood = self.plant_parenthoods.find{|parenthood| parenthood.plant_id == plant.id}
         if plant_parenthood
            affection = plant_parenthood.affection || 1
            affection += 1 
            plant_parenthood.update(affection: affection)
         end
    end
end