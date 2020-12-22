class CreatePlantParents < ActiveRecord::Migration[5.2]
  def change
    create_table :plant_parents do |t|
      t.string :name
      t.boolean :responsible
      t.integer :age
    end
  end
end
