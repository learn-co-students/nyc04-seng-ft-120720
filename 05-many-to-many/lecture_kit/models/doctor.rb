require 'set'

class Doctor

    @@all = []

    attr_reader :name, :specialty

    def initialize(name, specialty)
        @name = name
        @specialty = specialty
        @@all << self
    end

    def self.all
        @@all
    end

    def appointments
        # self is: #<Doctor:0x00007fb4058b9668 @name="Dr Peppers", @specialty="necromancy">
        # we are comparing the appointment.doctor to self because we called this method on an instance of a doctor
        Appointment.all.select{|appointment| appointment.doctor == self}
    end

        # MAP or COLLECT -> it returns a new array (you can manipulate the data or just take out just one attribute from each object)
        # EACH -> each returns nil, it is used to do some job without a return
        # FIND -> returns first item that fulfills a condition; if nothing matches it, it returns nil
        # SELECT -> returns an array of items that fit the condition; if nothing matches it, it returns []

    def patients
        # appointments
        # self.appointments.collect <- same as map 
        ####### 
        # self.appointments.map do |appointment|
        #     appointment.patient
        # end
        ########
        self.appointments.map{|appointment| appointment.patient}.uniq
        #######
        # self.appointments.map(&:patient).uniq
        #######
        # self.appointments.map(&:patient).to_set
    end

    def new_appointment(date, location, patient)
        Appointment.new(date, location, self, patient)
    end

    def self.most_appointments
        self.all.sort{|doctor| doctor.appointments.count}.last
        # self.all.max_by{|doctor| doctor.appointments.count}
    end

end