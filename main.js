/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/food.jpeg"
/*!***********************!*\
  !*** ./src/food.jpeg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a78d59f61519c1e1b3c3.jpeg";

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _food_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.jpeg */ \"./src/food.jpeg\");\n\nlet content=document.querySelector(\"#content\")\nconst home = function(){\n    const image=document.createElement(\"img\")\n    const headline=document.createElement(\"h1\")\n    const glaze=document.createElement(\"p\")\n    headline.textContent=\"Welcome to my awesome restaurant\"\n    glaze.textContent=\"Upon entry of our luxrious restaurant, the smell of the delectable pleasantries will water your mouth INSTANTLY!\"\n    image.src=_food_jpeg__WEBPACK_IMPORTED_MODULE_0__\n    headline.style.color=\"red\"\n    content.append(image, headline, glaze)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFDdkI7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVDQUFJO0FBQ2xCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcz9lOGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb29kIGZyb20gXCIuL2Zvb2QuanBlZ1wiXG5leHBvcnQgbGV0IGNvbnRlbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5leHBvcnQgY29uc3QgaG9tZSA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgaW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGNvbnN0IGhlYWRsaW5lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IGdsYXplPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQ9XCJXZWxjb21lIHRvIG15IGF3ZXNvbWUgcmVzdGF1cmFudFwiXG4gICAgZ2xhemUudGV4dENvbnRlbnQ9XCJVcG9uIGVudHJ5IG9mIG91ciBsdXhyaW91cyByZXN0YXVyYW50LCB0aGUgc21lbGwgb2YgdGhlIGRlbGVjdGFibGUgcGxlYXNhbnRyaWVzIHdpbGwgd2F0ZXIgeW91ciBtb3V0aCBJTlNUQU5UTFkhXCJcbiAgICBpbWFnZS5zcmM9Zm9vZFxuICAgIGhlYWRsaW5lLnN0eWxlLmNvbG9yPVwicmVkXCJcbiAgICBjb250ZW50LmFwcGVuZChpbWFnZSwgaGVhZGxpbmUsIGdsYXplKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)()\ndocument.querySelector(\"#home\").addEventListener(\"click\", () =>{\n    _home_js__WEBPACK_IMPORTED_MODULE_0__.content.replaceChildren()\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)()\n})\ndocument.querySelector(\"#menu\").addEventListener(\"click\", () =>{\n    _home_js__WEBPACK_IMPORTED_MODULE_0__.content.replaceChildren()\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)()\n})\ndocument.querySelector(\"#contact\").addEventListener(\"click\", () =>{\n    _home_js__WEBPACK_IMPORTED_MODULE_0__.content.replaceChildren()\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)()\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUM7QUFDekMsOENBQUk7QUFDSjtBQUNBLElBQUksNkNBQU87QUFDWCxJQUFJLCtDQUFJO0FBQ1IsQ0FBQztBQUNEO0FBQ0EsSUFBSSw2Q0FBTztBQUNYLElBQUksK0NBQUk7QUFDUixDQUFDO0FBQ0Q7QUFDQSxJQUFJLDZDQUFPO0FBQ1gsSUFBSSwrQ0FBSTtBQUNSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzP2VjZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9tZSwgY29udGVudCB9IGZyb20gXCIuL2hvbWUuanNcIlxuaG9tZSgpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKClcbiAgICBob21lKClcbn0pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKClcbiAgICBob21lKClcbn0pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKClcbiAgICBob21lKClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;