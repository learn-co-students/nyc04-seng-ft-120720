// console.log('%cHello World', 'color: red')
// console.log("My name is Michelle")


// Primitive Data Types (7)
// Symbol
// let symbolExample = Symbol("apples")

// Undefined
// let raffy

// Null
// let snowman = null

// Boolean
// true or false

// Number

// BigInt
// let aBigNumber = 10n
// let anotherBigNum = BigInt(87985368976576395000999)

// Strings
// let paper = "lined paper"
// let anotherPaper = 'I like paper'
// let paperIsGood = `I havee ${2+2} sheets of paper`

// Non primitive data types
// Objects

// let raffy = {
//     name: "Raffy",
//     age: 9,
//     "is-cool": true
// };

// console.log(raffy["name"]);
// console.log(raffy.age);
// console.log(raffy["is-cool"]);


// let, const => block scoped 
// if (6/3 === 2) { 
//     let cheese = "cheddar"
//     console.log(cheese)
// }

// console.log(cheese)
// let michelle //declaration
// michelle = "I like snow" // assignment
// michelle = "Michelle is cold" // re-assign

// const michelle = "I like snow"//declaration & assignment
// michelle = "Michelle is cold" // re-assign


// var => function scoped

// using no keyword => global variable


// let arr = [1, 2, 3, 4, 5, 6, 8, 10]
// console.log(arr[2])
// arr.push(88)

function isItEven(arrArg) {
    if (arrArg.length % 2 === 0) {
        return "It is even"
    }
    else {
        return "It is odd"
    }
}

// let beef = isItEven(arr)





let arr = [1, 2, 3, 4, 5, 6, 8, 10]
// forEach, filter, find, sort, map

// CALLBACKS ARE AT THE MERCY OF THE FUNCTION RECEIVING THE CALLBACK
// for loops, forEach, for...of, while loop
// let newArr = []

// arr.forEach(function (value) {
//     // console.log('value - ', value)
//     // console.log('i - ', i)
//     // console.log('ogArr - ', ogArr)
//     newArr.push(value * 2)
// })

function doubleIt(value) {
    return value * 2
}


let newArr = arr.map(doubleIt)

