class CreatePlantParenthoods < ActiveRecord::Migration[5.2]
  def change
    create_table :plant_parenthoods do |t|
      t.integer :plant_id
      t.integer :plant_parent_id
      t.integer :affection
    end
  end
end
