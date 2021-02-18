class Card {

    constructor(article) {
        this.article = article

        // option 1
        // this.handleLikes = this.handleLikes.bind(this)
    }


    // option 2 using an arrow function for callbacks
    handleLikes = () => {
        console.log('like button clicked')
        console.log(this)
        const likesDisplay = this.cardDiv.querySelector('.react-count')
        const likes = parseInt(likesDisplay.textContent)

        fetch(`${url}/${this.cardDiv.dataset.id}`, {
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

    handleDelete = () => {
        fetch(`${url}/${this.article.id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => {
                this.cardDiv.remove()
            })
    }

    render() {
        // console.log(this)
        this.cardDiv = document.createElement('div')
        this.cardDiv.className = 'card'
        this.cardDiv.dataset.id = this.article.id

        this.cardDiv.innerHTML = `<div class="img-container">
            <img src=${this.article.image} alt=${this.article.title}/>
            <div class="article-title-container">
                <h4>${this.article.title}</h4>
            </div>
            </div>
            <div class="content">
            <p class='author'>Author: ${this.article.author}</p>
            <div class="scroll">
                <p class='description'>${this.article.description}</p>
            </div>
            <p class="react-count">${this.article.likes} likes</p>
            <button class="like-button">♥️ Like</button>
            <button class="delete-button">🗑 Delete</button>
            </div>`

        //find where on the page we want to add the new element
        const collection = document.querySelector('#collection')
        // slap it on the DOM
        collection.append(this.cardDiv)

        const likesButton = this.cardDiv.querySelector('.like-button')
        const deleteButton = this.cardDiv.querySelector('.delete-button')

        likesButton.addEventListener('click', this.handleLikes)
        deleteButton.addEventListener('click', this.handleDelete)
    }



    static renderAllCards() {
        fetch(url)
            .then(response => response.json())
            .then(articlesArray => {
                articlesArray.forEach(article => {
                    const card = new Card(article)
                    card.render()
                })
            })
    }
}