class Course

    attr_accessor :course_name, :tutor, :student

    @@all = []

    def initialize(tutor_inst, student_inst, course_name_str)
        @tutor = tutor_inst
        @student = student_inst
        @course_name = course_name_str
        @@all << self 
    end

    def self.all 
        @@all
    end

end




# - `Course.all`
#   - returns an array of all initialized `Course` instances

## PASSED 
# - `Course#initialize(tutor, student, course_name)`
#   - `Course` is initialized with a `Tutor` instance, a `Student` instance, and a course_name (string)
# - `Course#course_name`
#   - returns the course_name for the `Course` instance
