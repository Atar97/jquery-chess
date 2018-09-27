/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Bishop =  __webpack_require__(/*! ./pieces/bishop.js */ \"./src/js/pieces/bishop.js\");\nconst King = __webpack_require__(/*! ./pieces/king.js */ \"./src/js/pieces/king.js\");\nconst Knight = __webpack_require__(/*! ./pieces/knight.js */ \"./src/js/pieces/knight.js\");\nconst Pawn = __webpack_require__(/*! ./pieces/pawn.js */ \"./src/js/pieces/pawn.js\");\nconst Queen = __webpack_require__(/*! ./pieces/queen.js */ \"./src/js/pieces/queen.js\");\nconst Rook = __webpack_require__(/*! ./pieces/Rook.js */ \"./src/js/pieces/Rook.js\");\nconst NullPiece = __webpack_require__(/*! ./pieces/nullPiece.js */ \"./src/js/pieces/nullPiece.js\");\n\nclass Board {\n  constructor() {\n    this.POWERPIECES = [Rook, Knight, Bishop, Queen,\n      King, Bishop, Knight, Rook];\n    this.sentinal = new NullPiece();\n    this.board = [];\n    for (let i = 0; i < 8; i++) {\n      this.board.push([]);\n    }\n    this.buildBoard();\n  }\n\n  buildBoard() {\n    for (let i = 0; i < 8; i++) {\n      this.board[0][i] = new this.POWERPIECES[i]('white', [0,i]);\n      this.board[1][i] = new Pawn('white', [0,i]);\n      this.board[6][i] = new Pawn('black', [0,i]);\n      this.board[7][i] = new this.POWERPIECES[i]('black', [0,i]);\n      for (let k = 2; k < 6; k++) {\n        this.board[k][i] = this.sentinal;\n      }\n    }\n  }\n\n  movePiece(oldPos, newPos) {\n    const piece = this.getPiece(oldPos);\n    this.setPiece(oldPos, this.sentinal);\n    this.setPiece(newPos, piece);\n    return piece;\n  }\n\n  getPiece(pos) {\n    return this.board[pos[0]][pos[1]];\n  }\n\n  setPiece(pos, piece) {\n    this.board[pos[0]][pos[1]] = piece;\n  }\n}\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./src/js/board.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board.js */ \"./src/js/board.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n  }\n\n  getPiece(pos) {\n    return this.board.getPiece(pos);\n  }\n\n  movePiece(oldPos, newPos) {\n    this.board.movePiece(oldPos, newPos);\n  }\n\n  \n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./view.js */ \"./src/js/view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/js/game.js\");\n\n$(() => {\n  const $mainContainer = $('.board-container');\n  const game = new Game();\n  const view = new View(game, $mainContainer);\n  view.render();\n  setTimeout(() => {\n    game.movePiece([0,0], [4,4]);\n    view.render();\n  }, 2000);\n});\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/pieces/Rook.js":
/*!*******************************!*\
  !*** ./src/js/pieces/Rook.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Piece = __webpack_require__(/*! ./piece.js */ \"./src/js/pieces/piece.js\");\n\nclass Rook extends Piece {\n  constructor(color, pos) {\n    super(color, pos);\n    this.sym = 'R';\n    this.str = '&#9820';\n  }\n}\n\nmodule.exports = Rook;\n\n\n//# sourceURL=webpack:///./src/js/pieces/Rook.js?");

/***/ }),

/***/ "./src/js/pieces/bishop.js":
/*!*********************************!*\
  !*** ./src/js/pieces/bishop.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Piece = __webpack_require__(/*! ./piece.js */ \"./src/js/pieces/piece.js\");\n\nclass Bishop extends Piece {\n  constructor(color, pos) {\n    super(color, pos);\n    this.sym = 'B';\n    this.str = '&#9821;';\n  }\n}\n\nmodule.exports = Bishop;\n\n\n//# sourceURL=webpack:///./src/js/pieces/bishop.js?");

/***/ }),

/***/ "./src/js/pieces/king.js":
/*!*******************************!*\
  !*** ./src/js/pieces/king.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Piece = __webpack_require__(/*! ./piece.js */ \"./src/js/pieces/piece.js\");\nclass King extends Piece {\n  constructor(color, pos) {\n    super(color, pos);\n    this.sym = 'R';\n    this.str = '&#9818;';\n  }\n}\n\nmodule.exports = King;\n\n\n//# sourceURL=webpack:///./src/js/pieces/king.js?");

/***/ }),

/***/ "./src/js/pieces/knight.js":
/*!*********************************!*\
  !*** ./src/js/pieces/knight.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Piece = __webpack_require__(/*! ./piece.js */ \"./src/js/pieces/piece.js\");\nclass Knight extends Piece {\n  constructor(color, pos) {\n    super(color, pos);\n    this.sym = 'N';\n    this.str = '&#9822;';\n  }\n}\n\nmodule.exports = Knight;\n\n\n//# sourceURL=webpack:///./src/js/pieces/knight.js?");

/***/ }),

/***/ "./src/js/pieces/nullPiece.js":
/*!************************************!*\
  !*** ./src/js/pieces/nullPiece.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Piece = __webpack_require__(/*! ./piece.js */ \"./src/js/pieces/piece.js\");\n\nclass NullPiece extends Piece {\n  constructor() {\n    super();\n    this.sym = ' ';\n    this.str = ' ';\n  }\n}\n\nmodule.exports = NullPiece;\n\n\n//# sourceURL=webpack:///./src/js/pieces/nullPiece.js?");

/***/ }),

/***/ "./src/js/pieces/pawn.js":
/*!*******************************!*\
  !*** ./src/js/pieces/pawn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Piece = __webpack_require__(/*! ./piece.js */ \"./src/js/pieces/piece.js\");\nclass Pawn extends Piece {\n  constructor(color, pos) {\n    super(color, pos);\n    this.sym = 'p';\n    this.str = '&#9823;';\n  }\n}\n\nmodule.exports = Pawn;\n\n\n//# sourceURL=webpack:///./src/js/pieces/pawn.js?");

/***/ }),

/***/ "./src/js/pieces/piece.js":
/*!********************************!*\
  !*** ./src/js/pieces/piece.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Piece {\n  constructor(color, pos) {\n    this.color = color;\n    this.pos = pos;\n  }\n}\n\nmodule.exports = Piece;\n\n\n//# sourceURL=webpack:///./src/js/pieces/piece.js?");

/***/ }),

/***/ "./src/js/pieces/queen.js":
/*!********************************!*\
  !*** ./src/js/pieces/queen.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Piece = __webpack_require__(/*! ./piece.js */ \"./src/js/pieces/piece.js\");\n\nclass Queen extends Piece {\n  constructor(color, pos) {\n    super(color, pos);\n    this.sym = 'R';\n    this.str = '&#9819;';\n  }\n}\n\nmodule.exports = Queen;\n\n\n//# sourceURL=webpack:///./src/js/pieces/queen.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class View {\n\n  constructor(game, $container) {\n    this.game = game;\n    this.$container = $container;\n    this.buildBoard();\n    this.bindSquares();\n  }\n\n  buildBoard() {\n    const $board = $('<div class=\"board\"></div>');\n    for (let i = 0; i < 64; i++) {\n      const $square = this.makeSquare(i);\n      $board.append($square);\n    }\n    this.$container.append($board);\n  }\n\n  makeSquare(number) {\n    const $square = $(\"<div class='square'></div>\");\n    const pos = [Math.floor(number / 8), number % 8];\n    $square.data('pos', pos);\n    if (this.whiteSquare(pos)) {\n      $square.addClass('white-square');\n    } else {\n      $square.addClass('black-square');\n    }\n    // this will actually be called in render not in makeSquare\n    // const piece = this.game.getPiece(pos);\n    // $square.append(`<p class=\"${piece.color}\">${piece.str}</p>`);\n    return $square;\n  }\n\n  bindSquares() {\n    const $squares = $('.square');\n    $squares.each(function(index) {\n      const $square = $(this);\n      $square.on('click', e => {\n        const $clickedSq = $(e.currentTarget);\n        $clickedSq.addClass('selected');\n        $clickedSq.addClass('selected:hover');\n        return $clickedSq.data('pos');\n      });\n    });\n  }\n\n  // this will be called between each move\n  render() {\n    const $squares = $('.square');\n    const game = this.game;\n    $squares.each(function(index) {\n      const $square = $(this);\n      const pos = $square.data('pos');\n      const piece = game.getPiece(pos);\n      $square.children().remove();\n      $square.append(`<p class=\"${piece.color}\">${piece.str}</p>`);\n    });\n  }\n\n  whiteSquare(pos) {\n    if (pos[1] % 2 === 0) {\n      if (pos[0] % 2 === 0) {\n        return true;\n      }\n    } else {\n      if (pos[0] % 2 === 1) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/js/view.js?");

/***/ })

/******/ });