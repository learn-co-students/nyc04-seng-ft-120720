# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console


harry_potter = Student.new("Harry Potter")
ron = Student.new("Ron Weasley")

snape = Tutor.new("Prof. Snape")
flitwick = Tutor.new("Prof. Flitwick")
dumbledore = Tutor.new("Prof. Dumbledore")

## Ron has 3 course and should be considered full-time
dada = Course.new(dumbledore, ron, "defense against the dark_arts")
charms = Course.new(flitwick, ron, "Charms")
ron_potions = Course.new(snape, ron, "potions")

## Harry is not full-time b/c he only has 1 course
potions = Course.new(snape, harry_potter, "potions")


# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
