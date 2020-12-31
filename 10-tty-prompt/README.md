# TTY Prompt

---

## SWBATs
- [ ] Practice setting up TTY Prompt in an application

## WATCH THIS FIRST
<https://youtu.be/4OL-SLxa65U>

## ERD

Our ERD looks as following:

```
  Category
    |
    ^
  PlantCategory
    V
    |
  Plant ----< PlantParenthood >----   Person
    |                                   |
    |                                   |
    |                                   |
     --------< Watering >---------------
```

### Description of the models:
- `Category` -- it is a category of the plant, for example: "leafy", "succulent", "indoor", "outdoor"
- `Plant` -- self-explanatory
- `PlantCategory` -- since now Plant can have many Categories and vice-versa, we have a many-to-many relationship and need a joiner;
- `Person` -- since not everyone interacting with the plant will be a plant_parent, let's change the name of this model to the Person -- THAT'S OUR USER!
- `PlantParenthood` -- describes a relationship of ownership between a person and a plant
- `Watering` -- describes every situation when a person waters the plant

### Roadmap:
1. Set up the interface
        - **video**: <https://youtu.be/FBzwXYfHPGI>
    - add `tty-prompt` to the Gemfile, bundle install
    - add the `Interface` class that does not work with the database (i.e. does not need to inherit from ActiveRecord), add necessary macros
    - add a new `rake` task to start the app
2. Add `Interfact#welcome` method that will welcome the user and give them first options
        - **video**: <https://youtu.be/6f3nfU7fl7o>
    - use `prompt.select` method to display the following options: "See all plants", "Sign up", "Exit"
    - create scaffolding of corresponding methods
        - **video**: <https://youtu.be/RPJ7ONtimbY>
    - create a recursive loop for when the user takes already-taken name
        - **video**: <https://youtu.be/687p081KfmY>
    - direct the user to the main menu
3. Add `User#adopt_a_plant` method
        - **video**: <https://youtu.be/nil4u1DjsGM>
    - use a hash of `species` and `ids` of plants to make choosing easier
    - create an instance of a joiner (`PlantParenthood`) via TTY::Prompt

## WATCH THIS AT THE END
<https://youtu.be/Mlnx2GTXkgU>