/********************** What's destructuring & how can I do it? **********************/

const raffy = {
    name: "Raffy",
    age: 9,
    type: "terrier",
    bestFriends: ["Michelle", "Louie", "Coco"],
    fruits: {
        orange: {
            color: "orange"
        },
        apple: {
            color: "green"
        }
    }
}

// original way
// const name = raffy.name
// const age = raffy.age
// const type = raffy.type
// const bestFriends = raffy.bestFriends
// const color = raffy.fruits.apple.color

// new way


/********************** What about destructuring arrays?? **********************/
const cryptoCurrencies = ["bitcoin", "dash", "ethereum", "litecoin", "monero"]

// original way
// const bitcoin = cryptoCurrencies[0]
// const dash = cryptoCurrencies[1]
// const eth = cryptoCurrencies[2]
// const lite = cryptoCurrencies[3]

// new way


/********************** Function Example #1 **********************/
function getMovieTitles() {
    return ["Rise of the Planet of the Apes", "Dawn of the Planet of the Apes", "War for the Planet of the Apes"]
}

// old way
// const moviesTitleArray = getMovieTitles()
// const planetOfApes1 = moviesTitleArray[0]
// const planetOfApes2 = moviesTitleArray[1]
// const planetOfApes3 = moviesTitleArray[2]

// new way


/********************** Function Example #2 **********************/
function shareContactInfo(employee) {
    const name = employee.name
    const position = employee.position
    const cell = employee.cell
    const work = employee.work

    return `${name} is an ${position} who can be 
    reached by cell at ${cell} or by landline at ${work}`
}

const e1 = {
    name: "Michelle",
    position: "Instructor",
    phones: {
        cell: "555-987-6543",
        work: "555-345-6789"
    }
}

// shareContactInfo(e1)