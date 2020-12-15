# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

kody = Student.new("Kody")
eugene = Student.new("Eugene")

hasibul = Tutor.new("hasibul")
nick = Tutor.new("nick")

course_1 = Course.new(hasibul, kody, "phase_1")
course_2 = Course.new(nick, eugene, "phase_2")
course_3 = Course.new(nick, eugene, "phase_3")
course_4 = Course.new(nick, eugene, "phase_4")

# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
