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

function renderAllCards() {
    fetch(url)
        .then(response => response.json())
        .then(articlesArray => {
            articlesArray.forEach(article => renderOneCard(article))
        })
}

function renderOneCard(article) {
    // create outer most element
    const cardDiv = document.createElement('div')
    cardDiv.className = 'card'
    cardDiv.dataset.id = article.id

    cardDiv.innerHTML = `<div class="img-container">
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
    collection.append(cardDiv)
}


/********** EVENT LISTENERS **********/

toggle.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode")
})

collection.addEventListener('click', (e) => {
    const cardDiv = e.target.closest('div.card')

    if (e.target.className === 'delete-button') {
        fetch(`${url}/${cardDiv.dataset.id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => {
                cardDiv.remove()
            })
    }
    else if (e.target.className === 'like-button') {
        const likesDisplay = cardDiv.querySelector('.react-count')
        const likes = parseInt(likesDisplay.textContent)

        fetch(`${url}/${cardDiv.dataset.id}`, {
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


/********** APP INIT **********/

removeAds()
renderAllCards()
