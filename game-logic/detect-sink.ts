//input dataBoard output dataBoard evaluating if a ship is sunk or not
//will update isSunk property if sunk

import type { DataBoard, Row } from "../board-functions/board-types";

export function detectSink(dataBoard: DataBoard): DataBoard {
  const cleanBoard = dataBoard.flat().filter((row) => row.id !== null);
  const ids = cleanBoard.map((obj) => obj.id);
  const uniqueIds = ids.filter((num, index) => ids.indexOf(num) === index);

  for (const id of uniqueIds) {
    const shipCells = cleanBoard.filter((cell) => cell.id === id);
    const sunk = shipCells.every((cell) => cell.hit);

    if (sunk) {
      for (const cell of dataBoard) {
        for (const row of cell) {
          if (row.id === id) {
            row.isSunk = true;
          }
        }
      }
    }
  }

  return dataBoard;
}
