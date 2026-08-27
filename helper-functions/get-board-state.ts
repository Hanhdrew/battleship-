//takes in a dataBoard and returns a board state

import type { DataBoard, BoardMetaData } from "../board-functions/board-types";

export function getBoardState(dataBoard: DataBoard): BoardMetaData {
  const largeShipCells = dataBoard.flat().filter((row) => row.type === "large");
  const smallShipCells = dataBoard.flat().filter((row) => row.type === "small");
  const metaData = {
    totalLargeShips: new Set(largeShipCells.map((row) => row.id)).size,
    totalSmallShips: new Set(smallShipCells.map((row) => row.id)).size,
    remainingLargeShips: new Set(
      largeShipCells.filter((row) => !row.isSunk).map((row) => row.id),
    ).size,
    remainingSmallShips: new Set(
      smallShipCells.filter((row) => !row.isSunk).map((row) => row.id),
    ).size,
    totalLargeShipsHit: largeShipCells.filter((row) => row.hit).length,
    totalSmallShipsHit: smallShipCells.filter((row) => row.hit).length,
    largeShipsSunk: new Set(
      largeShipCells.filter((row) => row.isSunk).map((row) => row.id),
    ).size,
    smallShipsSunk: new Set(
      smallShipCells.filter((row) => row.isSunk).map((row) => row.id),
    ).size,
  };

  return metaData;
}
