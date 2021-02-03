// const doubleIt = num => num * 2

// const createPerson = (name, age) => ({firstName: name, age: age})






const nums = [4, 66, 9, 77, 90, 10, 33, 1, 23]
/********************** MAP **********************/
// Transforms an array
// Does not mutate the original array
// Callback should return the transformation

const newArr = nums.map(num => num * 2)




/********************** FILTER **********************/
// Returns a subarray satisfying a condition
// Does not mutate the original array
// Callback should return a boolean

const filteredArr = nums.filter(num => num % 2 === 0)



const books = [
    {
        title: "We",
        author: "Zamyatin",
        yearRead: 2015
    },
    {
        title: "Omon Ra",
        author: "Pelevin",
        yearRead: 2017
    },
    {
        title: "Notes From Underground",
        author: "Dostoevsky",
        yearRead: 2019
    },
    {
        title: "The Defense",
        author: "Nabakov",
        yearRead: 2014
    },
    {
        title: "War and Peace",
        author: "Tolstoy",
        yearRead: 2016
    },
    {
        title: "Anna Karenina",
        author: "Tolstoy",
        yearRead: 2016
    }
]
const bookTitles = ["We", "Omon Ra", "The Defense", "Pnin", "War and Peace", "The Foundation Pit", "Notes From Underground"]
/********************** SORT **********************/
// mutates the original array
// callback should return a number

// least to greatest
// nums.sort((num1, num2) => {
//     return num1 - num2
// })

// greatest to least
// nums.sort((num1, num2) => {
//     return num2 - num1
// })


// SORT ON STRINGS
// A - Z
// bookTitles.sort((strA, strB) => {
//     return strA.localeCompare(strB)
// })

// Z - A
// bookTitles.sort((strA, strB) => {
//     return strB.localeCompare(strA)
// })

// ON OBJECTS
books.sort((bookA, bookB) => bookA.author.localeCompare(bookB.author))






