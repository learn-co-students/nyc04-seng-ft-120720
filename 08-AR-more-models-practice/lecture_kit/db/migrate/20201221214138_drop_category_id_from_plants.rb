class DropCategoryIdFromPlants < ActiveRecord::Migration[5.2]
  def change
    # remove_column :users, :hobby
    remove_column :plants, :category_id, :integer
  end
end
