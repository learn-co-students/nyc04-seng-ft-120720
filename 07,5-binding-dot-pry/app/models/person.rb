class Person < ActiveRecord::Base
    has_many :quotes

    def self.all_quotes
        # binding.pry
        Quote.all.map {|quote| puts  "#{quote.content} - #{quote.person.name}"} 
    end

    def  current_age
        # binding.pry
        now = Time.now.utc.to_date
        age = now.year - birth.year - ((now.month > birth.month || (now.month == birth.month && now.day >= birth.day)) ? 0 : 1)
        
        if self.death
            death_age = death.year - birth.year - ((death.month > birth.month || (death.month == birth.month && death.day >= birth.day)) ? 0 : 1)
            puts "#{self.name} pass away in #{self.death.year}, at the age of #{death_age}"
        else
            puts "#{self.name} is currently #{age}"
        end
    end

end

# now = Time.now.utc.to_date
# now.year - birth.year - ((now.month > birth.month || (now.month == birth.month && now.day >= birth.day)) ? 0 : 1)