/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["details"],{

/***/ 55:
/*!***************************************************************!*\
  !*** ../node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


/***/ }),

/***/ 904:
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nvar data = [{\n  name: \"Joker\",\n  image: \"assets/joker.jpeg\",\n  value: \"1\",\n  rating: \"10/10\",\n  duration: \"2h 02min\",\n  category: \"+18\",\n  synopsis: \"Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.\"\n}, {\n  name: \"Вечные\",\n  image: \"assets/vechnye.jpeg\",\n  value: \"2\",\n  rating: \"8/10\",\n  duration: \"2h37min\",\n  category: \"+13\",\n  synopsis: \"The fate of humanity lies in their hands.Marvel Studios? ?Eternals? welcomes an existing new team of Super Heroes to the Marvel Cinematic Universe.The epic story, spanning thousends of years, features a group of immortal heroes forced out of the shadows to reunite against mankind?s oldest enemy, The Deviants.\"\n}, {\n  name: \"encounter\",\n  image: \"assets/encounter.jpeg\",\n  value: \"3\",\n  rating: \"6/10\",\n  duration: \"2h\",\n  category: \"+10\",\n  synopsis: \"A decorated Marine goes on a rescue mission to save his two young sons from a mysterious threat. As their journey takes them in increasingly dangerous directions, the boys will need to leave their childhoods behind.\"\n}];\n\n//# sourceURL=webpack:///./data.ts?");

/***/ }),

/***/ 572:
/*!************************!*\
  !*** ./details/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ 179);\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@fortawesome/fontawesome-free/js/all.js */ 55);\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ 904);\n\n\n\nvar pars = new _details__WEBPACK_IMPORTED_MODULE_0__.Details(_data__WEBPACK_IMPORTED_MODULE_2__.data);\n\n//# sourceURL=webpack:///./details/app.ts?");

/***/ }),

/***/ 191:
/*!***************************************************!*\
  !*** ./details/components/tabs/tabs.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tabs\": () => (/* binding */ Tabs)\n/* harmony export */ });\n/* harmony import */ var _utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilits/renderToTheDom */ 42);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar Tabs = /*#__PURE__*/function () {\n  function Tabs(data, hostElement) {\n    _classCallCheck(this, Tabs);\n\n    this.data = data;\n    this.hostElement = hostElement;\n    this.synopsisTemplate = \"\\n    <p class=\\\"synopsis__paragraph\\\">{{synopsis}}</p>\";\n    this.timeTemplate = \"<p class=\\\"synopsis__box\\\">{{name}}</p>\";\n    this.content = \"\\n    <p class=\\\"synopsis__paragraph\\\">{{synopsis}}</p>\";\n    this.value;\n    this.render();\n    this.applyHandler();\n  }\n\n  _createClass(Tabs, [{\n    key: \"render\",\n    value: function render() {\n      if (this.value === undefined) {\n        var inputCheck = this.hostElement.querySelector(\"[checked]\");\n        this.value = inputCheck.value;\n      }\n\n      var contentBox = this.hostElement.querySelector(\".tabs__content\");\n\n      if (contentBox) {\n        contentBox.innerHTML = \"\";\n\n        if (this.value === \"synopsis\") {\n          contentBox.innerHTML = this.renderContent(this.synopsisTemplate);\n        } else if (this.value === \"time\") {\n          contentBox.innerHTML = this.renderContent(this.timeTemplate);\n        }\n      }\n    }\n  }, {\n    key: \"applyHandler\",\n    value: function applyHandler() {\n      this.hostElement.addEventListener(\"click\", this.onClick.bind(this));\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick(event) {\n      var current = event.target;\n\n      while (current !== this.hostElement) {\n        if (current.classList.contains(\"tabs__input\")) {\n          break;\n        }\n\n        current = current.parentElement;\n      }\n\n      if (current === this.hostElement) {\n        return;\n      }\n\n      var key = current.value;\n      this.value = key;\n      this.render();\n    }\n  }, {\n    key: \"renderContent\",\n    value: function renderContent(content) {\n      var template = this.data.map(function (el) {\n        return (0,_utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__.renderToDom)(el, content);\n      });\n      return template.join(\"\");\n    }\n  }]);\n\n  return Tabs;\n}();\n\n//# sourceURL=webpack:///./details/components/tabs/tabs.component.ts?");

/***/ }),

/***/ 179:
/*!****************************!*\
  !*** ./details/details.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Details\": () => (/* binding */ Details)\n/* harmony export */ });\n/* harmony import */ var _utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilits/renderToTheDom */ 42);\n/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs/tabs.component */ 191);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Details = /*#__PURE__*/function () {\n  function Details(data) {\n    _classCallCheck(this, Details);\n\n    this.data = data;\n    this.blocksTemplate = \"<div class=\\\"blocks\\\">\\n    <img class=\\\"blocks__img\\\" src=\\\"{{image}}\\\" alt=\\\"{{name}}\\\" />\\n    <ul class=\\\"blocks__list\\\">\\n      <li class=\\\"blocks__item\\\">\\n        <span class=\\\"blocks__icon\\\"><i class=\\\"fas fa-th\\\"></i></span>\\n        <h1 class=\\\"blocks__title\\\">Category</h1>\\n        <p class=\\\"blocks__paragraph\\\">{{category}}</p>\\n      </li>\\n      <li class=\\\"blocks__item\\\">\\n        <span class=\\\"blocks__icon\\\"><i class=\\\"fas fa-clock\\\"></i></span>\\n        <h1 class=\\\"blocks__title\\\">Duration</h1>\\n        <p class=\\\"blocks__paragraph\\\">{{duration}}</p>\\n      </li>\\n      <li class=\\\"blocks__item\\\">\\n        <span class=\\\"blocks__icon\\\"><i class=\\\"fas fa-star\\\"></i></span>\\n        <h1 class=\\\"blocks__title\\\">Rating</h1>\\n        <p class=\\\"blocks__paragraph\\\">{{rating}}</p>\\n      </li>\\n    </ul>\\n  </div>\\n  <h1 class=\\\"info__title\\\">{{name}}</h1>\";\n    this.render();\n  }\n\n  _createClass(Details, [{\n    key: \"render\",\n    value: function render() {\n      var currentId = this.parser(\"name\");\n      var el = this.data.filter(function (el) {\n        return el.name === currentId;\n      });\n      var info = document.querySelector(\".info\");\n      var synopsis = document.querySelector(\".synopsis\");\n\n      if (info) {\n        info.innerHTML = this.renderInfo(el);\n      }\n\n      var tabs = document.querySelector(\".tabs\");\n\n      if (tabs) {\n        var tabsClass = new _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__.Tabs(el, tabs);\n      }\n    }\n  }, {\n    key: \"renderInfo\",\n    value: function renderInfo(el) {\n      var _this = this;\n\n      var template = el.map(function (el) {\n        return (0,_utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__.renderToDom)(el, _this.blocksTemplate);\n      });\n      return template.join(\"\");\n    }\n  }, {\n    key: \"parser\",\n    value: function parser(parName) {\n      var parsParam = new URLSearchParams(window.location.search);\n\n      if (parsParam === null) {\n        return \"\";\n      } else {\n        return parsParam.get(parName);\n      }\n    }\n  }]);\n\n  return Details;\n}();\n\n//# sourceURL=webpack:///./details/details.ts?");

/***/ }),

/***/ 42:
/*!***********************************!*\
  !*** ./utilits/renderToTheDom.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderToDom\": () => (/* binding */ renderToDom)\n/* harmony export */ });\nvar renderToDom = function renderToDom(data, template) {\n  var matchMarkers = template.match(/{{\\w.+?}}/gi);\n\n  if (matchMarkers === null) {\n    return \"\";\n  }\n\n  var matchKeys = template.match(/(?<={{)\\w.+?(?=}})/gi);\n\n  if (matchKeys === null) {\n    return \"\";\n  }\n\n  var keys = matchKeys.map(function (element) {\n    element = element.replace(\"[\", \".\").replace(\"]\", \"\");\n    return element.split(\".\");\n  });\n  var result = template;\n  matchMarkers.forEach(function (element, i) {\n    var value = keys[i].reduce(function (sum, curr) {\n      return sum[curr];\n    }, data);\n\n    if (value === undefined) {\n      result = result.replace(element, \"\");\n    } else {\n      result = result.replace(element, value);\n    }\n  });\n  return result;\n};\n\n//# sourceURL=webpack:///./utilits/renderToTheDom.ts?");

/***/ }),

/***/ 917:
/*!************************************!*\
  !*** ./details/details-style.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./details/details-style.less?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(572), __webpack_exec__(917));
/******/ }
]);