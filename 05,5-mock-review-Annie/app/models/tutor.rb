class Tutor

    attr_accessor :name

    @@all = []

    def initialize(name_param)
        @name = name_param
        @@all << self
    end

    def self.all 
        @@all 
    end

    #1. create a method called courses 
    #2. take in Course class iterate over it 
    #3. return the course instances where this tutor is the matching tutor in that course instance. (comparison)

    # what map is doing: [{}, {}, {}] => [{}, {}, {}]
    # what select is doing: [{}, {}, {}] => [{}, {}]

    # courses solution #1: 
    # def courses 
    #     my_courses = []
    #     Course.all.each do |course_inst|
    #         if course_inst.tutor == self 
    #             my_courses << course_inst
    #         end
    #     end
    #     my_courses
    # end

    # courses solution #2:
    def courses 
        Course.all.select { |course_inst| course_inst.tutor == self }
    end

    #1. create a method called students 
    #2. find the courses that this tutor teaches 
    #3. return the an array of student instances that are in the course that this tutor teaches 

    # students solution #1: 
    # def students 
    #     self.courses.map(&:student)
    # end

    # students solution #2: 
    # [{}, {}] => [{}, {}]
    def students 
        self.courses.map { |course_inst|  course_inst.student }
    end

    #1. iterate through this tutor's courses 
    #2. find if the student we passed through as the arg. is a student of this tutor 
    #3. return true if this tutor has tutored this student_arg 
        #. else return false 

    # tutored_student?(student) solution #1:
    def tutored_student?(student)
        self.courses.any? { |course| course.student == student}
    end

    # tutored_student?(student) solution #2:
    # def tutored_student?(student)
    #     students.include?(student)
    # end

end


## PASSED
# - `Tutor#initialize(name)`
#   - `Tutor` is initialized with a name (string)
#   - name **can be** changed after the Tutor is initialized
# - `Tutor#name`
#   - returns the Tutor's name
# - `Tutor.all`
#   - returns an array of all the `Tutor` instances that have been initialized
# - `Tutor#courses`
#   - returns an array of `Course` instances associated with the `Tutor` instance.
# - `Tutor#students`
#   - returns an array of `Student` instances tutored by the `Tutor` instance.
# - `Tutor#tutored_student?(student)`
#   - a `Student` instance is the only argument
#   - returns `true` if the `Tutor` has tutored this `Student` (if there is a `Course` instance that has this `Tutor` and `Student`), returns `false` otherwise

