/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar resultDiv = document.getElementById(\"result\");\nvar next1 = document.getElementById(\"next1\");\nvar next2 = document.getElementById(\"next2\");\nvar next3 = document.getElementById(\"next3\");\nvar checkAns = document.getElementById(\"check-answers\");\ncountdown(10, \"counter\");\nnext1.addEventListener('click', function (e) {\n  next(1);\n});\nnext2.addEventListener('click', function (e) {\n  next(2);\n});\nnext3.addEventListener('click', function (e) {\n  next(3);\n});\ncheckAns.addEventListener('click', function () {\n  checkAnswers();\n}); //Countdown timer function\n\nfunction countdown(seconds, id) {\n  var sec = seconds;\n\n  function tick() {\n    var counter = document.getElementById(id);\n    sec--;\n    counter.innerHTML = (sec < 10 ? \"0\" : \"\") + String(sec);\n\n    if (sec > -1) {\n      setTimeout(tick, 1000);\n    } else if (sec < 0) {\n      counter.innerHTML = \"Times Up!!\";\n    }\n  }\n\n  tick();\n} //Palindrome Function takes in one word or sentence then returns incorrect or correct text\n\n\nfunction isPalindrome(stringText) {\n  var string = stringText.toLowerCase();\n  var charactersArr = string.split(\"\");\n  var validCharacters = \"abcdefghijklmnopqrstuvwxyz\";\n  var lettersArr = [];\n  charactersArr.forEach(function (char) {\n    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);\n  });\n  resultDiv.innerHTML += \"<li class='answer-3'>\\n  <h3 class='palin'>Palindrome:</h3>\\n  <h4>\".concat(stringText, \"</h4>\\n  <br>\").concat(lettersArr.join(\"\") === lettersArr.reverse().join(\"\") ? \"<p class='result-correct'>Correct, this is a palindrome.</p></li>\" : \"<p class='result-incorrect'>This is not a palindrome.</p></li>\");\n} //Palindrome Function takes in 2 words or sentences and checks if they are palindromes of eachother\n\n\nfunction compareReverse(sentenceText1, sentenceText2) {\n  var sentence1 = sentenceText1.toLowerCase();\n  var sentence2 = sentenceText2.toLowerCase();\n  var charactersSent1 = sentence1.split(\"\");\n  var charactersSent2 = sentence2.split(\"\");\n  var validCharacters = \"abcdefghijklmnopqrstuvwxyz\";\n  var lettersArr1 = [];\n  var lettersArr2 = [];\n  charactersSent1.forEach(function (char) {\n    if (validCharacters.indexOf(char) > -1) lettersArr1.push(char);\n  });\n  charactersSent2.forEach(function (char) {\n    if (validCharacters.indexOf(char) > -1) lettersArr2.push(char);\n  });\n  resultDiv.innerHTML += \"<li class='answer-4'>\\n  <h3 class='answ-4-a'>Sentence 1:</h3>\\n  <h4>\".concat(sentenceText1, \"</h4>\\n  <h3 class='answ-4-b'>Reversed sentence 2:</h3>\\n  <h4>\").concat(sentenceText2, \"</h4>\\n  <br> \").concat(lettersArr1.join(\"\") === lettersArr2.reverse().join(\"\") ? \"<p class='result-correct'>Correct, these sentences are palindromes of eachother.</p></li>\" : \"<p class='result-incorrect'>This sentence is not a palindrome of the other.</p></li>\");\n} //Handles next button click for first 3 questions.\n\n\nfunction next(q) {\n  if (q == 1) {\n    document.getElementById(\"q2\").style.display = \"block\";\n    document.getElementById(\"p1\").style.display = \"none\";\n    document.getElementById(\"p2\").style.display = \"block\";\n    document.getElementById(\"part-2\").style.display = \"block\";\n    document.getElementById(\"q1\").style.display = \"none\";\n    countdown(10, \"counter2\");\n  }\n\n  if (q == 2) {\n    document.getElementById(\"q3\").style.display = \"block\";\n    document.getElementById(\"p2\").style.display = \"none\";\n    document.getElementById(\"p3\").style.display = \"block\";\n    document.getElementById(\"part-3\").style.display = \"block\";\n    document.getElementById(\"q2\").style.display = \"none\";\n  }\n\n  if (q == 3) {\n    document.getElementById(\"q4\").style.display = \"block\";\n    document.getElementById(\"p3\").style.display = \"none\";\n    document.getElementById(\"p4\").style.display = \"block\";\n    document.getElementById(\"part-4\").style.display = \"block\";\n    document.getElementById(\"q3\").style.display = \"none\";\n    document.getElementById(\"check-answers\").style.display = \"block\";\n  }\n}\n\nfunction getZipDevAds() {\n  var ads = document.getElementById(\"zipdev-ads\"); //Calls Zomato API and returns json.\n\n  var url = \"https://developers.zomato.com/api/v2.1/search\";\n  fetch(url, {\n    headers: {\n      \"user-key\": \"10caf7d71c1773eb9bea8e36e537d3b5\"\n    }\n  }).then(function (data) {\n    return data.json();\n  }).then(function (res) {\n    res.restaurants.map(function (restaurant) {\n      var restaurantItem = restaurant.restaurant;\n\n      if (restaurantItem.photo_count > 0) {\n        ads.innerHTML += \" <li class=\\\"zipdev-restaurant\\\">\\n      <img src=\\\"\".concat(restaurantItem.photos[0].photo.url, \"\\\" width=110px height=80px>\\n      <div class=\\\"zipdev-title\\\">\").concat(restaurantItem.name, \"</div>\\n      <div class=\\\"rating-votes-wrap\\\">\\n        <div class=\\\"rating\\\">\").concat(restaurantItem.user_rating.aggregate_rating, \"<span>/5</span></div>\\n        <div class=\\\"votes\\\">\").concat(restaurantItem.user_rating.votes, \"</div>\\n      </div>\\n      <p class=\\\"category\\\">\").concat(restaurantItem.photos[0].photo.user.foodie_level, \"</p>\\n      <hr class=\\\"hr\\\">\\n      <div class=\\\"details\\\"><span class=\\\"open\\\">\").concat(restaurantItem.timings, \"</span> - <span class=\\\"type\\\">\").concat(restaurantItem.cuisines, \"</span> - <span\\n          class=\\\"cost\\\">Costs $\").concat(restaurantItem.average_cost_for_two, \" for two</span></div>\\n\\n    </li>\");\n      }\n    });\n  });\n} //function that checks radio buttons and returns results\n\n\nfunction checkRadioButtons() {\n  var radio = document.getElementsByName(\"developer\");\n  var i;\n\n  for (i = 0; i < radio.length; i++) {\n    if (radio[i].checked) resultDiv.innerHTML += \"<li class='answer-1'>\\n                <h3>Your developer type is:</h3>\\n                <span>\".concat(radio[i].value, \"</span></li>\");\n  }\n} //function that checks checkboxes and returns results\n\n\nfunction checkCheckBoxes() {\n  var checkbox = document.getElementsByName(\"tech\");\n  var techansw = [];\n  var i;\n  resultDiv.innerHTML += \"<li class='answer-2'>\\n            <h3 class='jstech'>Javascript Based Technologies: </h3>\\n              <div id='checkboxed'></div>\";\n\n  for (i = 0; i < checkbox.length; i++) {\n    if (checkbox[i].checked) {\n      document.getElementById(\"checkboxed\").innerHTML += \"<span class='answer-2-results'>\".concat(checkbox[i].value, \"</span>\");\n      techansw.push(checkbox[i].value);\n    }\n  }\n\n  if (techansw.includes( true && \"Vuejs\")) {\n    document.getElementById(\"checkboxed\").innerHTML += \"<br><div class='answer-2-correct'>Correct, you have picked the right technologies</div></li>\";\n  } else {\n    document.getElementById(\"checkboxed\").innerHTML += \"<br><div class='answer-2-incorrect'>Incorrect, the technologies are Angularjs, Ember and Vuejs</div></li>\";\n  }\n} //Main function that checks the answers submitted by all 4 questions and renders the right and wrong answers\n//and multiple zomato restaurants.\n\n\nfunction checkAnswers() {\n  document.getElementById(\"questions\").style.display = \"none\";\n  document.getElementById(\"progress-bar\").style.display = \"none\";\n  document.getElementById(\"zipdev-ads\").style.display = \"block\";\n  var plndromeTextBox = document.getElementById(\"palindrome\").value;\n  var pdromesent1 = document.getElementById(\"p-sentence\").value;\n  var pdromesent2 = document.getElementById(\"p-sentence-r\").value;\n  checkRadioButtons();\n  checkCheckBoxes();\n  isPalindrome(plndromeTextBox);\n  compareReverse(pdromesent1, pdromesent2);\n  getZipDevAds();\n}\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });