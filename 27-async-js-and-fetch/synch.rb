require 'rest-client'
require 'json'
# require 'pry'
# https://randomfox.ca/
# https://randomfox.ca/floof/


response = RestClient.get('https://randomfox.ca/floof/')
data = JSON.parse(response.body)
puts data["image"]