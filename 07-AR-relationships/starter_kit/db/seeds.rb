Plant.destroy_all
Plant.reset_pk_sequence

basil = Plant.create(name: "basil the herb", bought: "20200610", color: "green", fussy: true)
corn_tree = Plant.create(name: "Corn Tree", bought: "20170203", color: "green", fussy: false)
prayer_plant = Plant.create(name: "Prayer plant", bought: "20190815", color: "purple", fussy: false)
cactus_1 = Plant.create(name: "Cactus", bought: "20200110", color: "ugly green", fussy: false)
elephant_bush = Plant.create(name: "Elephant bush", bought: "20180908", color: "green", fussy: true)
photos = Plant.create(name: "Photos", bought: "20170910", color: "green", fussy: false)
dragon_tree = Plant.create(name: "Dragon tree", bought: "20170910", color: "green", fussy: false)
snake_plant = Plant.create(name: "Snake plant", bought: "20170910", color: "dark green", fussy: false)
polka_dot_plant = Plant.create(name: "polka dot plant", bought: "20170915", color: "pink and green", fussy: false)
cactus_2 = Plant.create(name: "Cactus", bought: "20200517", color: "green", fussy: false)

joel = Person.create(name: "Joel", responsible: false, age: 10_000)
sylwia = Person.create(name: "Sylwia", responsible: true, age: 30)