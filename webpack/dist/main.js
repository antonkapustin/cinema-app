/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 55:
/*!***************************************************************!*\
  !*** ../node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


/***/ }),

/***/ 431:
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider/slider.component */ 547);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ 904);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.less */ 839);\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/js/all.js */ 55);\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar films = document.querySelector(\".slider\");\nvar filmsSlider = new _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_0__.Slider(_data__WEBPACK_IMPORTED_MODULE_1__.data, films);\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ 547:
/*!***********************************************!*\
  !*** ./components/slider/slider.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* binding */ Slider)\n/* harmony export */ });\n/* harmony import */ var _utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilits/renderToTheDom */ 42);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(data, hostElement) {\n    _classCallCheck(this, Slider);\n\n    this.initialeData = _toConsumableArray(data);\n    this.clone = _toConsumableArray(data);\n    this.hostElement = hostElement;\n    this.sliderTemplate = \"<li class=\\\"slider__item\\\">\\n    <a class=\\\"slider__link\\\" href=\\\"details.html?name={{name}}\\\"\\n      ><img\\n        class=\\\"slider__img {{active}}\\\"\\n        src=\\\"{{image}}\\\"\\n        alt=\\\"{{name}}\\\"\\n    /></a>\\n    </li>\";\n    this.current = 0;\n    this.items = 3;\n    this.value = data[1].value;\n    this.data = this.slidShow(this.current, this.items);\n    this.render();\n    this.applyHandler();\n  }\n\n  _createClass(Slider, [{\n    key: \"render\",\n    value: function render() {\n      var slider = document.createElement(\"div\");\n      var navigation = document.createElement(\"div\");\n      navigation.classList.add(\"slider__navigation\");\n      slider.classList.add(\"slider__content\");\n      slider.innerHTML = this.renderSlider();\n      navigation.innerHTML = this.renderNavigation();\n      this.hostElement.innerHTML = \"\";\n      this.hostElement.append(slider);\n      this.hostElement.append(navigation);\n      var dote = this.hostElement.querySelector(\"[value=\\\"\".concat(this.value, \"\\\"]\"));\n      dote.classList.add(\"slider__dote_active\");\n    }\n  }, {\n    key: \"renderSlider\",\n    value: function renderSlider() {\n      var _this = this;\n\n      var template = this.data.map(function (el) {\n        return (0,_utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__.renderToDom)(el, _this.sliderTemplate);\n      });\n      return \"<ul class=\\\"slider__list\\\">\\n    \".concat(template.join(\"\"), \"\\n    </ul>\");\n    }\n  }, {\n    key: \"renderNavigation\",\n    value: function renderNavigation() {\n      var dote = '<li class=\"slider__dote\" value=\"1\"></li>';\n\n      for (var i = 2; i <= this.initialeData.length; i++) {\n        dote = dote + \"<li class=\\\"slider__dote\\\" value=\\\"\".concat(i, \"\\\"></li>\");\n      }\n\n      return \"<ul class=\\\"slider__list\\\">\\n    <li class=\\\"slider__item\\\"><button class=\\\"slider__button\\\" type=\\\"button\\\" value=\\\"prev\\\"><</button></li>\\n    \".concat(dote, \"\\n    <li class=\\\"slider__item\\\"><button class=\\\"slider__button\\\" type=\\\"button\\\" value=\\\"next\\\">></button></li>\\n  </ul>\");\n    }\n  }, {\n    key: \"applyHandler\",\n    value: function applyHandler() {\n      this.hostElement.addEventListener(\"click\", this.onClick.bind(this));\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick(event) {\n      var current = event.target;\n\n      while (current !== this.hostElement) {\n        if (current.classList.contains(\"slider__button\")) {\n          break;\n        }\n\n        current = current.parentElement;\n      }\n\n      if (current === this.hostElement) {\n        return;\n      }\n\n      if (current.value === \"prev\") {\n        this.current = this.current - 1;\n      } else if (current.value === \"next\") {\n        this.current = this.current + 1;\n      }\n\n      delete this.data[1].active;\n      this.value = this.data[1].value;\n      this.data = this.slidShow(this.current, this.items);\n      this.value = this.data[1].value;\n      this.render();\n    }\n  }, {\n    key: \"slidShow\",\n    value: function slidShow(start, items) {\n      if (this.value === \"\".concat(this.initialeData.length - 1)) {\n        var _this$clone;\n\n        (_this$clone = this.clone).push.apply(_this$clone, _toConsumableArray(this.initialeData));\n      }\n\n      this.current = start;\n      var end = start + items;\n      var showItem = this.clone.slice(this.current, end);\n      showItem[1].active = \"slider__img_active\";\n      return showItem;\n    }\n  }]);\n\n  return Slider;\n}();\n\n//# sourceURL=webpack:///./components/slider/slider.component.ts?");

/***/ }),

/***/ 904:
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nvar data = [{\n  name: \"Joker\",\n  image: \"assets/joker.jpeg\",\n  value: \"1\",\n  rating: \"10/10\",\n  duration: \"2h 02min\",\n  category: \"+18\",\n  synopsis: \"Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.\"\n}, {\n  name: \"Вечные\",\n  image: \"assets/vechnye.jpeg\",\n  value: \"2\",\n  rating: \"8/10\",\n  duration: \"2h37min\",\n  category: \"+13\",\n  synopsis: \"The fate of humanity lies in their hands.Marvel Studios? ?Eternals? welcomes an existing new team of Super Heroes to the Marvel Cinematic Universe.The epic story, spanning thousends of years, features a group of immortal heroes forced out of the shadows to reunite against mankind?s oldest enemy, The Deviants.\"\n}, {\n  name: \"encounter\",\n  image: \"assets/encounter.jpeg\",\n  value: \"3\",\n  rating: \"6/10\",\n  duration: \"2h\",\n  category: \"+10\",\n  synopsis: \"A decorated Marine goes on a rescue mission to save his two young sons from a mysterious threat. As their journey takes them in increasingly dangerous directions, the boys will need to leave their childhoods behind.\"\n}];\n\n//# sourceURL=webpack:///./data.ts?");

/***/ }),

/***/ 42:
/*!***********************************!*\
  !*** ./utilits/renderToTheDom.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderToDom\": () => (/* binding */ renderToDom)\n/* harmony export */ });\nvar renderToDom = function renderToDom(data, template) {\n  var matchMarkers = template.match(/{{\\w.+?}}/gi);\n\n  if (matchMarkers === null) {\n    return \"\";\n  }\n\n  var matchKeys = template.match(/(?<={{)\\w.+?(?=}})/gi);\n\n  if (matchKeys === null) {\n    return \"\";\n  }\n\n  var keys = matchKeys.map(function (element) {\n    element = element.replace(\"[\", \".\").replace(\"]\", \"\");\n    return element.split(\".\");\n  });\n  var result = template;\n  matchMarkers.forEach(function (element, i) {\n    var value = keys[i].reduce(function (sum, curr) {\n      return sum[curr];\n    }, data);\n\n    if (value === undefined) {\n      result = result.replace(element, \"\");\n    } else {\n      result = result.replace(element, value);\n    }\n  });\n  return result;\n};\n\n//# sourceURL=webpack:///./utilits/renderToTheDom.ts?");

/***/ }),

/***/ 839:
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.less?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(431), __webpack_exec__(839));
/******/ }
]);