import { Ship, Gameboard, Player } from "./script.js";
import "./style.css";

class Game {
  constructor() {
    const user = new Player("1");
    const comp = new Player("2");

    this.currPlayer = user.id;
    this.gameContainer = document.getElementById("game-container");

    const ship1 = new Ship(1);
    const ship2 = new Ship(1);
    user.gameboard.placeShip(0, 0, ship1);
    comp.gameboard.placeShip(0, 0, ship2);
    const ship3 = new Ship(1);
    const ship4 = new Ship(1);
    user.gameboard.placeShip(5, 5, ship1);
    comp.gameboard.placeShip(6, 6, ship2);

    const userContainer = this.renderBoard(document.createElement("div"), user);
    const compContainer = this.renderBoard(document.createElement("div"), comp);

    this.gameContainer.appendChild(userContainer);
    this.gameContainer.appendChild(compContainer);
  }

  renderBoard(container, player) {
    container.innerHTML = "";
    container.className = "container";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const grid = document.createElement("div");
        grid.className = "element";
        container.appendChild(grid);

        if (player.gameboard.isShip(i, j)) {
          grid.style.background = "blue";
        }

        grid.addEventListener("click", () => {
          if (this.currPlayer != player.id) {
            const attack = player.gameboard.receiveAttack(i, j);
            if (attack == "hit") {
              grid.style.background = "red";
            } else if (attack == "miss") {
              grid.style.background = "gray";
            }

            if (player.gameboard.allShipsSunk()) {
              const gameMessage = document.getElementById("game-message");
              gameMessage.textContent = "game over!";
              this.gameContainer.style.pointerEvents = "none";
            }
            this.currPlayer = player.id;
          }
        });
      }
    }

    return container;
  }
}

const game = new Game();
