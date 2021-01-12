# Rails CRUD: Create w/ form_tag & form_for

## Questions:
1. New Route => return form 
2. Create route => handle form submission
3. Create Controller action => grabs the form data using params
    - use the params data to create our new instance 




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

2. Create a new Item 
    1. 'New' form request => 'new' action
        - get '/items/new', to: 'items#new'
    2. 'Create' => POST request => 'create' action
        - use params to grab the form data and create the new instance
        - Params:
            - an object/hash that is created by Rails whenever it triggers a controller action
            - Rails will use params to hold important data coming in from our requests (remember that a request can have any HTTP verb)
            - For HTML elements, if we give them a 'name' attribute, Rails will add that value to our params 



## Lecture Topics:
   - RESTful Routes
   - Controller actions/methods
   - form_for
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