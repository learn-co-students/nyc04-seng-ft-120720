/********************** What is the spread operator and why would I want to use it? **********************/

const raffy = {
    name: "Raffy",
    age: 9,
    type: "terrier",
    bestFriends: ["Michelle", "Louie", "Coco"]
}

const pet = {
    fluffy: true,
    mood: "cheerful",
    health: 100
}

// Wrong way to make a copy of Raffy
// Correct (desugared) way to make a copy - using Object.assign
// Correct (sugared) way using spread operator


// Combining raffy & pet objects

/********************** What about arrays?? **********************/

const redVeggies = ["red cabbage", "red onion", "rhubarb"]
const greenVeggies = ["spinach", "lettuce", "zucchini"]

// Wrong way to make a copy of redVeggies
// Correct (sugared) way using spread operator

// Combining redVeggies & greenVeggies arrays



/********************** Function Example **********************/
// Spread
function sumThreeNums(x, y, z) {
    return x + y + z
}

const arr = [3, 5, 7]

// const sum = sumThreeNums(3, 5, 7)
// const sum = sumThreeNums(arr[0], arr[1], arr[2])
// console.log(sum)



/*** Rest Parameter ***/
/* 
- Collects all remaining elements into an array
- Allows us to take an unlimited number of arguments 
 into the function
- Must be the last paramter 
*/
function dynamicSum(...moreArgs) {
    return moreArgs.reduce((acc, currVal) => {
        return acc + currVal
    }, 0)
}

// const sum = dynamicSum(1, 4, 5, 8, 10, 65)
// console.log(sum)