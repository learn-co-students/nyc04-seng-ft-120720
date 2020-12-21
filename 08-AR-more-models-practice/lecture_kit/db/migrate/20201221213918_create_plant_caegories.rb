class CreatePlantCaegories < ActiveRecord::Migration[5.2]
  def change
    create_table :plant_categories do |t|
      t.integer :category_id
      t.integer :plant_id
    end
  end
end
