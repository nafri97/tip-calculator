# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Desktop screenshot](./desktop_screenshot.jpg)
![Mobile screenshot](./mobile_screenshot.jpg)

### Links

- Solution URL: [Github Repository](https://github.com/nafri97/tip-calculator)
- Live Site URL: [Add live site URL here](https://nafri97.github.io/tip-calculator)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javacript

### What I learned

I am just newbie in javascript, so much javascript syntax just I learned.
here is some code snippets:

```js
  total.textContent = totalValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
```
from code above `totalValue` will converted into currency USD( added $ before number and 2 digit after comma automatically).
```js
  let bill = parseFloat(document.getElementById("bill").value);
  let people = document.getElementById("people")
  if (isNaN(bill)){
    error1.style.display= "inline-block";      
    }
```
from code above `value` of  id `bill` will converted as number, if not number will converted as NaN. `if(isnan(bill))` is use to executed if `bill` is `NaN`.


### Continued development

I will learn more about Javascript.


### Useful resources

- [w3school](https://www.w3school.com)
- [chatGPT](https://www.chat.openai.com) 

## Author

- Linkedin - [](https://linkedin.com/in/nafri97)
- Frontend Mentor - [@nafri97](https://www.frontendmentor.io/profile/nafri97)
- Twitter - [@irfanrizkis](https://www.twitter.com/irfanrizkis)
