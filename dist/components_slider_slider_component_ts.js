"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_slider_slider_component_ts"],{

/***/ 6197:
/*!***********************************************!*\
  !*** ./components/slider/slider.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* binding */ Slider)\n/* harmony export */ });\n/* harmony import */ var _utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilits/renderToTheDom */ 2042);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(data, hostElement) {\n    var _this = this;\n\n    _classCallCheck(this, Slider);\n\n    _defineProperty(this, \"onClick\", function (event) {\n      console.log(1);\n      var current = event.target;\n      console.log(current);\n\n      while (current !== _this.hostElement) {\n        if (current.classList.contains(\"slider__button\")) {\n          break;\n        }\n\n        current = current.parentElement;\n      }\n\n      if (current === _this.hostElement) {\n        return;\n      }\n\n      if (current.value === \"prev\") {\n        _this.current = _this.current - 1;\n      } else if (current.value === \"next\") {\n        _this.current = _this.current + 1;\n      }\n\n      delete _this.initialeData[1].active;\n      _this.value = _this.initialeData[1].value;\n      _this.initialeData = _this.slidShow(_this.current, _this.items);\n      _this.value = _this.initialeData[1].value;\n\n      _this.render();\n    });\n\n    this.initialeData = _toConsumableArray(data);\n    this.clone = _toConsumableArray(data);\n    this.hostElement = hostElement;\n    this.template = \"\\n    <div class=\\\"slider__content\\\"><div class=\\\"slider__item\\\" data-dom=\\\"iterator\\\">\\n         <a class=\\\"slider__link\\\" href=\\\"details.html?name={{name}}\\\"\\n           ><img\\n            class=\\\"slider__img {{active}}\\\"\\n             src=\\\"{{image}}\\\"\\n            alt=\\\"{{name}}\\\"\\n        /></a>\\n         </div>\\n         </div>\\n         <div class=\\\"slider__navigation\\\">\\n         <ul class=\\\"slider__list\\\">\\n        <li class=\\\"slider__item_navigation\\\" ><button class=\\\"slider__button\\\" type=\\\"button\\\" value=\\\"prev\\\"><</button></li>\\n        <li class=\\\"slider__item_navigation\\\"  data-dom=\\\"iterator\\\" ><div class=\\\"slider__dote\\\" value=\\\"{{value}}\\\"></div></li>\\n        <li class=\\\"slider__item_navigation\\\"><button class=\\\"slider__button\\\" type=\\\"button\\\" value=\\\"next\\\">></button></li>\\n      </ul></div>\";\n    this.current = 0;\n    this.items = 3;\n    this.value = data[1].value;\n    this.data = this.slidShow(this.current, this.items);\n    this.render().then(function () {\n      _this.applyHandler();\n    });\n  }\n\n  _createClass(Slider, [{\n    key: \"render\",\n    value: function () {\n      var _render = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var dote;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0,_utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__.RenderDOM)(this.initialeData, this.template);\n\n              case 2:\n                this.hostElement.innerHTML = _context.sent;\n                dote = this.hostElement.querySelector(\"[value=\\\"\".concat(this.value, \"\\\"]\"));\n                dote.classList.add(\"slider__dote_active\");\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function render() {\n        return _render.apply(this, arguments);\n      }\n\n      return render;\n    }()\n  }, {\n    key: \"applyHandler\",\n    value: function applyHandler() {\n      this.hostElement.addEventListener(\"click\", this.onClick);\n    }\n  }, {\n    key: \"slidShow\",\n    value: function slidShow(start, items) {\n      if (this.value === \"\".concat(this.initialeData.length - 1)) {\n        var _this$clone;\n\n        (_this$clone = this.clone).push.apply(_this$clone, _toConsumableArray(this.initialeData));\n      }\n\n      this.current = start;\n      var end = start + items;\n      var showItem = this.clone.slice(this.current, end);\n      showItem[1].active = \"slider__img_active\";\n      return showItem;\n    }\n  }]);\n\n  return Slider;\n}();\n\n//# sourceURL=webpack:///./components/slider/slider.component.ts?");

/***/ })

}]);