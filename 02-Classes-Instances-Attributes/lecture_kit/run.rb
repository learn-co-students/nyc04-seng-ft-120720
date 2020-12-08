require 'pry'

class Dog

    attr_reader :breed, :number_of_legs, :age
    # attr_writer -> this is when you want the users to submit the data but not see it
    attr_accessor :name, :attitude#, :age
    
    def initialize(name_parameter, breed_parameter, attitude_parameter = "jolly")
        # name = name_parameter <- you won't be able to call on this variable outside of the method 
        @attitude = attitude_parameter
        @name = name_parameter
        @breed = breed_parameter
        @age = 1
        @number_of_legs = 4
    end

    # GETTER method or READER method
    # def name
    #     @name
    # end

    # SETTER method or WRITER method
    # def name=(new_name_parameter)
    #     @name = new_name_parameter
    # end

    # def age
    #     @age
    # end

    # def age=(new_age_parameter)
    #     if new_age_parameter.is_i? 
    #         #do something
    #     else
    #         @age = new_age_parameter
    #     end
    # end

    # DRY 
    
    def bark
        puts "woof"
    end

end

ruby = Dog.new("ruby", "maltese", "dark as my coffee")
gus = Dog.new("Gus", "Bouvier")

dog1 = {"name": "ruby", "breed": "maltese"}
dog2 = {"name": "Gus", "breed": "Bouvier"}
dog3 = {"name": "Finn", "breed": "Cavapoo"}

binding.pry
0