"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_home_home_component_ts"],{

/***/ 1561:
/*!*******************************************!*\
  !*** ./components/home/home.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilits/renderToTheDom */ 2042);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar Home = /*#__PURE__*/function () {\n  function Home(data, hostElement) {\n    var _this = this;\n\n    _classCallCheck(this, Home);\n\n    this.initialeData = data;\n    this.hostElement = hostElement;\n    this.template = \"\\n    <header class=\\\"header\\\">\\n    <div class=\\\"header__discription\\\">\\n      <h1 class=\\\"header__title\\\">Hello Ihza</h1>\\n      <p class=\\\"header__city\\\">\\n        <i class=\\\"fas fa-map-marker-alt\\\"></i>\\n        Molang City\\n        <i class=\\\"fas fa-angle-down\\\"></i>\\n      </p>\\n    </div>\\n    <div class=\\\"header__icon\\\">\\n      <img class=\\\"header__img\\\" src=\\\"assets/avatarIcon.png\\\" alt=\\\"avatar\\\" />\\n    </div>\\n  </header>\\n  <div class=\\\"filter\\\">\\n    <button class=\\\"filter__button\\\">\\n      <span class=\\\"icon icon_search\\\"><i class=\\\"fas fa-search\\\"></i></span>\\n    </button>\\n    <input class=\\\"filter__input\\\" type=\\\"text\\\" placeholder=\\\"Search Movie\\\" />\\n  </div>\\n  <div class=\\\"films\\\">\\n    <h2 class=\\\"films__title\\\">Playing Now</h2>\\n    <div class=\\\"slider slider_films\\\" data-dom=\\\"slider\\\"></div>\\n  </div>\\n  <div class=\\\"promo\\\">\\n    <h2 class=\\\"promo__title\\\">Promo</h2>\\n    <div class=\\\"slider slider_promo\\\">\\n      <ul class=\\\"slider__list\\\">\\n        <li class=\\\"slider__item\\\">\\n          <img\\n            class=\\\"slider__img slider__img_small\\\"\\n            src=\\\"assets/promo2.png\\\"\\n            alt=\\\"promo\\\"\\n          />\\n        </li>\\n        <li class=\\\"slider__item\\\">\\n          <img\\n            class=\\\"slider__img slider__img_small\\\"\\n            src=\\\"assets/promo1.jpeg\\\"\\n            alt=\\\"promo\\\"\\n          />\\n        </li>\\n      </ul>\\n    </div>\\n  </div>\\n  <footer class=\\\"footer\\\">\\n    <a href=\\\"/home\\\" class=\\\"footer__link\\\"><i class=\\\"fas fa-home\\\"></i></a>\\n    <a href=\\\"/ticket\\\" class=\\\"footer__link\\\"\\n      ><i class=\\\"fas fa-ticket-alt\\\"></i\\n    ></a>\\n    <a href=\\\"/user\\\" class=\\\"footer__link\\\"><i class=\\\"fas fa-user\\\"></i></a>\\n  </footer>\\n      \";\n    setTimeout(function () {\n      _this.initialeData.loading = false;\n\n      _this.render();\n    }, 2000);\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function () {\n      var _render = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0,_utilits_renderToTheDom__WEBPACK_IMPORTED_MODULE_0__.RenderDOM)(this.initialeData.loading, this.template);\n\n              case 2:\n                this.hostElement.innerHTML = _context.sent;\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function render() {\n        return _render.apply(this, arguments);\n      }\n\n      return render;\n    }()\n  }]);\n\n  return Home;\n}();\n\n//# sourceURL=webpack:///./components/home/home.component.ts?");

/***/ })

}]);