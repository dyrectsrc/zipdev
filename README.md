# Zipdev - Front-end Code Challenge - Pierre Besson

You should be able to just open index.html and see my solution right away.

Just incase that does not work try this.


Install all packages:
```
$ npm install
```

Run webpack
```
$ npm run build
```

Done! Open index.html in the browser and checkout my solution to the challenge.

----

### How I approached this challenge

I only used Javascript, HTML5, implemented SCSS, and used Webpack as package bundler. I didnt use any frameworks or libraries.

When writing code front end I like to start from the front and work my way backwards. In other words I worked on the html and css first and came up with the look and feel of the site. 

I chose to use radio buttons for the first question. I chose to use checkboxes for the second questions. And textboxes for questions number 3 and 4. 

I created functions for the next buttons, radio buttons for question 1, check boxes for question 2, palindrome word for question 3, palindrome sentences for question 4, and counter.

I chose to use CSS Grid for the questions and zomato list results.

### At the end of the quiz, show a results page showing the following

#### 1. Answers from question number one highlighting the provided by the user

Answer is highlighted in green

#### 2. Answers from question number two with an approval mark if the user selected the right answers

Answers are highlighted in green with letting them know if they were correct with a blue background or incorrect with a red background

#### 3. Show the word provided in question number three and mark as good if the user provided a palindrome and wrong if not.

Shows word they entered letting them know if it is a palindrome with a blue background or incorrect with a red background

#### 4. Show the two texts provided by the user and mark as good if the user provided a palindrome and wrong if not.

Shows sentences they entered letting them know if it is a palindrome of eachother with a blue background or incorrect with a red background

#### 5. Show a message saying “Select your favorite San Diego restaurant” and display the full list of San Diego’s Restaurants in the following format

"Select your favorite San Diego restaurant" is shown and rest api is called and displayed in the format provided.


### Requisites

#### Show one question at time, and click the next button for showing the next image

I created a function called next in javascript that hid and showed the appropriate question by changing the CSS display: hide and display: block properties

#### Create a general progress bar at the bottom of the quiz (will fulfill the entire progress bar when you answer the last question)

I used the next function and javascript to grow a bar as the user progresses using CSS.

#### Ten seconds timer for the first two questions

I created a countdown function to add to the first 2 questions

#### Responsive design

I chose css grid to assist in a responsive design.

#### Provide your code in a git-based repository
#### Provide instructions to install it (readme file)
#### You are free to provide information about the decisions you made implementing the code challenge.

#### Required Technologies

JavaScript
SCSS / CSS
HTML5

