class User < ApplicationRecord
  has_many :shops
  has_many :items, through: :shops


  def make_json_object
    {
      name: self.name,
      age: self.age,
      shops: self.shops,
    }
  end 


  def shops_owned
    self.shops.count
  end 
end
