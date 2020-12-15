class Tutor

    attr_accessor :name

    @@all = []

    def initialize (tutor_name)
        @name = tutor_name
        @@all << self
    end

    def self.all
        @@all
    end

    def courses
        Course.all.select { |course| course.tutor == self}
    end

    def students
        courses.map { |course| course.student }
    end

    def tutored_student?(student)
        students.include?(student)
    end
  
end





# DONE
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