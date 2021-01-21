# HTML and CSS Basics
## Introduction

### Qualities of good HTML/CSS

What are some qualities of good HTML and CSS?


### The Front End Team

What's the difference between designers and developers?


### The CSS Ecosystem

- CSS Frameworks
  - CSS content that is made for you ahead of time, so that you can apply styles that you don't have to write yourself.
  - Examples:
    - Bootstrap
    - Semantic
- CSS Preprocessors / Tooling
  - Tools that make it easier to write CSS styles for yourself.
  - Examples:
    - Sass
    - Styled Components(React/React Native)

### Advice on learning CSS at Flatiron

- Set aside time to invest practicing CSS (labs, side projects)
- Aim to build understanding as your write CSS
- Once you build a foundation, it gets much easier
- Prioritize user interface over aesthetics
- Keep it clean and simple

## Key Concepts

### Some vocabulary

- _HTML_ is a markup language, which provides _tags_ that allow us to display various kinds of media in a browser.

- _CSS_ is a styling language, which provides the means to adjust the appearances of HTML tags.

- To change the appearance of an HTML tag, we make a _declaration_. The declaration targets some _property_ of a tag and sets its _value_.

### The Key to Understanding How CSS Works

HTML tags form a tree and CSS is built to exploit this tree structure.

- Some properties are inherited. By default, children will have the same value as their parent.
- The positioning of an element can depend on its own styles and the styles of its ancestors.
- CSS selectors can be written to explicitly care about the positions of tags in the tree.
- Problem solving in CSS often requires finding the right HTML structure.

### Ways to make declarations

1. Inline: a declaration attaches directly to a specific tag.
2. Style sheet: a declaration attaches to all tags of a certain type, defined using a _selector_ (tag, class, id).
   - Internal: written in the HTML header.
   - External: written in another file, which is linked to the header.

Examples:

```html
<!-- Inline -->
<div style="color:red">Content</div>

<!-- Style Sheet -->

<head>
  <style>
    /* Options: */
    #red-id {
      color: red;
    }
    .red-class {
      color: red;
    }
    div {
      color: red;
    }
  </style>
</head>
<body>
  <div class="red-class" id="red-id">Content</div>
</body>
```

We can also combine selectors with each other various ways. Two of the most common:

1. `.class1 .class2` -- applies a style to anything with class2 that's a descendant of class1.
2. `.class1 > .class2` -- applies a styled to anything with class2 that's a direct child of something with class1.

Another helpful tip: you can use `*` to select everything.

### Specificity

When two declarations would style the attribute of a tag with two different values, what wins? Some rules:

1. Inline styling overrides stylesheets.
2. When using selectors, ID > Class > tag.
3. Selectors that reference HTML structure add specificity.
4. Later code overrides earlier code.

## CSS Basics Demo

### The Box Model

- Box Model: content, padding, border, margin.
- Content Size can be determined bottom-up or top-down. Both approaches have their uses.
- Units that can be useful: `px`, `rem`, `%`, `vw`/`vh`
- Make your life easier with `*{ box-sizing: border-box }`
- Spice things up with `border-radius`, `outline`, and `box-shadow`.

### Adding Colors and Fonts

- Color: `color`, `background`, `border`, `box-shadow`
- Font: `font-family`, `font-size`, `font-style`, `font-weight`, `text-decoration`, `text-align`, `letter-spacing`, `line-height`
- Use external tools to generate CSS values (Coolors, CSS Gradient, Google Fonts)
- Store colors and fonts in variables

### Making your HTML interactive (without JS)

- Use pseudo classes like `:hover`, `:active`, and `:focus` to respond to user interaction.
- Perform various transformations on elements using the `transform` attribute.
- Animate between two states using the `transition` attribute.
s