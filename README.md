# Frontend Mentor - Interactive rating component

![Design preview for the Interactive rating component coding challenge](./design/desktop-preview.jpg)

![Challenge link](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this interactive rating component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot Project](/design/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/Ryusaem/js-interactive-rating-component)
- Live Site URL: [Github Live Demo](https://ryusaem.github.io/js-interactive-rating-component/)

## My process

- wirefram: 15min
- total: ??

- User Clicks: Each box corresponds to a different rating. When clicked, the system highlights the selected box and clears previous selections.
- Highlight Selection: The system removes the "selected" class from all boxes and adds it to the clicked box, visually indicating the user’s choice.
- Retrieve and Store Rating: The rating value, stored in the data-value attribute of the box, is accessed using dataset.value. This value is then stored in localStorage to preserve the user's selection.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

1. To make an image with a sort of a colored background, I have to create an empty container (usually name "box-xxx").
   To make it round of colored, just use "border-radius" to the container (<div>).
   Also use the same width / height to make a perfect square.
   You'll have to use the flex display to center everything inside of the container ("box-xxx").

```html
<div class="box-img">
  <img src="images/icon-star.svg" />
</div>
```

```css
.box-img {
  width: 2.3rem;
  height: 2.3rem;
  background-color: var(--color-base-box-bg);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 1.7rem;
}
```

--

2. Custom data "data-\*" attribute in HTML allow us store extra information directly within HTML element without affecting the display or behavior of the element.
   These attributes are easily accessed via JavaScript (using element.dataset or getAttribute()) and can be used in CSS to style elements based on their data attribute values through attribute selectors.

```html
<div class="big-box">
  <div
    class="box"
    data-value="1"
  >
    1
  </div>
  <div
    class="box"
    data-value="2"
  >
    2
  </div>
</div>
```

```js
//const rating = box.getAttribute("data-value"); // general approach
const rating = box.dataset.value; // modern approach
```

--

3. To clear the previous selections from user and to highlight and select a new box rate was tricky.
   Clear Previous Selections: First, the system removes the "selected" class from all rating boxes. This ensures that no box remains highlighted from any previous interactions, resetting the visual state of all options.
   Highlight New Selection: Next, the "selected" class is added to the box that the user clicked. This action visually distinguishes the selected box, indicating the user's current choice through highlighting.

```js
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Remove "selected" class from all boxes
    boxes.forEach((b) => b.classList.remove("selected"));

    // Add "selected" class to the clicked box
    box.classList.add("selected");
  });
});
```

--

4. To redirect to another page in JS use the method "window.location.href='your-page.html'"

```js
window.location.href = "thank-you.html";
```

### Continued development

- More about interactivity between html and js

### Useful resources -

[Frontend Mentor](https://www.frontendmentor.io/challenges/) - Formidable resources to make you learn by "doing" awesome project. Highly recommend it. This is the link
to the project HUB concernint that project.

## Author -

- Github - [@Ryusaem](https://github.com/Ryusaem) -
- Linkedin - [@sambath-meas](https://www.linkedin.com/in/sambath-meas)
- Coursera - [@sambath-meas](https://www.coursera.org/learner/sambath-meas)
- Twitter - [@RyuBraveheart](https://twitter.com/RyuBraveheart) - - - Frontend Mentor - [@Ryusaem](https://www.frontendmentor.io/profile/Ryusaem)
- CodeWars - [@Ryusaem](https://www.codewars.com/users/Ryusaem)
