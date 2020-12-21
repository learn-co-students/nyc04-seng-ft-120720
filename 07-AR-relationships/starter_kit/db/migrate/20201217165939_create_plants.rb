class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |table_helper|
      table_helper.string :species
      table_helper.integer :height
      table_helper.string :color
      t.datetime :bought
    end
  end
end
