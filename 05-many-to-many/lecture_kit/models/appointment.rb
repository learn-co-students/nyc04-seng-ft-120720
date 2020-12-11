class Appointment

    @@all = []

    attr_reader :doctor, :patient
    attr_accessor :date, :location

    def initialize(date, location, doctor, patient)
        @date = date 
        @location = location 
        @doctor = doctor 
        @patient = patient
        @@all << self
    end

    def self.all
        @@all
    end
    
end


# appt1 = Appointment.new("25 Aug", "NYC", doctor1, patient1)
