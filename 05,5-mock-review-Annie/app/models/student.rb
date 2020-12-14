class Student

    # both getter and setter
    attr_accessor :name

    @@all = []

    def initialize(name_param)
        @name = name_param
        @@all << self 
    end

    # def name 
    #     @name
    # end

    # def name=(new_name)
    #     @name = new_name
    # end

    def self.all 
        @@all 
    end

    #1. create a method called courses 
    #2. go into Courses and iterate through 
    #3. select/pick the ones where the student instance is the same as self 

    def courses
        Course.all.select { |course_inst| course_inst.student == self }
    end

    #1. define the method -- enrolled_fulltime?
    #2. go through all of the student's courses 
    #3. check how many courses there are 
    #4. if the student has 3 or more courses, return true 
    #   else return false 
    
    def enrolled_fulltime?
        # implicit self
        courses.count >= 3
        # could also be: 
        # self.courses.count >= 3
    end

end

# - `Student#courses`
#   - returns an array of all the `Course` instances for the `Student`.

# - `Student#enrolled_fulltime?`
#    - returns `true` if the `Student` has enrolled for at least 3 Courses, returns `false` otherwise


### PASSED 
# - `Student#initialize(name)`
#   - `Student` is initialized with a name (string)
#   - name **can be** changed after the `Student` is initialized
# - `Student#name`
#   - returns the `Student`'s name
# - `Student.all`
#   - returns an array of all the `Student` instances that have been initialized

