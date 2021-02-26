# Side Effects and Fetching Data

## DQ Questions?

## Objectives

- [ ] Define a side effect in terms of React components
- [ ] Use the `useEffect` hook to fetch data (when a component renders)

### Bonus

- [ ] Know when to use the `useEffect` dependencies array
- [ ] Use the `useEffect` return function to clean up from side effects

## Outline

- [ ] Use `useEffect` to fetch data for our Project Showcase app
  - **Exercise**: practice fetching in `useEffect` with this [exercise](https://codesandbox.io/s/120920-useeffect-with-fetch-exercise-t5966)
  - Show a POST request with our form
- [ ] Show examples of the `useEffect` hook in a [demo app](https://codesandbox.io/s/120920-react-useeffect-iohdi)
  - component render/re-render
  - no dependencies (can't set state); empty dependencies array; dependency variables
  - examples: `document.title`
  - Pokemon search
  - implement `useEffect` in the [`Clock` component example](https://codesandbox.io/s/useeffect-clock-example-uwcd0?file=/src/Clock.js)
  - cleanup after component un-mounts

## Side Effects

In terms of a React component, the **main effect** of the component is to return
some JSX. One of the first rules we learned about function components is that
they take in props, and return JSX.

_However_, it's often necessary for a component to perform some **side effects**
in addition to its main job of returning JSX. For example, we might want to:

- Fetch some data from an API when a component loads
- Start or stop a timer
- Manually change the DOM
- Get the user's location

In order to handle these kinds of side effects within our components, we'll need
to use another special **hook** from React: `useEffect`.

It looks like this:

```js
function App() {
  useEffect(
    // side effect function
    () => {
      console.log("useEffect called");
    }
  );

  console.log("Component rendering");

  return (
    <div>
      <button>Click Me</button>
      <input type="text" placeholder="Type away..." />
    </div>
  );
}
```

If you run the example code now, you'll see the console messages appear in this
order:

- Component rendering
- useEffect called

So we are now able to run some extra code as a **side effect** any time our
component is rendered.

> By using this Hook, you tell React that your component needs to do something
> after render. React will remember the function you passed (we’ll refer to it
> as our “effect”), and call it later after performing the DOM updates. &mdash; > [React docs on the useEffect hook][use-effect-hook]

Let's add some state into the equation, and see how that interacts with our
`useEffect` hook.

```js
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
```

Try clicking the button or typing in the input field to trigger updates in
state. Every time state is set, we should also see those same two console
messages in the same order:

- Component rendering
- useEffect called

**By default, `useEffect` will run our side effect function every time the
component re-renders**.

However, sometimes we only want to run our side effect once. For example:
imagine we're using the `useEffect` hook to fetch some data from an external API
(a common use case for `useEffect`). We don't want to make a network request
every time our component is updated, only the first time our component renders.
How can we control when `useEffect` will run our side effect function?

## useEffect Dependencies

React gives us a way to control when the side effect will run, by passing a
second argument to `useEffect` of a **dependencies array**. It looks like this:

```js
useEffect(
  // 1st arg: side effect (callback function)
  () => console.log("useEffect called"),
  // 2nd arg: dependencies array
  [count]
);
```

Update the `useEffect` function as above and try running the code again. Now,
the side effect will only run when the `count` variable changes. We won't see
any console messages from `useEffect` when typing in the input &mdash; we'll
only see them when clicking the button!

We can also pass in an _empty_ array of dependencies as a second argument, like
this:

```js
useEffect(() => {
  console.log("useEffect called");
}, []); // second argument is an empty array
```

Now, the side effect will only run the _first time_ our component renders! Keep
this trick in mind. We'll be using it again soon to work with fetching data.

## Performing Side Effects

Running a `console.log` isn't the most interesting side effect, so let's try a
couple other examples.

One kind of side effect we can demonstrate here is _updating parts of the
webpage page outside of the React DOM tree_. React is responsible for all the
DOM elements rendered by our components, but there are some parts of the webpage
that live outside of this tree. Take, for instance, the `<title>` of our page
&mdash; this is what shows up in the browser tab, like this:

![title](https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-use-effect/master/images/title.png)

Updating this part of the page would be considered a _side effect_, so let's use
`useEffect` to update it!

```js
useEffect(() => {
  document.title = text;
}, [text]);
```

Here, what we're telling React is:

"Hey React! When my component renders, I _also_ want you to update the
document's title. But you should only do that when the `text` variable changes."

Let's add another side effect, this time running a `setTimeout` function. We
want this function to _reset_ the `count` variable back to 0 after 5 seconds.
Running a `setTimeout` is another example of a side effect, so once again, let's
use `useEffect`:

```js
useEffect(() => {
  setTimeout(() => setCount(0), 5000);
}, []);
```

With this side effect, we're telling React:

"Hey React! When my App component renders, I also want you to set this timeout
function. In 5 seconds, you should update state and set the count back to 0. You
should only set this timeout function once, I don't want a bunch of timeouts
running every time my component updates. kthxbye!"

All together, here's what our updated component looks like:

```js
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
```

Explore this code to familiarize yourself with `useEffect`, and see what changes
by changing the dependencies array. It's also a good idea to add some console
messages or put in a debugger to see exactly when the side effects will run.

## useEffect Dependencies Cheatsheet

Here's a quick guide on how to use the second argument of `useEffect` to control
when your side effect code will run:

- `useEffect(() => {})`: No dependencies array
  - Run the side effect **every time our component renders** (whenever state or
    props change)
- `useEffect(() => {}, [])`: Empty dependencies array
  - Run the side effect **only the first time our component renders**
- `useEffect(() => {}, [variable1, variable2])`: Dependencies array with elements in it
  - Run the side effect **any time the variable(s) change**

## useEffect Cleanup

When using the `useEffect` hook in a component, you might end up with some
long-running code that you no longer need once the component is removed from
the page. Here's an example of a component that runs a timer in the background
continuously:

```js
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div>{time.toString()}</div>;
}
```

When the component first renders, the `useEffect` hook will run and create an
interval. That interval will run every 1 second in the background, and set the
time.

We could use this Clock component like so:

```js
function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </div>
  );
}
```

When the button is clicked, we want to hide the clock. That _also_ means
we should stop the `setInterval` from running in the background. We need
some way of cleaning up our side effect when the component is no longer
needed! To demonstrate the issue, try clicking the "Hide Clock" button &mdash;
you'll likely see a warning message like this:

```txt
index.js:1 Warning: Can't perform a React state update on an unmounted
component. This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup
function.
```

The reason for this message is that even after removing our `Clock` component
from the DOM, the `setInterval` function we called in `useEffect` is still
running in the background, and updating state every second.

React's solution is to have our `useEffect` function **return a cleanup
function**, which will run after the component "un-mounts": when it is removed
from the DOM. Here's how the cleanup function would look:

```js
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // returning a cleanup function
    return function () {
      clearInterval(timerID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}
```

Cleanup functions like this are useful if you have a long-running function, such
as a timer, or a subscription to a web socket, that you want to unsubscribe from
when the component is no longer on the page.

## Conclusion

So far, we've been working with components solely for rendering to the DOM based
on JSX, and updating based on changes to state. It's also useful to introduce
**side effects** to our components so that we can interact with the world outside
of the React DOM tree and do things like making network requests or setting
timers.

In the next lessons, we'll see some more practical uses for `useEffect` and get
practice handling network requests from our components.

## Resources

- [React Docs on useEffect][use-effect-hook]
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
