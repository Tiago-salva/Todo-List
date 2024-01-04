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
    grid-template-columns: 25% 75%;
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

button[type="submit"]:not(.create-project-btn) {
    height: 25px;
    width: 100px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: darkseagreen;
}

.nav {
    font-size: 1.5rem;
    list-style: none;
}

.nav-item {
    margin-bottom: 15px;
}

.projects {
    list-style: none;
    margin: 15px 0 0 20px;
    font-size: 1.2rem;
}

.project {
    cursor: pointer;
}

.project-selected::before {
    content: "//";
    font-size: 1.4rem;
    margin-right: 5px;
}

#create-btn {
    width: 70px;
    height: 40px;
    cursor: pointer;
    margin-top: auto;
    border-radius: 20px;
    border: none;
    background-color: aquamarine;
    font-size: 1.8rem;
    font-weight: 700;
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
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    font-size: 1.2rem;
}

.create-new__sidebar > h3 {
    cursor: pointer;
}

.create-new__sidebar-title-selected::before {
    content: "//";
    font-size: 1.5rem;
    margin-right: 10px;
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

.create-project-btn {
    height: 25px;
    width: 100px;
    margin-top: auto;
    cursor: pointer;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 25% 75%;\r\n    grid-template-rows: 1fr 7fr;\r\n    grid-template-areas: \r\n    \"header header\"\r\n    \"sidebar main\";\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n    border: none;\r\n    background-color: transparent;\r\n    outline: none;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n    position: relative;\r\n    left: 2.2rem;\r\n    /* height: 1px;\r\n    width: 1px; */\r\n    padding: 0;\r\n    margin: 0;\r\n    /* opacity: 0; */\r\n}\r\n\r\nbutton[type=\"submit\"]:not(.create-project-btn) {\r\n    height: 25px;\r\n    width: 100px;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\nlabel {\r\n    width: 70px;\r\n    height: 25px;\r\n    background-color: aqua;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nform {\r\n    background-color: rgb(255, 226, 226);\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header {\r\n    grid-area: header;\r\n    width: 100%;\r\n}\r\n\r\n.sidebar {\r\n    grid-area: sidebar;\r\n    width: 100%;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: darkseagreen;\r\n}\r\n\r\n.nav {\r\n    font-size: 1.5rem;\r\n    list-style: none;\r\n}\r\n\r\n.nav-item {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.projects {\r\n    list-style: none;\r\n    margin: 15px 0 0 20px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.project {\r\n    cursor: pointer;\r\n}\r\n\r\n.project-selected::before {\r\n    content: \"//\";\r\n    font-size: 1.4rem;\r\n    margin-right: 5px;\r\n}\r\n\r\n#create-btn {\r\n    width: 70px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    margin-top: auto;\r\n    border-radius: 20px;\r\n    border: none;\r\n    background-color: aquamarine;\r\n    font-size: 1.8rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 40px;\r\n    gap: 20px;\r\n    background-color: aquamarine;\r\n    grid-area: main;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.todo {\r\n    position: relative;\r\n    background-color: rgb(206, 255, 127);\r\n    width: 100%;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 5px 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.todo > .todo-status-checkbox {\r\n    margin-right: 20px;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.todo > .todo-status-checkbox-checked {\r\n    background-image: url(\"./svg/square-check-solid.svg\");\r\n}\r\n\r\n.todo > .todo-title {\r\n    margin-right: auto;\r\n}\r\n\r\n.todo > .todo-title-checked {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todo > .todo-detail-button {\r\n    width: 80px;\r\n    height: 25px;\r\n    margin-right: 25px;\r\n    cursor: pointer;\r\n}\r\n\r\n.todo > .todo-edit-button {\r\n    background-image: url(\"./svg/pen-to-square-solid.svg\");\r\n    margin-right: 25px;\r\n}\r\n\r\n.todo > .todo-delete-button {\r\n    background-image: url(\"./svg/trash-can-solid.svg\");\r\n}\r\n\r\n.todo > .todo-edit-button,\r\n.todo > .todo-delete-button {\r\n    background-color: transparent;    \r\n}\r\n\r\n.todo > .todo-status-checkbox,\r\n.todo > .todo-edit-button,\r\n.todo > .todo-delete-button {\r\n    height: 18px;\r\n    width: 18px;\r\n    cursor: pointer;\r\n    border: none;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.overlay-new {\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(206, 206, 206, 0.2);\r\n    backdrop-filter: blur(3px);\r\n}\r\n\r\n.overlay-new-displayed {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.create-new {\r\n    height: 400px;\r\n    width: 650px;\r\n}\r\n\r\n.create-new__header {\r\n    background-color: rgb(128, 255, 0);\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px;\r\n}\r\n\r\n#create-new__header-close {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n.create-new__content {\r\n    background-color: rgb(194, 226, 163);\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n.create-new__sidebar {\r\n    width: 25%;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.create-new__sidebar > h3 {\r\n    cursor: pointer;\r\n}\r\n\r\n.create-new__sidebar-title-selected::before {\r\n    content: \"//\";\r\n    font-size: 1.5rem;\r\n    margin-right: 10px;\r\n}\r\n\r\n.create-new__entry {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgb(201, 166, 233);\r\n    width: 75%;\r\n    padding: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.create-new__entry-input {\r\n    height: 40px;\r\n}\r\n\r\n.create-project-btn {\r\n    height: 25px;\r\n    width: 100px;\r\n    margin-top: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.create-new__entry-input-big {\r\n    height: 100%;\r\n    resize: none;\r\n    overflow-y: visible;\r\n}\r\n\r\n.create-new__entry-input,\r\n.create-new__entry-input-big {\r\n    font-size: 0.9rem;\r\n    padding: 5px;\r\n}\r\n\r\n.create-new__priority {\r\n    display: flex;\r\n    gap: 5px;\r\n}\r\n\r\n.create-new__priority-btns {\r\n    display: flex;\r\n    gap: 5px;\r\n}\r\n\r\n.overlay-details {\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(206, 206, 206, 0.2);\r\n    backdrop-filter: blur(3px);\r\n}\r\n\r\n.overlay-details-displayed {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.pop-up-details {\r\n    min-width: 500px;\r\n    max-width: 650px;\r\n    height: 210px;\r\n    background-color: antiquewhite;\r\n    padding: 20px 30px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    overflow: hidden;\r\n}\r\n\r\n.pop-up-close-button {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 20px;\r\n}\r\n\r\n.pop-up-title {\r\n    font-size: 2.2rem;\r\n    max-width: 550px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.pop-up-details > p {\r\n    font-size: 1.1rem;\r\n    font-weight: lighter;\r\n}\r\n\r\n.overlay-edit {\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(206, 206, 206, 0.2);\r\n    backdrop-filter: blur(3px);\r\n}\r\n\r\n.overlay-edit-displayed {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.edit-todo {\r\n    width: 550px;\r\n    height: 350px;\r\n    gap: 20px;\r\n    padding: 20px 30px;\r\n}\r\n\r\n.edit-todo-close-button {\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n    background: none;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\r\n}\r\n\r\n.edit-todo-input {\r\n    height: 40px;\r\n}\r\n\r\n.edit-todo-input-big {\r\n    height: 100%;\r\n    resize: none;\r\n    overflow-y: visible;\r\n}\r\n\r\n.edit-todo-input,\r\n.edit-todo-input-big {\r\n    font-size: 0.9rem;\r\n    padding: 5px;\r\n    width: calc(100% - 30px);\r\n    \r\n}\r\n\r\n.edit-todo__priority,\r\n.edit-todo__priority-btns {\r\n    display: flex;\r\n    gap: 5px;\r\n}"],"sourceRoot":""}]);
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

    assignEventsToProjects: () => {
        const allProjects = document.querySelectorAll(".project");
        domModule.removeAddEventListener(allProjects, "click", domModule.createEventToShowProjectSelected);
    },

    removeAddEventListener: (elements, event, handler) => {
        elements.forEach((element) => {
          element.removeEventListener(event, handler);
          element.addEventListener(event, handler);
        });
    },

    // It creates the event to show wich project is selected
    createEventToShowProjectSelected : (event) => {     
        const allProjects = document.querySelectorAll(".project");
  
        allProjects.forEach(project => {
            project.classList.remove("project-selected");
        });

        event.currentTarget.classList.add("project-selected");
        const index = event.currentTarget.dataset.index;
    },

    // It creates the event to change the form depending on what you want to create 
    createEventToChangeTheForm: () => {
        const createNewEntry = document.querySelector(".create-new__entry");
        const optionTodo = document.getElementById("option-to-do");
        const optionProject = document.getElementById("option-project");
        
        optionTodo.addEventListener("click", () => {
            optionProject.classList.remove('create-new__sidebar-title-selected');
            optionTodo.classList.add('create-new__sidebar-title-selected');
            createNewEntry.innerHTML = "";
            createTodoForm();
        });

        optionProject.addEventListener("click", () => {
            optionTodo.classList.remove('create-new__sidebar-title-selected');
            optionProject.classList.add('create-new__sidebar-title-selected');
            createNewEntry.innerHTML = "";
            createProjectForm();
        });

        function createProjectForm() {
            createNewEntry.innerHTML = `
            <input type="text" class="create-new__entry-input input" placeholder="Name" maxlength="30" name="title" required>
            <button class="create-project-btn" type="submit">Create project</button>`;
        }

        function createTodoForm() {
            createNewEntry.innerHTML = `
            <input type="text" class="create-new__entry-input input" placeholder="Name" maxlength="30" name="title" required>
            <textarea class="create-new__entry-input-big input" placeholder="Description" name="description" required></textarea>
            <div class="create-new__date">
                <span class="create-new__date-title">Due Date:</span>
                <input type="date" class="create-new__date-input input" name="dueDate" required>
            </div>
            <div class="create-new__priority">
                <span class="create-new__priority-title">Priority:</span>
                <div class="create-new__priority-btns">
                    <input type="radio" name="priority" class="priority-btn input" id="low" value="Low" required>
                    <label for="low">Low</label>
                    <input type="radio" name="priority" class="priority-btn input" id="medium" value="Medium" required>
                    <label for="medium">Medium</label>
                    <input type="radio" name="priority" class="priority-btn input" id="high" value="High" required>
                    <label for="high">High</label>
                </div>
            </div>
            <button class="add-todo-btn" type="submit">Add todo</button>`;
        };
    },
    
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

    displayProjects: function(array) {
        const listOfProjects = document.querySelector(".projects");
        listOfProjects.innerHTML = "";
        array.forEach((obj, index) => {
            const project = document.createElement("li");
            project.dataset.index = index + 1;
            project.classList.add("project");
            project.classList.add("nav-item");
            listOfProjects.appendChild(project);
            const projectName = document.createElement("span");
            projectName.textContent = obj.title;
            projectName.classList.add("project-name");
            project.appendChild(projectName);
        })
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
/* harmony export */   projectModule: () => (/* binding */ projectModule),
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

class Project {
    constructor(title, projectId) {
        this.title = title;
        this.projectId = projectId;
    }
};

const projectModule = {
    projects: [],

    addProject: function(project) {
        this.projects.push(project)
    },

    removeProject: function(index) {
        this.projects.splice(index, 1);
    }
};

const todoCreationModule = {
    createFromForm: () => {
        const createForm = document.querySelector('.create-new');
        const formData = new FormData(createForm);

        const selectedOption = document.querySelector(".create-new__sidebar-title-selected");
        if(selectedOption.textContent === "To-Do") {
            const newTodo = new Todo(formData.get('title'), formData.get('description'), formData.get('dueDate'), formData.get('priority'), "not-checked");
            todoModule.addTodo(newTodo);
        } else {
            const newProject = new Project(formData.get('title'));
            projectModule.addProject(newProject);
        }

        createForm.reset();
    }
};

const eventModule = {
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

    removeAddEventListener: (elements, event, handler) => {
        elements.forEach((element) => {
          element.removeEventListener(event, handler);
          element.addEventListener(event, handler);
        });
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
    _domModule__WEBPACK_IMPORTED_MODULE_1__.domModule.assignEventsToProjects();
    _domModule__WEBPACK_IMPORTED_MODULE_1__.domModule.createEventToChangeTheForm();
});

// When the form it's submit, it obtains the values of each input
const form = document.querySelector(".create-new");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    _todoModule__WEBPACK_IMPORTED_MODULE_2__.todoCreationModule.createFromForm();
    _domModule__WEBPACK_IMPORTED_MODULE_1__.domModule.displayTodos(_todoModule__WEBPACK_IMPORTED_MODULE_2__.todoModule.todos);
    _domModule__WEBPACK_IMPORTED_MODULE_1__.domModule.displayProjects(_todoModule__WEBPACK_IMPORTED_MODULE_2__.projectModule.projects);
    _todoModule__WEBPACK_IMPORTED_MODULE_2__.eventModule.assisgnEventsToButtons();
    _domModule__WEBPACK_IMPORTED_MODULE_1__.domModule.assignEventsToProjects();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMsdUlBQWdEO0FBQzVGLDRDQUE0QywrSEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbktnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVztBQUNmO0FBQ0EsSUFBSSxpREFBUyxjQUFjLG1EQUFVO0FBQ3JDLElBQUksb0RBQVc7QUFDZjtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NlbnRyYWxNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbU1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb01vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9zdmcvc3F1YXJlLWNoZWNrLXNvbGlkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vc3ZnL3Blbi10by1zcXVhcmUtc29saWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9zdmcvdHJhc2gtY2FuLXNvbGlkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgN2ZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICBcImhlYWRlciBoZWFkZXJcIlxyXG4gICAgXCJzaWRlYmFyIG1haW5cIjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbnRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDIuMnJlbTtcclxuICAgIC8qIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDFweDsgKi9cclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xyXG59XHJcblxyXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXTpub3QoLmNyZWF0ZS1wcm9qZWN0LWJ0bikge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI2LCAyMjYpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvamVjdC1zZWxlY3RlZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiLy9cIjtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiNjcmVhdGUtYnRuIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udG9kby1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICAgIGdyaWQtYXJlYTogbWFpbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAyNTUsIDEyNyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udG9kbyA+IC50b2RvLXN0YXR1cy1jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi50b2RvID4gLnRvZG8tc3RhdHVzLWNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG4udG9kbyA+IC50b2RvLXRpdGxlIHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRvZG8gPiAudG9kby10aXRsZS1jaGVja2VkIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4udG9kbyA+IC50b2RvLWRldGFpbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b2RvID4gLnRvZG8tZWRpdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4udG9kbyA+IC50b2RvLWRlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG4udG9kbyA+IC50b2RvLWVkaXQtYnV0dG9uLFxyXG4udG9kbyA+IC50b2RvLWRlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIFxyXG59XHJcblxyXG4udG9kbyA+IC50b2RvLXN0YXR1cy1jaGVja2JveCxcclxuLnRvZG8gPiAudG9kby1lZGl0LWJ1dHRvbixcclxuLnRvZG8gPiAudG9kby1kZWxldGUtYnV0dG9uIHtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5vdmVybGF5LW5ldyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjIpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuXHJcbi5vdmVybGF5LW5ldy1kaXNwbGF5ZWQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3IHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogNjUwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3X19oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMjU1LCAwKTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2NyZWF0ZS1uZXdfX2hlYWRlci1jbG9zZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY3JlYXRlLW5ld19fY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAyMjYsIDE2Myk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY3JlYXRlLW5ld19fc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3X19zaWRlYmFyID4gaDMge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY3JlYXRlLW5ld19fc2lkZWJhci10aXRsZS1zZWxlY3RlZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiLy9cIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY3JlYXRlLW5ld19fZW50cnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAxNjYsIDIzMyk7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLmNyZWF0ZS1uZXdfX2VudHJ5LWlucHV0IHtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmNyZWF0ZS1wcm9qZWN0LWJ0biB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY3JlYXRlLW5ld19fZW50cnktaW5wdXQtYmlnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5jcmVhdGUtbmV3X19lbnRyeS1pbnB1dCxcclxuLmNyZWF0ZS1uZXdfX2VudHJ5LWlucHV0LWJpZyB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNyZWF0ZS1uZXdfX3ByaW9yaXR5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuLmNyZWF0ZS1uZXdfX3ByaW9yaXR5LWJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4ub3ZlcmxheS1kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuMik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG5cclxuLm92ZXJsYXktZGV0YWlscy1kaXNwbGF5ZWQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5wb3AtdXAtZGV0YWlscyB7XHJcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wb3AtdXAtY2xvc2UtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxufVxyXG5cclxuLnBvcC11cC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4ucG9wLXVwLWRldGFpbHMgPiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5vdmVybGF5LWVkaXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCAyMDYsIDIwNiwgMC4yKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcblxyXG4ub3ZlcmxheS1lZGl0LWRpc3BsYXllZCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmVkaXQtdG9kbyB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWNsb3NlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNXB4O1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWlucHV0IHtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmVkaXQtdG9kby1pbnB1dC1iaWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcclxufVxyXG5cclxuLmVkaXQtdG9kby1pbnB1dCxcclxuLmVkaXQtdG9kby1pbnB1dC1iaWcge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBcclxufVxyXG5cclxuLmVkaXQtdG9kb19fcHJpb3JpdHksXHJcbi5lZGl0LXRvZG9fX3ByaW9yaXR5LWJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCOztrQkFFYztBQUNsQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaO2lCQUNhO0lBQ2IsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lB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QTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHdCQUF3Qjs7QUFFNUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IDIuMnJlbTtcXHJcXG4gICAgLyogaGVpZ2h0OiAxcHg7XFxyXFxuICAgIHdpZHRoOiAxcHg7ICovXFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgLyogb3BhY2l0eTogMDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOm5vdCguY3JlYXRlLXByb2plY3QtYnRuKSB7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMjBweDtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyNiwgMjI2KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc2VsZWN0ZWQ6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIvL1xcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZS1idG4ge1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDQwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjU1LCAxMjcpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudG9kby1zdGF0dXMtY2hlY2tib3gge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudG9kby1zdGF0dXMtY2hlY2tib3gtY2hlY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9zdmcvc3F1YXJlLWNoZWNrLXNvbGlkLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyA+IC50b2RvLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyA+IC50b2RvLXRpdGxlLWNoZWNrZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudG9kby1kZXRhaWwtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvID4gLnRvZG8tZWRpdC1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vc3ZnL3Blbi10by1zcXVhcmUtc29saWQuc3ZnXFxcIik7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gPiAudG9kby1kZWxldGUtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3N2Zy90cmFzaC1jYW4tc29saWQuc3ZnXFxcIik7XFxyXFxufVxcclxcblxcclxcbi50b2RvID4gLnRvZG8tZWRpdC1idXR0b24sXFxyXFxuLnRvZG8gPiAudG9kby1kZWxldGUtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udG9kbyA+IC50b2RvLXN0YXR1cy1jaGVja2JveCxcXHJcXG4udG9kbyA+IC50b2RvLWVkaXQtYnV0dG9uLFxcclxcbi50b2RvID4gLnRvZG8tZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LW5ldyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjIpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktbmV3LWRpc3BsYXllZCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbmV3IHtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgd2lkdGg6IDY1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19faGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMjU1LCAwKTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUtbmV3X19oZWFkZXItY2xvc2Uge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19fY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDIyNiwgMTYzKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19fc2lkZWJhciB7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1uZXdfX3NpZGViYXIgPiBoMyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1uZXdfX3NpZGViYXItdGl0bGUtc2VsZWN0ZWQ6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIvL1xcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbmV3X19lbnRyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDE2NiwgMjMzKTtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19fZW50cnktaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtcHJvamVjdC1idG4ge1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLW5ld19fZW50cnktaW5wdXQtYmlnIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbmV3X19lbnRyeS1pbnB1dCxcXHJcXG4uY3JlYXRlLW5ld19fZW50cnktaW5wdXQtYmlnIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1uZXdfX3ByaW9yaXR5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtbmV3X19wcmlvcml0eS1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LWRldGFpbHMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCAyMDYsIDIwNiwgMC4yKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LWRldGFpbHMtZGlzcGxheWVkIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC11cC1kZXRhaWxzIHtcXHJcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWNsb3NlLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3AtdXAtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC11cC1kZXRhaWxzID4gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktZWRpdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjIpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktZWRpdC1kaXNwbGF5ZWQge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvIHtcXHJcXG4gICAgd2lkdGg6IDU1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdG9kby1jbG9zZS1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWlucHV0LWJpZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWlucHV0LFxcclxcbi5lZGl0LXRvZG8taW5wdXQtYmlnIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdG9kb19fcHJpb3JpdHksXFxyXFxuLmVkaXQtdG9kb19fcHJpb3JpdHktYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNlbnRyYWxNb2R1bGUgPSB7XHJcbiAgICBkb21Nb2R1bGU6IG51bGwsXHJcbn07IiwiZXhwb3J0IGNvbnN0IGRvbU1vZHVsZSA9IHtcclxuXHJcbiAgICBhc3NpZ25FdmVudHNUb1Byb2plY3RzOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcbiAgICAgICAgZG9tTW9kdWxlLnJlbW92ZUFkZEV2ZW50TGlzdGVuZXIoYWxsUHJvamVjdHMsIFwiY2xpY2tcIiwgZG9tTW9kdWxlLmNyZWF0ZUV2ZW50VG9TaG93UHJvamVjdFNlbGVjdGVkKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlQWRkRXZlbnRMaXN0ZW5lcjogKGVsZW1lbnRzLCBldmVudCwgaGFuZGxlcikgPT4ge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XHJcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBJdCBjcmVhdGVzIHRoZSBldmVudCB0byBzaG93IHdpY2ggcHJvamVjdCBpcyBzZWxlY3RlZFxyXG4gICAgY3JlYXRlRXZlbnRUb1Nob3dQcm9qZWN0U2VsZWN0ZWQgOiAoZXZlbnQpID0+IHsgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG4gIFxyXG4gICAgICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3Qtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEl0IGNyZWF0ZXMgdGhlIGV2ZW50IHRvIGNoYW5nZSB0aGUgZm9ybSBkZXBlbmRpbmcgb24gd2hhdCB5b3Ugd2FudCB0byBjcmVhdGUgXHJcbiAgICBjcmVhdGVFdmVudFRvQ2hhbmdlVGhlRm9ybTogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZU5ld0VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtbmV3X19lbnRyeVwiKTtcclxuICAgICAgICBjb25zdCBvcHRpb25Ub2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpb24tdG8tZG9cIik7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9uLXByb2plY3RcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3B0aW9uVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25Qcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2NyZWF0ZS1uZXdfX3NpZGViYXItdGl0bGUtc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgb3B0aW9uVG9kby5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtbmV3X19zaWRlYmFyLXRpdGxlLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGNyZWF0ZU5ld0VudHJ5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9Gb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9wdGlvblByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgb3B0aW9uVG9kby5jbGFzc0xpc3QucmVtb3ZlKCdjcmVhdGUtbmV3X19zaWRlYmFyLXRpdGxlLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIG9wdGlvblByb2plY3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLW5ld19fc2lkZWJhci10aXRsZS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBjcmVhdGVOZXdFbnRyeS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcclxuICAgICAgICAgICAgY3JlYXRlTmV3RW50cnkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImNyZWF0ZS1uZXdfX2VudHJ5LWlucHV0IGlucHV0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgbWF4bGVuZ3RoPVwiMzBcIiBuYW1lPVwidGl0bGVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNyZWF0ZS1wcm9qZWN0LWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgcHJvamVjdDwvYnV0dG9uPmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVUb2RvRm9ybSgpIHtcclxuICAgICAgICAgICAgY3JlYXRlTmV3RW50cnkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImNyZWF0ZS1uZXdfX2VudHJ5LWlucHV0IGlucHV0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgbWF4bGVuZ3RoPVwiMzBcIiBuYW1lPVwidGl0bGVcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiY3JlYXRlLW5ld19fZW50cnktaW5wdXQtYmlnIGlucHV0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjcmVhdGUtbmV3X19kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyZWF0ZS1uZXdfX2RhdGUtdGl0bGVcIj5EdWUgRGF0ZTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImNyZWF0ZS1uZXdfX2RhdGUtaW5wdXQgaW5wdXRcIiBuYW1lPVwiZHVlRGF0ZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNyZWF0ZS1uZXdfX3ByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyZWF0ZS1uZXdfX3ByaW9yaXR5LXRpdGxlXCI+UHJpb3JpdHk6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNyZWF0ZS1uZXdfX3ByaW9yaXR5LWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgY2xhc3M9XCJwcmlvcml0eS1idG4gaW5wdXRcIiBpZD1cImxvd1wiIHZhbHVlPVwiTG93XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxvdzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIGNsYXNzPVwicHJpb3JpdHktYnRuIGlucHV0XCIgaWQ9XCJtZWRpdW1cIiB2YWx1ZT1cIk1lZGl1bVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NZWRpdW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiBjbGFzcz1cInByaW9yaXR5LWJ0biBpbnB1dFwiIGlkPVwiaGlnaFwiIHZhbHVlPVwiSGlnaFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdG9kby1idG5cIiB0eXBlPVwic3VibWl0XCI+QWRkIHRvZG88L2J1dHRvbj5gO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBkaXNwbGF5T3ZlcmxheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLW5ld1wiKTtcclxuICAgICAgICBjb25zdCBvdmVybGF5TmV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5LW5ld1wiKTtcclxuICAgICAgICBjb25zdCBjbG9zZU92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1uZXdfX2hlYWRlci1jbG9zZVwiKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1idG5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJsYXlOZXcuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXktbmV3LWRpc3BsYXllZFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2xvc2VPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG92ZXJsYXlOZXcuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJsYXktbmV3LWRpc3BsYXllZFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgb3ZlcmxheU5ldy5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheS1uZXctZGlzcGxheWVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZGlzcGxheVRvZG9zOiBmdW5jdGlvbihhcnJheSkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XHJcbiAgICAgICAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG9kbyBTdGF0dXNcclxuICAgICAgICAgICAgY29uc3QgdG9kb1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGlmKG9iai5jaGVja1N0YXR1cyA9PT0gXCJub3QtY2hlY2tlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0b2RvU3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN0YXR1cy1jaGVja2JveFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvZG9TdGF0dXMuY2xhc3NMaXN0LmFkZChcInRvZG8tc3RhdHVzLWNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgdG9kb1N0YXR1cy5jbGFzc0xpc3QuYWRkKFwidG9kby1zdGF0dXMtY2hlY2tib3gtY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRvZG9TdGF0dXMuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9TdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gVG9kbyBUaXRsZVxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XHJcblxyXG4gICAgICAgICAgICBpZihvYmouY2hlY2tTdGF0dXMgPT09IFwibm90LWNoZWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlLWNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvZG8gRGV0YWlscyBCdXR0b25cclxuICAgICAgICAgICAgY29uc3QgZGV0YWlsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgZGV0YWlsQnRuLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XHJcbiAgICAgICAgICAgIGRldGFpbEJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXRhaWwtYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBkZXRhaWxCdG4uZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRldGFpbEJ0bik7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2RvIEVkaXQgQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVkaXQtYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBlZGl0QnRuLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvZG8gRGVsZXRlIEJ1dHRvblxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVsZXRlLWJ1dHRvblwiKTtcclxuICAgICAgICAgICAgZGVsZXRlQnRuLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG4gICAgICAgIH0pOyBcclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGxheVByb2plY3RzOiBmdW5jdGlvbihhcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZlByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcclxuICAgICAgICBsaXN0T2ZQcm9qZWN0cy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgcHJvamVjdC5kYXRhc2V0LmluZGV4ID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKTtcclxuICAgICAgICAgICAgbGlzdE9mUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xyXG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxufSIsImltcG9ydCB7IGNlbnRyYWxNb2R1bGUgfSBmcm9tIFwiLi9jZW50cmFsTW9kdWxlXCI7XHJcblxyXG5jbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrU3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmNoZWNrU3RhdHVzID0gY2hlY2tTdGF0dXM7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZG9Nb2R1bGUgPSB7XHJcbiAgICB0b2RvczogW10sXHJcblxyXG4gICAgYWRkVG9kbzogZnVuY3Rpb24odG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKVxyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVUb2RvOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH0sXHJcblxyXG4gICAgZWRpdFRvZG86IGZ1bmN0aW9uKG9iaiwgbmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3Q2hlY2tTdGF0dXMpIHtcclxuICAgICAgICBvYmoudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgICAgICBvYmouZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgICAgICBvYmouZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICAgICAgb2JqLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmpcclxuICAgIH1cclxufTtcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByb2plY3RJZCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZDtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0TW9kdWxlID0ge1xyXG4gICAgcHJvamVjdHM6IFtdLFxyXG5cclxuICAgIGFkZFByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlUHJvamVjdDogZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdG9kb0NyZWF0aW9uTW9kdWxlID0ge1xyXG4gICAgY3JlYXRlRnJvbUZvcm06ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjcmVhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXcnKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShjcmVhdGVGb3JtKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1uZXdfX3NpZGViYXItdGl0bGUtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgaWYoc2VsZWN0ZWRPcHRpb24udGV4dENvbnRlbnQgPT09IFwiVG8tRG9cIikge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oZm9ybURhdGEuZ2V0KCd0aXRsZScpLCBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyksIGZvcm1EYXRhLmdldCgnZHVlRGF0ZScpLCBmb3JtRGF0YS5nZXQoJ3ByaW9yaXR5JyksIFwibm90LWNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIHRvZG9Nb2R1bGUuYWRkVG9kbyhuZXdUb2RvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoZm9ybURhdGEuZ2V0KCd0aXRsZScpKTtcclxuICAgICAgICAgICAgcHJvamVjdE1vZHVsZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlRm9ybS5yZXNldCgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50TW9kdWxlID0ge1xyXG4gICAgYXNzaXNnbkV2ZW50c1RvQnV0dG9uczogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsbFN0YXR1c0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLXN0YXR1cy1jaGVja2JveFwiKTtcclxuICAgICAgICBjb25zdCBhbGxEZXRhaWxzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1kZXRhaWwtYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGFsbEVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLWVkaXQtYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGFsbERlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8tZGVsZXRlLWJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgZXZlbnRNb2R1bGUucmVtb3ZlQWRkRXZlbnRMaXN0ZW5lcihhbGxTdGF0dXNDaGVja2JveCwgXCJjbGlja1wiLCBldmVudE1vZHVsZS5oYW5kbGVDaGVja1N0YXR1cyk7XHJcbiAgICAgICAgZXZlbnRNb2R1bGUucmVtb3ZlQWRkRXZlbnRMaXN0ZW5lcihhbGxEZXRhaWxzQnRucywgXCJjbGlja1wiLCBldmVudE1vZHVsZS5oYW5kbGVEZXRhaWwpO1xyXG4gICAgICAgIGV2ZW50TW9kdWxlLnJlbW92ZUFkZEV2ZW50TGlzdGVuZXIoYWxsRWRpdEJ0bnMsIFwiY2xpY2tcIiwgZXZlbnRNb2R1bGUuZGlzcGxheU92ZXJsYXlFZGl0KTtcclxuICAgICAgICBldmVudE1vZHVsZS5yZW1vdmVBZGRFdmVudExpc3RlbmVyKGFsbERlbGV0ZUJ0bnMsIFwiY2xpY2tcIiwgZXZlbnRNb2R1bGUuaGFuZGxlRGVsZXRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlQWRkRXZlbnRMaXN0ZW5lcjogKGVsZW1lbnRzLCBldmVudCwgaGFuZGxlcikgPT4ge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XHJcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFdmVudExpc3RlbmVyIGZvciB0aGUgdG9kbyBzdGF0dXMgY2hlY2tib3hcclxuICAgIGhhbmRsZUNoZWNrU3RhdHVzOiAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgY29uc3QgdG9kb1N0YXR1c0NoZWNrYm94ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSB0b2RvU3RhdHVzQ2hlY2tib3guY2xvc2VzdCgnLnRvZG8nKTtcclxuXHJcbiAgICAgICAgaWYgKHRvZG9Db250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gdG9kb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdGl0bGVcIik7XHJcbiAgICAgICAgICAgIHRvZG9TdGF0dXNDaGVja2JveC5jbGFzc0xpc3QudG9nZ2xlKFwidG9kby1zdGF0dXMtY2hlY2tib3gtY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvLXRpdGxlLWNoZWNrZWRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleFRvQ2hlY2sgPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tTdGF0dXMgPSB0b2RvTW9kdWxlLnRvZG9zW2luZGV4VG9DaGVja10uY2hlY2tTdGF0dXM7XHJcblxyXG4gICAgICAgICAgICB0b2RvTW9kdWxlLnRvZG9zW2luZGV4VG9DaGVja10uY2hlY2tTdGF0dXMgPVxyXG4gICAgICAgICAgICBjaGVja1N0YXR1cyA9PT0gXCJub3QtY2hlY2tlZFwiID8gXCJjaGVja2VkXCIgOiBcIm5vdC1jaGVja2VkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFdmVudExpc3RlbmVyIGZvciB0aGUgZGV0YWlscyBidXR0b25cclxuICAgIGhhbmRsZURldGFpbDogKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXlEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5LWRldGFpbHNcIik7XHJcblxyXG4gICAgICAgIG92ZXJsYXlEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5LWRldGFpbHMtZGlzcGxheWVkXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleFRvRGV0YWlsID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnQgPSB0b2RvTW9kdWxlLnRvZG9zW2luZGV4VG9EZXRhaWxdO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lbGVtZW50XCIpO1xyXG5cclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBQb3AgdXAgY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3Jyk7XHJcbiAgICAgICAgY29uc3QgcG9wVXBDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwLWNsb3NlLWJ1dHRvblwiKTtcclxuICAgICAgICBwb3BVcENsb3NlQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgICAgICAgcG9wVXBDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBvdmVybGF5RGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheS1kZXRhaWxzLWRpc3BsYXllZFwiKTtcclxuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBQb3AgdXAgdGl0bGVcclxuICAgICAgICBjb25zdCBwb3BVcFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXAtdGl0bGVcIik7XHJcbiAgICAgICAgcG9wVXBUaXRsZS50ZXh0Q29udGVudCA9IGAke3RvZG9FbGVtZW50LnRpdGxlfWA7XHJcblxyXG4gICAgICAgIC8vIFBvcCB1cCBwcm9qZWN0XHJcbiAgICAgICAgY29uc3QgcG9wVXBQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXAtcHJvamVjdFwiKTtcclxuICAgICAgICAvLyBOZWNlc2l0byBhZ3JlZ2FyIHVuYSBwcm9waWVkYWQgYWwgY29uc3RydWNvciBUb2RvXHJcbiAgICAgICAgcG9wVXBQcm9qZWN0LnRleHRDb250ZW50ID0gXCJQcm9qZWN0OiBIb21lXCI7XHJcblxyXG4gICAgICAgIC8vIFBvcCB1cCBkZXNjcmlwdGlvblxyXG4gICAgICAgIGNvbnN0IHBvcFVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cC1kZXNjcmlwdGlvblwiKTtcclxuICAgICAgICBwb3BVcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke3RvZG9FbGVtZW50LmRlc2NyaXB0aW9ufWA7XHJcblxyXG4gICAgICAgIC8vIFBvcCB1cCBkdWUgZGF0ZVxyXG4gICAgICAgIGNvbnN0IHBvcFVwRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwLWR1ZWRhdGVcIik7XHJcbiAgICAgICAgcG9wVXBEdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBkYXRlOiAke3RvZG9FbGVtZW50LmR1ZURhdGV9YDtcclxuXHJcbiAgICAgICAgLy8gUG9wIHVwIHByaW9yaXR5XHJcbiAgICAgICAgY29uc3QgcG9wVXBQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwLXByaW9yaXR5XCIpO1xyXG4gICAgICAgIHBvcFVwUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dG9kb0VsZW1lbnQucHJpb3JpdHl9YDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRXZlbnRMaXN0ZW5lciBmb3IgdGhlIGVkaXQgYnV0dG9uXHJcbiAgICBkaXNwbGF5T3ZlcmxheUVkaXQ6IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvXCIpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4VG9FZGl0ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXhUb0VkaXQpOyAgICAgICAgXHJcbiAgICAgICAgZWRpdEZvcm0uZGF0YXNldC5pbmRleCA9IGluZGV4VG9FZGl0O1xyXG5cclxuICAgICAgICBjb25zdCBvdmVybGF5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheS1lZGl0XCIpO1xyXG4gICAgICAgIG92ZXJsYXlFZGl0LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5LWVkaXQtZGlzcGxheWVkXCIpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRUb2RvQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdG9kby1jbG9zZS1idXR0b25cIik7XHJcbiAgICAgICAgZWRpdFRvZG9DbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBvdmVybGF5RWRpdC5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlcmxheS1lZGl0LWRpc3BsYXllZFwiKTtcclxuICAgICAgICAgICAgZWRpdEZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sICBcclxuXHJcbiAgICBoYW5kbGVFZGl0OiAoaW5kZXgpID0+IHsgICBcclxuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10b2RvXCIpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5LWVkaXRcIik7XHJcblxyXG4gICAgICAgIGxldCB0b2RvRWxlbWVudCA9IHRvZG9Nb2R1bGUudG9kb3NbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGVkaXRGb3JtKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvRWxlbWVudCk7XHJcbiAgICAgICAgdG9kb0VsZW1lbnQgPSB0b2RvTW9kdWxlLmVkaXRUb2RvKHRvZG9FbGVtZW50LCBmb3JtRGF0YS5nZXQoJ3RpdGxlJyksIGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSwgZm9ybURhdGEuZ2V0KCdkdWVEYXRlJyksIGZvcm1EYXRhLmdldCgncHJpb3JpdHknKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9kb0VsZW1lbnQpO1xyXG4gICAgICAgIG92ZXJsYXlFZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVybGF5LWVkaXQtZGlzcGxheWVkXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFdmVudExpc3RlbmVyIGZvciB0aGUgZGVsZXRlIGJ1dHRvblxyXG4gICAgaGFuZGxlRGVsZXRlOiAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleFRvRGVsZXRlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgdG9kb01vZHVsZS5yZW1vdmVUb2RvKGluZGV4VG9EZWxldGUpO1xyXG4gICAgICAgIGNlbnRyYWxNb2R1bGUuZG9tTW9kdWxlLmRpc3BsYXlUb2Rvcyh0b2RvTW9kdWxlLnRvZG9zKTtcclxuICAgICAgICBldmVudE1vZHVsZS5hc3Npc2duRXZlbnRzVG9CdXR0b25zKCk7XHJcbiAgICB9LFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgZG9tTW9kdWxlIH0gZnJvbSBcIi4vZG9tTW9kdWxlXCI7XHJcbmltcG9ydCB7IHRvZG9Nb2R1bGUsIHByb2plY3RNb2R1bGUsIHRvZG9DcmVhdGlvbk1vZHVsZSwgZXZlbnRNb2R1bGUgfSBmcm9tIFwiLi90b2RvTW9kdWxlXCI7XHJcbmltcG9ydCB7IGNlbnRyYWxNb2R1bGUgfSBmcm9tIFwiLi9jZW50cmFsTW9kdWxlXCI7XHJcblxyXG4vLyBXaGVuIHRoZSBwYWdlIGluaXRzLCBpdCBjcmVhdGVzIHRoZSBldmVudExpc3RlbmVyIHRvIGRpc3BsYXkgdGhlIG92ZXJsYXlcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgZG9tTW9kdWxlLmRpc3BsYXlPdmVybGF5KCk7XHJcbiAgICBjZW50cmFsTW9kdWxlLmRvbU1vZHVsZSA9IGRvbU1vZHVsZTtcclxuICAgIGNlbnRyYWxNb2R1bGUuZXZlbnRNb2R1bGUgPSBldmVudE1vZHVsZTtcclxuICAgIGRvbU1vZHVsZS5hc3NpZ25FdmVudHNUb1Byb2plY3RzKCk7XHJcbiAgICBkb21Nb2R1bGUuY3JlYXRlRXZlbnRUb0NoYW5nZVRoZUZvcm0oKTtcclxufSk7XHJcblxyXG4vLyBXaGVuIHRoZSBmb3JtIGl0J3Mgc3VibWl0LCBpdCBvYnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWFjaCBpbnB1dFxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtbmV3XCIpO1xyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdG9kb0NyZWF0aW9uTW9kdWxlLmNyZWF0ZUZyb21Gb3JtKCk7XHJcbiAgICBkb21Nb2R1bGUuZGlzcGxheVRvZG9zKHRvZG9Nb2R1bGUudG9kb3MpO1xyXG4gICAgZG9tTW9kdWxlLmRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0TW9kdWxlLnByb2plY3RzKTtcclxuICAgIGV2ZW50TW9kdWxlLmFzc2lzZ25FdmVudHNUb0J1dHRvbnMoKTtcclxuICAgIGRvbU1vZHVsZS5hc3NpZ25FdmVudHNUb1Byb2plY3RzKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIEV2ZW50TGlzdGVuZXIgZm9yIHRoZSBlZGl0Rm9ybSBzdWJtaXRcclxuY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvJyk7XHJcbmVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBpbmRleFRvRWRpdCA9IGVkaXRGb3JtLmRhdGFzZXQuaW5kZXg7XHJcblxyXG4gICAgZXZlbnRNb2R1bGUuaGFuZGxlRWRpdChpbmRleFRvRWRpdCk7XHJcbiAgICBcclxuICAgIGRvbU1vZHVsZS5kaXNwbGF5VG9kb3ModG9kb01vZHVsZS50b2Rvcyk7XHJcbiAgICBldmVudE1vZHVsZS5hc3Npc2duRXZlbnRzVG9CdXR0b25zKCk7XHJcbiAgICBlZGl0Rm9ybS5yZXNldCgpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=