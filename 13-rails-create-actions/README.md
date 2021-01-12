# Rails CRUD: Create w/ form_tag

## Questions:
- Private methods
    - any instance or class methods written below the word 'private' are "private"
    - that method cannot be accessed outside of it's scope 
- rails c v byebug
    - binding.pry
        - debugging specific lines of code 
        - same with byebug
    - rails c
        - test entire application 
        - you cannot test at a specific point 



## Deliverables:
1. User should be able to add an item to their wishlist
    - create a wishlist item
    - in order to send a POST request, the developer needs to give the client a way to send it 
    - this is where forms come in 
 
 A. User needs a way to communicate that they are ready to send a POST request 
    - the only way for a user to communicate to the server is with a route 
    - GET route 
 B. User then needs to send the actual POST request 
    - POST route 


## Lecture Topics:
   - RESTful Routes
   - Controller actions/methods
   - form_tag
   - URL helpers

## RESTful Controller Actions
    - index
        - the controller action that we define to work with the index route => '/resource'
    - show
        - the controller action that we define to work with the show route => '/resource/UUID'

    Create:
        - new => send the User the form 
        - create => handle the data when the form is submitted 

Update:
    - edit
    - update

Delete:
    - delete