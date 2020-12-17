require_relative "../config/environment"

class Clown
  attr_accessor :name, :age, :fear, :skill

  @@all = []

  # def initialize(name: name_par, age: age_par, fear: fear_par, skill: skill_par)
  def initialize(args_hash)
    args_hash.each do |key, value|
      # krusty.age <- getter method
      # krusty.age= <- setter method
      self.send("#{key}=", value)
    end
    # @name = args_hash[:name]
    # @age = args_hash[:age]
    # @fear = args_hash[:fear]
    # @skill = args_hash[:skill]
    @@all << self
  end

  def self.all
    @@all
  end

end

krusty = Clown.new({age: 42, fear: "baloons", skill: "chainsaws", name: "Krusty"})
pennywise = Clown.new({age: 120_000_000, name: "Pennywaise", fear: "courage and heart"})

binding.pry
"🤡 yay 🤡"