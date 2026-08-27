//takes a number and generates board cells for a 2d grid (dataBoard)

import type { DataBoard, Row } from "./board-types";

export function generateDataBoard(boardSize: number): DataBoard {
  let dataBoard: DataBoard = [];

  for (let i = 0; i < boardSize; i++) {
    let boardRow: Row[] = [];

    for (let j = 0; j < boardSize; j++) {
      boardRow.push({ type: "empty", id: null, hit: false, isSunk: false });
    }

    dataBoard.push(boardRow);
  }

  return dataBoard;
}
