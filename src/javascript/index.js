import "../sass/styles.scss";

let resultDiv = document.getElementById("result");
let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let next3 = document.getElementById("next3");
let checkAns = document.getElementById("check-answers");

countdown(10, "counter");
next1.addEventListener('click', function (e) {
  next(1);
})
next2.addEventListener('click', function (e) {
  next(2);
})
next3.addEventListener('click', function (e) {
  next(3);
})
checkAns.addEventListener('click', function () {
  checkAnswers();
})

//Countdown timer function
function countdown(seconds, id) {
  let sec = seconds;
  function tick() {
    let counter = document.getElementById(id);
    sec--;
    counter.innerHTML = (sec < 10 ? "0" : "") + String(sec);
    if (sec > -1) {
      setTimeout(tick, 1000);
    } else if (sec < 0) {
      counter.innerHTML = "Times Up!!";
    }
  }
  tick();
}

//Palindrome Function takes in one word or sentence then returns incorrect or correct text
function isPalindrome(stringText) {
  let string = stringText.toLowerCase();
  let charactersArr = string.split("");
  let validCharacters = "abcdefghijklmnopqrstuvwxyz";
  let lettersArr = [];


  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  resultDiv.innerHTML += `<li class='answer-3'>
  <h3 class='palin'>Palindrome:</h3>
  <h4>${stringText}</h4>
  <br>${lettersArr.join("") === lettersArr.reverse().join("") ?
      `<p class='result-correct'>Correct, this is a palindrome.</p></li>`
      : `<p class='result-incorrect'>This is not a palindrome.</p></li>`
    }`
}
//Palindrome Function takes in 2 words or sentences and checks if they are palindromes of eachother
function compareReverse(sentenceText1, sentenceText2) {
  let sentence1 = sentenceText1.toLowerCase();
  let sentence2 = sentenceText2.toLowerCase();
  let charactersSent1 = sentence1.split("");
  let charactersSent2 = sentence2.split("");
  let validCharacters = "abcdefghijklmnopqrstuvwxyz";
  let lettersArr1 = [];
  let lettersArr2 = [];

  charactersSent1.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr1.push(char);
  });
  charactersSent2.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr2.push(char);
  });

  resultDiv.innerHTML += `<li class='answer-4'>
  <h3 class='answ-4-a'>Sentence 1:</h3>
  <h4>${sentenceText1}</h4>
  <h3 class='answ-4-b'>Reversed sentence 2:</h3>
  <h4>${sentenceText2}</h4>
  <br> ${lettersArr1.join("") === lettersArr2.reverse().join("") ?
      `<p class='result-correct'>Correct, these sentences are palindromes of eachother.</p></li>`
      : `<p class='result-incorrect'>This sentence is not a palindrome of the other.</p></li>`
    }`;

}

//Handles next button click for first 3 questions.
function next(q) {
  if (q == 1) {
    document.getElementById("q2").style.display = "block";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "block";
    document.getElementById("part-2").style.display = "block";
    document.getElementById("q1").style.display = "none";
    countdown(10, "counter2");
  }
  if (q == 2) {
    document.getElementById("q3").style.display = "block";
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "block";
    document.getElementById("part-3").style.display = "block";
    document.getElementById("q2").style.display = "none";
  }
  if (q == 3) {
    document.getElementById("q4").style.display = "block";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "block";
    document.getElementById("part-4").style.display = "block";
    document.getElementById("q3").style.display = "none";
    document.getElementById("check-answers").style.display = "block";
  }
}

function getZipDevAds() {
  let ads = document.getElementById("zipdev-ads");

  //Calls Zomato API and returns json.
  const url = "https://developers.zomato.com/api/v2.1/search";
  fetch(url, { headers: { "user-key": "10caf7d71c1773eb9bea8e36e537d3b5" } })
    .then(data => {
      return data.json();
    })
    .then(res => {
      res.restaurants.map(restaurant => {
        let restaurantItem = restaurant.restaurant;
        if (restaurantItem.photo_count > 0) {
          ads.innerHTML += ` <li class="zipdev-restaurant">
      <img src="${restaurantItem.photos[0].photo.url}" width=110px height=80px>
      <div class="zipdev-title">${restaurantItem.name}</div>
      <div class="rating-votes-wrap">
        <div class="rating">${restaurantItem.user_rating.aggregate_rating}<span>/5</span></div>
        <div class="votes">${restaurantItem.user_rating.votes}</div>
      </div>
      <p class="category">${restaurantItem.photos[0].photo.user.foodie_level}</p>
      <hr class="hr">
      <div class="details"><span class="open">${restaurantItem.timings}</span> - <span class="type">${restaurantItem.cuisines}</span> - <span
          class="cost">Costs $${restaurantItem.average_cost_for_two} for two</span></div>

    </li>`;
        }
      });
    });
}


//function that checks radio buttons and returns results
function checkRadioButtons() {
  let radio = document.getElementsByName("developer");
  let i;
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked)
      resultDiv.innerHTML += `<li class='answer-1'>
                <h3>Your developer type is:</h3>
                <span>${radio[i].value}</span></li>`;
  }
}

//function that checks checkboxes and returns results
function checkCheckBoxes() {
  let checkbox = document.getElementsByName("tech");
  let techansw = [];
  let i;
  resultDiv.innerHTML += `<li class='answer-2'>
            <h3 class='jstech'>Javascript Based Technologies: </h3>
              <div id='checkboxed'></div>`;
  for (i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      document.getElementById(
        "checkboxed"
      ).innerHTML += `<span class='answer-2-results'>${checkbox[i].value}</span>`;
      techansw.push(checkbox[i].value);
    }
  }
  if (techansw.includes("Angularjs" && "Ember" && "Vuejs")) {
    document.getElementById("checkboxed").innerHTML +=
      "<br><div class='answer-2-correct'>Correct, you have picked the right technologies</div></li>";
  } else {
    document.getElementById("checkboxed").innerHTML +=
      "<br><div class='answer-2-incorrect'>Incorrect, the technologies are Angularjs, Ember and Vuejs</div></li>";
  }

}


//Main function that checks the answers submitted by all 4 questions and renders the right and wrong answers
//and multiple zomato restaurants.
function checkAnswers() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("progress-bar").style.display = "none";
  document.getElementById("zipdev-ads").style.display = "block";
  let plndromeTextBox = document.getElementById("palindrome").value;
  let pdromesent1 = document.getElementById("p-sentence").value;
  let pdromesent2 = document.getElementById("p-sentence-r").value;

  checkRadioButtons();
  checkCheckBoxes();
  isPalindrome(plndromeTextBox);
  compareReverse(pdromesent1, pdromesent2);
  getZipDevAds();
}


