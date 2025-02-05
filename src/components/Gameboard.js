import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import { checkWin } from "./Win";
import "./Gameboard.css";
import "../App.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const numberArray = horizontalAxis.map(i =>
  verticalAxis.map(j => ({ x: i, y: j, owner: null, winOn: null }))
);

export default function Gameboard({
  dice,
  playerState,
  setPlayerState,
  setRollCount,
  dispatch,
  redWins,
  setRedWins,
  blueWins,
  setBlueWins
}) {
  const [boardState, setBoardState] = useState(numberArray);
  const resetAll = () => dispatch({ type: "resetAll" });
  const setOwner = (x, y) => {
    resetAll();
    setRollCount(0);
    boardState[x][y].owner = playerState;
    if (playerState === "red") {
      setPlayerState("blue");
    } else {
      setPlayerState("red");
    }
    if (boardState[4][4].owner !== "blue") {
      boardState[4][4].owner = "blue";
    } else boardState[4][4].owner = "red";
    checkWin(boardState, redWins, blueWins, setRedWins, setBlueWins);
    setBoardState([...boardState]);
  };

  return (
    <div className="board-grid">
      {boardState.map(row =>
        row.map(({ x, y, owner, winOn }) => (
          <Tile
            key={x + y}
            x={x}
            y={y}
            owner={owner}
            winOn={winOn}
            setOwner={() => setOwner(x, y)}
            dice={dice}
          ></Tile>
        ))
      )}
    </div>
  );
}
