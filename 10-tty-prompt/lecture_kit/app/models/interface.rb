class Interface

    attr_reader :prompt
    attr_accessor :user

    def initialize
        @prompt = TTY::Prompt.new
    end

    def welcome
        prompt.select("What do you want to do?") do |menu|
            menu.choice "See all the plants", -> { plants_helper }
            menu.choice "Sign up", -> { user_sign_up_helper}
            menu.choice "Exit", -> { exit_helper}
          end    
    end

    def plants_helper
        puts "here are the plants:"
    end

    def user_sign_up_helper
        name = prompt.ask("What is your username?")
        while Person.find_by(name: name)
            puts "This username is already taken"
            name = prompt.ask("What is your username?")
        end
        age = prompt.ask("How old are you?").to_i
        responsible = prompt.yes?("Are you responsible?")
        self.user = Person.create(name: name, age:age, responsible: responsible)
        puts "Hello #{user.name}!"
        main_screen
    end

    def main_screen
        system 'clear'
        user.reload
        sleep(0.5)
        prompt.select("What do you want to do?") do |menu|
            menu.choice "See all the plants", -> { plants_helper }
            menu.choice "Adopt a plant", -> { adoption_helper}
            menu.choice "Exit", -> { exit_helper}
          end  
    end

    def adoption_helper
        plants = Plant.all_names
        chosen_plant_id = prompt.select("Which plant do you want to adopt?", plants)
        affection = prompt.ask("From 1-10, how affectionate do you feel towards this plant?").to_i
        pp = PlantParenthood.create(plant_id: chosen_plant_id, person_id: user.id, affection: affection)
        puts "Congratulations! You have adopted #{pp.plant.species}!"
        sleep(1)
        main_screen
        # 1. choose a plant -> display a list of plant names
        # 2. create a new plant_parenthood between the user and the plant
    end

    def exit_helper
        puts "good bye"
    end

end