class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :bio
      t.string :img_url
      t.integer :age

      t.timestamps
    end
  end
end
