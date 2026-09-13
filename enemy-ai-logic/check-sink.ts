import type { DataBoard } from "../types";

export function checkSink(guess: string, dataBoard: DataBoard): boolean {
  const firstIndex: number = guess[0]!.charCodeAt(0) - 97;
  const secondIndex = Number(guess.slice(1));

  const target = dataBoard[firstIndex]![secondIndex]!;

  return target.isSunk ? true : false;
}
