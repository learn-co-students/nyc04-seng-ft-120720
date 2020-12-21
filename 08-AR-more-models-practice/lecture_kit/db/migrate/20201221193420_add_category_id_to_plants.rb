class AddCategoryIdToPlants < ActiveRecord::Migration[5.2]
  def change
    add_column :plants, :categoy_id, :integer
  end
end
