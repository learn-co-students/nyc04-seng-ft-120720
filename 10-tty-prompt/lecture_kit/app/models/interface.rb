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
        puts "here are the plants:\n\n"
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
    end

    def exit_helper
        puts "good bye"
    end

end