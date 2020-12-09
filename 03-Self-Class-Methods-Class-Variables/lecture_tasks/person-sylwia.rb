reruire 'pry'
# DO NOT CODE IN THIS FILE, SYLWIA WILL USE IT IN THE LECTURE


binding.pry
0

# DO NOT CODE IN THIS FILE, SYLWIA WILL USE IT IN THE LECTURE

# 1. Write a Person class.

# 2. The person should be instantiated with these attributes: `last_hunger_level_change`, `name`, `hunger_level`, `hunger_time`. Only name will remain unchanged in this example but we will want to read it. We won't be reading `hunger_time` and `last_hunger_level_change` but we will be changing it. `hunger_time` should default to 0.1 unless the user passed another value. Moreover, each person should be initialized with this data:
# `last_hunger_level_change` - current time (find a Ruby method that provides that)
#  `hunger_level` - 3.0

# 3. When creating a new person, we should provide only an argument of a name and we **could** provide an argument of a hunger_time but not necessarily;

# 4. Test if you can create a person and if this person can be instantiated with/out the argument of `hunger_time` (hint: create two instances)

# 5. Test if you can read all the attributes you are supposed to read and change all the attributes you are supposed to change; check if it errors out when you do the opposite;

# 6. Add a class variable of "bubbles" (`@@bubbles`). The variable should hold a value of a string: "bubbles everywhere".

# 7. Add a class variable of "all" (`@@all`) that hold an empty array.

# 8. Add an instance behavior `Person#shower`. Its body can be empty, return whatever you want or just puts something.

# 9. Add a class behavior `Person.all`, which returns all the instances of a person we have created. Remember to make sure that every new instance created is pushed into the `@@all` array.

# Test whether you are getting an array of all instances when you call `Person.all`.

# Add a class method that returns an array of names of the instances called `names_only`

# Test whether you are getting an array of all names when you call `Person.names_only`.