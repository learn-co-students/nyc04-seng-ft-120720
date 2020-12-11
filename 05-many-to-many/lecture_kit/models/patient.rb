class Patient
    
    @@all = []

    attr_reader :name

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def appointments
        # self is: #<Patient:0x00007f90ea0b3ec0 @name="Hasibul">
        Appointment.all.select{|appt| appt.patient == self}
    end

    def doctors
        self.appointments.map{|appt| appt.doctor}.uniq
        self.appointments.map(&:doctor).uniq
    end

end