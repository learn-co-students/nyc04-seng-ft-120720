class AddFussyToPlants < ActiveRecord::Migration[5.2]
  def change
    add_column :plants, :fussy, :boolean
  end
end
