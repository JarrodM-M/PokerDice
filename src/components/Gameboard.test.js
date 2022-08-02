import React, { useState } from "react";
import ReactDOM from "react-dom";
import Gameboard from "./Gameboard";
import { boardState } from "./Gameboard";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

const numberArray = horizontalAxis.map(i =>
  verticalAxis.map(j => ({ x: i, y: j, owner: null }))
);

const tableX = numberArray;
const tableY = numberArray;
const tableD = numberArray;
const tableF = numberArray;

const testBoard = [
  [
    {
      x: "0",
      y: "0",
      owner: null
    },
    {
      x: "0",
      y: "1",
      owner: null
    },
    {
      x: "0",
      y: "2",
      owner: "red"
    },
    {
      x: "0",
      y: "3",
      owner: "blue"
    },
    {
      x: "0",
      y: "4",
      owner: "red"
    },
    {
      x: "0",
      y: "5",
      owner: "blue"
    },
    {
      x: "0",
      y: "6",
      owner: "blue"
    },
    {
      x: "0",
      y: "7",
      owner: "red"
    },
    {
      x: "0",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "1",
      y: "0",
      owner: null
    },
    {
      x: "1",
      y: "1",
      owner: "red"
    },
    {
      x: "1",
      y: "2",
      owner: null
    },
    {
      x: "1",
      y: "3",
      owner: "red"
    },
    {
      x: "1",
      y: "4",
      owner: "red"
    },
    {
      x: "1",
      y: "5",
      owner: null
    },
    {
      x: "1",
      y: "6",
      owner: "red"
    },
    {
      x: "1",
      y: "7",
      owner: "red"
    },
    {
      x: "1",
      y: "8",
      owner: "red"
    }
  ],
  [
    {
      x: "2",
      y: "0",
      owner: "red"
    },
    {
      x: "2",
      y: "1",
      owner: "red"
    },
    {
      x: "2",
      y: "2",
      owner: null
    },
    {
      x: "2",
      y: "3",
      owner: null
    },
    {
      x: "2",
      y: "4",
      owner: null
    },
    {
      x: "2",
      y: "5",
      owner: null
    },
    {
      x: "2",
      y: "6",
      owner: null
    },
    {
      x: "2",
      y: "7",
      owner: null
    },
    {
      x: "2",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "3",
      y: "0",
      owner: null
    },
    {
      x: "3",
      y: "1",
      owner: null
    },
    {
      x: "3",
      y: "2",
      owner: null
    },
    {
      x: "3",
      y: "3",
      owner: null
    },
    {
      x: "3",
      y: "4",
      owner: null
    },
    {
      x: "3",
      y: "5",
      owner: null
    },
    {
      x: "3",
      y: "6",
      owner: null
    },
    {
      x: "3",
      y: "7",
      owner: null
    },
    {
      x: "3",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "4",
      y: "0",
      owner: null
    },
    {
      x: "4",
      y: "1",
      owner: null
    },
    {
      x: "4",
      y: "2",
      owner: null
    },
    {
      x: "4",
      y: "3",
      owner: null
    },
    {
      x: "4",
      y: "4",
      owner: null
    },
    {
      x: "4",
      y: "5",
      owner: "red"
    },
    {
      x: "4",
      y: "6",
      owner: "red"
    },
    {
      x: "4",
      y: "7",
      owner: "red"
    },
    {
      x: "4",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "5",
      y: "0",
      owner: null
    },
    {
      x: "5",
      y: "1",
      owner: null
    },
    {
      x: "5",
      y: "2",
      owner: null
    },
    {
      x: "5",
      y: "3",
      owner: null
    },
    {
      x: "5",
      y: "4",
      owner: null
    },
    {
      x: "5",
      y: "5",
      owner: null
    },
    {
      x: "5",
      y: "6",
      owner: null
    },
    {
      x: "5",
      y: "7",
      owner: "red"
    },
    {
      x: "5",
      y: "8",
      owner: "red"
    }
  ],
  [
    {
      x: "6",
      y: "0",
      owner: "red"
    },
    {
      x: "6",
      y: "1",
      owner: "red"
    },
    {
      x: "6",
      y: "2",
      owner: "red"
    },
    {
      x: "6",
      y: "3",
      owner: "blue"
    },
    {
      x: "6",
      y: "4",
      owner: null
    },
    {
      x: "6",
      y: "5",
      owner: null
    },
    {
      x: "6",
      y: "6",
      owner: null
    },
    {
      x: "6",
      y: "7",
      owner: null
    },
    {
      x: "6",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "7",
      y: "0",
      owner: null
    },
    {
      x: "7",
      y: "1",
      owner: null
    },
    {
      x: "7",
      y: "2",
      owner: null
    },
    {
      x: "7",
      y: "3",
      owner: "red"
    },
    {
      x: "7",
      y: "4",
      owner: "red"
    },
    {
      x: "7",
      y: "5",
      owner: "red"
    },
    {
      x: "7",
      y: "6",
      owner: "red"
    },
    {
      x: "7",
      y: "7",
      owner: "red"
    },
    {
      x: "7",
      y: "8",
      owner: null
    }
  ],
  [
    {
      x: "8",
      y: "0",
      owner: "red"
    },
    {
      x: "8",
      y: "1",
      owner: null
    },
    {
      x: "8",
      y: "2",
      owner: null
    },
    {
      x: "8",
      y: "3",
      owner: null
    },
    {
      x: "8",
      y: "4",
      owner: null
    },
    {
      x: "8",
      y: "5",
      owner: null
    },
    {
      x: "8",
      y: "6",
      owner: null
    },
    {
      x: "8",
      y: "7",
      owner: null
    },
    {
      x: "8",
      y: "8",
      owner: null
    }
  ]
];
// create a 'winning array' that logs the element.y location when element.owner is 'red' 5 times for slicing from board.
// maybe add the 'winning array' of element.y when if (element.owner === 'red')
// but add else if (last0 !== 'red') { destroy winning array becuase it is no longer winning}
let winningArray = [];
let winningX = null;

const testSlice = () => {
  let inARow = 1;
  let lastO = null;
  let lastX = null;
  let winning = testBoard.some(element => {
    element.forEach(subElement => {
      if (subElement.owner === "red") {
        winningArray.push(subElement.y);
        winningX = subElement.x;
        if (lastO === "red" && lastX === subElement.x) {
          inARow += 1;
        } else {
          winningArray.splice(0, winningArray.length);
          winningX = null;
          inARow = 1;
        }
      }
      lastO = subElement.owner;
      lastX = subElement.x;
    });
    return inARow >= 5;
  });
  console.log(winningArray[0] - 1);
  console.log(winningX);
  return inARow >= 5;

  /* let lastO = null;
  let inARow = 1;
  let winning = testBoard[0].some(element => {
    console.log(element)
    if (element.owner === "blue") {
      if (lastO === 'blue') {
        inARow += 1;
      }
    }
    lastO = element.owner
  })
  return inARow >= 5; */
};

it("checks for win on x", () => {
  expect(testSlice()).toEqual(true);
});
