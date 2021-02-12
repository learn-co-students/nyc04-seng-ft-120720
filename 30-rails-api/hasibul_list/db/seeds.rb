# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Item.destroy_all
Shop.destroy_all
User.destroy_all


users = [
  {name: "Hasibul", bio: "huge e-com site fan", age: 16, img_url: "https://ca.slack-edge.com/T02MD9XTF-U01CRNE8X3M-0cc327fd8ec0-512"},
  {name: "Greg", bio: "Just learning the internet", age: 123, img_url: "https://ca.slack-edge.com/T02MD9XTF-U8H2RA3C1-643c8ce562ef-512"},
  {name: "Michelle", bio: "JS is better than Rails", age: 33, img_url: "https://ca.slack-edge.com/T02MD9XTF-U011WKXUXTK-5ce7733b96e2-512"}
]

users.each {|user| User.create(user)}


stores = [
  {name: "HaSAVEbul", specialty: "Only Deal in Orange Scents", open_year: 1958, user_id: User.first.id},
  {name: "Grogs Shop", specialty: "bit of everything", open_year: 2003, user_id: User.second.id},
  {name: "Grogs Shop2", specialty: "bit of nothing", open_year: 2021, user_id: User.second.id},
  {name: "Michelles Shop", specialty: "Selling the dream of JS since", open_year: 2015, user_id: User.third.id}
] 

stores.each {|store| Shop.create(store)}

15.times do 
  Item.create(name: Faker::Food.spice, category: "spice", shop_id: Shop.all.sample.id)
end 

15.times do 
  Item.create(name: Faker::Food.vegetables, category: "vegetables", shop_id: Shop.all.sample.id)
end 

15.times do 
  Item.create(name: Faker::Drone.name , category: "drones", shop_id: Shop.all.sample.id)
end 

15.times do 
  Item.create(name: Faker::Esport.game , category: "games", shop_id: Shop.all.sample.id)
end 