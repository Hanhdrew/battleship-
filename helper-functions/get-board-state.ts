//takes in a dataBoard and returns a board state

import type { DataBoard, BoardMetaData } from "../board-functions/board-types";

export function getBoardState(dataBoard: DataBoard): BoardMetaData {
  const flat = dataBoard.flat();

  const destroyerCells = flat.filter((row) => row.type === "destroyer");
  const submarineCells = flat.filter((row) => row.type === "submarine");
  const cruiserCells = flat.filter((row) => row.type === "cruiser");
  const battleshipCells = flat.filter((row) => row.type === "battleship");
  const carrierCells = flat.filter((row) => row.type === "carrier");
  const emptyCells = flat.filter((row) => row.type === "empty");

  const metaData: BoardMetaData = {
    destroyer: new Set(destroyerCells.map((row) => row.id)).size,
    submarine: new Set(submarineCells.map((row) => row.id)).size,
    cruiser: new Set(cruiserCells.map((row) => row.id)).size,
    battleship: new Set(battleshipCells.map((row) => row.id)).size,
    carrier: new Set(carrierCells.map((row) => row.id)).size,

    remainingDestroyers: new Set(
      destroyerCells.filter((row) => !row.isSunk).map((row) => row.id),
    ).size,
    remainingSubmarines: new Set(
      submarineCells.filter((row) => !row.isSunk).map((row) => row.id),
    ).size,
    remainingCruisers: new Set(
      cruiserCells.filter((row) => !row.isSunk).map((row) => row.id),
    ).size,
    remainingBattleships: new Set(
      battleshipCells.filter((row) => !row.isSunk).map((row) => row.id),
    ).size,
    remainingCarriers: new Set(
      carrierCells.filter((row) => !row.isSunk).map((row) => row.id),
    ).size,

    totalDestroyersHit: destroyerCells.filter((row) => row.hit).length,
    totalSubmarinesHit: submarineCells.filter((row) => row.hit).length,
    totalCruisersHit: cruiserCells.filter((row) => row.hit).length,
    totalBattleshipsHit: battleshipCells.filter((row) => row.hit).length,
    totalCarriersHit: carrierCells.filter((row) => row.hit).length,

    destroyersSunk: new Set(
      destroyerCells.filter((row) => row.isSunk).map((row) => row.id),
    ).size,
    submarinesSunk: new Set(
      submarineCells.filter((row) => row.isSunk).map((row) => row.id),
    ).size,
    cruisersSunk: new Set(
      cruiserCells.filter((row) => row.isSunk).map((row) => row.id),
    ).size,
    battleshipsSunk: new Set(
      battleshipCells.filter((row) => row.isSunk).map((row) => row.id),
    ).size,
    carriersSunk: new Set(
      carrierCells.filter((row) => row.isSunk).map((row) => row.id),
    ).size,

    misses: emptyCells.filter((c) => c.hit).length,

    totalShipsRemaining: new Set([
      ...destroyerCells.filter((row) => !row.isSunk).map((row) => row.id),
      ...submarineCells.filter((row) => !row.isSunk).map((row) => row.id),
      ...cruiserCells.filter((row) => !row.isSunk).map((row) => row.id),
      ...battleshipCells.filter((row) => !row.isSunk).map((row) => row.id),
      ...carrierCells.filter((row) => !row.isSunk).map((row) => row.id),
    ]).size,
  };

  return metaData;
}
