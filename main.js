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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList.js */ \"./src/linkedList.js\");\n\n\nconst list = new _linkedList_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList;\nlist.append(\"dog\");\nlist.append(\"cat\");\nlist.append(\"bird\");\nlist.append(\"lizard\");\n\nconsole.log(list.toString());\n\nlist.pop()\nconsole.log(list.toString());\n\nlist.prepend(\"jason\");\nconsole.log(list.toString());\n\nconsole.log(list.find(\"jason\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBNkM7O0FBRTdDLGlCQUFpQixzREFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzPzI5NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlua2VkTGlzdCB9IGZyb20gXCIuL2xpbmtlZExpc3QuanNcIjtcblxuY29uc3QgbGlzdCA9IG5ldyBMaW5rZWRMaXN0O1xubGlzdC5hcHBlbmQoXCJkb2dcIik7XG5saXN0LmFwcGVuZChcImNhdFwiKTtcbmxpc3QuYXBwZW5kKFwiYmlyZFwiKTtcbmxpc3QuYXBwZW5kKFwibGl6YXJkXCIpO1xuXG5jb25zb2xlLmxvZyhsaXN0LnRvU3RyaW5nKCkpO1xuXG5saXN0LnBvcCgpXG5jb25zb2xlLmxvZyhsaXN0LnRvU3RyaW5nKCkpO1xuXG5saXN0LnByZXBlbmQoXCJqYXNvblwiKTtcbmNvbnNvbGUubG9nKGxpc3QudG9TdHJpbmcoKSk7XG5cbmNvbnNvbGUubG9nKGxpc3QuZmluZChcImphc29uXCIpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinkedList: () => (/* binding */ LinkedList)\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n// linkedList.js\n\nclass LinkedList {\n    constructor() {\n        this.headNode = null;\n        this.tailNode = null;\n    }\n\n    append(value) {\n        if(this.headNode == null) {\n            this.headNode = this.tailNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node;\n            this.headNode.value = value;\n        }\n        else {\n            let newNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node();\n            newNode.value = value;\n            this.tailNode.nextNode = newNode;\n            this.tailNode = newNode;\n        }\n    }\n\n    prepend(value) {\n        if(this.headNode == null) {\n            this.headNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node;\n            this.headNode.value = value;\n        }\n        else {\n            const newNode = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node();\n            newNode.value = value;\n            newNode.nextNode = this.headNode;\n            this.headNode = newNode;\n        }\n    }\n\n    size() {\n        let count = 0;\n        let currentNode = this.headNode;\n        while(currentNode != null) {\n            count++;\n            currentNode = currentNode.nextNode;\n        }\n        return count;\n    }\n\n    head() {\n        return this.headNode;\n    }\n\n    tail() {\n        return this.tailNode;\n    }\n\n    at(index) {\n        if(index == 0) {\n            return this.headNode;\n        }\n        else{\n            let currentNode = this.headNode;\n            for(let i = 0; i < index; i++) {\n                currentNode = currentNode.nextNode;\n            }\n            return currentNode;\n        }\n    }\n\n    pop() {\n        if(this.headNode == null) return null;\n        else if(this.tailNode == null) this.headNode == null;\n        else {\n            let currentNode = this.headNode;\n            let prevNode = currentNode;\n            while(currentNode.nextNode != null) {\n                prevNode = currentNode;\n                currentNode = currentNode.nextNode;\n        }\n        prevNode.nextNode = null;\n        currentNode = null;\n        }\n    }\n\n    contains(value) {\n        if(this.headNode == null) return false;\n        else {\n            let currentNode = this.headNode;\n            while(currentNode != null) {\n                if(currentNode.value == value) return true;\n                currentNode = currentNode.nextNode;\n            }\n            return false;\n        }\n    }\n\n    find(value) {\n        if(this.headNode == null) return null;\n        else {\n            let currentNode = this.headNode;\n            let index = 0;\n            while(currentNode != null) {\n                if(currentNode.value == value) return index;\n                currentNode = currentNode.nextNode;\n                index ++;\n            }\n            return null;\n        }\n    }\n\n    toString() {\n        let listString = \"\";\n        if(this.headNode == null) return \"null\";\n        else {\n            let currentNode = this.headNode;\n            while(currentNode != null) {\n                let value = currentNode.value;\n                listString += `(${value}) -> `;\n                currentNode = currentNode.nextNode;\n            }\n            listString += \"null\";\n            return listString;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlua2VkTGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ2lDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCwwQ0FBSTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMENBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDBDQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwQ0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xpbmtlZExpc3QuanM/ODYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaW5rZWRMaXN0LmpzXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZS5qc1wiO1xuZXhwb3J0IGNsYXNzIExpbmtlZExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy50YWlsTm9kZSA9IG51bGw7XG4gICAgfVxuXG4gICAgYXBwZW5kKHZhbHVlKSB7XG4gICAgICAgIGlmKHRoaXMuaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkTm9kZSA9IHRoaXMudGFpbE5vZGUgPSBuZXcgTm9kZTtcbiAgICAgICAgICAgIHRoaXMuaGVhZE5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdOb2RlID0gbmV3IE5vZGUoKTtcbiAgICAgICAgICAgIG5ld05vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudGFpbE5vZGUubmV4dE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGhpcy50YWlsTm9kZSA9IG5ld05vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVwZW5kKHZhbHVlKSB7XG4gICAgICAgIGlmKHRoaXMuaGVhZE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkTm9kZSA9IG5ldyBOb2RlO1xuICAgICAgICAgICAgdGhpcy5oZWFkTm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKCk7XG4gICAgICAgICAgICBuZXdOb2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBuZXdOb2RlLm5leHROb2RlID0gdGhpcy5oZWFkTm9kZTtcbiAgICAgICAgICAgIHRoaXMuaGVhZE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2l6ZSgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkTm9kZTtcbiAgICAgICAgd2hpbGUoY3VycmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH1cblxuICAgIGhlYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWROb2RlO1xuICAgIH1cblxuICAgIHRhaWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhaWxOb2RlO1xuICAgIH1cblxuICAgIGF0KGluZGV4KSB7XG4gICAgICAgIGlmKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWROb2RlO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICBpZih0aGlzLmhlYWROb2RlID09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICBlbHNlIGlmKHRoaXMudGFpbE5vZGUgPT0gbnVsbCkgdGhpcy5oZWFkTm9kZSA9PSBudWxsO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZE5vZGU7XG4gICAgICAgICAgICBsZXQgcHJldk5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIHdoaWxlKGN1cnJlbnROb2RlLm5leHROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwcmV2Tm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcHJldk5vZGUubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICBjdXJyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb250YWlucyh2YWx1ZSkge1xuICAgICAgICBpZih0aGlzLmhlYWROb2RlID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWROb2RlO1xuICAgICAgICAgICAgd2hpbGUoY3VycmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnROb2RlLnZhbHVlID09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZCh2YWx1ZSkge1xuICAgICAgICBpZih0aGlzLmhlYWROb2RlID09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZE5vZGU7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgd2hpbGUoY3VycmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnROb2RlLnZhbHVlID09IHZhbHVlKSByZXR1cm4gaW5kZXg7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgICAgICAgICBpbmRleCArKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBsaXN0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgaWYodGhpcy5oZWFkTm9kZSA9PSBudWxsKSByZXR1cm4gXCJudWxsXCI7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkTm9kZTtcbiAgICAgICAgICAgIHdoaWxlKGN1cnJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjdXJyZW50Tm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsaXN0U3RyaW5nICs9IGAoJHt2YWx1ZX0pIC0+IGA7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpc3RTdHJpbmcgKz0gXCJudWxsXCI7XG4gICAgICAgICAgICByZXR1cm4gbGlzdFN0cmluZztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/linkedList.js\n");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Node: () => (/* binding */ Node)\n/* harmony export */ });\n// node.js\nclass Node {\n    constructor() {\n        this.value = null;\n        this.nextNode = null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbm9kZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL25vZGUuanM/ZjczYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBub2RlLmpzXG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHROb2RlID0gbnVsbDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/node.js\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;