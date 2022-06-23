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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/popup.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/popup.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/popup-x-btn.svg */ \"./src/assets/images/popup-x-btn.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".no-overflow {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.popup-wrapper {\\r\\n  z-index: 999;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  overflow-y: auto;\\r\\n  background: transparent;\\r\\n  backdrop-filter: blur(5px);\\r\\n  -webkit-backdrop-filter: blur(5px);\\r\\n  animation: comment 400ms;\\r\\n  -webkit-animation: comment 400ms;\\r\\n}\\r\\n\\r\\n.popup-wrapper > div {\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n@keyframes comment {\\r\\n  from {\\r\\n    top: -30px;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    top: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@-webkit-keyframes comment {\\r\\n  from {\\r\\n    top: -30px;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    top: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.popup-wizard {\\r\\n  background-color: #f0f9cf;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 24px;\\r\\n  margin: 0 auto;\\r\\n  max-width: 700px;\\r\\n  padding: 15px 30px;\\r\\n  border: 2px solid #27272735;\\r\\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n/* popup buttons */\\r\\n\\r\\n.btn {\\r\\n  background: none;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  padding: 2px 5px;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.btn:focus,\\r\\n.btn:hover {\\r\\n  outline: none;\\r\\n  box-shadow: 0 1px 8px #00000052;\\r\\n}\\r\\n\\r\\n.popup-x-btn {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  align-self: flex-end;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: 20px;\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  padding: 5px 7px !important;\\r\\n  max-width: max-content;\\r\\n  box-shadow: 0 0 3px #27272730;\\r\\n}\\r\\n\\r\\n.recipe-instructions .btn {\\r\\n  color: blue;\\r\\n  margin: 2px 0;\\r\\n}\\r\\n\\r\\n/* recipe-image */\\r\\n\\r\\n.recipe-image {\\r\\n  max-height: 200px;\\r\\n  align-self: center;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n/* recipe-heading */\\r\\n\\r\\n.recipe-title {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n/* recipe taxonomy */\\r\\n\\r\\n.recipe-taxonomy {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-evenly;\\r\\n  width: 100%;\\r\\n  gap: 10px;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n/* instructions */\\r\\n\\r\\n.recipe-instructions,\\r\\n.recipe-ingredients,\\r\\n.comments-wrapper,\\r\\n.comment-form {\\r\\n  padding: 10px;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);\\r\\n}\\r\\n\\r\\n.recipe-instructions h3,\\r\\n.recipe-ingredients h3,\\r\\n.comments-wrapper h3,\\r\\n.comment-form h3 {\\r\\n  padding-bottom: 10px;\\r\\n}\\r\\n\\r\\n.recipe-instructions p {\\r\\n  font-size: 13px;\\r\\n  line-height: 22px;\\r\\n  height: 40px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.recipe-instructions p.expand {\\r\\n  height: 100% !important;\\r\\n}\\r\\n\\r\\n/* recipe ingredients */\\r\\n\\r\\n.ingredients-list {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\n.ingredient-item {\\r\\n  font-size: 13px;\\r\\n  padding: 2px 10px;\\r\\n  background: white;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n/* comment-list */\\r\\n\\r\\n.comments-list li {\\r\\n  font-size: 13px;\\r\\n  padding: 2px 5px;\\r\\n}\\r\\n\\r\\n.comments-list li:nth-child(even) {\\r\\n  background: rgba(172, 255, 47, 0.2);\\r\\n}\\r\\n\\r\\n/* comment-form */\\r\\n\\r\\n.comment-form form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 14px;\\r\\n}\\r\\n\\r\\n.comment-form .field {\\r\\n  background: none;\\r\\n  border: 1px solid #00000010;\\r\\n  border-radius: 4px;\\r\\n  padding: 5px 10px;\\r\\n  box-shadow: 0 0 3px #00000030;\\r\\n}\\r\\n\\r\\n.comment-form .field:focus {\\r\\n  outline: none;\\r\\n  border-color: #00f;\\r\\n}\\r\\n\\r\\n.comment-form textarea {\\r\\n  resize: vertical;\\r\\n}\\r\\n\\r\\n.lds-loader {\\r\\n  position: relative;\\r\\n  height: inherit;\\r\\n}\\r\\n\\r\\n.lds-loader > div {\\r\\n  position: absolute;\\r\\n  top: calc(50% - 9px);\\r\\n  right: calc(50% - 39px);\\r\\n}\\r\\n\\r\\n.lds-dots {\\r\\n  position: relative;\\r\\n  width: 78px;\\r\\n  height: 18px;\\r\\n}\\r\\n\\r\\n.lds-dots div {\\r\\n  position: absolute;\\r\\n  top: 4px;\\r\\n  width: 10px;\\r\\n  height: 10px;\\r\\n  border-radius: 50%;\\r\\n  background: #27272790;\\r\\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\\r\\n}\\r\\n\\r\\n.lds-dots div:nth-child(1) {\\r\\n  left: 8px;\\r\\n  animation: lds-dots1 0.6s infinite;\\r\\n}\\r\\n\\r\\n.lds-dots div:nth-child(2) {\\r\\n  left: 8px;\\r\\n  animation: lds-dots2 0.6s infinite;\\r\\n}\\r\\n\\r\\n.lds-dots div:nth-child(3) {\\r\\n  left: 32px;\\r\\n  animation: lds-dots2 0.6s infinite;\\r\\n}\\r\\n\\r\\n.lds-dots div:nth-child(4) {\\r\\n  left: 56px;\\r\\n  animation: lds-dots3 0.6s infinite;\\r\\n}\\r\\n\\r\\n@keyframes lds-dots1 {\\r\\n  0% {\\r\\n    transform: scale(0);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes lds-dots3 {\\r\\n  0% {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: scale(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes lds-dots2 {\\r\\n  0% {\\r\\n    transform: translate(0, 0);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    transform: translate(24px, 0);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/assets/popup.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Patrick+Hand&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://use.fontawesome.com/releases/v6.1.1/css/all.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* eslint-disable */\\r\\n\\r\\n:root {\\r\\n  --text-color-1: #f0f9cf;\\r\\n  --text-color-2: #23832b;\\r\\n  --text-color-3: #9cb445;\\r\\n  --bg-color: #f0f9cf;\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--bg-color);\\r\\n}\\r\\n\\r\\n.main_img {\\r\\n  margin-top: 13vh;\\r\\n  width: 100vw;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.tagline h2 {\\r\\n  font-size: 3.5rem;\\r\\n  text-align: center;\\r\\n  color: var(--text-color-2);\\r\\n  letter-spacing: 2px;\\r\\n  font-weight: 500;\\r\\n  font-family: \\\"Courgette\\\", cursive;\\r\\n  margin-top: -170px;\\r\\n  margin-bottom: 40px;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nnav .nav-items {\\r\\n  background-color: var(--bg-color);\\r\\n  display: flex;\\r\\n  position: fixed;\\r\\n  height: 13vh;\\r\\n  flex-direction: row;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  z-index: 10;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.item a {\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  text-decoration: none;\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n  margin: 0 0.75rem;\\r\\n  font-size: 1rem;\\r\\n  letter-spacing: 0.5px;\\r\\n  color: rgb(49, 49, 49);\\r\\n  font-weight: 500;\\r\\n  opacity: 0.9;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.nav-link::after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  width: 50%;\\r\\n  height: 7px;\\r\\n  border-radius: 5px;\\r\\n  background-color: var(--text-color-3);\\r\\n  bottom: -10px;\\r\\n  left: 0;\\r\\n  z-index: -1;\\r\\n  opacity: 0;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.nav-link:hover {\\r\\n  color: var(--text-color-2);\\r\\n}\\r\\n\\r\\n.nav-link:hover::after {\\r\\n  width: 100%;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  background-color: #c8e073;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.footer a {\\r\\n  color: #2a7703;\\r\\n  text-decoration: none;\\r\\n  transition: 0.2s;\\r\\n}\\r\\n\\r\\n.footer a:hover {\\r\\n  cursor: pointer;\\r\\n  font-size: 1.5rem;\\r\\n  transform: scale(1.2, 1.2);\\r\\n}\\r\\n\\r\\n.footerContact {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\n.card_container .recipies {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: 300px;\\r\\n  height: auto;\\r\\n  margin: 40px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 1rem 0.5rem;\\r\\n  border: 1px solid #fff;\\r\\n  border-radius: 25px;\\r\\n  background: #fff;\\r\\n  box-shadow: rgb(50 50 93 / 25%) 0 6px 12px -2px, rgb(0 0 0 / 30%) 0 3px 7px -3px;\\r\\n}\\r\\n\\r\\n.card-img img {\\r\\n  width: 100%;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.card-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-content: flex-start;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.card-info h2 {\\r\\n  font-family: \\\"Patrick Hand\\\", cursive;\\r\\n  color: var(--text-color-3);\\r\\n  font-size: 2rem;\\r\\n  letter-spacing: 2px;\\r\\n}\\r\\n\\r\\n.card-info ul {\\r\\n  display: flex;\\r\\n  margin-top: 5%;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.commentBtn {\\r\\n  padding: 5% 15%;\\r\\n  font-family: \\\"Patrick Hand\\\", cursive;\\r\\n  font-size: 1.3rem;\\r\\n  color: var(--text-color-1);\\r\\n  background-color: var(--text-color-2);\\r\\n  border-radius: 15px;\\r\\n  border: 1px solid var(--text-color-2);\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.commentBtn:hover {\\r\\n  background-color: #236128;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  color: var(--text-color-3);\\r\\n  font-size: 1.7rem;\\r\\n  margin-right: 0.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like-btn .fa-heart {\\r\\n  margin-right: 0.75rem;\\r\\n}\\r\\n\\r\\n.contact {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  border: 3px solid var(--text-color-2);\\r\\n  border-radius: 20px;\\r\\n  padding: 35px;\\r\\n  position: absolute;\\r\\n  bottom: 25%;\\r\\n  left: 25%;\\r\\n  right: 25%;\\r\\n}\\r\\n\\r\\n.contactHeading1 {\\r\\n  color: var(--text-color-2);\\r\\n}\\r\\n\\r\\n.contactHeading2 {\\r\\n  width: 70%;\\r\\n  color: var(--text-color-2);\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.contactDetails {\\r\\n  list-style-type: none;\\r\\n  color: var(--text-color-2);\\r\\n}\\r\\n\\r\\n.contactDetails li {\\r\\n  font-size: 1.5rem;\\r\\n  color: var(--text-color-2);\\r\\n}\\r\\n\\r\\n.contact-icon {\\r\\n  font-size: 1.5rem;\\r\\n  color: var(--text-color-2);\\r\\n  padding: 0 0 0 5px;\\r\\n}\\r\\n\\r\\n.fa-brands,\\r\\n.fab {\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/assets/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://foodify_capstone_project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://foodify_capstone_project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://foodify_capstone_project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/popup.css":
/*!******************************!*\
  !*** ./src/assets/popup.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/popup.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/assets/popup.css?");

/***/ }),

/***/ "./src/assets/styles.css":
/*!*******************************!*\
  !*** ./src/assets/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/assets/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://foodify_capstone_project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://foodify_capstone_project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://foodify_capstone_project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://foodify_capstone_project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://foodify_capstone_project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://foodify_capstone_project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apis.js":
/*!*********************!*\
  !*** ./src/apis.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COMMENT_URL\": () => (/* binding */ COMMENT_URL),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getDetails\": () => (/* binding */ getDetails),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst API_ID = '1AkDSb9CeEmOpdltysrI';\n\nconst INVOLVEMENT_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n\nconst RECIPE_URL = 'https://themealdb.com/api/json/v1/1/lookup.php?i=';\n\nconst COMMENT_URL = `${INVOLVEMENT_API + API_ID}/comments?item_id=`;\n\nconst postData = (url, data = {}) => fetch(url, {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify(data),\n});\n\nconst getComments = async (itemId) => {\n  const response = await fetch(`${COMMENT_URL}${itemId}`);\n  return response.json();\n};\n\nconst getDetails = async (itemId) => {\n  const response = await fetch(`${RECIPE_URL}${itemId}`);\n  return response.json();\n};\n\nconst postComment = async (comment) => {\n  const response = await postData(COMMENT_URL, comment);\n  return response;\n};\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/apis.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/popup.js\");\n/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons.js */ \"./src/commons.js\");\n\n\n\nconst onready = () => {\n  document.body.addEventListener('click', async ({ target }) => {\n    if (target.classList.contains('commentBtn')) await (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.showPopup)(target);\n    else if (target.classList.contains('popup-x-btn')) (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.closePopup)(target);\n    else if (target.classList.contains('ec-btn')) (0,_commons_js__WEBPACK_IMPORTED_MODULE_1__.scaleInstructionContainer)(target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onready);\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/app.js?");

/***/ }),

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"listComments\": () => (/* binding */ listComments)\n/* harmony export */ });\n/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ \"./src/commons.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n/* harmony import */ var _apis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apis.js */ \"./src/apis.js\");\n\n\n\n\nconst addComment = async (event) => {\n  event.preventDefault();\n\n  const { target: self } = event;\n\n  (0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.flagTrigger)(self.lastElementChild);\n\n  const comment = {\n    username: self.elements.user.value.trim(),\n    comment: self.elements.comment.value.trim(),\n    item_id: (0,_elements_js__WEBPACK_IMPORTED_MODULE_1__.$getAttrib)(self, 'target_id'),\n  };\n  const res = await (0,_apis_js__WEBPACK_IMPORTED_MODULE_2__.postComment)(comment);\n\n  if (res.status === 201) {\n    self.reset();\n    const list2 = self.parentElement.previousElementSibling.lastElementChild;\n    list2.prepend((0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.renderComment)({\n      creation_date: (new Date()).toISOString().substring(0, 10),\n      ...comment,\n    }));\n    (0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.commentCounter)(1, list2.previousElementSibling);\n  }\n  (0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.flagTrigger)(self.lastElementChild);\n};\n\nconst listComments = async (itemId, lookupTree) => {\n  const response = await (0,_apis_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(itemId);\n\n  if (Array.isArray(response)) {\n    const list2 = (0,_elements_js__WEBPACK_IMPORTED_MODULE_1__.$select)('.comments-list', lookupTree);\n    (0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.commentCounter)(response.length, lookupTree);\n    response.sort(_commons_js__WEBPACK_IMPORTED_MODULE_0__.sortByDate).forEach((comment) => list2.appendChild((0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.renderComment)(comment)));\n  }\n};\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/comment.js?");

/***/ }),

/***/ "./src/commons.js":
/*!************************!*\
  !*** ./src/commons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendIngredient\": () => (/* binding */ appendIngredient),\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"filterIngredients\": () => (/* binding */ filterIngredients),\n/* harmony export */   \"flagTrigger\": () => (/* binding */ flagTrigger),\n/* harmony export */   \"ldsEllipsis\": () => (/* binding */ ldsEllipsis),\n/* harmony export */   \"renderComment\": () => (/* binding */ renderComment),\n/* harmony export */   \"renderPopup\": () => (/* binding */ renderPopup),\n/* harmony export */   \"scaleInstructionContainer\": () => (/* binding */ scaleInstructionContainer),\n/* harmony export */   \"sortByDate\": () => (/* binding */ sortByDate),\n/* harmony export */   \"toggleOverflow\": () => (/* binding */ toggleOverflow)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n\n\nconst ldsEllipsis = () => {\n  const element = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');\n  element.className = 'lds-loader';\n  element.innerHTML = (\n    '<div>'\n    + '<div class=\"lds-dots\">'\n    + '<div></div>'\n    + '<div></div>'\n    + '<div></div>'\n    + '<div></div>'\n    + '</div>'\n    + '</div>'\n  );\n  return element;\n};\n\nconst flagTrigger = (trigger) => {\n  const { disabled = false } = trigger;\n  trigger.disabled = !disabled;\n\n  (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.$select)('span', trigger).classList.toggle('hidden');\n  (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.$select)('.lds-dots', trigger).classList.toggle('hidden');\n};\n\nconst commentCounter = (num, lookupTree) => {\n  const counter = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.$select)('.comments-wrapper span', lookupTree);\n  const count = parseInt(counter.textContent, 10) + num;\n  counter.textContent = count;\n\n  return count;\n};\n\nconst renderPopup = ({\n  idMeal,\n  strMeal,\n  strMealThumb,\n  strArea,\n  strCategory,\n  strInstructions,\n  strYoutube,\n}) => {\n  const element = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');\n  element.innerHTML = (\n    '<div class=\"popup-wizard\">'\n    + '<button type=\"button\" class=\"btn popup-x-btn\"></button>'\n    + `<img src=\"${strMealThumb}\" alt=\"${strMeal}\" class=\"recipe-image\" />`\n    + `<h3 class=\"recipe-title\">${strMeal}</h3>`\n    + '<ul class=\"recipe-taxonomy\">'\n    + `<li>Area: ${strArea}</li>`\n    + `<li>Category: ${strCategory}</li>`\n    + '</ul>'\n    + '<div class=\"recipe-instructions\">'\n    + '<h3>Instructions</h3>'\n    + `<p>${strInstructions}</p><button class=\"btn ec-btn\">Read more...</button><br>`\n    + `<a href=\"${strYoutube}\" target=\"_blank\">Watch Live on YouTube</a>`\n    + '</div>'\n    + '<div class=\"recipe-ingredients\">'\n    + '<h3>Ingredients</h3>'\n    + '<div class=\"ingredients-list\"></div>'\n    + '</div>'\n    + '<div class=\"comments-wrapper\">'\n    + '<h3>Comments (<span>0</span>)</h3>'\n    + '<ul class=\"comments-list\"></ul>'\n    + '</div>'\n    + '<div class=\"comment-form\">'\n    + `<form action=\"#\" target_id=\"${idMeal}\">`\n    + '<h3>Add Comment</h3>'\n    + '<input type=\"text\" name=\"user\" class=\"field\" maxlength=\"40\" placeholder=\"Your name\" required>'\n    + '<textarea name=\"comment\" class=\"field\" maxlength=\"200\" placeholder=\"Your comment\" required></textarea>'\n    + '<button type=\"submit\" class=\"btn comment-btn\">'\n    + '<span>Comment</span>'\n    + '<div class=\"lds-dots hidden\">'\n    + '<div></div><div></div><div></div><div></div>'\n    + '</div>'\n    + '</button>'\n    + '</form>'\n    + '</div>'\n    + '</div>'\n  );\n  return element;\n};\n\nconst renderComment = ({ comment, username, creation_date }) => {\n  const element = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li');\n\n  element.className = 'comment-item';\n  element.textContent = `${creation_date}  @${username}: ${comment}`;\n\n  return element;\n};\n\nconst renderIngredient = (measure, value) => {\n  const element = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span');\n\n  element.className = 'ingredient-item';\n  element.textContent = `${measure} ${value}`;\n\n  return element;\n};\n\nconst appendIngredient = (measure, item, list) => {\n  list.appendChild(renderIngredient(measure, item));\n};\n\nconst filterIngredients = (recipe) => Object.entries(recipe).filter(\n  ([key, value]) => key.includes('strIngredient') && value !== null && value !== '',\n);\n\nconst scaleInstructionContainer = (element) => {\n  const { textContent: value } = element;\n  element.textContent = value.includes('less') ? 'Read more...' : 'Show less';\n\n  element.previousElementSibling.classList.toggle('expand');\n};\n\nconst sortByDate = ({ creation_date: a }, { creation_date: b }) => new Date(b) - new Date(a);\n\nconst toggleOverflow = () => _elements_js__WEBPACK_IMPORTED_MODULE_0__.Elements.body.classList.toggle('no-overflow');\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/commons.js?");

/***/ }),

/***/ "./src/displayCards.js":
/*!*****************************!*\
  !*** ./src/displayCards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/likes.js\");\n/* harmony import */ var _recipieCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipieCounter.js */ \"./src/recipieCounter.js\");\n\n\n\nconst recipies = document.querySelector('.recipies');\nconst recipesSection = document.querySelector('#recipesSection');\n\nconst displayCards = async () => {\n  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=British')\n    .then((response) => response.json())\n    .then((data) => {\n      let card = '';\n      data.meals.forEach((meal) => {\n        card += `<div class=\"card\" id=\"${meal.idMeal}\">\n               <div class=\"card-img\">\n                   <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\n               </div>\n               <div class=\"card-info\">\n                   <h2>${meal.strMeal}</h2>\n                   <ul>\n                       <li><button target_id=${meal.idMeal}  class=\"commentBtn\" type=\"button\">Comments</button></li>\n                       <li><button class=\"like-btn\"><i target_id=${meal.idMeal} class=\"fa-regular fa-heart\"></i><span class=\"like-count\">0</span></button></li>\n                   </ul>\n               </div>\n             </div>`;\n      });\n      recipies.innerHTML = card;\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.likeFetcher)();\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.likeCreator)();\n      (0,_recipieCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.meals, recipesSection);\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCards);\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/displayCards.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$getAttrib\": () => (/* binding */ $getAttrib),\n/* harmony export */   \"$select\": () => (/* binding */ $select),\n/* harmony export */   \"Elements\": () => (/* binding */ Elements),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nconst createElement = (tagName) => document.createElement(tagName);\n\nconst $select = (selector, parentTree = document.body) => parentTree.querySelector(selector);\n\nconst $getAttrib = ($element, attribute) => {\n  if (typeof $element === 'string') $element = $select($element);\n\n  return $element.getAttribute(attribute);\n};\n\nclass Elements {\n  static get main() {\n    return $select('main');\n  }\n\n  static get body() {\n    return document.body;\n  }\n}\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles.css */ \"./src/assets/styles.css\");\n/* harmony import */ var _assets_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/popup.css */ \"./src/assets/popup.css\");\n/* harmony import */ var _assets_images_bannercapstone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/bannercapstone.png */ \"./src/assets/images/bannercapstone.png\");\n/* harmony import */ var _displayCards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayCards.js */ \"./src/displayCards.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\n\n\n\n\nconst contact = document.querySelector('.contact');\nconst cardContainer = document.querySelector('.card_container');\nconst contactSection = document.querySelector('#contactSection');\nconst recipesSection = document.querySelector('#recipesSection');\nconst footer = document.querySelector('.footer');\n\ncontactSection.addEventListener('click', () => {\n  cardContainer.classList.add('hidden');\n  contact.classList.remove('hidden');\n  footer.classList.add('footerContact');\n});\n\nrecipesSection.addEventListener('click', () => {\n  cardContainer.classList.remove('hidden');\n  contact.classList.add('hidden');\n  footer.classList.remove('footerContact');\n});\n\nwindow.addEventListener('DOMContentLoaded', async () => {\n  (0,_displayCards_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_app_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  contact.classList.add('hidden');\n});\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/index.js?");

/***/ }),

/***/ "./src/likes.js":
/*!**********************!*\
  !*** ./src/likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"likeCreator\": () => (/* binding */ likeCreator),\n/* harmony export */   \"likeFetcher\": () => (/* binding */ likeFetcher)\n/* harmony export */ });\nconst appId = '1AkDSb9CeEmOpdltysrI';\nconst likeFetcher = async () => {\n  const cards = document.querySelectorAll('.card');\n  const likeCount = document.querySelectorAll('.like-count');\n  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`)\n    .then((response) => response.json())\n    .then((json) => {\n      cards.forEach((card, index) => {\n        json.forEach((item) => {\n          if (item.item_id === card.id) {\n            likeCount[index].innerHTML = item.likes;\n          }\n        });\n      });\n    });\n};\n\nconst likeCreator = async () => {\n  const heartIcon = document.querySelectorAll('.fa-heart');\n  heartIcon.forEach((elem) => {\n    elem.addEventListener('click', (e) => {\n      e.target.classList.remove('fa-regular');\n      e.target.classList.add('fa-solid');\n      e.target.nextSibling.innerHTML = Number(e.target.nextSibling.innerHTML) + 1;\n      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1AkDSb9CeEmOpdltysrI/likes', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({\n          item_id: e.target.getAttribute('target_id'),\n        }),\n      });\n    });\n  });\n};\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/likes.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"showPopup\": () => (/* binding */ showPopup)\n/* harmony export */ });\n/* harmony import */ var _commons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commons.js */ \"./src/commons.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.js */ \"./src/comment.js\");\n/* harmony import */ var _apis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apis.js */ \"./src/apis.js\");\n\n\n\n\n\nconst listIngredients = async (itemId) => {\n  const res = await (0,_apis_js__WEBPACK_IMPORTED_MODULE_3__.getDetails)(itemId);\n  const [details] = res.meals;\n  const popup = (0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.renderPopup)(details);\n  const list1 = (0,_elements_js__WEBPACK_IMPORTED_MODULE_1__.$select)('.ingredients-list', popup);\n\n  (0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.filterIngredients)(details).forEach(\n    ([, desc], j) => (0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.appendIngredient)(details[`strMeasure${j + 1}`], desc, list1),\n  );\n\n  return popup;\n};\n\nconst showPopup = async (target) => {\n  (0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.toggleOverflow)();\n\n  const wrapper = (0,_elements_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div');\n  wrapper.className = 'popup-wrapper';\n\n  wrapper.appendChild((0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.ldsEllipsis)());\n  _elements_js__WEBPACK_IMPORTED_MODULE_1__.Elements.main.appendChild(wrapper);\n\n  const dataId = (0,_elements_js__WEBPACK_IMPORTED_MODULE_1__.$getAttrib)(target, 'target_id');\n  const popup = await listIngredients(dataId);\n  await (0,_comment_js__WEBPACK_IMPORTED_MODULE_2__.listComments)(dataId, popup);\n  (0,_elements_js__WEBPACK_IMPORTED_MODULE_1__.$select)('form', popup).onsubmit = _comment_js__WEBPACK_IMPORTED_MODULE_2__.addComment;\n\n  wrapper.innerHTML = '';\n  wrapper.appendChild(popup);\n\n  return popup;\n};\n\nconst closePopup = ({ parentElement }) => {\n  const { parentElement: popup } = parentElement.parentElement;\n\n  popup.remove();\n  (0,_commons_js__WEBPACK_IMPORTED_MODULE_0__.toggleOverflow)();\n};\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/popup.js?");

/***/ }),

/***/ "./src/recipieCounter.js":
/*!*******************************!*\
  !*** ./src/recipieCounter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst recipieCounter = (data, element) => {\n  element.innerHTML = `Recipes (${data.length})`;\n  return data.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recipieCounter);\n\n\n//# sourceURL=webpack://foodify_capstone_project/./src/recipieCounter.js?");

/***/ }),

/***/ "./src/assets/images/bannercapstone.png":
/*!**********************************************!*\
  !*** ./src/assets/images/bannercapstone.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd53bebe609804878382.png\";\n\n//# sourceURL=webpack://foodify_capstone_project/./src/assets/images/bannercapstone.png?");

/***/ }),

/***/ "./src/assets/images/popup-x-btn.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/popup-x-btn.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56f7a0853849f037762c.svg\";\n\n//# sourceURL=webpack://foodify_capstone_project/./src/assets/images/popup-x-btn.svg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;