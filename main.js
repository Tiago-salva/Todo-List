/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./svg/square-check-solid.svg */ "./src/svg/square-check-solid.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./svg/pen-to-square-solid.svg */ "./src/svg/pen-to-square-solid.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./svg/trash-can-solid.svg */ "./src/svg/trash-can-solid.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 1fr 7fr;
    grid-template-areas: 
    "header header"
    "sidebar main";
}

input[type="text"],
textarea {
    border: none;
    background-color: transparent;
    outline: none;
}

input[type="radio"] {
    position: relative;
    left: 2.2rem;
    /* height: 1px;
    width: 1px; */
    padding: 0;
    margin: 0;
    /* opacity: 0; */
}

button[type="submit"] {
    height: 25px;
    width: 100px;
    position: absolute;
    bottom: 20px;
    right: 20px;
}

label {
    width: 70px;
    height: 25px;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center;
}

form {
    background-color: rgb(255, 226, 226);
    position: relative;
    display: flex;
    flex-direction: column;
}

.header {
    grid-area: header;
    width: 100%;
}

.sidebar {
    grid-area: sidebar;
    width: 100%;
}

#create-btn {
    width: 50px;
    height: 20px;
    cursor: pointer;
}

.todo-container {
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 20px;
    background-color: aquamarine;
    grid-area: main;
    width: 100%;
    height: 100%;
}

.todo {
    position: relative;
    background-color: rgb(206, 255, 127);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 5px 20px;
    border-radius: 10px;
}

.todo > .todo-status-checkbox {
    margin-right: 20px;
    background-color: rgb(255, 255, 255);
}

.todo > .todo-status-checkbox-checked {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.todo > .todo-title {
    margin-right: auto;
}

.todo > .todo-title-checked {
    text-decoration: line-through;
}

.todo > .todo-detail-button {
    width: 80px;
    height: 25px;
    margin-right: 25px;
    cursor: pointer;
}

.todo > .todo-edit-button {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    margin-right: 25px;
}

.todo > .todo-delete-button {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.todo > .todo-edit-button,
.todo > .todo-delete-button {
    background-color: transparent;    
}

.todo > .todo-status-checkbox,
.todo > .todo-edit-button,
.todo > .todo-delete-button {
    height: 18px;
    width: 18px;
    cursor: pointer;
    border: none;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.overlay-new {
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: rgba(206, 206, 206, 0.2);
    backdrop-filter: blur(3px);
}

.overlay-new-displayed {
    visibility: visible;
    opacity: 1;
}

.create-new {
    height: 400px;
    width: 650px;
}

.create-new__header {
    background-color: rgb(128, 255, 0);
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

#create-new__header-close {
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
}

.create-new__content {
    background-color: rgb(194, 226, 163);
    display: flex;
    height: 100%;
}

.create-new__sidebar {
    width: 25%;
    padding: 20px;
}

.create-new__sidebar > ul {
    list-style: none;
}

.create-new__entry {
    display: flex;
    flex-direction: column;
    background-color: rgb(201, 166, 233);
    width: 75%;
    padding: 20px;
    gap: 20px;
}

.create-new__entry-input {
    height: 40px;
}

.create-new__entry-input-big {
    height: 100%;
    resize: none;
    overflow-y: visible;
}

.create-new__entry-input,
.create-new__entry-input-big {
    font-size: 0.9rem;
    padding: 5px;
}

.create-new__priority {
    display: flex;
    gap: 5px;
}

.create-new__priority-btns {
    display: flex;
    gap: 5px;
}

.overlay-details {
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: rgba(206, 206, 206, 0.2);
    backdrop-filter: blur(3px);
}

.overlay-details-displayed {
    visibility: visible;
    opacity: 1;
}

.pop-up-details {
    min-width: 500px;
    max-width: 650px;
    height: 210px;
    background-color: antiquewhite;
    padding: 20px 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
}

.pop-up-close-button {
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    right: 20px;
}

.pop-up-title {
    font-size: 2.2rem;
    max-width: 550px;
    margin-bottom: auto;
}

.pop-up-details > p {
    font-size: 1.1rem;
    font-weight: lighter;
}

.overlay-edit {
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: rgba(206, 206, 206, 0.2);
    backdrop-filter: blur(3px);
}

.overlay-edit-displayed {
    visibility: visible;
    opacity: 1;
}

.edit-todo {
    width: 550px;
    height: 350px;
    gap: 20px;
    padding: 20px 30px;
}

.edit-todo-close-button {
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
}

.edit-todo-input {
    height: 40px;
}

.edit-todo-input-big {
    height: 100%;
    resize: none;
    overflow-y: visible;
}

.edit-todo-input,
.edit-todo-input-big {
    font-size: 0.9rem;
    padding: 5px;
    width: calc(100% - 30px);
    
}

.edit-todo__priority,
.edit-todo__priority-btns {
    display: flex;
    gap: 5px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n    grid-template-rows: 1fr 7fr;\r\n    grid-template-areas: \r\n    \"header header\"\r\n    \"sidebar main\";\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n    border: none;\r\n    background-color: transparent;\r\n    outline: none;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    position: relative;\r\n    left: 2.2rem;\r\n    /* height: 1px;\r\n    width: 1px; */\r\n    padding: 0;\r\n    margin: 0;\r\n    /* opacity: 0; */\r\n}\r\n\r\nbutton[type=\"submit\"] {\r\n    height: 25px;\r\n    width: 100px;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 20px;\r\n}\r\n\r\nlabel {\r\n    width: 70px;\r\n    height: 25px;\r\n    background-color: aqua;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nform {\r\n    background-color: rgb(255, 226, 226);\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    grid-area: header;\r\n    width: 100%;\r\n}\r\n\r\n.sidebar {\r\n    grid-area: sidebar;\r\n    width: 100%;\r\n}\r\n\r\n#create-btn {\r\n    width: 50px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 40px;\r\n    gap: 20px;\r\n    background-color: aquamarine;\r\n    grid-area: main;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.todo {\r\n    position: relative;\r\n    background-color: rgb(206, 255, 127);\r\n    width: 100%;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 5px 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.todo > .todo-status-checkbox {\r\n    margin-right: 20px;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.todo > .todo-status-checkbox-checked {\r\n    background-image: url(\"./svg/square-check-solid.svg\");\r\n}\r\n\r\n.todo > .todo-title {\r\n    margin-right: auto;\r\n}\r\n\r\n.todo > .todo-title-checked {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todo > .todo-detail-button {\r\n    width: 80px;\r\n    height: 25px;\r\n    margin-right: 25px;\r\n    cursor: pointer;\r\n}\r\n\r\n.todo > .todo-edit-button {\r\n    background-image: url(\"./svg/pen-to-square-solid.svg\");\r\n    margin-right: 25px;\r\n}\r\n\r\n.todo > .todo-delete-button {\r\n    background-image: url(\"./svg/trash-can-solid.svg\");\r\n}\r\n\r\n.todo > .todo-edit-button,\r\n.todo > .todo-delete-button {\r\n    background-color: transparent;    \r\n}\r\n\r\n.todo > .todo-status-checkbox,\r\n.todo > .todo-edit-button,\r\n.todo > .todo-delete-button {\r\n    height: 18px;\r\n    width: 18px;\r\n    cursor: pointer;\r\n    border: none;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.overlay-new {\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(206, 206, 206, 0.2);\r\n    backdrop-filter: blur(3px);\r\n}\r\n\r\n.overlay-new-displayed {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.create-new {\r\n    height: 400px;\r\n    width: 650px;\r\n}\r\n\r\n.create-new__header {\r\n    background-color: rgb(128, 255, 0);\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px;\r\n}\r\n\r\n#create-new__header-close {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.create-new__content {\r\n    background-color: rgb(194, 226, 163);\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n.create-new__sidebar {\r\n    width: 25%;\r\n    padding: 20px;\r\n}\r\n\r\n.create-new__sidebar > ul {\r\n    list-style: none;\r\n}\r\n\r\n.create-new__entry {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgb(201, 166, 233);\r\n    width: 75%;\r\n    padding: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.create-new__entry-input {\r\n    height: 40px;\r\n}\r\n\r\n.create-new__entry-input-big {\r\n    height: 100%;\r\n    resize: none;\r\n    overflow-y: visible;\r\n}\r\n\r\n.create-new__entry-input,\r\n.create-new__entry-input-big {\r\n    font-size: 0.9rem;\r\n    padding: 5px;\r\n}\r\n\r\n.create-new__priority {\r\n    display: flex;\r\n    gap: 5px;\r\n}\r\n\r\n.create-new__priority-btns {\r\n    display: flex;\r\n    gap: 5px;\r\n}\r\n\r\n.overlay-details {\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(206, 206, 206, 0.2);\r\n    backdrop-filter: blur(3px);\r\n}\r\n\r\n.overlay-details-displayed {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.pop-up-details {\r\n    min-width: 500px;\r\n    max-width: 650px;\r\n    height: 210px;\r\n    background-color: antiquewhite;\r\n    padding: 20px 30px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    overflow: hidden;\r\n}\r\n\r\n.pop-up-close-button {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 20px;\r\n}\r\n\r\n.pop-up-title {\r\n    font-size: 2.2rem;\r\n    max-width: 550px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.pop-up-details > p {\r\n    font-size: 1.1rem;\r\n    font-weight: lighter;\r\n}\r\n\r\n.overlay-edit {\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(206, 206, 206, 0.2);\r\n    backdrop-filter: blur(3px);\r\n}\r\n\r\n.overlay-edit-displayed {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.edit-todo {\r\n    width: 550px;\r\n    height: 350px;\r\n    gap: 20px;\r\n    padding: 20px 30px;\r\n}\r\n\r\n.edit-todo-close-button {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\r\n}\r\n\r\n.edit-todo-input {\r\n    height: 40px;\r\n}\r\n\r\n.edit-todo-input-big {\r\n    height: 100%;\r\n    resize: none;\r\n    overflow-y: visible;\r\n}\r\n\r\n.edit-todo-input,\r\n.edit-todo-input-big {\r\n    font-size: 0.9rem;\r\n    padding: 5px;\r\n    width: calc(100% - 30px);\r\n    \r\n}\r\n\r\n.edit-todo__priority,\r\n.edit-todo__priority-btns {\r\n    display: flex;\r\n    gap: 5px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/centralModule.js":
/*!******************************!*\
  !*** ./src/centralModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   centralModule: () => (/* binding */ centralModule)
/* harmony export */ });
const centralModule = {
    domModule: null,
};

/***/ }),

/***/ "./src/domModule.js":
/*!**************************!*\
  !*** ./src/domModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domModule: () => (/* binding */ domModule)
/* harmony export */ });
const domModule = {
    displayOverlay: function() {
        const form = document.querySelector(".create-new");
        const overlayNew = document.querySelector(".overlay-new");
        const closeOverlay = document.getElementById("create-new__header-close");
        const createBtn = document.getElementById("create-btn");
        
        createBtn.addEventListener("click", () => {
            overlayNew.classList.add("overlay-new-displayed");
        });

        closeOverlay.addEventListener("click", () => {
            overlayNew.classList.remove("overlay-new-displayed");
        });

        form.addEventListener("submit", () => {
            overlayNew.classList.remove("overlay-new-displayed");
        });
    },
    
    displayTodos: function(array) {
        const todosContainer = document.querySelector(".todo-container");
        todosContainer.innerHTML = "";
        array.forEach((obj, index) => {
            const todo = document.createElement("div");
            todo.classList.add("todo");
            todosContainer.appendChild(todo);
            
            // Todo Status
            const todoStatus = document.createElement("button");
            if(obj.checkStatus === "not-checked") {
                todoStatus.classList.add("todo-status-checkbox");
            } else {
                todoStatus.classList.add("todo-status-checkbox");
                todoStatus.classList.add("todo-status-checkbox-checked");
            };

            todoStatus.dataset.index = index;
            todo.appendChild(todoStatus);

            // Todo Title
            const title = document.createElement("h3");
            title.textContent = obj.title;

            if(obj.checkStatus === "not-checked") {
                title.classList.add("todo-title");
            } else {
                title.classList.add("todo-title");
                title.classList.add("todo-title-checked");
            };

            todo.appendChild(title);
            
            // Todo Details Button
            const detailBtn = document.createElement("button");
            detailBtn.textContent = "Details";
            detailBtn.classList.add("todo-detail-button");
            detailBtn.dataset.index = index;
            todo.appendChild(detailBtn);

            // Todo Edit Button
            const editBtn = document.createElement("button");
            editBtn.classList.add("todo-edit-button");
            editBtn.dataset.index = index;
            todo.appendChild(editBtn);
            
            // Todo Delete Button
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("todo-delete-button");
            deleteBtn.dataset.index = index;
            todo.appendChild(deleteBtn);
        }); 
    },
}

/***/ }),

/***/ "./src/todoModule.js":
/*!***************************!*\
  !*** ./src/todoModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventModule: () => (/* binding */ eventModule),
/* harmony export */   todoCreationModule: () => (/* binding */ todoCreationModule),
/* harmony export */   todoModule: () => (/* binding */ todoModule)
/* harmony export */ });
/* harmony import */ var _centralModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./centralModule */ "./src/centralModule.js");


class Todo {
    constructor(title, description, dueDate, priority, checkStatus) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkStatus = checkStatus;
    };
};

const todoModule = {
    todos: [],

    addTodo: function(todo) {
        this.todos.push(todo)
    },

    removeTodo: function(index) {
        this.todos.splice(index, 1);
    },

    editTodo: function(obj, newTitle, newDescription, newDueDate, newPriority, newCheckStatus) {
        obj.title = newTitle;
        obj.description = newDescription;
        obj.dueDate = newDueDate;
        obj.priority = newPriority;

        return obj
    }
};

const todoCreationModule = {
    createTodoFromForm: () => {
        const createForm = document.querySelector('.create-new');
        const formData = new FormData(createForm);
        const newTodo = new Todo(formData.get('title'), formData.get('description'), formData.get('dueDate'), formData.get('priority'), "not-checked");
        todoModule.addTodo(newTodo);
        createForm.reset();
    }
};

const eventModule = {
    removeAddEventListener: (elements, event, handler) => {
        elements.forEach((element) => {
          element.removeEventListener(event, handler);
          element.addEventListener(event, handler);
        });
    },

    assisgnEventsToButtons: () => {
        const allStatusCheckbox = document.querySelectorAll(".todo-status-checkbox");
        const allDetailsBtns = document.querySelectorAll(".todo-detail-button");
        const allEditBtns = document.querySelectorAll(".todo-edit-button");
        const allDeleteBtns = document.querySelectorAll(".todo-delete-button");

        eventModule.removeAddEventListener(allStatusCheckbox, "click", eventModule.handleCheckStatus);
        eventModule.removeAddEventListener(allDetailsBtns, "click", eventModule.handleDetail);
        eventModule.removeAddEventListener(allEditBtns, "click", eventModule.displayOverlayEdit);
        eventModule.removeAddEventListener(allDeleteBtns, "click", eventModule.handleDelete);
    },

    // EventListener for the todo status checkbox
    handleCheckStatus: (event) => {
        console.log(event);
        const todoStatusCheckbox = event.target;
        const todoContainer = todoStatusCheckbox.closest('.todo');

        if (todoContainer) {
            const todoTitle = todoContainer.querySelector(".todo-title");
            todoStatusCheckbox.classList.toggle("todo-status-checkbox-checked");
            todoTitle.classList.toggle("todo-title-checked");

            const indexToCheck = event.target.dataset.index;
            const checkStatus = todoModule.todos[indexToCheck].checkStatus;

            todoModule.todos[indexToCheck].checkStatus =
            checkStatus === "not-checked" ? "checked" : "not-checked";
        }
    },

    // EventListener for the details button
    handleDetail: (event) => {
        console.log(event);
        const overlayDetails = document.querySelector(".overlay-details");

        overlayDetails.classList.add("overlay-details-displayed");

        const indexToDetail = event.target.dataset.index;
        const todoElement = todoModule.todos[indexToDetail];
        const elements = document.querySelectorAll(".element");

        elements.forEach(element => {
            element.textContent = "";
        })

        // Pop up close button
        const form = document.querySelector('.create-new');
        const popUpCloseBtn = document.querySelector(".pop-up-close-button");
        popUpCloseBtn.textContent = "X";
        popUpCloseBtn.addEventListener("click", () => {
            overlayDetails.classList.remove("overlay-details-displayed");
            form.reset();
        });

        // Pop up title
        const popUpTitle = document.querySelector(".pop-up-title");
        popUpTitle.textContent = `${todoElement.title}`;

        // Pop up project
        const popUpProject = document.querySelector(".pop-up-project");
        // Necesito agregar una propiedad al construcor Todo
        popUpProject.textContent = "Project: Home";

        // Pop up description
        const popUpDescription = document.querySelector(".pop-up-description");
        popUpDescription.textContent = `Description: ${todoElement.description}`;

        // Pop up due date
        const popUpDueDate = document.querySelector(".pop-up-duedate");
        popUpDueDate.textContent = `Due date: ${todoElement.dueDate}`;

        // Pop up priority
        const popUpPriority = document.querySelector(".pop-up-priority");
        popUpPriority.textContent = `Priority: ${todoElement.priority}`;
    },

    // EventListener for the edit button
    displayOverlayEdit: (event) => {
        console.log(event);
        const editForm = document.querySelector(".edit-todo");
        const indexToEdit = event.target.dataset.index;
        console.log(indexToEdit);        
        editForm.dataset.index = indexToEdit;

        const overlayEdit = document.querySelector(".overlay-edit");
        overlayEdit.classList.add("overlay-edit-displayed");
        const editTodoCloseBtn = document.querySelector(".edit-todo-close-button");
        editTodoCloseBtn.addEventListener("click", () => {
            overlayEdit.classList.remove("overlay-edit-displayed");
            editForm.reset();
        });
    },  

    handleEdit: (index) => {   
        const editForm = document.querySelector(".edit-todo");
        const overlayEdit = document.querySelector(".overlay-edit");

        let todoElement = todoModule.todos[index];
        const formData = new FormData(editForm);
        console.log(todoElement);
        todoElement = todoModule.editTodo(todoElement, formData.get('title'), formData.get('description'), formData.get('dueDate'), formData.get('priority'));
        console.log(todoElement);
        overlayEdit.classList.remove("overlay-edit-displayed");
    },

    // EventListener for the delete button
    handleDelete: (event) => {
        const indexToDelete = event.target.dataset.index;
        todoModule.removeTodo(indexToDelete);
        _centralModule__WEBPACK_IMPORTED_MODULE_0__.centralModule.domModule.displayTodos(todoModule.todos);
        eventModule.assisgnEventsToButtons();
    },
}

/***/ }),

/***/ "./src/svg/pen-to-square-solid.svg":
/*!*****************************************!*\
  !*** ./src/svg/pen-to-square-solid.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9677c44c0a284af20652.svg";

/***/ }),

/***/ "./src/svg/square-check-solid.svg":
/*!****************************************!*\
  !*** ./src/svg/square-check-solid.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0811df160cb411fea4f.svg";

/***/ }),

/***/ "./src/svg/trash-can-solid.svg":
/*!*************************************!*\
  !*** ./src/svg/trash-can-solid.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6d4b0afacfc4c6abf25.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _domModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domModule */ "./src/domModule.js");
/* harmony import */ var _todoModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoModule */ "./src/todoModule.js");
/* harmony import */ var _centralModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./centralModule */ "./src/centralModule.js");





// When the page inits, it creates the eventListener to display the overlay
document.addEventListener("DOMContentLoaded", () => {
    _domModule__WEBPACK_IMPORTED_MODULE_1__.domModule.displayOverlay();
    _centralModule__WEBPACK_IMPORTED_MODULE_3__.centralModule.domModule = _domModule__WEBPACK_IMPORTED_MODULE_1__.domModule;
    _centralModule__WEBPACK_IMPORTED_MODULE_3__.centralModule.eventModule = _todoModule__WEBPACK_IMPORTED_MODULE_2__.eventModule;
});

// When the form it's submit, it obtains the values of each input
const form = document.querySelector(".create-new");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    _todoModule__WEBPACK_IMPORTED_MODULE_2__.todoCreationModule.createTodoFromForm();
    _domModule__WEBPACK_IMPORTED_MODULE_1__.domModule.displayTodos(_todoModule__WEBPACK_IMPORTED_MODULE_2__.todoModule.todos);
    _todoModule__WEBPACK_IMPORTED_MODULE_2__.eventModule.assisgnEventsToButtons();
});


// EventListener for the editForm submit
const editForm = document.querySelector('.edit-todo');
editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const indexToEdit = editForm.dataset.index;

    _todoModule__WEBPACK_IMPORTED_MODULE_2__.eventModule.handleEdit(indexToEdit);
    
    _domModule__WEBPACK_IMPORTED_MODULE_1__.domModule.displayTodos(_todoModule__WEBPACK_IMPORTED_MODULE_2__.todoModule.todos);
    _todoModule__WEBPACK_IMPORTED_MODULE_2__.eventModule.assisgnEventsToButtons();
    editForm.reset();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMsdUlBQWdEO0FBQzVGLDRDQUE0QywrSEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0JBQWtCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsd0JBQXdCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQkFBb0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHFCQUFxQjtBQUN0RSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2tCO0FBQ21DO0FBQzNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVM7QUFDYixJQUFJLHlEQUFhLGFBQWEsaURBQVM7QUFDdkMsSUFBSSx5REFBYSxlQUFlLG9EQUFXO0FBQzNDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBa0I7QUFDdEIsSUFBSSxpREFBUyxjQUFjLG1EQUFVO0FBQ3JDLElBQUksb0RBQVc7QUFDZixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVztBQUNmO0FBQ0EsSUFBSSxpREFBUyxjQUFjLG1EQUFVO0FBQ3JDLElBQUksb0RBQVc7QUFDZjtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NlbnRyYWxNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb01vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9zdmcvc3F1YXJlLWNoZWNrLXNvbGlkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vc3ZnL3Blbi10by1zcXVhcmUtc29saWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9zdmcvdHJhc2gtY2FuLXNvbGlkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICBcImhlYWRlciBoZWFkZXJcIlxyXG4gICAgXCJzaWRlYmFyIG1haW5cIjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbnRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIuMnJlbTtcclxuICAgIC8qIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDFweDsgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xyXG59XHJcblxyXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjYsIDIyNik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NyZWF0ZS1idG4ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b2RvLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50b2RvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDI1NSwgMTI3KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi50b2RvID4gLnRvZG8tc3RhdHVzLWNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLnRvZG8gPiAudG9kby1zdGF0dXMtY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbi50b2RvID4gLnRvZG8tdGl0bGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udG9kbyA+IC50b2RvLXRpdGxlLWNoZWNrZWQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi50b2RvID4gLnRvZG8tZGV0YWlsLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRvZG8gPiAudG9kby1lZGl0LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi50b2RvID4gLnRvZG8tZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbn1cclxuXHJcbi50b2RvID4gLnRvZG8tZWRpdC1idXR0b24sXHJcbi50b2RvID4gLnRvZG8tZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgICAgXHJcbn1cclxuXHJcbi50b2RvID4gLnRvZG8tc3RhdHVzLWNoZWNrYm94LFxyXG4udG9kbyA+IC50b2RvLWVkaXQtYnV0dG9uLFxyXG4udG9kbyA+IC50b2RvLWRlbGV0ZS1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLm92ZXJsYXktbmV3IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuMik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG5cclxuLm92ZXJsYXktbmV3LWRpc3BsYXllZCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNyZWF0ZS1uZXcge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA2NTBweDtcclxufVxyXG5cclxuLmNyZWF0ZS1uZXdfX2hlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAyNTUsIDApO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jY3JlYXRlLW5ld19faGVhZGVyLWNsb3NlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3X19jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDIyNiwgMTYzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3X19zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY3JlYXRlLW5ld19fc2lkZWJhciA+IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3X19lbnRyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE2NiwgMjMzKTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uY3JlYXRlLW5ld19fZW50cnktaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uY3JlYXRlLW5ld19fZW50cnktaW5wdXQtYmlnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3X19lbnRyeS1pbnB1dCxcclxuLmNyZWF0ZS1uZXdfX2VudHJ5LWlucHV0LWJpZyB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNyZWF0ZS1uZXdfX3ByaW9yaXR5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuLmNyZWF0ZS1uZXdfX3ByaW9yaXR5LWJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4ub3ZlcmxheS1kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuMik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG5cclxuLm92ZXJsYXktZGV0YWlscy1kaXNwbGF5ZWQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5wb3AtdXAtZGV0YWlscyB7XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wb3AtdXAtY2xvc2UtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxufVxyXG5cclxuLnBvcC11cC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4ucG9wLXVwLWRldGFpbHMgPiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5vdmVybGF5LWVkaXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCAyMDYsIDIwNiwgMC4yKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcblxyXG4ub3ZlcmxheS1lZGl0LWRpc3BsYXllZCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmVkaXQtdG9kbyB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWNsb3NlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNXB4O1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWlucHV0IHtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmVkaXQtdG9kby1pbnB1dC1iaWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcclxufVxyXG5cclxuLmVkaXQtdG9kby1pbnB1dCxcclxuLmVkaXQtdG9kby1pbnB1dC1iaWcge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBcclxufVxyXG5cclxuLmVkaXQtdG9kb19fcHJpb3JpdHksXHJcbi5lZGl0LXRvZG9fX3ByaW9yaXR5LWJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCOztrQkFFYztBQUNsQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaO2lCQUNhO0lBQ2IsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFD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Q3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osd0JBQXdCOztBQUU1Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDdmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICBcXFwic2lkZWJhciBtYWluXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMi4ycmVtO1xcclxcbiAgICAvKiBoZWlnaHQ6IDFweDtcXHJcXG4gICAgd2lkdGg6IDFweDsgKi9cXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDIwcHg7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI2LCAyMjYpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1idG4ge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDQwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjU1LCAxMjcpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudG9kby1zdGF0dXMtY2hlY2tib3gge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudG9kby1zdGF0dXMtY2hlY2tib3gtY2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9zdmcvc3F1YXJlLWNoZWNrLXNvbGlkLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyA+IC50b2RvLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyA+IC50b2RvLXRpdGxlLWNoZWNrZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudG9kby1kZXRhaWwtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvID4gLnRvZG8tZWRpdC1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vc3ZnL3Blbi10by1zcXVhcmUtc29saWQuc3ZnXFxcIik7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudG9kby1kZWxldGUtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3N2Zy90cmFzaC1jYW4tc29saWQuc3ZnXFxcIik7XFxyXFxufVxcclxcblxcclxcbi50b2RvID4gLnRvZG8tZWRpdC1idXR0b24sXFxyXFxuLnRvZG8gPiAudG9kby1kZWxldGUtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udG9kbyA+IC50b2RvLXN0YXR1cy1jaGVja2JveCxcXHJcXG4udG9kbyA+IC50b2RvLWVkaXQtYnV0dG9uLFxcclxcbi50b2RvID4gLnRvZG8tZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LW5ldyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjIpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktbmV3LWRpc3BsYXllZCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbmV3IHtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgd2lkdGg6IDY1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19faGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMjU1LCAwKTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtbmV3X19oZWFkZXItY2xvc2Uge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19fY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDIyNiwgMTYzKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19fc2lkZWJhciB7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbmV3X19zaWRlYmFyID4gdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19fZW50cnkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNjYsIDIzMyk7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1uZXdfX2VudHJ5LWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19fZW50cnktaW5wdXQtYmlnIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbmV3X19lbnRyeS1pbnB1dCxcXHJcXG4uY3JlYXRlLW5ld19fZW50cnktaW5wdXQtYmlnIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1uZXdfX3ByaW9yaXR5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbmV3X19wcmlvcml0eS1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LWRldGFpbHMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCAyMDYsIDIwNiwgMC4yKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LWRldGFpbHMtZGlzcGxheWVkIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC11cC1kZXRhaWxzIHtcXHJcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWNsb3NlLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3AtdXAtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC11cC1kZXRhaWxzID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktZWRpdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjIpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktZWRpdC1kaXNwbGF5ZWQge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvIHtcXHJcXG4gICAgd2lkdGg6IDU1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdG9kby1jbG9zZS1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWlucHV0LWJpZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWlucHV0LFxcclxcbi5lZGl0LXRvZG8taW5wdXQtYmlnIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdG9kb19fcHJpb3JpdHksXFxyXFxuLmVkaXQtdG9kb19fcHJpb3JpdHktYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNlbnRyYWxNb2R1bGUgPSB7XHJcbiAgICBkb21Nb2R1bGU6IG51bGwsXHJcbn07IiwiZXhwb3J0IGNvbnN0IGRvbU1vZHVsZSA9IHtcclxuICAgIGRpc3BsYXlPdmVybGF5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtbmV3XCIpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXlOZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXktbmV3XCIpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLW5ld19faGVhZGVyLWNsb3NlXCIpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWJ0blwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgb3ZlcmxheU5ldy5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheS1uZXctZGlzcGxheWVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjbG9zZU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgb3ZlcmxheU5ldy5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheS1uZXctZGlzcGxheWVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBvdmVybGF5TmV3LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVybGF5LW5ldy1kaXNwbGF5ZWRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBkaXNwbGF5VG9kb3M6IGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICAgICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcclxuICAgICAgICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUb2RvIFN0YXR1c1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgaWYob2JqLmNoZWNrU3RhdHVzID09PSBcIm5vdC1jaGVja2VkXCIpIHtcclxuICAgICAgICAgICAgICAgIHRvZG9TdGF0dXMuY2xhc3NMaXN0LmFkZChcInRvZG8tc3RhdHVzLWNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9kb1N0YXR1cy5jbGFzc0xpc3QuYWRkKFwidG9kby1zdGF0dXMtY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgICAgICB0b2RvU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN0YXR1cy1jaGVja2JveC1jaGVja2VkXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdG9kb1N0YXR1cy5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb1N0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2RvIFRpdGxlXHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9iai5jaGVja1N0YXR1cyA9PT0gXCJub3QtY2hlY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGUtY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG9kbyBEZXRhaWxzIEJ1dHRvblxyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBkZXRhaWxCdG4udGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcclxuICAgICAgICAgICAgZGV0YWlsQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRldGFpbC1idXR0b25cIik7XHJcbiAgICAgICAgICAgIGRldGFpbEJ0bi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGV0YWlsQnRuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZG8gRWRpdCBCdXR0b25cclxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tZWRpdC1idXR0b25cIik7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG9kbyBEZWxldGUgQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZWxldGUtYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSxcclxufSIsImltcG9ydCB7IGNlbnRyYWxNb2R1bGUgfSBmcm9tIFwiLi9jZW50cmFsTW9kdWxlXCI7XHJcblxyXG5jbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrU3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmNoZWNrU3RhdHVzID0gY2hlY2tTdGF0dXM7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZG9Nb2R1bGUgPSB7XHJcbiAgICB0b2RvczogW10sXHJcblxyXG4gICAgYWRkVG9kbzogZnVuY3Rpb24odG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKVxyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVUb2RvOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH0sXHJcblxyXG4gICAgZWRpdFRvZG86IGZ1bmN0aW9uKG9iaiwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3Q2hlY2tTdGF0dXMpIHtcclxuICAgICAgICBvYmoudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgICAgICBvYmouZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgICAgICBvYmouZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICAgICAgb2JqLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmpcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2RvQ3JlYXRpb25Nb2R1bGUgPSB7XHJcbiAgICBjcmVhdGVUb2RvRnJvbUZvcm06ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjcmVhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXcnKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShjcmVhdGVGb3JtKTtcclxuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oZm9ybURhdGEuZ2V0KCd0aXRsZScpLCBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyksIGZvcm1EYXRhLmdldCgnZHVlRGF0ZScpLCBmb3JtRGF0YS5nZXQoJ3ByaW9yaXR5JyksIFwibm90LWNoZWNrZWRcIik7XHJcbiAgICAgICAgdG9kb01vZHVsZS5hZGRUb2RvKG5ld1RvZG8pO1xyXG4gICAgICAgIGNyZWF0ZUZvcm0ucmVzZXQoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudE1vZHVsZSA9IHtcclxuICAgIHJlbW92ZUFkZEV2ZW50TGlzdGVuZXI6IChlbGVtZW50cywgZXZlbnQsIGhhbmRsZXIpID0+IHtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgYXNzaXNnbkV2ZW50c1RvQnV0dG9uczogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsbFN0YXR1c0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLXN0YXR1cy1jaGVja2JveFwiKTtcclxuICAgICAgICBjb25zdCBhbGxEZXRhaWxzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1kZXRhaWwtYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGFsbEVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLWVkaXQtYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGFsbERlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8tZGVsZXRlLWJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgZXZlbnRNb2R1bGUucmVtb3ZlQWRkRXZlbnRMaXN0ZW5lcihhbGxTdGF0dXNDaGVja2JveCwgXCJjbGlja1wiLCBldmVudE1vZHVsZS5oYW5kbGVDaGVja1N0YXR1cyk7XHJcbiAgICAgICAgZXZlbnRNb2R1bGUucmVtb3ZlQWRkRXZlbnRMaXN0ZW5lcihhbGxEZXRhaWxzQnRucywgXCJjbGlja1wiLCBldmVudE1vZHVsZS5oYW5kbGVEZXRhaWwpO1xyXG4gICAgICAgIGV2ZW50TW9kdWxlLnJlbW92ZUFkZEV2ZW50TGlzdGVuZXIoYWxsRWRpdEJ0bnMsIFwiY2xpY2tcIiwgZXZlbnRNb2R1bGUuZGlzcGxheU92ZXJsYXlFZGl0KTtcclxuICAgICAgICBldmVudE1vZHVsZS5yZW1vdmVBZGRFdmVudExpc3RlbmVyKGFsbERlbGV0ZUJ0bnMsIFwiY2xpY2tcIiwgZXZlbnRNb2R1bGUuaGFuZGxlRGVsZXRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRXZlbnRMaXN0ZW5lciBmb3IgdGhlIHRvZG8gc3RhdHVzIGNoZWNrYm94XHJcbiAgICBoYW5kbGVDaGVja1N0YXR1czogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9TdGF0dXNDaGVja2JveCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gdG9kb1N0YXR1c0NoZWNrYm94LmNsb3Nlc3QoJy50b2RvJyk7XHJcblxyXG4gICAgICAgIGlmICh0b2RvQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IHRvZG9Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpO1xyXG4gICAgICAgICAgICB0b2RvU3RhdHVzQ2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZShcInRvZG8tc3RhdHVzLWNoZWNrYm94LWNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby10aXRsZS1jaGVja2VkXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kZXhUb0NoZWNrID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gdG9kb01vZHVsZS50b2Rvc1tpbmRleFRvQ2hlY2tdLmNoZWNrU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgdG9kb01vZHVsZS50b2Rvc1tpbmRleFRvQ2hlY2tdLmNoZWNrU3RhdHVzID1cclxuICAgICAgICAgICAgY2hlY2tTdGF0dXMgPT09IFwibm90LWNoZWNrZWRcIiA/IFwiY2hlY2tlZFwiIDogXCJub3QtY2hlY2tlZFwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gRXZlbnRMaXN0ZW5lciBmb3IgdGhlIGRldGFpbHMgYnV0dG9uXHJcbiAgICBoYW5kbGVEZXRhaWw6IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBjb25zdCBvdmVybGF5RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheS1kZXRhaWxzXCIpO1xyXG5cclxuICAgICAgICBvdmVybGF5RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheS1kZXRhaWxzLWRpc3BsYXllZFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXhUb0RldGFpbCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gdG9kb01vZHVsZS50b2Rvc1tpbmRleFRvRGV0YWlsXTtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWxlbWVudFwiKTtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gUG9wIHVwIGNsb3NlIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLW5ldycpO1xyXG4gICAgICAgIGNvbnN0IHBvcFVwQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cC1jbG9zZS1idXR0b25cIik7XHJcbiAgICAgICAgcG9wVXBDbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xyXG4gICAgICAgIHBvcFVwQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgb3ZlcmxheURldGFpbHMuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJsYXktZGV0YWlscy1kaXNwbGF5ZWRcIik7XHJcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUG9wIHVwIHRpdGxlXHJcbiAgICAgICAgY29uc3QgcG9wVXBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwLXRpdGxlXCIpO1xyXG4gICAgICAgIHBvcFVwVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b2RvRWxlbWVudC50aXRsZX1gO1xyXG5cclxuICAgICAgICAvLyBQb3AgdXAgcHJvamVjdFxyXG4gICAgICAgIGNvbnN0IHBvcFVwUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwLXByb2plY3RcIik7XHJcbiAgICAgICAgLy8gTmVjZXNpdG8gYWdyZWdhciB1bmEgcHJvcGllZGFkIGFsIGNvbnN0cnVjb3IgVG9kb1xyXG4gICAgICAgIHBvcFVwUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogSG9tZVwiO1xyXG5cclxuICAgICAgICAvLyBQb3AgdXAgZGVzY3JpcHRpb25cclxuICAgICAgICBjb25zdCBwb3BVcERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXAtZGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgcG9wVXBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHt0b2RvRWxlbWVudC5kZXNjcmlwdGlvbn1gO1xyXG5cclxuICAgICAgICAvLyBQb3AgdXAgZHVlIGRhdGVcclxuICAgICAgICBjb25zdCBwb3BVcER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cC1kdWVkYXRlXCIpO1xyXG4gICAgICAgIHBvcFVwRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHt0b2RvRWxlbWVudC5kdWVEYXRlfWA7XHJcblxyXG4gICAgICAgIC8vIFBvcCB1cCBwcmlvcml0eVxyXG4gICAgICAgIGNvbnN0IHBvcFVwUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cC1wcmlvcml0eVwiKTtcclxuICAgICAgICBwb3BVcFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RvZG9FbGVtZW50LnByaW9yaXR5fWA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEV2ZW50TGlzdGVuZXIgZm9yIHRoZSBlZGl0IGJ1dHRvblxyXG4gICAgZGlzcGxheU92ZXJsYXlFZGl0OiAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdG9kb1wiKTtcclxuICAgICAgICBjb25zdCBpbmRleFRvRWRpdCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4VG9FZGl0KTsgICAgICAgIFxyXG4gICAgICAgIGVkaXRGb3JtLmRhdGFzZXQuaW5kZXggPSBpbmRleFRvRWRpdDtcclxuXHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXktZWRpdFwiKTtcclxuICAgICAgICBvdmVybGF5RWRpdC5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheS1lZGl0LWRpc3BsYXllZFwiKTtcclxuICAgICAgICBjb25zdCBlZGl0VG9kb0Nsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRvZG8tY2xvc2UtYnV0dG9uXCIpO1xyXG4gICAgICAgIGVkaXRUb2RvQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgb3ZlcmxheUVkaXQuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJsYXktZWRpdC1kaXNwbGF5ZWRcIik7XHJcbiAgICAgICAgICAgIGVkaXRGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCAgXHJcblxyXG4gICAgaGFuZGxlRWRpdDogKGluZGV4KSA9PiB7ICAgXHJcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdG9kb1wiKTtcclxuICAgICAgICBjb25zdCBvdmVybGF5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheS1lZGl0XCIpO1xyXG5cclxuICAgICAgICBsZXQgdG9kb0VsZW1lbnQgPSB0b2RvTW9kdWxlLnRvZG9zW2luZGV4XTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlZGl0Rm9ybSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb0VsZW1lbnQpO1xyXG4gICAgICAgIHRvZG9FbGVtZW50ID0gdG9kb01vZHVsZS5lZGl0VG9kbyh0b2RvRWxlbWVudCwgZm9ybURhdGEuZ2V0KCd0aXRsZScpLCBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyksIGZvcm1EYXRhLmdldCgnZHVlRGF0ZScpLCBmb3JtRGF0YS5nZXQoJ3ByaW9yaXR5JykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9FbGVtZW50KTtcclxuICAgICAgICBvdmVybGF5RWRpdC5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheS1lZGl0LWRpc3BsYXllZFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRXZlbnRMaXN0ZW5lciBmb3IgdGhlIGRlbGV0ZSBidXR0b25cclxuICAgIGhhbmRsZURlbGV0ZTogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUb0RlbGV0ZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgIHRvZG9Nb2R1bGUucmVtb3ZlVG9kbyhpbmRleFRvRGVsZXRlKTtcclxuICAgICAgICBjZW50cmFsTW9kdWxlLmRvbU1vZHVsZS5kaXNwbGF5VG9kb3ModG9kb01vZHVsZS50b2Rvcyk7XHJcbiAgICAgICAgZXZlbnRNb2R1bGUuYXNzaXNnbkV2ZW50c1RvQnV0dG9ucygpO1xyXG4gICAgfSxcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IGRvbU1vZHVsZSB9IGZyb20gXCIuL2RvbU1vZHVsZVwiO1xyXG5pbXBvcnQgeyB0b2RvTW9kdWxlLCB0b2RvQ3JlYXRpb25Nb2R1bGUsIGV2ZW50TW9kdWxlIH0gZnJvbSBcIi4vdG9kb01vZHVsZVwiO1xyXG5pbXBvcnQgeyBjZW50cmFsTW9kdWxlIH0gZnJvbSBcIi4vY2VudHJhbE1vZHVsZVwiO1xyXG5cclxuLy8gV2hlbiB0aGUgcGFnZSBpbml0cywgaXQgY3JlYXRlcyB0aGUgZXZlbnRMaXN0ZW5lciB0byBkaXNwbGF5IHRoZSBvdmVybGF5XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGRvbU1vZHVsZS5kaXNwbGF5T3ZlcmxheSgpO1xyXG4gICAgY2VudHJhbE1vZHVsZS5kb21Nb2R1bGUgPSBkb21Nb2R1bGU7XHJcbiAgICBjZW50cmFsTW9kdWxlLmV2ZW50TW9kdWxlID0gZXZlbnRNb2R1bGU7XHJcbn0pO1xyXG5cclxuLy8gV2hlbiB0aGUgZm9ybSBpdCdzIHN1Ym1pdCwgaXQgb2J0YWlucyB0aGUgdmFsdWVzIG9mIGVhY2ggaW5wdXRcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLW5ld1wiKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRvZG9DcmVhdGlvbk1vZHVsZS5jcmVhdGVUb2RvRnJvbUZvcm0oKTtcclxuICAgIGRvbU1vZHVsZS5kaXNwbGF5VG9kb3ModG9kb01vZHVsZS50b2Rvcyk7XHJcbiAgICBldmVudE1vZHVsZS5hc3Npc2duRXZlbnRzVG9CdXR0b25zKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIEV2ZW50TGlzdGVuZXIgZm9yIHRoZSBlZGl0Rm9ybSBzdWJtaXRcclxuY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvJyk7XHJcbmVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBpbmRleFRvRWRpdCA9IGVkaXRGb3JtLmRhdGFzZXQuaW5kZXg7XHJcblxyXG4gICAgZXZlbnRNb2R1bGUuaGFuZGxlRWRpdChpbmRleFRvRWRpdCk7XHJcbiAgICBcclxuICAgIGRvbU1vZHVsZS5kaXNwbGF5VG9kb3ModG9kb01vZHVsZS50b2Rvcyk7XHJcbiAgICBldmVudE1vZHVsZS5hc3Npc2duRXZlbnRzVG9CdXR0b25zKCk7XHJcbiAgICBlZGl0Rm9ybS5yZXNldCgpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=