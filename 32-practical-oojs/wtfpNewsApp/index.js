const url = 'http://localhost:3000/articles'
const toggle = document.querySelector("#toggle-dark-mode")
const collection = document.querySelector('#collection')


/********* FUNCTIONS *********/

function removeAds() {
    let adArr = document.querySelectorAll('.ad')

    adArr.forEach(function (ad) {
        ad.remove()
    })
}

/********** EVENT LISTENERS **********/

toggle.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode")
})

/********** APP INIT **********/

removeAds()
Card.renderAllCards()
