//takes and transforms an array of board cells (dataBoard) to generate the ships (playerBoard)
// - output is same shape as dataBoard

import { generateID } from "../helper-functions/generate-ids";
import type { DataBoard } from "./board-types";

export function generatePlayerBoard(dataBoard: DataBoard): DataBoard {
  let largeShips: number = 0;
  let smallShips: number = 0;

  //ships based off the size of the board:
  //changed to 6 => 8 => and 10
  if (dataBoard.length === 4) {
    largeShips = 1;
    smallShips = 1;
  } else if (dataBoard.length === 5) {
    largeShips = 1;
    smallShips = 2;
  } else if (dataBoard.length === 6) {
    largeShips = 2;
    smallShips = 2;
  }

  const direction: { row: number; col: number }[] = [
    { row: 0, col: 1 }, //right
    { row: 0, col: -1 }, //left
    { row: -1, col: 0 }, //up
    { row: 1, col: 0 }, //down
  ];

  //large ship generation

  while (largeShips > 0) {
    const row: number = Math.floor(Math.random() * dataBoard.length);
    const column: number = Math.floor(Math.random() * dataBoard.length);
    const directionIndex: number = Math.floor(Math.random() * 4);
    const randomDirection = direction[directionIndex];
    const id: number = generateID();
    let validSpots = true;

    if (!randomDirection) continue;

    const coordinates: { row: number; column: number }[] = [
      //spot one:
      { row: row, column: column },
      //spot two:
      { row: row + randomDirection.row, column: column + randomDirection.col },
      //spot three:
      {
        row: row + randomDirection.row * 2,
        column: column + randomDirection.col * 2,
      },
    ];

    //validates empty spaces
    for (let i of coordinates) {
      if (
        i.row < 0 ||
        i.row >= dataBoard.length ||
        i.column < 0 ||
        i.column >= dataBoard.length ||
        dataBoard[i.row]![i.column]!.type !== "empty"
      ) {
        validSpots = false;
        break;
      }
    }

    if (!validSpots) {
      continue;
    }

    //place the ships
    for (let i of coordinates) {
      dataBoard[i.row]![i.column]!.type = "large";
      dataBoard[i.row]![i.column]!.id = id;
    }

    largeShips--;
  }

  //small ship generation

  while (smallShips > 0) {
    const row: number = Math.floor(Math.random() * dataBoard.length);
    const column: number = Math.floor(Math.random() * dataBoard.length);
    const directionIndex: number = Math.floor(Math.random() * 4);
    const randomDirection = direction[directionIndex];
    const id: number = generateID();
    let validSpots = true;

    if (!randomDirection) continue;

    const coordinates: { row: number; column: number }[] = [
      //spot one:
      { row: row, column: column },
      //spot two:
      {
        row: row + randomDirection.row,
        column: column + randomDirection.col,
      },
    ];

    //validates spots
    for (let i of coordinates) {
      if (
        i.row < 0 ||
        i.row >= dataBoard.length ||
        i.column < 0 ||
        i.column >= dataBoard.length ||
        dataBoard[i.row]![i.column]!.type !== "empty"
      ) {
        validSpots = false;
        break;
      }
    }

    if (!validSpots) {
      continue;
    }

    //place the ships
    for (let i of coordinates) {
      dataBoard[i.row]![i.column]!.type = "small";
      dataBoard[i.row]![i.column]!.id = id;
    }

    smallShips--;
  }

  return dataBoard;
}
