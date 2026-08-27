//input a dataBoard / string
//output updated board
//assume the input string is a valid string and within the board

import type { DataBoard } from "../board-functions/board-types";

export function detectHit(dataBoard: DataBoard, guess: string): DataBoard {
  const firstIndex: number = guess[0]!.charCodeAt(0) - 97;
  const secondIndex: number = Number(guess[1]!);

  const target = dataBoard[firstIndex]![secondIndex]!;

  if (target.hit === true) {
    return dataBoard;
  } else {
    target.hit = true;
    return dataBoard;
  }
}
