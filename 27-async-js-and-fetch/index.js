// function sleep(time) {
//     const start = new Date()
//     while (new Date() - start < time * 1000) {
//         // do nothing & block the main thread 
//     }
// }

// sleep(5)
// console.log('before timeout')

// setTimeout(() => {
//     console.log('inside timeout')
// }, 5000)

// console.log('after timeout')

// response = RestClient.get('https://randomfox.ca/floof/')
// data = JSON.parse(response.body)
// puts data["image"]

// fetch('https://randomfox.ca/floof/')
//     .then(response => response.json())
//     .then(foxObj => console.log(foxObj))

let globalVar;


const button = document.querySelector('#get-fox-btn')
button.addEventListener('click', () => {
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(foxObj => {
            displayFox(foxObj)
        })
})

function displayFox(foxObj) {
    const img = document.querySelector('img')
    img.src = foxObj.image
    globalVar = foxObj
}

// console.log(globalVar) // undefined