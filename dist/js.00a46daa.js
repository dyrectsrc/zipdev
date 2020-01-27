// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

require("../scss/styles.scss");

//Palindrome Function takes in one word or sentence then returns incorrect or correct text
function isPalindrome(stringText) {
  var string = stringText.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var lettersArr = [];
  charactersArr.forEach(function (char) {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  if (lettersArr.join('') === lettersArr.reverse().join('')) return "<p class='result-correct'>Correct, this is a palindrome.</p>";else return "<p class='result-incorrect'>This is not a palindrome.</p>";
} //Palindrome Function takes in 2 words or sentences and checks if they are palindromes of eachother


function CompareReverse(sentenceText1, sentenceText2) {
  var sentence1 = sentenceText1.toLowerCase();
  var sentence2 = sentenceText2.toLowerCase();
  var charactersSent1 = sentence1.split('');
  var charactersSent2 = sentence2.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var lettersArr1 = [];
  var lettersArr2 = [];
  charactersSent1.forEach(function (char) {
    if (validCharacters.indexOf(char) > -1) lettersArr1.push(char);
  });
  charactersSent2.forEach(function (char) {
    if (validCharacters.indexOf(char) > -1) lettersArr2.push(char);
  });
  if (lettersArr1.join('') === lettersArr2.reverse().join('')) return "<p class='result-correct'>Correct, these sentences are palindromes of eachother.</p>";else return "<p class='result-incorrect'>This sentence is not a palindrome of the other.</p>";
} //Handles next button click for first 3 questions.


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
} //Main function that checks the answers submitted by all 4 questions and renders the right and wrong answers
//and calls zamato API to show multiple restaurants.


function checkQuestions() {
  var radio = document.getElementsByName('developer');
  var checkbox = document.getElementsByName('tech');
  var pdrometbox = document.getElementById('palindrome').value;
  var pdromesent1 = document.getElementById('p-sentence').value;
  var pdromesent2 = document.getElementById('p-sentence-r').value;
  var checkedtech = [];
  var presult = isPalindrome(pdrometbox);
  var presultsent = CompareReverse(pdromesent1, pdromesent2);
  var resultDiv = document.getElementById("result");
  var ads = document.getElementById("zipdev-ads");
  var techansw = [];
  document.getElementById("questions").style.display = "none";
  document.getElementById("zipdev-ads").style.display = "block"; //Calls Zomato API and returns json.

  var url = 'https://developers.zomato.com/api/v2.1/search';
  fetch(url, {
    headers: {
      "user-key": "10caf7d71c1773eb9bea8e36e537d3b5"
    }
  }).then(function (data) {
    return data.json();
  }).then(function (res) {
    res.restaurants.map(function (restaurant) {
      var restaurantItem = restaurant.restaurant;

      if (restaurantItem.photo_count > 0) {
        ads.innerHTML += " <li class=\"zipdev-restaurant\">\n      <img src=\"".concat(restaurantItem.photos[0].photo.url, "\" width=110px height=80px>\n      <div class=\"zipdev-title\">").concat(restaurantItem.name, "</div>\n      <div class=\"rating-votes-wrap\">\n        <div class=\"rating\">").concat(restaurantItem.user_rating.aggregate_rating, "<span>/5</span></div>\n        <div class=\"votes\">").concat(restaurantItem.user_rating.votes, "</div>\n      </div>\n      <p class=\"category\">").concat(restaurantItem.photos[0].photo.user.foodie_level, "</p>\n      <hr class=\"hr\">\n      <div class=\"details\"><span class=\"open\">").concat(restaurantItem.timings, "</span> - <span class=\"type\">").concat(restaurantItem.cuisines, "</span> - <span\n          class=\"cost\">Costs $").concat(restaurantItem.average_cost_for_two, " for two</span></div>\n\n    </li>");
      }
    });
  });

  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) resultDiv.innerHTML += "<li class='answer-1'>\n                <h3>Your developer type is:</h3>\n                <span>".concat(radio[i].value, "</span></li>");
  }

  resultDiv.innerHTML += "<li class='answer-2'>\n            <h3 class='jstech'>Javascript Based Technologies: </h3>\n              <div id='checkboxed'></div>";

  for (i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      document.getElementById("checkboxed").innerHTML += "<span class='answer-2-results'>".concat(checkbox[i].value, "</span>");
      techansw.push(checkbox[i].value);
    }
  }

  if (techansw.includes("Angularjs" && "Ember" && "Vuejs")) {
    document.getElementById("checkboxed").innerHTML += "<br><div class='answer-2-correct'>Correct, you have picked the right technologies</div></li>";
  } else {
    document.getElementById("checkboxed").innerHTML += "<br><div class='answer-2-incorrect'>Incorrect, the technologies are Angularjs, Ember and Vuejs</div></li>";
  }

  resultDiv.innerHTML += "<li class='answer-3'>\n            <h3 class='palin'>Palindrome:</h3>\n            <h4>".concat(pdrometbox, "</h4>\n            <br>\n            ").concat(presult, "\n          </li>\n          <li class='answer-4'>\n            <h3 class='answ-4-a'>Palindrome sentence 1:</h3>\n            <h4>").concat(pdromesent1, "</h4>\n            <h3 class='answ-4-b'>Palindrome sentence 2:</h3>\n            <h4>").concat(pdromesent2, "</h4>\n            <br>").concat(presultsent, "\n          </li>");
}
},{"../scss/styles.scss":"scss/styles.scss"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50352" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map