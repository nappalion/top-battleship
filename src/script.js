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

  placeShip(x, y, ship) {
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

export { Ship, Gameboard, Player };
