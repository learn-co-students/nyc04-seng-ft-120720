# Components, Props and JSX

## Notes

- errors related to imported code (import/export)
- passing props
- JSX syntax - when to use parentheses and curly parens
- getting data to show on the cards

## Students Will Be Able To (SWBATs)

- [ ] Visualize/identify Components on any website
- [ ] Understand how `create-react-app` works and what it offers a developer
- [ ] Briefly explain Babel's purpose in React
- [ ] Organize code into files and use the import-export syntax to pass data
      between components
- [ ] Explain what a React Component actually is in code
- [ ] Use JSX to build custom components and render them in the browser
- [ ] Use props to make components more dynamic and reusable

## Outline

### Part 1

- [ ] Discuss React Components
- [ ] Break a website down into components
  - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
  - **Breakout Exercise**: translate
    [this mockup](https://app.diagrams.net/#G1DvSXW51B9CgVaDF1Spmdwaw8Zs7L85Ua)
    (or use [this image](./wireframe.png) if the link doesn't work) into
    components
  - Draw out component hierarchy (parent/child relationship)
- [ ] Use `npx create-react-app <app>` to scaffold our app
- [ ] Walk through app structure (package.json, public, src)

### Part 2

- [ ] Build components and practice passing data as props
- [ ] Convert component hierarchy into React Components
- [ ] Use JSX to create DOM elements
- [ ] Discuss how JSX is converted to JavaScript
- [ ] Use props to render dynamic data
- [ ] Demonstrate debugging techniques (`console.log(props)`, React DevTools)
- [ ] Render a list of components
  - **Breakout Exercise**: Practice creating a [list of components](https://codesandbox.io/s/components-props-jsx-exercise-b5bx1)

## Imperative vs Declarative Code

React lets us write our UI code **declaratively**, which means as developers we
don't have to do as much work to make changes to the DOM.

For example, if I were to make a DOM element without React, I need write more
**imperative** code to tell the browser how to create my DOM elements:

```js
const h1 = document.createElement("h1");
h1.id = "main";
h1.className = "blue";
h1.textContent = "Hello!";
document.querySelector("#root").append(h1);
```

Whereas with React, I can write the same code more **declaratively**, and just
describe what I want my DOM element while React takes care of the
implementation:

```jsx
const h1 = (
  <h1 id="main" className="blue">
    Hello!
  </h1>
);

ReactDOM.render(h1, document.querySelector("#root"));
```

### `create-react-app`

There are many tools for easily building React applications such as Create React
App, Gatsby, and Next; each of these solutions packages together React with
several other tools for making our lives as developers easier. The
[React Docs](https://reactjs.org/docs/create-a-new-react-app.html) go into some
more detail on what each of these tools is best suited for. For Flatiron
projects, we're going to be using Create React App. In addition to React, it
gives us:

- **Webpack**: a tool for bundling and minifying our code (along with a server
  for running our code in development)
- **Babel**: a transpiler that lets us write modern JavaScript and JSX

Think of `create-react-app` like `rails new`: it will build a project folder for
our application and install all the dependencies we need (via Node Package
Manager).

To create a new React application and start it, run:

```sh
npx create-react-app app-name
cd app-name
npm start
```

### Import/Export syntax

In React, it's recommended that we write each of our components in its own file
to help keep our code organized. In order to work with code written across
multiple files, we can use the `import` and `export` syntax that was introduced
to Javascript as part of ES6. We also can use this syntax to import code from
external libraries. Starting at the index.js file (entry), Webpack will use our
imports and exports to bundle together the final code that is sent to the
browser.

For example, if our application looks like this:

```txt
├── src/
│   ├── app.js
│   └── index.js
├── utils/
│   └── math.js
```

We can create and export an App component in `src/components/App.js`:

```js
import React from "react"; // default import

function App() {
  return <h1>Hello!</h1>;
}

export default App; // default export
```

And import it in our `src/index.js` file like this:

```js
import React from "react";
import ReactDOM from "react-dom";
// there is a convention to import external dependencies first (at the top of your file), and internal dependencies last
import App from "./components/App"; // default import, using the relative path to our app.js file

ReactDOM.render(<App />, document.querySelector("#root"));
```

In addition to default imports/exports, you can also do named imports/exports.
Typically, classes and React components are exported as the default export, and
smaller utility/helper functions are exported as named exports.

For example, if we have some utility functions in `utils/math.js`:

```js
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

export { add, subtract }; // named export
```

We can use them in our `src/app.js` file like this:

```js
import React from "react"; // default import
import { add, subtract } from "../utils/math"; // named import

function App() {
  return <h1>1 + 2 is {add(1, 2)}</h1>;
}

export default App; // default export
```

### Babel

[Babel](https://babeljs.io/) is a tool for **transpiling** JavaScript code - it
lets us write JavaScript code in any version we want (so we can use the latest
and greatest features of the language), and it converts our code into a version
of JavaScript that will run on any browsers we want. For any React project we're
making, we need to use Babel in order to write JSX (JavaScript XML) markup in
our code. Babel lets us write code that looks like this:

```jsx
ReactDOM.render(<h1>Isn't Babel neat?</h1>, document.getElementById("root"));
```

And turn it into this:

```js
ReactDOM.render(
  React.createElement("h1", null, "Isn't Babel neat?"),
  document.getElementById("root")
);
```

`create-react-app` uses Babel under the hood, so we don't have to worry about
doing much of our own Babel configuration, but it is a key piece of the puzzle
in terms of the modern JavaScript ecosystem.

### JSX

In vanilla Javascript, there were several steps involved to adding DOM elements
to the page:

```js
function renderCard() {
  // 1. create each individual DOM element
  const cardDiv = document.createElement("div");
  // 2. assign any attributes we want on that element
  cardDiv.className = "card";
  cardDiv.id = "card1";
  cardDiv.textContent = "hi";
  // 3. append that card to some parent element in the DOM
  parentElement.append(cardDiv);
}
```

JSX is an _abstraction_ that makes it easier to write code _declaratively_
representing DOM elements, and lets React do the heavy lifting of turning our
JSX into actual DOM elements. Instead of us _imperatively_ telling the browser
exactly how to create the DOM element, we use JSX to describe what our element
should look like.

```jsx
ReactDOM.render(
  // 1. tell React how we want our element to look
  <div id="card1" className="card">
    hi
  </div>,
  // 2. append our components to the DOM
  document.getElementById("root")
);
```

We can also make our JSX work with dynamic values by using {} to evaluate our JS
code as an expression:

```jsx
const greeting = "hello!";

ReactDOM.render(
  <div id="card1" className="card">
    {greeting}
  </div>,
  document.getElementById("root")
);
```

### Components

React's philosophy encourages developers to break down the DOM into independent,
reusable pieces called _Components_. At a minimum, a Component in React is any
function that returns valid JSX:

```js
function Card() {
  return (
    <div id="card1" className="card">
      hi
    </div>
  );
}

ReactDOM.render(<Card />, document.getElementById("root"));
```

When you're defining components, here are some things to keep in mind:

- A component can only return _one element_. It's ok for that element to have
  children, like this:

  ```js
  function Card() {
    return (
      <div id="card1" className="card">
        <h1>hi</h1>
        <p>wassup?</p>
      </div>
    );
  }
  ```

  But it's not ok for the component to return multiple elements, like this:

  ```js
  function Card() {
    return (
      <h1>hi</h1>
      <p>wassup?</p>
    )
  }
  ```

- The name of your components must be capitalized. This will not work:

  ```js
  function card() {
    return (
      <div id="card1" className="card">
        <h1>hi</h1>
        <p>wassup?</p>
      </div>
    );
  }

  ReactDOM.render(<card />, document.getElementById("root"));
  ```

  React treats any JSX elements that are capitalized as Components, and any JSX
  elements that aren't capitalized as regular DOM elements. So with the example
  above, you'd end up with something like this:

  ```html
  <div id="root">
    <card />
  </div>
  ```

  ...instead of this:

  ```html
  <div id="root">
    <div id="card1" className="card">
      <h1>hi</h1>
      <p>wassup?</p>
    </div>
  </div>
  ```

### Bonus: Fragments

Fragments let us return JSX without extra markup while still following the rule about only returning one element at a time:

```jsx
function Card() {
  // breaks
  return (
    <h1>Welcome to React!</h1>
    <h2>Let's learn about JSX</h2>
  )
}

function Card() {
  // works
  return (
    <React.Fragment>
      <h1>Welcome to React!</h1>
      <h2>Let's learn about JSX</h2>
    </React.Fragment>
  )
}

function Card() {
  // works (newer syntax for React.Fragment)
  return (
    <>
      <h1>Welcome to React!</h1>
      <h2>Let's learn about JSX</h2>
    </>
  )
}
```

### Props

When you create components, one way to make them dynamic and reusable is by
passing in _props_. For example, if we wanted to create several cards on our
page using the `Card` component, we could do so like this:

```jsx
function Card(props) {
  return (
    <div id="card1" className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card greeting="hi" subGreeting="hello" />
    <Card greeting="sup" subGreeting="what's up" />
  </div>,
  document.getElementById("root")
);
```

The _props_ argument in our Card component defines an **object** that React will
pass to our function when it is called, and it will use whatever attributes we
add to our JSX component as key-value pairs on that props object.

For example, if we were to add a `console.log` in the Card component above, we'd
end seeing this object:

```jsx
function Card(props) {
  console.log(props); // => { greeting: "h1", subGreeting: "hello" }

  return (
    <div id="card1" className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  );
}

ReactDOM.render(
  <Card greeting="hi" subGreeting="hello" />,
  document.getElementById("root")
);
```

One additional note on JSX syntax and props: if you need to define attributes on
a component that aren't strings, you have to wrap those values in `{}`. You can
pass down _any_ kind of data that you want to via props, even arrays, objects,
and callback functions:

```js
ReactDOM.render(
  <div>
    <Card
      greeting="hi"
      number={7}
      boolean={false}
      callback={() => console.log("call me!")}
      object={{ key: "value" }}
    />
  </div>,
  document.getElementById("root")
);
```

### Resources

- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Creating React Apps](https://reactjs.org/docs/create-a-new-react-app.html)
- [create-react-app](https://create-react-app.dev/docs/getting-started)
- [Webpack](https://webpack.js.org/)
- [Quick intro to Webpack](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)
