


/********* FUNCTIONS *********/

function removeAds() {
    let adArr = document.querySelectorAll('.ad')

    adArr.forEach(function (ad) {
        ad.remove()
    })
}

function renderAllCards() {
    articlesArray.forEach(function (article) {
        renderOneCard(article)

    })
}

function renderOneCard(article) {
    // create outer most element
    const card = document.createElement('div')
    card.className = 'card'
    card.dataset.id = article.id
    card.dataset.beef = "here is another example"

    // add innerHTML & updated the parts that need to be dynamic using string interpolation
    card.innerHTML = `<div class="img-container">
<img src=${article.image} alt=${article.title}/>
<div class="article-title-container">
    <h4>${article.title}</h4>
</div>
</div>
<div class="content">
<p class='author'>Author: ${article.author}</p>
<div class="scroll">
    <p class='description'>${article.description}</p>
</div>
<p class="react-count">${article.likes} likes</p>
<button class="like-button">♥️ Like</button>
</div>`


    //find where on the page we want to add the new element
    const collection = document.querySelector('#collection')
    // slap it on the DOM
    collection.append(card)
}

/********** Event Listeners **********/
// What elements do we want to listen for events on?
const toggle = document.querySelector("#toggle-dark-mode")
// console.log(toggle)

// What kind of event are we listening for? 
// What do we want to happen? (what function do we want to run)
toggle.addEventListener('click', function () {
    // if (document.body.className === 'dark-mode') {
    //     document.body.className = ""
    // }
    // else {
    //     document.body.className = 'dark-mode'
    // }
    document.body.classList.toggle("dark-mode")
})



const form = document.querySelector('#article-form')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputFieldOne = event.target[0].value
    const inputFieldTwo = event.target[1].value
    const inputFieldThree = event.target[2].value
    const inputFieldFour = event.target[3].value

    const lastId = articlesArray[articlesArray.length - 1].id


    const article = {
        id: lastId + 1,
        title: inputFieldOne,
        author: inputFieldTwo,
        description: inputFieldThree,
        image: inputFieldFour,
        likes: 0
    }

    articlesArray.push(article)

    renderOneCard(article)

    // form.reset()
    event.target.reset()

    // other ways to access user input
    // document.querySelector("[name='title']").value
    // using name attribute on HTML input element. EX: event.target.url.value

})











/********** App init **********/

removeAds()
renderAllCards()