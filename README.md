# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Bootstrap Buttons
- Mobile first Responsive Design 
- [JQuery](https://jquery.com/) - JS library
- [Bootstrap](https://getbootstrap.com/) - For styles



### What I learned

This is my second take on JS library JQuery and Bootstrap language so far but my first time manipulating UI using JQuery $().css() function. I learned and embedded css components when user enabled event is triggered. Implemented JQuery mouseover() and mouseleave() function to substitute  an :active pseudo selector css component, this is where I had trouble replacing Bootstrap implicit .btn .btn-success background-color using JQuery. Replacing Bootstrap default css property using css and JQuery learnt achieve it. Usage of Regex pattern in calculator came very handy. Implemented regex pattern and javascript in-built function search(),slice(),includes(),match(),replace() for Cases like expression shouldn't contain multiple leading zeros (ex:-000000), shouldn't contain zero followed by a digit(ex:-0009 or 09), multiple sign not allowed except in case of a sign containing (/,+,*) followed by minus sign as 5x-5=-25, multiple (.) or (9.8.7) not allowed only one dot(.) allowed etc. Included try catch such that when  equal button is clicked if eval error exist then addintion of digits allowed else a digit button clicked old digit gets replaced with newly clicked digit.  


To see how you can add code snippets, see below:

```html
<div class="container ">

<div class="row">
      <div class="col d-flex justify-content-center">
    <button class="btn btn-success btn-lg remove symbol " num ='C' id='clear'>
    RESET</button>

    <button class="btn btn-success btn-lg  remove symbol " num ='=' id='equals'>=</button>
      </div>
    </div>
</div>
```
```css

.btn:focus{
    position: relative;
    top:2px;
    right:3px;
    box-shadow:var(--btn_shadow);

    
}
.btn.btn-success:active{
    background-color:var(--btn_bg);
    color:var(--btn_colr);
}
.box-container{
    display:grid;
    grid-template-columns:16.85rem 4rem 2rem;
    color:var(--calc_them_numbtn_display_txt);
    }
```
```js
			$('body').css('background-color', item.body)
$('.btn-success').click(function (e) {	
		setTimeout(() => {
			$(this).css({
				'position': 'static',
				'top': 'auto',
				'right': 'auto'
			});
		}, 200);

	})

  	exp = exp.replace(/x/g, '*')
	let buf_temp = buffer.slice(0,buffer.length-indice)
        if(buffer.match(  /\d*(\+|\x|\/){2,}/g )){}
	if(  buffer.includes('-/') || buffer.includes('-x') || buffer.includes('-+')  ){}
	if(buffer.search())
	try{
const result = eval(exp); }
	catch (error) {
				if (error instanceof EvalError) {
 				console.log('EvalError:', error.message);}
				 else {
 			console.log('EvalError:', error.message);
				}
			}

```


### Continued development

JS functions and JQuery manipulation to execute desired code requirements something I find interesting and achievable .I have to practice in terms of Bootstrap compatibility with my code and  JQuery UI. 

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@kudos2Shef](https://www.frontendmentor.io/profile/kudos2Shef)


## Acknowledgments
Using freecodecamp frontend framework calculator project I had completed the necessary cases required to pass the test case, for aesthetic UI appeal I came to this frontend mentor challenge based on which I designed this responsive calculator app. 
