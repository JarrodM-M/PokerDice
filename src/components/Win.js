const checkFree = arr => {
  let index = arr.map(i => i.x + i.y).indexOf("44");
  return index === 1 || index === 2 || index === 3;
};

const checkWinningColor = (winner, red, blue, setRed, setBlue, number) => {
  if (winner === "red") setRed(red + number);
  else setBlue(blue + number);
};

const testSliceX = (board, redWins, blueWins, setRedWins, setBlueWins) => {
  let winningArray = [];
  let winningX = null;
  let winningColor = null;
  let setWinner = null;
  let inARow = 1;
  let lastOwner = null;
  let lastY;
  let winning = board.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastOwner === subElement.owner &&
        subElement.y - lastY == 1 &&
        subElement.winOn !== "onX"
      ) {
        inARow += 1;
        winningArray.push(subElement.y);
        winningColor = subElement.owner;
        winningX = subElement.x;
      } else {
        inARow = 1;
        winningArray.splice(0, winningArray.length);
      }

      lastOwner = subElement.owner;
      lastY = subElement.y;
      return inARow >= 5;
    });
    return inARow >= 5;
  });

  if (winning) {
    checkWinningColor(
      winningColor,
      redWins,
      blueWins,
      setRedWins,
      setBlueWins,
      1
    );
    setWinner = "Winner: " + winningColor;
    winningArray.unshift(winningArray[0] - 1);
    winningArray.map(y => (board[winningX][y].winOn = "onX"));
    console.log(setWinner + "test X");
  }
  return true;
};

const testFullX = (board, redWins, blueWins, setRedWins, setBlueWins) => {
  let lastY = null;
  let lastOwner = null;
  let inARow = 1;
  let gameWinningColor = null;
  let setGameWinner = null;
  let fullWinning = board.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastOwner === subElement.owner &&
        subElement.y - lastY == 1
      ) {
        inARow += 1;
        gameWinningColor = subElement.owner;
      } else {
        inARow = 1;
      }
      lastOwner = subElement.owner;
      lastY = subElement.y;
      return inARow >= 9;
    });
    return inARow >= 9;
  });
  if (fullWinning) {
    checkWinningColor(
      gameWinningColor,
      redWins,
      blueWins,
      setRedWins,
      setBlueWins,
      2
    );
    setGameWinner = `Game Winner: ${gameWinningColor}`;
    console.log(setGameWinner + "full x");
    return true;
  }
};

const testSliceY = (board, redWins, blueWins, setRedWins, setBlueWins) => {
  let winningArray = [];
  let winningY = null;
  let winningColor = null;
  let setWinner = null;
  let inARow = 1;
  let lastOwner = null;
  let lastX = null;
  let newTestBoard = board.map((x, index) => board.map(y => y[index]));

  let winning = newTestBoard.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastOwner === subElement.owner &&
        subElement.x - lastX == 1 &&
        subElement.winOn !== "onY"
      ) {
        inARow += 1;
        winningArray.push(subElement.x);
        winningColor = subElement.owner;
        winningY = subElement.y;
      } else {
        inARow = 1;
        winningArray.splice(0, winningArray.length);
      }

      lastOwner = subElement.owner;
      lastX = subElement.x;
      return inARow >= 5;
    });
    return inARow >= 5;
  });

  if (winning) {
    checkWinningColor(
      winningColor,
      redWins,
      blueWins,
      setRedWins,
      setBlueWins,
      1
    );

    setWinner = "Winner: " + winningColor;
    winningArray.unshift(winningArray[0] - 1);
    winningArray.map(x => (board[x][winningY].winOn = "onY"));
    console.log(setWinner + "testY");

    return true;
  }
};

const testFullY = (board, redWins, blueWins, setRedWins, setBlueWins) => {
  let gameWinningColor = null;
  let setGameWinner = null;
  let lastX = null;
  let lastOwner = null;
  let inARow = 1;
  let newTestBoard = board.map((x, index) => board.map(row => row[index]));

  let fullWinning = newTestBoard.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        lastOwner === subElement.owner &&
        subElement.x - lastX == 1
      ) {
        inARow += 1;
        gameWinningColor = subElement.owner;
      } else {
        inARow = 1;
      }

      lastOwner = subElement.owner;
      lastX = subElement.x;
      return inARow >= 9;
    });
    return inARow >= 9;
  });
  if (fullWinning) {
    checkWinningColor(
      gameWinningColor,
      redWins,
      blueWins,
      setRedWins,
      setBlueWins,
      2
    );

    setGameWinner = `Game Winner: ${gameWinningColor}`;
    console.log(setGameWinner + "full y");
    return true;
  }
};

const testSliceD = (board, redWins, blueWins, setRedWins, setBlueWins) => {
  let inARow = 1;
  let checkColor = [0, 1, 2, 3, 4];
  let colorArray = [];
  let currentColor = null;
  let winningColor = null;
  let winning = board.some(element => {
    element.some(subElement => {
      if (
        subElement.owner !== null &&
        subElement.x <= 4 &&
        subElement.y <= 4 &&
        subElement.winOn !== "onDR"
      ) {
        currentColor = subElement.owner;
        colorArray.push(
          ...checkColor.map(i => board[+subElement.x + i][+subElement.y + i])
        );
        if (
          colorArray.every(
            x => x.owner === currentColor && x.winOn !== "onDR"
          ) &&
          !checkFree(colorArray)
        ) {
          winningColor = currentColor;
          inARow = 5;
          colorArray.map(cA => (board[cA.x][cA.y].winON = "onDR"));
        } else {
          colorArray = [];
        }
      } else if (
        subElement.owner !== null &&
        subElement.x <= 4 &&
        subElement.y >= 4 &&
        subElement.winOn !== "onDL"
      ) {
        currentColor = subElement.owner;
        colorArray.push(
          ...checkColor.map(i => board[+subElement.x + i][+subElement.y - i])
        );

        if (
          colorArray.every(
            x =>
              (x.owner === currentColor || x.owner === "both") &&
              x.winOn !== "onDL"
          ) &&
          !checkFree(colorArray)
        ) {
          winningColor = currentColor;
          inARow = 5;
          colorArray.map(cA => (board[cA.x][cA.y].winON = "onDL"));
        } else {
          colorArray = [];
        }
      }

      return inARow >= 5;
    });
    return inARow >= 5;
  });
  if (winning) {
    checkWinningColor(
      winningColor,
      redWins,
      blueWins,
      setRedWins,
      setBlueWins,
      1
    );

    console.log(colorArray.map(i => i.x + i.y).indexOf("44"));

    console.log(checkFree(colorArray));
    console.log(winningColor);
    return true;
  }
};

export function checkWin(
  boardState,
  redWins,
  blueWins,
  setRedWins,
  setBlueWins
) {
  testSliceX(boardState, redWins, blueWins, setRedWins, setBlueWins);
  testSliceY(boardState, redWins, blueWins, setRedWins, setBlueWins);
  testSliceD(boardState, redWins, blueWins, setRedWins, setBlueWins);
  testFullX(boardState, redWins, blueWins, setRedWins, setBlueWins);
  testFullY(boardState, redWins, blueWins, setRedWins, setBlueWins);
}
