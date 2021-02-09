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
// const raffles = undefined;
const { name, age, type, bestFriends, fruits: { apple, orange }, beef = 44 } = raffy


/********************** What about destructuring arrays?? **********************/
const cryptoCurrencies = ["bitcoin", "dash", "ethereum", "litecoin", "monero"]

// original way
// const bitcoin = cryptoCurrencies[0]
// const dash = cryptoCurrencies[1]
// const eth = cryptoCurrencies[2]
// const lite = cryptoCurrencies[3]

// new way
const [a = "another dollar", b, c, d, e, f = "money"] = cryptoCurrencies


const apples = ["green", "yellow", "purple", ["rainbow", "blue"]]

const [first, second, third, [rain, bloo]] = apples



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
const [planetOfApes1, , planetOfApes3] = getMovieTitles()




/********************** Function Example #2 **********************/
function shareContactInfo({ name, position = "teacher", phones: { cell, work } }) {
    // const name = employee.name
    // const position = employee.position
    // const cell = employee.phones.cell
    // const work = employee.phones.work

    return `${name} is an ${position} who can be 
    reached by cell at ${cell} or by landline at ${work}`
}

const e1 = {
    name: "Michelle",
    job: "Instructor",
    phones: {
        cell: "555-987-6543",
        work: "555-345-6789"
    }
}
const e2 = {
    name: "Greg",
    position: "Instructor",
    phones: {
        cell: "555-987-3455",
        work: "555-345-6667"
    }
}

// shareContactInfo(e1)



//aray of hashes
const arr = [1, 2, 3, { faveNum: 7, faveFruit: "mango" }, 1000, 99]

const [num1, num2, num3, { faveNum: x, faveFruit }, num4] = arr
// check out the values num1, num2, num3, x, faveFruit, and num4 in the console!


// Destructuring html collections
const liTags = document.getElementsByTagName('li')
const [li1, li2, li3, li4] = liTags
li1.style.color = "red"


// Destructuring node lists
const pTags = document.querySelectorAll('p')
const [p1, p2] = pTags
p2.style.color = "blue"