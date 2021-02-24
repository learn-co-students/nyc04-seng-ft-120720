# Discussion Questions: Conditional Rendering

Get together in groups and clone down this repository. For the purposes of this
discussion question, you should work only out of `components/MenuBar.js` and
`containers/MainBox.js`. Your end goal is to make this app function like so:

![alt text][example]

[example]: https://media.giphy.com/media/3oFzmbfBOqAmBzA7AY/giphy.gif "final"

A few things to think about:

1. Which component should have state?
2. Based on your answer to the question above, which component should have a
   method to change state?
3. Which component should call the function that changes state?
4. Which component is responsible for passing down props?
5. How can state be used to manage the rendering of components and change the
   style of components already on the page?

## Getting Started

Before working on the code, make sure to draw out a component hierarchy so you
can get a sense of the relationships between the components. This will help you
decide what component(s) need state, and how to share that state between
components.

Once you have a sense of your component hierarchy, decide what component to add
state to, and what a good initial value for that state will be. You'll be using
that state for a couple things: determining which "page" component to
conditionally render, and also which element in the `MenuBar` should be styled
as active.

## Hints

### Conditional Rendering

If you're not sure how to render a component conditionally, there are a few
approaches you can take! Here's one way to go about it:

```js
function Parent() {
  const [childName, setChildName] = useState("Child1");

  let componentToDisplay;
  if (childName === "Child1") {
    componentToDisplay = <Child1 />;
  } else if (childName === "Child2") {
    componentToDisplay = <Child2 />;
  }
  // etc
}
```

You might also consider using an _object_ where the keys are the names of the
components, and the values are the actual component variables, like this:

```js
const componentMap = {
  Child1: <Child1 />,
  Child2: <Child2 />,
};
```

This [blog post](https://www.robinwieruch.de/conditional-rendering-react) has a
lot more strategies you can look into as well!

### Inverse Data Flow - Setting State from a Child Component

In React, we can pass data **down** from a parent to a child via props. If we need
to pass data **up** from a child to a parent, the parent must provide a callback function
that can be called from the child. For example:

```js
function Parent() {
  const [search, setSearch] = useState("");

  function handleSearchChange(newValue) {
    // do whatever we want with the data (usually setting state)
    setSearch(newValue);
  }

  return;
  <div>
    {/*pass down handleSearchChange as a callback function*/}
    <Child onSearchChange={handleSearchChange} />
    <p>You searched for: {search}</p>
  </div>;
}

function Child({ onSearchChange }) {
  return (
    <div>
      {/* calling onSearchChange will run handleSearchChange in the Parent component */}
      <input type="text" onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  );
}
```
