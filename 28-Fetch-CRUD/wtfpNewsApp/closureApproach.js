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
<button class="delete-button">🗑 Delete</button>
</div>`


    //find where on the page we want to add the new element
    const collection = document.querySelector('#collection')
    // slap it on the DOM
    collection.append(card)
    

    // APPROACH 1!
    const deleteButton = card.querySelector('.delete-button')
    deleteButton.addEventListener('click', function(e){
        console.log(e.target)
        card.remove()
    })

    const likeButton = card.querySelector('.like-button')
    likeButton.addEventListener('click', function(e) {
        // console.log(e.target)
        const likesPTag = card.querySelector('.react-count')
        // console.log(likesPTag)
        // const likesCount = parseInt(likesPTag.textContent)
        // likesPTag.textContent = likesCount + 1
        article.likes += 1
        likesPTag.textContent = `${article.likes} likes`

    })
}


/********** Event Listeners **********/
const toggle = document.querySelector("#toggle-dark-mode")

toggle.addEventListener('click', function () {
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



    articlesArray.push(article)
    renderOneCard(article)
    event.target.reset()
})


/********** App init **********/

removeAds()
renderAllCards()



/***** Flawed Way *****/

// const allDeleteButtons = document.querySelectorAll('.delete-button')
// console.log(allDeleteButtons)
// allDeleteButtons.forEach(function(button) {
//     button.addEventListener('click', function(e) {
//         console.log('delete button clicked!!')
//         console.log(e.target)
//         const card = e.target.closest('div.card')
//         card.remove()
//     })
// })