class ChangePlantParentIdToPersonId < ActiveRecord::Migration[5.2]
  def change
    rename_column :plant_parenthoods, :plant_parent_id, :person_id
  end
end
