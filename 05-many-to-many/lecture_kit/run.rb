require 'pry'
require 'require_all'

# 💡 require_all is a method that allows you to connect all files in a given folder with this one; it comes from a gem so first you need to require the gem (line 2) to use the method (line 5)
require_all 'models'

# 💡 require_all is the same as the require_relative but it takes an argument of a folder, not a single file
# require_relative 'models/doctor.rb'
# require_relative 'models/patient.rb'

# TEST DATA
doctor1 = Doctor.new("Dr Evil", "evilness") #will have one appt
doctor2 = Doctor.new("Dr Peppers", "necromancy") #will have many appt
doctor3 = Doctor.new("Dr Oz", "optometry", "London") #will have no appt
doctor4 = Doctor.new("Dr Genius", "brain power") 

patient1 = Patient.new("Hasibul") #will have one appt
patient2 = Patient.new("Sylwia") #will have many appt
patient3 = Patient.new("Michelle") #one appt
patient4 = Patient.new("Signe") #no appt

# building many-to-many relationship:
# 1. create a file with the Appointment class
# 2. check whether runner file is connected with appt file by running Appointment.new -- if you're getting "uninitialized const or variable" error, it is not connected!
# 3. create seed data for the Appointment class
# 4. write out all the methods


binding.pry
0