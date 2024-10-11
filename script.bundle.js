"use strict";
(self["webpackChunktop_battleship"] = self["webpackChunktop_battleship"] || []).push([["script"],{

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, numHits = 0, sunk = false) {
    this.length = length;
    this.numHits = numHits;
    this.sunk = sunk;
  }

  hit() {
    this.numHits += 1;
  }

  isSunk() {
    if (this.numHits >= this.length) {
      return true;
    } else {
      return false;
    }
  }
}

// board holds pointers to ships; keep track of already fired coordinates
class Gameboard {
  constructor() {
    // 10 x 10 board
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.alreadyHit = new Set();
    this.shipsLeft = 0;
  }

  placeShip(x, y, length) {
    const ship = new Ship(length);
    if (
      x < 0 ||
      x >= this.board.length ||
      y < 0 ||
      y >= this.board.length ||
      this.board[x][y] instanceof Ship
    ) {
      return false;
    }

    this.board[x][y] = ship;
    this.shipsLeft += 1;
    return true;
  }

  getCoordString(x, y) {
    return `${x},${y}`;
  }

  receiveAttack(x, y) {
    if (
      x < 0 ||
      x >= this.board.length ||
      y < 0 ||
      y >= this.board.length ||
      this.alreadyHit.has(this.getCoordString(x, y))
    ) {
      return false;
    }

    this.alreadyHit.add(this.getCoordString(x, y));

    if (this.board[x][y] instanceof Ship) {
      this.board[x][y].hit();
      this.updateShipSink(this.board[x][y]);
      return true;
    }

    return false;
  }

  updateShipSink(ship) {
    const isSunk = ship.isSunk();
    if (isSunk) {
      ship.sunk = isSunk;
      this.shipsLeft -= 1;
    }
  }

  allShipsSunk() {
    if (this.shipsLeft <= 0) {
      return true;
    }
    return false;
  }
}

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsR0FBRyxFQUFFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgbnVtSGl0cyA9IDAsIHN1bmsgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLm51bUhpdHMgPSBudW1IaXRzO1xyXG4gICAgdGhpcy5zdW5rID0gc3VuaztcclxuICB9XHJcblxyXG4gIGhpdCgpIHtcclxuICAgIHRoaXMubnVtSGl0cyArPSAxO1xyXG4gIH1cclxuXHJcbiAgaXNTdW5rKCkge1xyXG4gICAgaWYgKHRoaXMubnVtSGl0cyA+PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGJvYXJkIGhvbGRzIHBvaW50ZXJzIHRvIHNoaXBzOyBrZWVwIHRyYWNrIG9mIGFscmVhZHkgZmlyZWQgY29vcmRpbmF0ZXNcclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIDEwIHggMTAgYm9hcmRcclxuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XHJcbiAgICB0aGlzLmFscmVhZHlIaXQgPSBuZXcgU2V0KCk7XHJcbiAgICB0aGlzLnNoaXBzTGVmdCA9IDA7XHJcbiAgfVxyXG5cclxuICBwbGFjZVNoaXAoeCwgeSwgbGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcclxuICAgIGlmIChcclxuICAgICAgeCA8IDAgfHxcclxuICAgICAgeCA+PSB0aGlzLmJvYXJkLmxlbmd0aCB8fFxyXG4gICAgICB5IDwgMCB8fFxyXG4gICAgICB5ID49IHRoaXMuYm9hcmQubGVuZ3RoIHx8XHJcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYm9hcmRbeF1beV0gPSBzaGlwO1xyXG4gICAgdGhpcy5zaGlwc0xlZnQgKz0gMTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29vcmRTdHJpbmcoeCwgeSkge1xyXG4gICAgcmV0dXJuIGAke3h9LCR7eX1gO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHggPCAwIHx8XHJcbiAgICAgIHggPj0gdGhpcy5ib2FyZC5sZW5ndGggfHxcclxuICAgICAgeSA8IDAgfHxcclxuICAgICAgeSA+PSB0aGlzLmJvYXJkLmxlbmd0aCB8fFxyXG4gICAgICB0aGlzLmFscmVhZHlIaXQuaGFzKHRoaXMuZ2V0Q29vcmRTdHJpbmcoeCwgeSkpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWxyZWFkeUhpdC5hZGQodGhpcy5nZXRDb29yZFN0cmluZyh4LCB5KSk7XHJcblxyXG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwKSB7XHJcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU2hpcFNpbmsodGhpcy5ib2FyZFt4XVt5XSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNoaXBTaW5rKHNoaXApIHtcclxuICAgIGNvbnN0IGlzU3VuayA9IHNoaXAuaXNTdW5rKCk7XHJcbiAgICBpZiAoaXNTdW5rKSB7XHJcbiAgICAgIHNoaXAuc3VuayA9IGlzU3VuaztcclxuICAgICAgdGhpcy5zaGlwc0xlZnQgLT0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFsbFNoaXBzU3VuaygpIHtcclxuICAgIGlmICh0aGlzLnNoaXBzTGVmdCA8PSAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9