//takes an integer and returns a printable board

import type { VisibleBoard } from "./board-types";

export function generateBoard(num: number): VisibleBoard {
  const visibleBoard: Record<string, string[]> = {};

  for (let i = 0; i < num; i++) {
    const rowLabel = String.fromCharCode(65 + i);
    visibleBoard[rowLabel] = Array(num).fill("-");
  }

  return visibleBoard;
}
