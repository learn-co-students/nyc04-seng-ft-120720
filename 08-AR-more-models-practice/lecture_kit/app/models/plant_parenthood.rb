class PlantParenthood < ActiveRecord::Base

    before_save :cap_affection

     belongs_to :person
     belongs_to :plant

     def cap_affection
        # check if affection is higher than 11_000 and if it is, change it
         self.affection = 11_000 if self.affection > 11_000
     end
end

#   - `PlantParenthood#cap_affection` -- introduces a cap on the affection value at 11_000
