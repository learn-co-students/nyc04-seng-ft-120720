require 'pry'
require 'require_all'

# 💡 require_all is a method that allows you to connect all files in a given folder with this one; it comes from a gem so first you need to require the gem (line 2) to use the method (line 5)
require_all 'models'

# 💡 require_all is the same as the require_relative but it takes an argument of a folder, not a single file
# require_relative 'models/doctor.rb'
# require_relative 'models/patient.rb'

# TEST DATA
doctor1 = Doctor.new("Dr Peppers", "necromancy") #will have many appt
doctor2 = Doctor.new("Dr Oz", "optometry") #will have no appt
doctor3 = Doctor.new("Dr Genius", "brain power") #will have one appt

patient1 = Patient.new("Hasibul") #will have one appt
patient2 = Patient.new("Sylwia") #will have many appt
patient3 = Patient.new("Signe") #no appt

# APPOINTMENT DATA
appt1 = Appointment.new("25 Aug", "NYC", doctor1, patient1)
appt2 = Appointment.new("4 Sep", "London", doctor1, patient2)
appt3 = Appointment.new("14 July", "Bushwick", doctor1, patient2)
appt4 = Appointment.new("1 Jan", "Zielona Góra", doctor3, patient2)

doctor1.new_appointment("asap", "here", patient1)

# building many-to-many relationship:
# 1. create a file with the Appointment class
# 2. check whether runner file is connected with appt file by running Appointment.new -- if you're getting "uninitialized const or variable" error, it is not connected!
# 3. create seed data for the Appointment class
# 4. write out all the methods


binding.pry
0