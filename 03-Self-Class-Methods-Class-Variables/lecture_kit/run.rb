require 'pry'

class Dog

    # attr_reader allows us only to see the value
    attr_reader :breed
    # attr_writer allows us only to overwrite the value
    # ???
    # attr_accessor = attr_reader + attr_writer
    attr_accessor :fav_snack, :attitude#, :name

    # class variables start with @@
    @@all = []

    # class const
    # ALL = []

    def initialize(name_parameter, fav_snack_parameter, breed_parameter, attitude_parameter = "jolly")
        @name = name_parameter
        @fav_snack = fav_snack_parameter
        @breed  = breed_parameter
        @number_of_legs = 4
        @attitude = attitude_parameter
        @@all << self
    end

    def self.all
        @@all
    end

    # steps to create .all class method
    # 1. set an @@all class var
    # 2. push a newly created instance into that var
    # 3. define a method

    # def to_s
    #     "#{self.name}, the #{self.breed}"
    # end

    # gus.run <- look at who you callled the "run" method on -> this is the self
    # the instance methods are marked as "Dog#method_name"
    def run
        puts "#{@name} the #{@breed} running fast as the wind"
    end

    def sit
        puts "#{@name} is sitting on its #{number_of_legs} legs"
    end

    def bark(barking_sound)
        puts "#{@name} says: '#{barking_sound.upcase}!'"
    end

    def sleep
        puts "#{@name} is sleeping: 'zzzzz' and dreaming about #{@fav_snack}"
    end

    # this is an instance method, you call it on instance: gus.who_am_i
    def who_am_i
        # binding.pry
        puts "I am #{self}" #I am #<Dog:0x00007ff4c39181c8>

        # method lookup chain 
        puts "I am #{self.name}" #I am Gus, explicit call -- ruby best practice
        puts "I am #{name}" #I am Gus, implicit call -- ruby best practice

        #do not use instance variables unless you really have to!
        puts "I am #{@name}" #this is an instance variable
        # puts "I am #{self.@name}" #syntax error, unexpected instance variable

    end
    
    # the class methods are marked as "Dog.method_name"
    # this is a class method, you call it on Dog: Dog.who_am_i
    def self.who_am_i
        puts "I am #{self}"
    end

end 

ruby = Dog.new("ruby", "bacon", "maltese", "nihilistic")
gus = Dog.new("Gus", "scooby snacks", "Bouvier")
finn = Dog.new("Finn", "calm bites", "Cavapoo")
# this is not efficient
# dogs = [ruby, finn, gus]

binding.pry
0
