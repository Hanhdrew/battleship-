//print board function:
// - only job is to take visibleBoard and dataBoard / playerBoard and print it to the console.
// - for console use only
// - it will NOT modify any values

import type { DataBoard, VisibleBoard } from "./board-types";

export function printBoard(
  dataBoard: DataBoard,
  visibility: boolean,
): VisibleBoard {
  //visibleBoard shows visibility for player
  const visibleBoard: VisibleBoard = {};
  //transParentBoard reveals ships
  const transParentBoard: VisibleBoard = {};

  for (let [label, row] of dataBoard.entries()) {
    const rowLabelVisible = String.fromCharCode(65 + label);
    const rowLabelTransparent = "Row" + label;
    visibleBoard[rowLabelVisible] = [];
    transParentBoard[rowLabelTransparent] = [];

    for (let obj of row) {
      let placeHolderVisible = "-";
      let placeHolderTransparent = "-";
      if (obj.hit === true) {
        placeHolderVisible = "🟠";
        placeHolderTransparent = "🟠";
      }
      if (obj.type === "large") {
        placeHolderTransparent = "L";
      }
      if (obj.type === "small") {
        placeHolderTransparent = "S";
      }
      if (obj.isSunk === true) {
        placeHolderTransparent = "❗";
        placeHolderVisible = "❗";
      }
      visibleBoard[rowLabelVisible].push(placeHolderVisible);
      transParentBoard[rowLabelTransparent].push(placeHolderTransparent);
    }
  }
  const returnBoard = visibility ? transParentBoard : visibleBoard;
  console.table(returnBoard);
  return returnBoard;
}
