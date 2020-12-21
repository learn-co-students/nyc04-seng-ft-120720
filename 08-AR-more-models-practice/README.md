Active Record Relationships
===

## SWBATs
- [ ] Practice deciding where the `id` should live in associated tables (remember that it is the joiner's responsibility to know about the other `id`'s)
- [ ] Practice adding new models and setting up associations from scratch

## ERD

Currently, our ERD looks as following:

```
Category :name
    |
    ^
  Plant ----< PlantParenthood >---- PlantParent
   :species      :plant_id            :name
   :color        :plant_parent_id     :responsible
   :bought       :affection           :age
   :fussy
   :category_id
```
Currently, one plant can have only one category. This does not represent the real-world situation (some plants are indoor, some are outdoor and some are both). We also see that the only relationship between a plant and a person is "parenthood" (ownership) but what about the moment when someone else waters your plants for you when you're away? They are not **owners** but they do interact with the plant.

At the end of the practice, our ERD will look as following:

```
  Category
    |
    ^
  PlantCategory
    V
    |
  Plant ----< PlantParenthood >----   Person
    |                                   |
    |                                   |
    |                                   |
     --------< Watering >---------------
```

### Description of the models:
- `Category` -- it is a category of the plant, for example: "leafy", "succulent", "indoor", "outdoor"
- `Plant` -- self-explanatory
- `PlantCategory` -- since now Plant can have many Categories and vice-versa, we have a many-to-many relationship and need a joiner;
- `Person` -- since not everyone interacting with the plant will be a plant_parent, let's change the name to the Person
- `PlantParenthood` -- describes a relationship of ownership between a person and a plant
- `Waterings` -- describe every situation when a person waters the plant

### Roadmap:
1. Make Plant-Category relationship a many-to-many:
  - create a new migration: delete the `category_id` from `Plant` + migrate
  - create a new migration: introduce a new table + migrate
  - create a corresponding model
  - add associations
  - test in seeds
2. Change the name of the `PlantParent` to `Person`
  - create a new migration: change the name of the table + migrate
  - change the name of the model file and model name
  - in all the model files, replace `plant_parent` and `plant_parents` with `person` and `people`
  - in seeds, change the model name everywhere
  - run `rake db:seed` and check how many people you have and whether you can check number of people associated with a plant (e.g. `Plant.first.people.count`)
3. Introduce a `Watering` model -- since it's a joiner, it will hold the `id`s of the other models
  - create a new migration: delete the `category_id` from `Plant` + migrate
  - create a new migration: introduce a new table + migrate
  - create a corresponding model
  - add associations -- **please refer to the video, this one is tricky!**
  - test in seeds
