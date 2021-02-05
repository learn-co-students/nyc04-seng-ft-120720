const url = 'http://localhost:3000/articles'


/********* FUNCTIONS *********/

function removeAds() {
    let adArr = document.querySelectorAll('.ad')

    adArr.forEach(function (ad) {
        ad.remove()
    })
}

function renderAllCards() {
    fetch(url)
        .then(response => response.json())
        .then(articlesArray => {
            articlesArray.forEach(article => renderOneCard(article))
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
    const title = event.target[0].value
    const author = event.target[1].value
    const description = event.target[2].value
    const image = event.target[3].value
    const likes = 0

    // POST /articles
    const article = { title, author, description, image, likes }
    renderOneCard(article) // optimisitc rendering


    // `${url}/monkeys` is not a real end point, so
    // this will cause an error
    fetch(`${url}/monkeys`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
    })
        .then(response => {
            console.log(response)
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(newArticleObject => {
            console.log('Success:', newArticleObject);
            // renderOneCard(article) // pessimistic rendering
        })
        .catch(error => {
            alert(error)
        })



    // Object Shorthand Notation
    event.target.reset()
})


const collection = document.querySelector('#collection')
collection.addEventListener('click', function (e) {
    const card = e.target.closest('div.card')

    if (e.target.className === 'delete-button') {
        console.log('delete button clicked')
        card.remove() // optimistic rendering

        fetch(`${url}/${card.dataset.id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
    else if (e.target.className === 'like-button') {
        console.log('Like button clicked!!')
        const likesDisplay = card.querySelector('.react-count')
        const likes = parseInt(likesDisplay.textContent)
        // likesDisplay.textContent = `${likes + 1} likes` // optimistic rendering

        fetch(`${url}/${card.dataset.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: likes + 1 })
        })
            .then(response => response.json())
            .then(data => {
                likesDisplay.textContent = `${data.likes} likes`
            })
    }
})


/********** App init **********/

removeAds()
renderAllCards()
