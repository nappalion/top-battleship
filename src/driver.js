import { Ship, Gameboard, Player } from "./script.js";
import "./style.css";

class Game {
  constructor() {
    const user = new Player();
    const comp = new Player();
    const gameContainer = document.getElementById("game-container");

    const userContainer = this.renderBoard(
      document.createElement("div"),
      user.gameboard.board
    );
    const compContainer = this.renderBoard(
      document.createElement("div"),
      comp.gameboard.board
    );

    gameContainer.appendChild(userContainer);
    gameContainer.appendChild(compContainer);
  }

  renderBoard(container, board) {
    container.innerHTML = "";
    container.className = "container";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const grid = document.createElement("div");
        grid.className = "element";
        container.appendChild(grid);

        if (board[i][j] instanceof Ship) {
          grid.style.background = "blue";
        }
      }
    }

    return container;
  }
}

const game = new Game();
