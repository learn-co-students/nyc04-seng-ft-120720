// function higherOrder(fn){
//   console.log('outer');

//   fn()
// }


// function innerFunction(){
//   consolog.log("inner")
// }



// higherOrder(innerFunction)

// function add200(num){
//     console.log(num + 200);
// }

// [1,2,3,4,5,6].forEach(add200)


// function logHi(){
//   console.log("hi");
// }

// function interval(){
//   setInterval(logHi, 1000)
// }


// function first(){
//   setTimeout(function(){
//     console.log("first")
//   }, 5000)
// }

// function second(){
//   console.log("second");
// }

// function timeout(){
//   setTimeout
// }


// first()
// second()
// interval()


// function printEachElementTripled(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i]
//     const tripled = element * 3
//     console.log(tripled)
//   }
// }

// function printEachElementHalved(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i]
//     const halved = element / 2
//     console.log(halved)
//   }
// }

// function printEachElementWithExcitedly(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i]
//     const excited = `${element}!!!`
//     console.log(excited)
//   }
// }


// function looping(array, callbackFn){
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i]
//     callbackFn(element)
//   }
//   array.forEach(callbackFn)

// }


// function multi3(element){
//   const tripled = element * 3
//   console.log(tripled)
// }

// function div2(element){
//   const halved = element / 2
//   console.log(halved)
// }


// looping([1,2,4,5], multi3)
// looping([1,2,4,5], div2)


// function multi(x){

//   function doMath(num){
//     console.log(num * x);
//   }

//   return doMath
// }


// const multi2 = multi(2)
// const multi3 = multi(3)
// const multi5 = multi(5)

// console.log(multi2);

// console.log(multi2(10));
// console.log(multi3(10));
// console.log(multi5(10));


function arrayName(){
  let nameArray = []

  function addName(){
    let name = prompt()
    nameArray.push(name)

    return nameArray
  }

  return addName

}

let namesFromThisClas = arrayName()
let namesNextClass = arrayName()


namesFromThisClas()
namesFromThisClas()
namesFromThisClas()
namesFromThisClas()

namesNextClass()
namesNextClass()
namesNextClass()
namesNextClass()
// let namesForNextXlass = arrayName()