import type { DataBoard } from "../types";

export function getAdjacentCoordinates(
  guess: string,
  boardSize: number,
  dataBoard: DataBoard,
): string[] {
  const firstIndex = guess[0]!.charCodeAt(0) - 97; // row
  const secondIndex = Number(guess.slice(1)); // col

  const directions = [
    { row: 0, col: 1 }, // right
    { row: 0, col: -1 }, // left
    { row: -1, col: 0 }, // up
    { row: 1, col: 0 }, // down
  ];

  const resultArr: string[] = [];

  for (let i = 0; i < 4; i++) {
    const newFirstIndex = firstIndex + directions[i]!.row;
    const newSecondIndex = secondIndex + directions[i]!.col;

    if (newFirstIndex < 0 || newFirstIndex >= boardSize) continue;
    if (newSecondIndex < 0 || newSecondIndex >= boardSize) continue;

    const newTarget = dataBoard[newFirstIndex]![newSecondIndex]!;

    if (newTarget.hit) continue;

    const letter = String.fromCharCode(newFirstIndex + 97);
    resultArr.push(`${letter}${newSecondIndex}`);
  }

  return resultArr;
}
