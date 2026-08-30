//will track state of meta data throughout the turns
//takes the original board meta data and a dynamic one
//compares the two and returns the correct console log

import type { BoardMetaData } from "../types";

export function turnPrompts(
  name: string,
  previousMetaData: BoardMetaData,
  currentMetaData: BoardMetaData,
): string {
  if (currentMetaData.misses > previousMetaData.misses) {
    return `${name} missed!`;
  }

  if (currentMetaData.destroyersSunk > previousMetaData.destroyersSunk) {
    return `${name} sunk a Destroyer!`;
  }
  if (currentMetaData.submarinesSunk > previousMetaData.submarinesSunk) {
    return `${name} sunk a Submarine!`;
  }
  if (currentMetaData.cruisersSunk > previousMetaData.cruisersSunk) {
    return `${name} sunk a Cruiser!`;
  }
  if (currentMetaData.battleshipsSunk > previousMetaData.battleshipsSunk) {
    return `${name} sunk a Battleship!`;
  }
  if (currentMetaData.carriersSunk > previousMetaData.carriersSunk) {
    return `${name} sunk a Carrier!`;
  }

  if (
    currentMetaData.totalDestroyersHit > previousMetaData.totalDestroyersHit
  ) {
    return `${name} hit a Destroyer!`;
  }
  if (
    currentMetaData.totalSubmarinesHit > previousMetaData.totalSubmarinesHit
  ) {
    return `${name} hit a Submarine!`;
  }
  if (currentMetaData.totalCruisersHit > previousMetaData.totalCruisersHit) {
    return `${name} hit a Cruiser!`;
  }
  if (
    currentMetaData.totalBattleshipsHit > previousMetaData.totalBattleshipsHit
  ) {
    return `${name} hit a Battleship!`;
  }
  if (currentMetaData.totalCarriersHit > previousMetaData.totalCarriersHit) {
    return `${name} hit a Carrier!`;
  }

  return `${name} missed!`;
}
