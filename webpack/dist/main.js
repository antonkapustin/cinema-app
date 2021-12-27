/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider/slider.component */ \"./components/slider/slider.component.ts\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ \"./style.less\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/js/all.js */ \"../node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar data = [{\n  name: \"Joker\",\n  image: \"assets/joker.jpeg\",\n  value: \"1\"\n}, {\n  name: \"vechnye\",\n  image: \"assets/vechnye.jpeg\",\n  value: \"2\"\n}, {\n  name: \"encounter\",\n  image: \"assets/encounter.jpeg\",\n  value: \"3\"\n}];\nvar films = document.querySelector(\".slider\");\nvar filmsSlider = new _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_0__.Slider(data, films);\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ "./components/slider/slider.component.ts":
/*!***********************************************!*\
  !*** ./components/slider/slider.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* binding */ Slider)\n/* harmony export */ });\n/* harmony import */ var _utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilits/renderToTheDom */ \"./utilits/renderToTheDom.ts\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(data, hostElement) {\n    _classCallCheck(this, Slider);\n\n    this.initialeData = _toConsumableArray(data);\n    this.clone = _toConsumableArray(data);\n    this.hostElement = hostElement;\n    this.sliderTemplate = \"<li class=\\\"slider__item\\\">\\n    <a class=\\\"slider__link\\\" href=\\\"details.html?id={{id}}\\\"\\n      ><img\\n        class=\\\"slider__img {{active}}\\\"\\n        src=\\\"{{image}}\\\"\\n        alt=\\\"{{name}}\\\"\\n    /></a>\\n    </li>\";\n    this.current = 0;\n    this.items = 3;\n    this.value = data[1].value;\n    this.data = this.slidShow(this.current, this.items);\n    this.render();\n    this.applyHandler();\n  }\n\n  _createClass(Slider, [{\n    key: \"render\",\n    value: function render() {\n      var slider = document.createElement(\"div\");\n      var navigation = document.createElement(\"div\");\n      navigation.classList.add(\"slider__navigation\");\n      slider.classList.add(\"slider__content\");\n      slider.innerHTML = this.renderSlider();\n      navigation.innerHTML = this.renderNavigation();\n      this.hostElement.innerHTML = \"\";\n      this.hostElement.append(slider);\n      this.hostElement.append(navigation);\n      var dote = this.hostElement.querySelector(\"[value=\\\"\".concat(this.value, \"\\\"]\"));\n      dote.classList.add(\"slider__dote_active\");\n    }\n  }, {\n    key: \"renderSlider\",\n    value: function renderSlider() {\n      var _this = this;\n\n      var template = this.data.map(function (el) {\n        return (0,_utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__.renderToDom)(el, _this.sliderTemplate);\n      });\n      return \"<ul class=\\\"slider__list\\\">\\n    \".concat(template.join(\"\"), \"\\n    </ul>\");\n    }\n  }, {\n    key: \"renderNavigation\",\n    value: function renderNavigation() {\n      var dote = '<li class=\"slider__dote\" value=\"1\"></li>';\n\n      for (var i = 2; i <= this.initialeData.length; i++) {\n        dote = dote + \"<li class=\\\"slider__dote\\\" value=\\\"\".concat(i, \"\\\"></li>\");\n      }\n\n      return \"<ul class=\\\"slider__list\\\">\\n    <li class=\\\"slider__item\\\"><button class=\\\"slider__button\\\" type=\\\"button\\\" value=\\\"prev\\\"><</button></li>\\n    \".concat(dote, \"\\n    <li class=\\\"slider__item\\\"><button class=\\\"slider__button\\\" type=\\\"button\\\" value=\\\"next\\\">></button></li>\\n  </ul>\");\n    }\n  }, {\n    key: \"applyHandler\",\n    value: function applyHandler() {\n      this.hostElement.addEventListener(\"click\", this.onClick.bind(this));\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick(event) {\n      var current = event.target;\n\n      while (current !== this.hostElement) {\n        if (current.classList.contains(\"slider__button\")) {\n          break;\n        }\n\n        current = current.parentElement;\n      }\n\n      if (current === this.hostElement) {\n        return;\n      }\n\n      if (current.value === \"prev\") {\n        this.current = this.current - 1;\n      } else if (current.value === \"next\") {\n        this.current = this.current + 1;\n      }\n\n      delete this.data[1].active;\n      this.value = this.data[1].value;\n      this.data = this.slidShow(this.current, this.items);\n      this.value = this.data[1].value;\n      this.render();\n    }\n  }, {\n    key: \"slidShow\",\n    value: function slidShow(start, items) {\n      if (this.value === \"\".concat(this.initialeData.length - 1)) {\n        var _this$clone;\n\n        (_this$clone = this.clone).push.apply(_this$clone, _toConsumableArray(this.initialeData));\n      }\n\n      this.current = start;\n      var end = start + items;\n      var showItem = this.clone.slice(this.current, end);\n      showItem[1].active = \"slider__img_active\";\n      return showItem;\n    }\n  }]);\n\n  return Slider;\n}();\n\n//# sourceURL=webpack:///./components/slider/slider.component.ts?");

/***/ }),

/***/ "./utilits/renderToTheDom.ts":
/*!***********************************!*\
  !*** ./utilits/renderToTheDom.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderToDom\": () => (/* binding */ renderToDom)\n/* harmony export */ });\nvar renderToDom = function renderToDom(data, template) {\n  var matchMarkers = template.match(/{{\\w.+?}}/gi);\n\n  if (matchMarkers === null) {\n    return \"\";\n  }\n\n  var matchKeys = template.match(/(?<={{)\\w.+?(?=}})/gi);\n\n  if (matchKeys === null) {\n    return \"\";\n  }\n\n  var keys = matchKeys.map(function (element) {\n    element = element.replace(\"[\", \".\").replace(\"]\", \"\");\n    return element.split(\".\");\n  });\n  var result = template;\n  matchMarkers.forEach(function (element, i) {\n    var value = keys[i].reduce(function (sum, curr) {\n      return sum[curr];\n    }, data);\n\n    if (value === undefined) {\n      result = result.replace(element, \"\");\n    } else {\n      result = result.replace(element, value);\n    }\n  });\n  return result;\n};\n\n//# sourceURL=webpack:///./utilits/renderToTheDom.ts?");

/***/ }),

/***/ "./style.less":
/*!********************!*\
  !*** ./style.less ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.less?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js"], () => (__webpack_require__("./app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;