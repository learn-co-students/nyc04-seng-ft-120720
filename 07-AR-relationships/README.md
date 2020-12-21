Active Record Relationships
===

## SWBATs
- [ ] Build on the knowledge of OO Ruby associations to use them in AR
- [ ] Draw a three-model ERD prior to coding
- [ ] Design domain model thoughtfully
- [ ] Remember that it is the joiner's responsibility to know about the other `id`'s
- [ ] Become comfortable with the syntax of the association macros (`belongs_to`, `has_many`, `has_many through`) 
- [ ] Understand that macros give us methods but the associations happen in the database

### Outline
* Review what we covered so far:
    - What is AR?
      - a ruby gem -> external code 
      - orm
      - design pattern
    - What does AR do?
      - allows to persist information in a database
      - translates between sql (database) and Ruby (model)
      - connects the models to the database
      - It translates between SQL and Ruby to link ruby files to databases
    - When to use SQL and when AR?
      - whenever you want or whenever it fits the needs of your app
    - What's the difference between a model and a table?
      - model/class -> define behaviors of Ruby instances
      - table -> defines attributes of a corresponding instance and contains the saved data of instances
    - Can a database have many tables?
      - YES!!!
    - What is meant by migration?
      - you're changing/modifying/defining a table
      - a set of instructions for AR to create a table in the database and tie it to the `initialize` method of the corresponding model
      - once migrated, the table is saved
    - Naming conventions in Ruby and AR
      - model name: SINGULAR
      - everything else: PLURAL
    - Project file structure
    - What is `rake`?
      - Ruby gem
      - task manager
    - What is `rake console`?
      - SUPERPRY
      - binding.pry that has an access to all the app, including the database
    - Difference between `.new` and `.create`
      - `.new` -> creates only Ruby instance, does not save it to the databse
      - `.create` -> `.new` + `.save`, it saves it to the database; it is an ActiveRecord method and triggers callback methods; 
    - What is CRUD and what are the examples of methods for each letter?
      - CRUD -> short for Create, Read, Update, Delete
      - c: `.create`
      - r: `.all`, `.find`
      - u: `.update`
      - d: `.destroy`

### Setting up relationships

This is our domain model:

```
Plant —————< PlantParenthood >————————— Parent
:name         :affection (int)         :name
:color        :favorite(bool)          :free_time
:fussy(bool)                           :age
:bought(datetime) 
```

- How can we associate a Person with a Plant and vice-versa?

Let's first create the association between Parent and PlantParenthood. **Since It's the PlantParenthood that has the chicken feet on itself, this is the model that should contain the instance ides of others.**

```ruby
class PlantParenthood < ActiveRecord::Base
  def people
    # Person.all.find{ |person| person.id == self.person_id }
    # OR use AR .find
    Person.find(self.person_id )
  end
end
#...
class Person < ActiveRecord::Base
  def plant_parenthoods
    # PlantParenthood.all.select{|pp| pp.person_id == self.id}
    # OR use AR .where
    PlantParenthood.where(person_id: self.id)
  end
end
```

## What About a Better Way™️

- ActiveRecord Macros
  - PlantParenthood model: `belongs_to :plant`, `belongs_to :person`
  - Plant model `has_many :plant_parenthoods`
  - Person model `has_many :people`
- These macros provide **even more** methods, like `plant_instance.person` and `person_instance.plants`
  - **Major Key🔑**––since a `plant_parenthood` instance BELONGS TO a `person` it should have ONE Person. Therefore the method is `.person`. A person HAS MANY `plant_parenthoods`, therefore the method is `.plant_parenthoods` pay attention to what is singular and what is plural.

### Important Methods from ActiveRecord

- `Model.new`
  - creates a new **RUBY** instance in local memory without persisting to the database
- `Model#save`
  - inserts or updates a **RUBY** instance to the db
- `Model.create`
  - `Model.new` + `Model#save`
  - A class method that creates a new **RUBY** instance AND saves it to the database
- `Model.all`
  - returns all instances (we wrote this by hand a million times)
- `Model.first`
  - instance with the lowest ID in the db
- `Model.find`
  - Finds a record by id and returns a Ruby instance––`Plant.find(1)` returns the plant with an id of 1
- `Model.find_by({ attribute: value })`
  - can find by one attribute-value pair or multiple
  - `Plant.find_by(name: 'Angel's prayer')` will return the plant with a name of 'Angel's prayer'

[Active Record Docs](http://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-up-down-methods)
