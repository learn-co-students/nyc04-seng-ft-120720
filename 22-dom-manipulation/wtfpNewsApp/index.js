const articlesArray = [
    {
        id: 1,
        title: "Fluff Daddy",
        author: "F. Diddy",
        description: "Breaking: Puff Daddy changes his name yet again, this time to help promote his line of extremely fluffy coats",
        image: "https://i.redd.it/l0uj355oxv341.jpg",
        likes: 50
    },
    {
        id: 2,
        title: "Precapitalist constructive fluff theory in the context of Sontagist camp",
        author: "Prof. Helmut A. Fluffrey, Department of Fluff, Flufts University",
        description: "'Fluff is intrinsically a legal fiction,' says Derrida; however,according to Abian, it is not so much fluff that is intrinsically a legal fiction, but rather the collapse, and subsequent meaninglessness, of fluff. In a sense, the premise of Sontagist camp implies that a narrative of fluff is created by the collective unconscious.",
        image: "https://i.etsystatic.com/5379987/r/il/867ce2/1440752021/il_1588xN.1440752021_foyp.jpg",
        likes: 0
    },
    {
        id: 3,
        title: "Raffy so cute",
        author: "Mr. Rafferty",
        description: "Raffy continues to be a fluffy boy.",
        image: "images/raffy.jpg",
        likes: 27
    },
    {
        id: 4,
        title: "J.K. Rowling Ruined Harry Potter...Again",
        author: "Fluff Scott Fitzgerald",
        description: "Our problematic fav has returned once more, not unlike the Dark Lord himself at the end of The Goblet of Fire. In her latest twitter rant, disgraced author J.K. Rowling has announced that the real name of Hufflepuff was actually Flufflepuff all along. She went on to reassure all three of her remaining Twitter followers that the name of Fluffy, Rubeus Hagrid's famously slobbery three-headed dog, will not be changed. This clarification came after a 12 year old on fan site MuggleNet nervously speculated that the Cerberus-like beast's name might be on the chopping block. In true unhinged Rowling fashion, the author added that Fluffy is, in fact, a supporter of Greta Thunberg and the School Strike for Climate movement. Perhaps the strangest thing about these tweets is that J.K. Rowling thought anyone cared about Hufflepuff.",
        image: "https://merchoidcdn-pveiw4zwh96ot9z.netdna-ssl.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/g/p/gp85569-harry-potter-_hufflepuff_-face-covering.jpg",
        likes: 2
    },
    {
        id: 5,
        title: "I'm not fat, I'm Fluffy",
        author: "Gabriel Iglesias",
        description: "...and Covid makes me even fluffier",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheawkwardyeti.com%2Fwp-content%2Fuploads%2F2017%2F07%2F063017_MaintenanceRequired-1024x841.png&f=1&nofb=1",
        likes: 9000
    }
]


// READ

let companyName = document.querySelector('#news-co')
let cards = document.querySelectorAll('.card')

// UPDATE #1
// find what we want to update
// let firstCard = document.querySelector(`[data-id='1']`)
// let img = firstCard.querySelector('img')

// update it
// img.src = 'images/raffy.jpg'
// img.alt = "Raffy smiling"
// console.log(img)


// UPDATE #2
// find what we want to update ✅
// update it
companyName.style.color = "blue"


// REMOVE #1
// find what we want to remove
let adArr = document.querySelectorAll('.ad')

adArr.forEach(function (ad) {
    ad.remove()
})



// CREATE #1

// create outer most element
// const card = document.createElement('div')
// card.className = 'card'
// card.dataset.id = articlesArray[0].id
// card.dataset.beef = "here is another example"

// // add innerHTML & updated the parts that need to be dynamic using string interpolation
// card.innerHTML = `<div class="img-container">
// <img src=${articlesArray[0].image} alt=${articlesArray[0].title}/>
// <div class="article-title-container">
//     <h4>${articlesArray[0].title}</h4>
// </div>
// </div>
// <div class="content">
// <p class='author'>Author: ${articlesArray[0].author}</p>
// <div class="scroll">
//     <p class='description'>${articlesArray[0].description}</p>
// </div>
// <p class="react-count">${articlesArray[0].likes} likes</p>
// <button class="like-button">♥️ Like</button>
// </div>`


// //find where on the page we want to add the new element
// const collection = document.querySelector('#collection')
// // slap it on the DOM
// collection.append(card)

// console.log(card)



// CREATE #2

// innerHTML approach
// articlesArray.forEach(function (article) {
//     console.log(article)
//     // create outer most element
//     const card = document.createElement('div')
//     card.className = 'card'
//     card.dataset.id = article.id
//     card.dataset.beef = "here is another example"

//     // add innerHTML & updated the parts that need to be dynamic using string interpolation
//     card.innerHTML = `<div class="img-container">
// <img src=${article.image} alt=${article.title}/>
// <div class="article-title-container">
//     <h4>${article.title}</h4>
// </div>
// </div>
// <div class="content">
// <p class='author'>Author: ${article.author}</p>
// <div class="scroll">
//     <p class='description'>${article.description}</p>
// </div>
// <p class="react-count">${article.likes} likes</p>
// <button class="like-button">♥️ Like</button>
// </div>`


//     //find where on the page we want to add the new element
//     const collection = document.querySelector('#collection')
//     // slap it on the DOM
//     collection.append(card)

// })


// artisinal appraoch
articlesArray.forEach(function (article) {
    console.log(article)
    // create outer most element
    const card = document.createElement('div')
    card.className = 'card'
    card.dataset.id = article.id
    card.dataset.beef = "here is another example"


    // img container
    const imgContainer = document.createElement('div')
    imgContainer.className = 'img-container'

    // img
    const img = document.createElement('img')
    img.src = article.image
    img.alt = article.title

    // article title container
    const articleTitleBox = document.createElement('div')
    articleTitleBox.className = 'article-title-container'

    // title
    const title = document.createElement('h4')
    title.textContent = article.title

    // content div
    const contentDiv = document.createElement('div')
    contentDiv.className = 'content'

    // p author
    const author = document.createElement('p')
    author.className = 'author'
    author.textContent = article.author

    // scroll div
    const scrollDiv = document.createElement('div')
    scrollDiv.className = 'scroll'

    // p description
    const description = document.createElement('p')
    description.textContent = article.description
    description.className = 'description'

    // p likes count
    const likesP = document.createElement('p')
    likesP.className = 'react-count'
    likesP.textContent = `${article.likes} likes`

    // likes button
    const button = document.createElement('button')
    button.className = 'like-button'
    button.textContent = `♥️ Like`

    articleTitleBox.append(title)

    imgContainer.append(img, articleTitleBox)
    scrollDiv.append(description)

    contentDiv.append(author, scrollDiv, likesP, button)

    card.append(imgContainer, contentDiv)

    const collection = document.querySelector('#collection')
    collection.append(card)

})
