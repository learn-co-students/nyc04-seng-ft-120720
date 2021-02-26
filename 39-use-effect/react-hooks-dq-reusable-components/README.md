# Discussion Questions: Props and Component Reusability

**Welcome to _Ye Olde Apothecary_!**

## Objectives

This discussion question is focused on using props to make our components more
reusable. In order to do so, we have to adopt a mindset around _abstraction_,
meaning that we should keep an eye out for similarities in our components and
figure out clever ways to use props to abstract out the differences.

## Overview

This discussion question comes with a fully functioning application. To get
going, simply:

`npm install && npm start`

Feel free to play around with it and see how it works. As you do, notice that
the tiles that render inside the shop and inside the inventory look
_suspiciously_ similar, but have different functionality and slightly different
styling.

Your goal is to write a new component called `PotionTile` (basic template
provided for you) that will act as an abstracted version of `InventoryTile` and
`ShopTile`. If done correctly, you should be able to replace these components
wherever they are written with your new `PotionTile` and the application
**should retain both its styling and its functionality**.

**Note**: Don't worry too much about what the rest of the code is doing, especially
`addToInventory` and `sell`. These functions take potion IDs as arguments, and
so long as you do so, they should behave normally. All of your new code should
be in `PotionTile` with **slight** modifications to `Shop` and `Inventory`.

**Hint**: Don't be afraid to modify the props that are passed to the tiles in
`Shop` and `Inventory`!

## Note on Children

Inside both `InventoryTile` and `ShopTile`, you'll see something called
`children`, even though we didn't pass a prop called `children` to either one.
This is a cool feature of React that allows your components to have children
just like HTML elements can have children! Consider the following example:

```jsx
// In HTML, you can have children by placing an element between opening in closing tags

<div>
  <h1>Child</h1>
  <h1>Another Child</h1>
</div>

// In JSX, you can do the same with your own components!

<MyComponent>
  <h1>Child</h1>
  <h1>Another Child</h1>
  <MyChildComponent />
</MyComponent>
```

In the above example, `MyComponent` will receive a prop called `children`, an
array containing 3 components: 2 `h1` and the `MyChildComponent` in that order.
We can then render this array just like any other array of components.

For further reading, take a look at this resource:
[JSX Children](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)
