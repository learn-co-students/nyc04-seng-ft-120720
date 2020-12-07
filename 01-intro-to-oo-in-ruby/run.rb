require 'pry'

class String

    def excited
        self.upcase + "!!!"
    end

end

require 'pry'

dog1 = {"name": "ruby", "breed": "maltese"}
dog2 = {"name": "Gus", "breed": "Bouvier"}
dog3 = {"name": "Finn", "breed": "Cavapoo"}

class Dog
end

class Animal

    def to_s
        puts "hi, I'm a wild beast rawwwr"
    end

    def sleep
        puts "zzzzzz"
    end
end

simba = Animal.new
simba.sleep 

binding.pry
0

#  Define object in programming domain
#  Create a class and instantiate an instance of the class

# dry = don't repeat yourself