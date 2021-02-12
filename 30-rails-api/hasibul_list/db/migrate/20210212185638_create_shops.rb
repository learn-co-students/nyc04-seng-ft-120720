class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :specialty
      t.integer :open_year
      t.integer :user_id

      t.timestamps
    end
  end
end
