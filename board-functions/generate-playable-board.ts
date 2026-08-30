//takes and transforms an array of board cells (dataBoard) to generate the ships (playerBoard)
// - output is same shape as dataBoard

import { generateID } from "../helper-functions/generate-ids";
import type { DataBoard } from "../types";

export function generatePlayerBoard(dataBoard: DataBoard): DataBoard {
  let destroyer: number = 0;
  let submarine: number = 0;
  let cruiser: number = 0;
  let battleship: number = 0;
  let carrier: number = 0;

  if (dataBoard.length === 10) {
    destroyer = 1;
    submarine = 1;
    cruiser = 1;
    battleship = 1;
    carrier = 1;
  } else if (dataBoard.length === 8) {
    destroyer = 1;
    submarine = 1;
    cruiser = 1;
    battleship = 1;
  } else if (dataBoard.length === 6) {
    destroyer = 2;
    submarine = 1;
  }

  const direction: { row: number; col: number }[] = [
    { row: 0, col: 1 }, //right
    { row: 0, col: -1 }, //left
    { row: -1, col: 0 }, //up
    { row: 1, col: 0 }, //down
  ];

  while (destroyer > 0) {
    const row: number = Math.floor(Math.random() * dataBoard.length);
    const column: number = Math.floor(Math.random() * dataBoard.length);
    const directionIndex: number = Math.floor(Math.random() * 4);
    const randomDirection = direction[directionIndex];
    const id: number = generateID();
    let validSpots = true;

    if (!randomDirection) continue;

    const coordinates: { row: number; column: number }[] = [
      { row: row, column: column },
      {
        row: row + randomDirection.row,
        column: column + randomDirection.col,
      },
    ];

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

    for (let i of coordinates) {
      dataBoard[i.row]![i.column]!.type = "destroyer";
      dataBoard[i.row]![i.column]!.id = id;
    }

    destroyer--;
  }

  while (submarine > 0) {
    const row: number = Math.floor(Math.random() * dataBoard.length);
    const column: number = Math.floor(Math.random() * dataBoard.length);
    const directionIndex: number = Math.floor(Math.random() * 4);
    const randomDirection = direction[directionIndex];
    const id: number = generateID();
    let validSpots = true;

    if (!randomDirection) continue;

    const coordinates: { row: number; column: number }[] = [
      { row: row, column: column },
      {
        row: row + randomDirection.row,
        column: column + randomDirection.col,
      },
      {
        row: row + randomDirection.row * 2,
        column: column + randomDirection.col * 2,
      },
    ];

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

    for (let i of coordinates) {
      dataBoard[i.row]![i.column]!.type = "submarine";
      dataBoard[i.row]![i.column]!.id = id;
    }

    submarine--;
  }
  while (cruiser > 0) {
    const row: number = Math.floor(Math.random() * dataBoard.length);
    const column: number = Math.floor(Math.random() * dataBoard.length);
    const directionIndex: number = Math.floor(Math.random() * 4);
    const randomDirection = direction[directionIndex];
    const id: number = generateID();
    let validSpots = true;

    if (!randomDirection) continue;

    const coordinates: { row: number; column: number }[] = [
      { row: row, column: column },
      {
        row: row + randomDirection.row,
        column: column + randomDirection.col,
      },
      {
        row: row + randomDirection.row * 2,
        column: column + randomDirection.col * 2,
      },
    ];

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

    for (let i of coordinates) {
      dataBoard[i.row]![i.column]!.type = "cruiser";
      dataBoard[i.row]![i.column]!.id = id;
    }

    cruiser--;
  }

  while (battleship > 0) {
    const row: number = Math.floor(Math.random() * dataBoard.length);
    const column: number = Math.floor(Math.random() * dataBoard.length);
    const directionIndex: number = Math.floor(Math.random() * 4);
    const randomDirection = direction[directionIndex];
    const id: number = generateID();
    let validSpots = true;

    if (!randomDirection) continue;

    const coordinates: { row: number; column: number }[] = [
      { row: row, column: column },
      {
        row: row + randomDirection.row,
        column: column + randomDirection.col,
      },
      {
        row: row + randomDirection.row * 2,
        column: column + randomDirection.col * 2,
      },
      {
        row: row + randomDirection.row * 3,
        column: column + randomDirection.col * 3,
      },
    ];

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

    for (let i of coordinates) {
      dataBoard[i.row]![i.column]!.type = "battleship";
      dataBoard[i.row]![i.column]!.id = id;
    }

    battleship--;
  }
  while (carrier > 0) {
    const row: number = Math.floor(Math.random() * dataBoard.length);
    const column: number = Math.floor(Math.random() * dataBoard.length);
    const directionIndex: number = Math.floor(Math.random() * 4);
    const randomDirection = direction[directionIndex];
    const id: number = generateID();
    let validSpots = true;

    if (!randomDirection) continue;

    const coordinates: { row: number; column: number }[] = [
      { row: row, column: column },
      {
        row: row + randomDirection.row,
        column: column + randomDirection.col,
      },
      {
        row: row + randomDirection.row * 2,
        column: column + randomDirection.col * 2,
      },
      {
        row: row + randomDirection.row * 3,
        column: column + randomDirection.col * 3,
      },
      {
        row: row + randomDirection.row * 4,
        column: column + randomDirection.col * 4,
      },
    ];

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

    for (let i of coordinates) {
      dataBoard[i.row]![i.column]!.type = "carrier";
      dataBoard[i.row]![i.column]!.id = id;
    }

    carrier--;
  }
  return dataBoard;
}

// Large: 1 × Carrier — 5 squares
// Large: 1 × Battleship — 4 squares
// Medium: 1 × Cruiser — 3 squares
// Small: 1 × Submarine — 3 squares
// Small: 1 × Destroyer — 2 squares
