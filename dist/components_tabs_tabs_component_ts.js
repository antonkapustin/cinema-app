"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_tabs_tabs_component_ts"],{

/***/ 6079:
/*!*******************************************!*\
  !*** ./components/tabs/tabs.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tabs\": () => (/* binding */ Tabs)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Tabs = /*#__PURE__*/function () {\n  function Tabs(data, hostElement) {\n    _classCallCheck(this, Tabs);\n\n    this.data = data;\n    this.params = [\"synopsis\", \"time\"];\n    this.hostElement = hostElement;\n    this[\"var\"] = \"{{synopsis}}\";\n    this.template = \"<p class=\\\"synopsis__paragraph\\\">{{\".concat(this[\"var\"], \"}}</p>\");\n    this.render();\n    this.applyHandler();\n  }\n\n  _createClass(Tabs, [{\n    key: \"render\",\n    value: function render() {\n      var tabsSelect = this.hostElement.querySelector(\".tabs__select\");\n      tabsSelect.innerHTML = this.renderHeader();\n      var content = this.hostElement.querySelector(\".tabs__content\"); // if (value === 1) {\n      //   content.innerHTML = \"\";\n      //   const seanses = new ShowTime(this.data, content);\n      // } else {\n      //   content.innerHTML = this.renderContent(value);\n      // }\n    }\n  }, {\n    key: \"applyHandler\",\n    value: function applyHandler() {\n      this.hostElement.addEventListener(\"click\", this.onClick.bind(this));\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick(event) {\n      var current = event.target;\n\n      while (current !== this.hostElement) {\n        if (current.classList.contains(\"tabs__input\")) {\n          break;\n        }\n\n        current = current.parentElement;\n      }\n\n      if (current === this.hostElement) {\n        return;\n      }\n\n      console.log(current.value);\n    }\n  }, {\n    key: \"renderHeader\",\n    value: function renderHeader() {\n      var template = \"\";\n\n      for (var i = 0; i < this.params.length; i++) {\n        template += \"<label class=\\\"tabs__item\\\"><input type=\\\"radio\\\" class=\\\"tabs__input\\\" name=\\\"tabs__input\\\" value=\\\"\".concat(this.params[i], \"\\\" checked/>\\n        <span class=\\\"tabs__title\\\">\").concat(this.params[i], \"</span></label>\");\n      }\n\n      return template;\n    }\n  }]);\n\n  return Tabs;\n}();\n\n//# sourceURL=webpack:///./components/tabs/tabs.component.ts?");

/***/ })

}]);