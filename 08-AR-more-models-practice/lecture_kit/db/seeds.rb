Plant.destroy_all
Plant.reset_pk_sequence
Category.destroy_all
Category.reset_pk_sequence
Person.destroy_all
Person.reset_pk_sequence
PlantParenthood.destroy_all
PlantParenthood.reset_pk_sequence
PlantCategory.destroy_all
PlantCategory.reset_pk_sequence


outdoor = Category.create(name: "outdoor")
indoor = Category.create(name: "indoor")
leafy = Category.create(name: "leafy")
succulent = Category.create(name: "succulent")

basil = Plant.create(species: "basil the herb", bought: "20200610", color: "green", fussy: true)
PlantCategory.create(plant_id: basil.id, category_id: outdoor.id)
PlantCategory.create(plant_id: basil.id, category_id: indoor.id)
PlantCategory.create(plant_id: basil.id, category_id: leafy.id)
corn_tree = Plant.create(species: "Corn Tree", bought: "20170203", color: "green", fussy: false )
PlantCategory.create(plant_id: corn_tree.id, category_id: outdoor.id)
PlantCategory.create(plant_id: corn_tree.id, category_id: indoor.id)
PlantCategory.create(plant_id: corn_tree.id, category_id: leafy.id)
prayer_plant = Plant.create(species: "Prayer plant", bought: "20190815", color: "purple", fussy: false )
cactus_1 = Plant.create(species: "Cactus", bought: "20200110", color: "ugly green", fussy: false )
elephant_bush = Plant.create(species: "Elephant bush", bought: "20180908", color: "green", fussy: true)
photos = Plant.create(species: "Photos", bought: "20170910", color: "green", fussy: false )
dragon_tree = Plant.create(species: "Dragon tree", bought: "20170910", color: "green", fussy: false )
snake_plant = Plant.create(species: "Snake plant", bought: "20170910", color: "dark green", fussy: false )
polka_dot_plant = Plant.create(species: "polka dot plant", bought: "20170915", color: "pink and green", fussy: false)
cactus_2 = Plant.create(species: "Cactus", bought: "20200517", color: "green", fussy: false)
PlantCategory.create(plant_id: cactus_2.id, category_id: outdoor.id)
PlantCategory.create(plant_id: cactus_2.id, category_id: indoor.id)
PlantCategory.create(plant_id: cactus_2.id, category_id: succulent.id)

# binding.pry

joel = Person.create(name: "Joel", responsible: false, age: 10_000)
sylwia = Person.create(name: "Sylwia", responsible: true, age: 31)

PlantParenthood.create(plant_id: basil.id, person_id: joel.id, affection:1)
PlantParenthood.create(plant_id: basil.id, person_id: sylwia.id, affection:10)
PlantParenthood.create(plant_id: corn_tree.id, person_id: sylwia.id, affection:10)

puts "🌱 🌱 🌱  SEEDED 🌱 🌱 🌱 🌱 "