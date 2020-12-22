class RenameCategoyIdToCategoryId < ActiveRecord::Migration[5.2]
  def change
    # rename_column :table, :old_column, :new_column
    rename_column :plants, :categoy_id, :category_id
  end
end
