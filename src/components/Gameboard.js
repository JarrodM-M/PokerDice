import React from "react";
import Tile from "./Tile";
import "./Gameboard.css";
import "../App.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const theGameboard = [
  { x: 0, y: 0, owner: null },
  { x: 0, y: 1, owner: null },
  { x: 0, y: 2, owner: null },
  { x: 0, y: 3, owner: null },
  { x: 0, y: 4, owner: null },
  { x: 0, y: 5, owner: null },
  { x: 0, y: 6, owner: null },
  { x: 0, y: 7, owner: null },
  { x: 0, y: 8, owner: null },
  { x: 1, y: 0, owner: null },
  { x: 1, y: 1, owner: null },
  { x: 1, y: 2, owner: null },
  { x: 1, y: 3, owner: null },
  { x: 1, y: 4, owner: null },
  { x: 1, y: 5, owner: null },
  { x: 1, y: 6, owner: null },
  { x: 1, y: 7, owner: null },
  { x: 1, y: 8, owner: null },
  { x: 2, y: 0, owner: null },
  { x: 2, y: 1, owner: null },
  { x: 2, y: 2, owner: null },
  { x: 2, y: 3, owner: null },
  { x: 2, y: 4, owner: null },
  { x: 2, y: 5, owner: null },
  { x: 2, y: 6, owner: null },
  { x: 2, y: 7, owner: null },
  { x: 2, y: 8, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null },
  { x: 0, y: 0, owner: null }
];

export default function Gameboard({
  dice,
  playerState,
  setPlayerState,
  handleSelection,
  setRollCount,
  dispatch
}) {
  const board = horizontalAxis.map(x =>
    verticalAxis.map(y => (
      <Tile
        key={x + y}
        x={x}
        y={y}
        owner={null}
        piece={null}
        dice={dice}
        playerState={playerState}
        setPlayerState={setPlayerState}
        handleSelection={handleSelection}
        dispatch={dispatch}
        setRollCount={setRollCount}
      ></Tile>
    ))
  );

  // const [boardState, setBoardState] = useState(board)

  return <div className="board-grid">{board}</div>;
}
