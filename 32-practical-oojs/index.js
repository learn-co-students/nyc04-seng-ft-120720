// POJOs - plain old javascript object
function globalIntroduce() {
    return `Hi, my name is ${this.firstName}`
}

const greg = {
    firstName: "Greg",
    lastName: "Dwyer",
    introduce: globalIntroduce
}

const hasibul = {
    firstName: "Hasibul",
    lastName: "Chowdhury",
    introduce: globalIntroduce
}

const michelle = {
    firstName: "Michelle",
    familyName: "Rios",
    introduce: globalIntroduce
}

const ian = {
    firstName: "Ian",
    lastName: "Hollander",
    introduce: globalIntroduce
}

// console.log(greg.introduce())
// console.log(hasibul.introduce())
// console.log(michelle.introduce())

console.log(michelle.introduce)
console.log(greg.introduce)

// TRUE or FALSE?
// console.log(michelle.introduce() === greg.introduce())


// TRUE or FALSE?
console.log(michelle.introduce === greg.introduce)