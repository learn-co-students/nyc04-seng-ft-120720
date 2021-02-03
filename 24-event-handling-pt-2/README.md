# Event Delegation

## Learning Goals
1. Explain event propagation and identify how it can be used
2. Use conditional logic in combination with event propagation to delegate events
3. Use a single event handler callback to handle multiple events

## Deliverables
- [ ] User should be able to delete a article card when they click on the delete button
- [ ] User should be able to upvote an article card when they click on the like button and the likes count should increase

### Event Propagation
- Bubbling!
- When you trigger an event on a child, the event will bubble up to all ancestor elements and trigger event handlers of the same type on all ancestors (e.g. clicking on a child activates child's event click handler AS WELL as parent's click handler)
- `event.stopPropagation` stops the event from bubbling upwards

### Event Delegation
- The combination of conditional logic and event propagation to route events within a single event handler
- In other words, different DOM nodes can trigger different things

### Dataset
- A way to store information on HTML DOM nodes
- Used in a variety of ways, but principally used to store information about that particular node
- HTML must have attribute of `data-<key>="<value>"`
- Accessible on DOM nodes via `dataset` attribute as a object

__________

## Event Bubbling and Event Delegation

- Given a series of buttons deeply nested in some `<div></div>` tags on our page:

```html
<div id="helicopter-parent">
  <div>
    <br>
    <div>
      <br>
      <div>
        <p>HI</p>
        <div>
          <button class="btn" data-name="alert">Alert ME</button>
          <button class="btn" data-name="log">Console Log something</button>
          <button class="btn" data-name="error">Console Error</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

- How might we listen for events on those buttons?
  - We **could** find all the buttons, loop over that collection and attach several event listeners for our buttons 😔. There must be a better way!™

---

### What about Event Delegation?

![event delegation diagram](https://javascript.info/article/bubbling-and-capturing/eventflow@2x.png)

- The diagram above outlines the flow of JS events from the target all the way up the DOM (tree) to the topmost node, the `Document`
  - In other words, **every HTML element will know about everything that happens to its children**

- Instead of iterating over the buttons and attaching duplicate event handlers, we can create **one** event handler to Rule Them All™:

```js
const helicopterNode = document.getElementById('helicopter-parent')

helicopterNode.addEventListener('click', function(event) {
  console.log(event.target) //event target will be whatever node was clicked
})
```

- Now we can introduce some control flow to our click handler and decide what to do based on which button was clicked:

```js
helicopterNode.addEventListener('click', function(event) {
  // event.target is the node that was clicked
  // our buttons have a key of dataset -> { name: 'alert' }
  // I am checking the value of button.dataset.name and deciding what to do based on what I find

  if (event.target.dataset.name === 'alert') {
    window.alert('HI')
  } else if (event.target.dataset.name === 'log') {
    console.log('HI')
  } else if (event.target.dataset.name === 'error') {
    console.error('HI')
  }
})
```

- _nice_

![nice](https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif)

---

## External Resources:

- [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN DOMContentLoaded Reference](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
- [MDN `addEventListener` Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Article on Sending Form Data][mdn-forms]
- [MDN Article on `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN Article on the `submit` event](https://developer.mozilla.org/en-US/docs/Web/Events/submit)
- [MDN Article on `input` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))
- [MDN Article on `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Article on `textContent`][mdn-text-content]
- [MDN Article on Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [JavaScript.info Article on Event Bubbling](https://javascript.info/bubbling-and-capturing)


[mdn-forms]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data
[mdn-text-content]: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
