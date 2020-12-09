require 'pry'

class Person

    attr_reader :name
    attr_accessor :last_hunger_change, :hunger_level, :hunger_time

    def initialize(name, hunger_time = 0.1)
        @name = name
        @last_hunger_change = Time.now
        @hunger_level = 5.0
        #how fast gets hungry (in sec)
        @hunger_time = 0.1
        @@all << self
    end

    #this is a class variable, you can update it from any point in the class
    @@bubbles = "bubbles everywhere"

    # this array will hold all the instances
    @@all = []

    def shower
        head_n_shoulders
    end

    #the label of "Head'n'Shoulders" reads: rinse, lather, repeat
    def head_n_shoulders
        puts "😩😩😩😩😩😩😩😩😩😩 getting hungry: #{hunger_level} 😩😩😩😩😩😩😩😩😩😩😩😩"
        #check if the person should already get hungry
        if self.check_hunger
            #if hunger_level is still ok, just go on with the showering
            if hunger_level >= 1
                rinse
                lather
                head_n_shoulders #repeat, meaning: call itself
            #die from hunger
            else
                puts "💀 💀 💀 DEAD 💀 💀 💀 "
                return "#{@name} no more"
            end
        else
        #if not hungry yet, just rinse, lather, repeat
            rinse
            lather
            head_n_shoulders #repeat, meaning: call itself
        end
    end

    def rinse
        puts "💧 💧 💧 💧 💧 💧 💧  rinses 💧 💧 💧 💧 💧💧  "
    end

    def lather
        # will output the class variable @@bubbles
        puts @@bubbles
        # will add "bubbles" to the beginning
        @@bubbles = "bubbles 🧼, " + @@bubbles
    end

    def hungry_yet?
        #check if hunger time has passed since last hunger change -- this will result in a boolean (true or false)
        Time.now - last_hunger_change >= hunger_time
    end

    def check_hunger 
        if hungry_yet? #if check_hunger method returns true
            #if it's true, the hunger_level drops
            # !!!! THIS NEEDS TO BE AN INSTANCE VAR OR SELF.HUNGER_LEVEL IF YOU WANT TO USE "-=" operator (IMPLICIT self method cannot -= from itself)
            self.hunger_level -= hunger_time
            #and we update the last hunger change
            last_hunger_change = Time.now
        end
    end

    def self.all
        @@all
    end

end

programmer = Person.new("Programmer")

# this code is an illustration of the joke:
# How did a programmer die in the shower?
# They read the shampoo bottle: rinse, lather, repeat.

#run this:
# programmer.shower

binding.pry
0