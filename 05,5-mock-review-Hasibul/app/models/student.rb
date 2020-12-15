class Student

    attr_accessor :name

    @@all = []

    def initialize(student_name)
        @name = student_name
        @@all << self
    end

    def self.all
        @@all
    end

    def courses
        Course.all.select { |course| course.student == self }
    end

    def tutors
        courses.map { |course| course.tutor}
    end

    def enrolled_fulltime?
        self.courses.count >= 3
    end

end




#DONE
# - `Student#initialize(name)`
#   - `Student` is initialized with a name (string)
#   - name **can be** changed after the `Student` is initialized

# - `Student#name`
#   - returns the `Student`'s name

# - `Student.all`
#   - returns an array of all the `Student` instances that have been initialized

# - `Student#courses`
#   - returns an array of all the `Course` instances for the `Student`.

# - `Student#tutors`
#   - returns an array of all of the `Tutor` instances that are tutoring the `Student`.

# - `Student#enrolled_fulltime?`
#   - returns `true` if the `Student` has enrolled for at least 3 Courses, returns `false` otherwise