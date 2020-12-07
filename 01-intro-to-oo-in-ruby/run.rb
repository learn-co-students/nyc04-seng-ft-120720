require 'pry'

# let's create some dogs
dog1 = {"name": "ruby", "breed": "maltese"}
dog2 = {"namne": "Gus", "breed": "Bouvier"}
dog3 = {"name": "Finn", "breed": "Cavapoo"}
# this is too repetitive ^ 
# let's create blueprint for Ruby to mass-produce some Dog instances
# dry = don't repeat yourself

# here's how we define classes:
class Dog
end

class Animal
# this method does not YET work. it will tomorrow.
    def to_s
        puts "hi, I'm a wild beast rawwwr"
    end

    def sleep
        puts "zzzzzz"
    end
end

simba = Animal.new #this instance is saved to a variable
Animal.new #this is also an instance! 
simba.sleep 

binding.pry
0

