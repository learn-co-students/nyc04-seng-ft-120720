# Fetch CRUD

## Learning Goals

- [ ] Use `json-server` as a RESTful API
- [ ] Make a `GET` request to fetch data from a server and display that data using DOM manipulation
- [ ] Make `POST`/`PATCH`/`DELETE` requests to persist changes to the server
- [ ] Understand the different configuration options for a fetch request (headers, method, body)
- [ ] Understand when to use optimistic vs pessimistic rendering

______

### Three Pillars of Javascript
- Manipulating the DOM
- Handling Events
- **Communicating with the Server**


POST /articles
GET /articles
DELETE /articles/:id
PATCH /articles/:id

______

## Notes

This is the lecture when we finally can put together all three pillars of JS and turn our app into a fully-fledged Single Page Application! We're going to do full CRUD using fetch and persist changes to a backend.

Almost all the deliverables for this section are going to follow the same general steps:

1. When X Event Happens...
2. Do Y Fetch Request...
3. And Slap Z On (or Off) the DOM

Remember these steps any time you're working with fetch and the three pillars of Javascript!

## json-server

Remember, we’re working on building a single page application, so all of the data for our application is going to be hosted on a server and saved in a database, instead of being hard-coded into our app (in the data.js file) like has been until now.

Eventually we’ll set up a Rails server for hosting our database and sending the API data, but for now, we’ll be using a tool called `json-server` to very easily create a RESTful API from a .json file.

`json-server` is a good tool for learning and prototyping so we can focus on the frontend code, but don’t become overly reliant on it - it’ll be used as the backend in the practice challenges and the code challenge; but real APIs, and your Rails APIs, may work slightly differently.

To get started, install JSON Server:

```
npm install -g json-server
```

Create a `db.json` file with some data:

```json
{
  "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }],
  "comments": [{ "id": 1, "body": "some comment", "postId": 1 }],
  "profile": { "name": "typicode" }
}
```

Start JSON Server:

```bash
json-server --watch db.json
```

Now if you go to [http://localhost:3000/posts/1](http://localhost:3000/posts/1), you'll get:

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

`json-server` relies heavily on RESTful conventions, so all the restful routes you learned in Phase 2 will come in handy here! You can also check out their [Github repo](https://github.com/typicode/json-server) for more documentation on working with `json-server`.

## Fetch GET Request

Here's a template to use for making GET requests to a JSON API with fetch:

```js
fetch("http://localhost:3000/animals")
  .then((response) => response.json())
  .then((data) => {
    // do something with the data!
  });
```

By default, fetch uses the HTTP GET method, so all you need to pass into fetch is the url. If you're working with a JSON API, you'll need to parse the response as JSON in the first `.then` method. In the second `.then` method, you'll get access to the actual data (usually an array, or an object) - and you can do whatever you need with it from there, like create some DOM elements.

## Non-GET Fetch Requests

To make a non GET fetch request, we need to pass a second argument to fetch: the configuration object. This lets us add additional information to our request.

Here are some of the key properties of that configuration object:

```js
// config object
const config = {
  method: "POST"
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
}

// second argument for fetch is this config object
fetch("http://localhost:3000/animals", config)
```

- `method`: the HTTP verb for the request (`POST`, `PATCH`, `DELETE`)
- `headers`: headers let us provide additional 'meta-data' about our request
  - `"Content-Type": "application/json"`: this tells the API what format we're sending the BODY data in (JSON format)
- `body`: to send JSON data to the backend, we need to call `JSON.stringify(data)` to turn our data object into a JSON-formatted string

Imagine we're taking some data from a form, and we want to use fetch to send that data to our API. The object might look like this:

```js
const animalObj = {
  name: form.name.value,
  image: form.image.value,
  description: form.description.value,
};
```

We can send that using `fetch` by including the object in to the body of the fetch request:

```js
fetch("http://localhost:3000/animals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(animalObj),
});
```

If we want to work with the response, we need to add the `.then` methods after our fetch - same as when we made a GET request:

```js
fetch("http://localhost:3000/animals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(animalObj),
})
  .then((response) => response.json())
  .then((newAnimalFromServer) => {
    // do something with the response data (add it to the page!)
  });
```

## Optimistic vs Pessimistic Rendering

**Pessimistic rendering**: waiting for the response from the API **before** updating the DOM. Example:

```js
fetch("http://localhost:3000/animals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(animalObj),
})
  .then((response) => response.json())
  .then((newAnimalFromServer) => {
    // WAIT FOR RESPONSE BEFORE UPDATING THE DOM!
    console.log("updated on the server!");
    renderAnimal(newAnimalFromServer);
    console.log("updated on the DOM!");
  });
```

**Optimistic rendering**: **not** waiting for the response from the API before updating the DOM. Example:

```js
const newLikes = parseInt(likeButton.textContent) + 1;

// NOT WAITING FOR RESPONSE BEFORE UPDATING THE DOM
likeButton.textContent = newLikes;
console.log("updated on the DOM!");

fetch("http://localhost:3000/animals/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ likes: newLikes }),
})
  .then((response) => response.json())
  .then(() => {
    console.log("updated on the server!");
  });
```

## Resources

- [json-server](https://github.com/typicode/json-server)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
