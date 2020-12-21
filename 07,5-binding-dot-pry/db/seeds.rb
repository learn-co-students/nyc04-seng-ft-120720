Person.destroy_all
Quote.destroy_all
Person.reset_pk_sequence
Quote.reset_pk_sequence

### PEOPLE
puts "✨ creating people ✨"

jane = Person.create(name: "Jane Fonda", occupation: "actor, political activist, environmentalist, and former fashion model", birth:"1937-12-22")
# binding.pry
frank = Person.create(name: "Frank Zappa", occupation: "singer, activist", birth:"1940-12-21", death:"1993-12-4")
samuel = Person.create(name: "Samuel L. Jackson", occupation: "actor and producer", birth:"1948-12-21")
ruby = Person.create(name: "Ruby", occupation: "making dev happy", birth:"1995-12-21" )


### QUOTES
puts "✨ creating quotes ✨"

quotes_arr = [
    {content: "To be a revolutionary you have to be a human being. You have to care about people who have no power.", person_id: jane.id},
    {content: "All movies aren't fun; some are hard work. You try to do something and convey a set of emotions that have to do with some real life kind of stuff.", person_id: samuel.id},
    {content: "It's never too late - never too late to start over, never too late to be happy.", person_id: jane.id},
    {content: "Without deviation from the norm, progress is not possible.", person_id: frank.id},
    {content: "The computer can't tell you the emotional story. It can give you the exact mathematical design, but what's missing is the eyebrows.", person_id: frank.id},
    {content: "Not everybody goes to movies to get their life changed.", person_id: samuel.id},
    {content: "Did you mean...?", person_id: ruby.id},
]

quotes_arr.each do |quote| 
    # binding.pry
    Quote.new(quote).save
end

puts "⭐️⭐️⭐️⭐️ SEEDED ⭐️⭐️⭐️⭐️"