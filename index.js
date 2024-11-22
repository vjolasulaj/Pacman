document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");

  const layout = [
    [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99],
    [99, 33, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 33, 99],
    [99, 22, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 99],
    [99, 22, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 22, 22, 99, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 99, 22, 22, 22, 22, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 99],
    [99, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 22, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 22, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 33, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 11, 11, 11, 11, 11, 11, 11, 11, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 99, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 99, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 99, 88, 88, 99, 99, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 99, 99, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 99, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 99, 88, 88, 99, 99, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 99, 99, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 99, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 99, 88, 99, 99, 99, 99, 88, 99, 99, 99, 99, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 99, 99, 99, 99, 88, 99, 99, 99, 99, 99, 99, 88, 88, 99, 99, 99, 99, 99, 99, 88, 99, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 11, 88, 99, 99, 99, 99, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 11, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 11, 88, 88, 99, 99, 88, 88, 88, 88, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 88, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 88, 88, 88, 11, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 11, 88, 88, 99, 99, 88, 88, 99, 99, 99, 99, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 99, 99, 99, 99, 88, 99, 99, 99, 99, 99, 99, 88, 88, 99, 99, 99, 99, 99, 99, 88, 11, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 11, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 88, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 88, 88, 88, 88, 99, 99, 88, 11, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 99, 88, 88, 99, 99, 99, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 99, 88, 99, 99, 88, 88, 88, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 88, 99, 99, 88, 99, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 99, 88, 88, 99, 99, 99, 88, 99, 99, 99, 99, 99, 99, 99, 88, 99, 99, 99, 88, 99, 99, 99, 99, 99, 99, 88, 99, 99, 99, 99, 99, 99, 99, 88, 99, 99, 99, 99, 99, 99, 88, 99, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 99, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 99, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 11, 11, 11, 11, 11, 11, 11, 11, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 33, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 22, 22, 22, 22, 22, 22, 99],
    [99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99],
    [99, 99, 99, 99, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 99, 99, 99, 99],
    [99, 22, 22, 22, 22, 22, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 22, 22, 22, 22, 22, 22, 22, 99],
    [99, 33, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 33, 99],
    [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99],
  ];

  // 11 - empty
  // 22 - pac-dots
  // 33 - power-pellet
  // 88 - ghost-lair
  // 99 - wall

  const squares = [];

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      squares.push([]);
      for (let j = 0; j < layout[i].length; j++) {
        const square = document.createElement("div");

        square.id = `${i}-${j}`;
        grid.appendChild(square);
        squares[i].push(square);

        if (layout[i][j] === 22) {
          squares[i][j].classList.add("pac-dot");
        }
        if (layout[i][j] === 99) {
          squares[i][j].classList.add("wall");
        }
        if (layout[i][j] === 88) {
          squares[i][j].classList.add("ghost-lair");
        }
        if (layout[i][j] === 33) {
          squares[i][j].classList.add("power-pellet");
        }
      }
    }
  }

  createBoard();

  let pacmanCoordinates = {
    x: 26,
    y: 25,
  };
  let direction = "right";
  squares[pacmanCoordinates.y][pacmanCoordinates.x].classList.add("pac-man"), `direction-${direction}`;
  function movePacman(e) {
    squares[pacmanCoordinates.y][pacmanCoordinates.x].classList.remove("pac-man", `direction-${direction}`);

    switch (e.key) {
      case "ArrowUp":
        if (!squares[pacmanCoordinates.y - 1][pacmanCoordinates.x].classList.contains("wall") && !squares[pacmanCoordinates.y - 1][pacmanCoordinates.x].classList.contains("ghost-lair")) {
          pacmanCoordinates = { y: pacmanCoordinates.y - 1, x: pacmanCoordinates.x };
          direction = "up";
        }
        // if (pacmanCoordinates - 1 === 363) {
        //   pacmanCoordinates = 391;
        // }
        break;
      case "ArrowLeft":
        if (!squares[pacmanCoordinates.y][pacmanCoordinates.x - 1].classList.contains("wall") && !squares[pacmanCoordinates.y][pacmanCoordinates.x - 1].classList.contains("ghost-lair")) {
          pacmanCoordinates = { y: pacmanCoordinates.y, x: pacmanCoordinates.x - 1 };
          direction = "left";
        }
        break;
      case "ArrowDown":
        if (!squares[pacmanCoordinates.y + 1][pacmanCoordinates.x].classList.contains("wall") && !squares[pacmanCoordinates.y + 1][pacmanCoordinates.x].classList.contains("ghost-lair")) {
          pacmanCoordinates = { y: pacmanCoordinates.y + 1, x: pacmanCoordinates.x };
          direction = "down";
        }
        // if (pacmanCoordinates + 1 === 392) {
        //   pacmanCoordinates = 364;
        // }
        break;
      case "ArrowRight":
        if (!squares[pacmanCoordinates.y][pacmanCoordinates.x + 1].classList.contains("wall") && !squares[pacmanCoordinates.y][pacmanCoordinates.x + 1].classList.contains("ghost-lair")) {
          pacmanCoordinates = { y: pacmanCoordinates.y, x: pacmanCoordinates.x + 1 };
          direction = "right";
        }

        break;
    }
    squares[pacmanCoordinates.y][pacmanCoordinates.x].classList.add("pac-man", `direction-${direction}`);
    pacDotEaten();
    powerPelletEaten();
    checkForGameOver();
    checkForWin();
  }

  document.addEventListener("keyup", movePacman);
  function pacDotEaten() {
    if (squares[pacmanCoordinates.y][pacmanCoordinates.x].classList.contains("pac-dot")) {
      score++;
      scoreDisplay.innerHTML = score;
      squares[pacmanCoordinates.y][pacmanCoordinates.x].classList.remove("pac-dot");
    }
  }
  function powerPelletEaten() {
    if (squares[pacmanCoordinates.y][pacmanCoordinates.x].classList.contains("power-pellet")) {
      score += 10;
      scoreDisplay.innerHTML = score;
      ghosts.forEach((ghost) => (ghost.isScared = true));
      setTimeout(unScareGhosts, 9000);
      squares[pacmanCoordinates.y][pacmanCoordinates.x].classList.remove("power-pellet");
    }
  }
  function unScareGhosts() {
    ghosts.forEach((ghost) => (ghost.isScared = false));
  }

  class Ghost {
    constructor(className, startCoordinates, speed) {
      this.className = className;
      this.startCoordinates = startCoordinates;
      this.speed = speed;
      this.currentCoordinates = startCoordinates;
      this.isScared = false;
      this.timerId = NaN;
    }
  }

  //all my ghosts
  const ghosts = [new Ghost("ghost1", { x: 30, y: 15 }, { x: 1, y: 0 }), new Ghost("ghost2", { x: 14, y: 8 }, { x: 0, y: 1 }), new Ghost("ghost3", { x: 18, y: 10 }, { x: 1, y: 0 }), new Ghost("ghost4", { x: 7, y: 12 }, { x: 1, y: 0 })];

  ghosts.forEach((ghost) => squares[ghost.currentCoordinates.y][ghost.currentCoordinates.x].classList.add(ghost.className, "ghost"));

  ghosts.forEach((ghost) => moveGhost(ghost));

  function getRandomDirection() {
    const directions = [
      { x: 1, y: 0 }, // Right
      { x: -1, y: 0 }, // Left
      { x: 0, y: 1 }, // Down
      { x: 0, y: -1 }, // Up
    ];

    const direction = directions[Math.floor(Math.random() * directions.length)];

    return direction;
  }

  function moveGhost(ghost) {
    ghost.timerId = setInterval(function () {
      let currentSpeed = ghost.speed;
      squares[ghost.currentCoordinates.y][ghost.currentCoordinates.x].classList.remove(ghost.className, "ghost", "scared-ghost");

      if (!squares[ghost.currentCoordinates.y][ghost.currentCoordinates.x + currentSpeed.x].classList.contains("ghost") && !squares[ghost.currentCoordinates.y][ghost.currentCoordinates.x + currentSpeed.x].classList.contains("wall")) {
        ghost.currentCoordinates = { x: ghost.currentCoordinates.x + currentSpeed.x, y: ghost.currentCoordinates.y };
      } else {
        ghost.speed = getRandomDirection();
      }

      if (!squares[ghost.currentCoordinates.y + currentSpeed.y][ghost.currentCoordinates.x].classList.contains("ghost") && !squares[ghost.currentCoordinates.y + currentSpeed.y][ghost.currentCoordinates.x].classList.contains("wall")) {
        ghost.currentCoordinates = { x: ghost.currentCoordinates.x, y: ghost.currentCoordinates.y + currentSpeed.y };
      } else {
        ghost.speed = getRandomDirection();
      }

      if (ghost.isScared) {
        squares[ghost.currentCoordinates.y][ghost.currentCoordinates.x].classList.add("scared-ghost");
      }

      if (ghost.isScared && squares[ghost.currentCoordinates.y][ghost.currentCoordinates.x].classList.contains("pac-man")) {
        ghost.isScared = false;
        ghost.currentCoordinates = ghost.startCoordinates;
        score = score + 100;
        scoreDisplay.innerHTML = score;
      }
      squares[ghost.currentCoordinates.y][ghost.currentCoordinates.x].classList.add(ghost.className, "ghost");
      checkForGameOver();
    }, 70);
  }

  function checkForGameOver() {
    if (squares[pacmanCoordinates.y][pacmanCoordinates.x].classList.contains("ghost") && !squares[pacmanCoordinates.y][pacmanCoordinates.x].classList.contains("scared-ghost")) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      setTimeout(function () {
        alert("Game Over");
      }, 500);
    }
  }

  function checkForWin() {
    if (score >= 300) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      setTimeout(function () {
        alert("You have WON!");
      }, 500);
    }
  }
});
