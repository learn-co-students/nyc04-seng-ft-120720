class Teacher
    attr_accessor :first_name, :last_name
  
    @@all = []
  
    def initialize(first_name, last_name)
      @first_name = first_name
      @last_name = last_name
      @@all << self
    end
  
    def introduce
      puts "My name is #{self.first_name}"
    end
  
    def self.all
      @@all
    end
  
    def self.find_by_name(name)
      self.all.find do |teacher_instance|
        teacher_instance.first_name == name
      end
    end
  
end
  
# create two instances
  p1 = Teacher.new("Kent C.", "Strait")
  p2 = Teacher.new("Anita", "Plummer")
  
  p1.introduce
  
  
  Teacher.find_by_name("Anita")