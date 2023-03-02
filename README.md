# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/Screenshot%202023-03-02%20at%2012-27-32%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)
![](./images/Screenshot%202023-03-02%20at%2012-28-03%20Frontend%20Mentor%20Interactive%20card%20details%20form.png)

### Links

- Solution URL: [Github-solution](https://github.com/mallow12/interactive-card-details-form-project)
- Live Site URL: [Live-site](https://abdullah-interactive-card-details.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SASS - SCSS
- Mobile-first workflow
- Vanilla Js

### What I learned

I learned a lot about styling images and form validation. I encountered a lot of challenges in the completion of this project but i am happy with the progress i have made so far.

```html
<div class="thank-you hidden">
  <div class="content">
    <img src="images/icon-complete.svg" alt="" />
    <h1>THANK YOU!</h1>
    <p>We've added your card details</p>
    <button class="continue">Continue</button>
  </div>
</div>
```

This is the thankyou page html

```js
function confirm(inputs) {
  let allFilled = true;
  inputs.forEach((input) => {
    const formControl = input.parentElement;
    if (input.value === '') {
      formControl.classList.add('error');
      allFilled = false;
    } else if (formControl.className.includes('error')) {
      allFilled = false;
    } else {
      formControl.classList.remove('error');
    }
  });

  if (allFilled) {
    form.classList.add('hidden');
    thankYou.classList.remove('hidden');
  }
}
```

### Continued development

I want to continue improving my skills on using local storage.

## Author

- Frontend Mentor - [@mallow12](https://www.frontendmentor.io/profile/mallow12)
