const { Ship, Gameboard } = require("./script.js");

describe("Ship", () => {
  test("should create a ship w/ default values", () => {
    const testShip = new Ship(3);
    expect(testShip.length).toBe(3);
    expect(testShip.numHits).toBe(0);
    expect(testShip.sunk).toBe(false);
  });

  test("ship hits should increase when called", () => {
    const testShip = new Ship(3, 0, false);
    expect(testShip.numHits).toBe(0);
    testShip.hit();
    expect(testShip.numHits).toBe(1);
  });

  test("ship function should show sunk after being hit", () => {
    const testShip = new Ship(3, 2, false);
    expect(testShip.isSunk()).toBe(false);
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
  });
});

describe("Gameboard", () => {
  test("board should create a 10x10 matrix filled with null", () => {
    const testBoard = new Gameboard();
    expect(testBoard.board.length).toBe(10);
    for (let i = 0; i < testBoard.board.length; i++) {
      expect(testBoard.board[i].length).toBe(10);
    }
  });

  test("board should accept only valid ship placements", () => {
    const testBoard = new Gameboard();
    const ship = new Ship(1, 0, false);
    // coordinates out of range
    expect(testBoard.placeShip(-1, 0, ship)).toBe(false);
    expect(testBoard.placeShip(0, -1, ship)).toBe(false);
    expect(testBoard.placeShip(0, 11, ship)).toBe(false);
    expect(testBoard.placeShip(11, 0, ship)).toBe(false);

    // placing on the same coordinate twice
    expect(testBoard.placeShip(0, 0, ship)).toBe(true);
    expect(testBoard.placeShip(0, 0, ship)).toBe(false);
  });

  test("board can receive attacks on ships and empty cells", () => {
    const testBoard = new Gameboard();
    const ship = new Ship(1, 0, false);
    testBoard.placeShip(0, 0, ship);

    expect(testBoard.receiveAttack(1, 1)).toBe("miss");
    expect(testBoard.alreadyHit.has("1,1")).toBe(true);

    expect(testBoard.receiveAttack(0, 0)).toBe("hit");
    expect(testBoard.receiveAttack(0, 0)).toBe("invalid");
    expect(testBoard.alreadyHit.has("0,0")).toBe(true);

    expect(ship.numHits).toBe(1);
    expect(ship.sunk).toBe(true);
  });

  test("board can determine if all ships are sunk", () => {
    const testBoard = new Gameboard();
    const ship = new Ship(1, 0, false);
    testBoard.placeShip(0, 0, ship);
    expect(testBoard.allShipsSunk()).toBe(false);
    testBoard.receiveAttack(0, 0);
    expect(testBoard.allShipsSunk()).toBe(true);
  });

  test("board can determine if there's a ship in a location", () => {
    const testBoard = new Gameboard();
    const ship = new Ship(1, 0, false);
    expect(testBoard.isShip(0, 0)).toBe(false);
    testBoard.placeShip(0, 0, ship);
    expect(testBoard.isShip(0, 0)).toBe(true);
  });
});
