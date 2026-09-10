import type { DataBoard, VisibleBoard } from "../types";

const shipSymbols: Record<string, string> = {
  destroyer: "D",
  submarine: "S",
  cruiser: "C",
  battleship: "B",
  carrier: "A",
  empty: "-",
};

export function printBoard(
  dataBoard: DataBoard,
  visibility: boolean,
): VisibleBoard {
  const visibleBoard: VisibleBoard = {};
  const transParentBoard: VisibleBoard = {};

  for (let [label, row] of dataBoard.entries()) {
    const rowLabelVisible = String.fromCharCode(65 + label);
    const rowLabelTransparent = "Row" + label;

    visibleBoard[rowLabelVisible] = [];
    transParentBoard[rowLabelTransparent] = [];

    for (let obj of row) {
      let placeHolderVisible = "-";
      let placeHolderTransparent = shipSymbols[obj.type]!;

      if (obj.hit && obj.type !== "empty") {
        placeHolderVisible = "🟠";
        placeHolderTransparent = "🟠";
      }

      if (obj.hit && obj.type === "empty") {
        placeHolderVisible = "❌";
        placeHolderTransparent = "❌";
      }

      if (obj.isSunk) {
        placeHolderVisible = "❗";
        placeHolderTransparent = "❗";
      }

      visibleBoard[rowLabelVisible].push(placeHolderVisible);
      transParentBoard[rowLabelTransparent].push(placeHolderTransparent);
    }
  }

  const returnBoard = visibility ? transParentBoard : visibleBoard;
  console.table(returnBoard);
  return returnBoard;
}
