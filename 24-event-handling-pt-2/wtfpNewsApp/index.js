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
    event.target.reset()
})


const collection = document.querySelector('#collection')
collection.addEventListener('click', function (e) {
    const card = e.target.closest('div.card')

    if (e.target.className === 'delete-button') {
        console.log('delete button clicked')
        card.remove()
    }
    else if (e.target.className === 'like-button') {
        console.log('Like button clicked!!')
        const likesDisplay = card.querySelector('.react-count')
        const likes = parseInt(likesDisplay.textContent)
        likesDisplay.textContent = `${likes + 1} likes`
    }
})


/********** App init **********/

removeAds()
renderAllCards()


// const deleteButton = document.querySelector('.delete-button')
// deleteButton.addEventListener('click', function (e) {
//     console.log('DELETE CLICKED - ', e.target)
// })

// const card = document.querySelector('div.card')
// card.addEventListener('click', function (e) {
//     console.log('CARD CLICKED - ', e.target)
// })


// document.body.addEventListener('click', function (e) {
//     console.log('BODY CLICKED - ', e.target)
// })
