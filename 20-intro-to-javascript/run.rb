require 'pry'

raffy = {name: "Raffy", age: 9}
puts raffy[:name]

arr = [1,2,3,4]

# method definition
def is_it_even(arr_argument)
  if arr_argument.length.even?
    puts "It's even."
  else
    puts "It's odd."
  end
end

#method invocation
is_it_even(arr)

arr.each do |num|
    puts num * 2
end

binding.pry