//will track state of meta data throughout the turns
//takes the original board meta data and a dynamic one
//compares the two and returns the correct console log

import type { BoardMetaData } from "../board-functions/board-types";

export function turnPrompts(
  name: string,
  previousMetaData: BoardMetaData,
  currentMetaData: BoardMetaData,
): string {
  const returnStrings = {
    sunkSmall: `${name} sunk a small ship!`,
    sunkLarge: `${name} sunk a large ship!`,
    hitSmall: `${name} hit a small ship!`,
    hitLarge: `${name} hit a large ship!`,
    miss: `${name} missed!`,
  };

  if (currentMetaData.smallShipsSunk > previousMetaData.smallShipsSunk)
    return returnStrings.sunkSmall;

  if (currentMetaData.largeShipsSunk > previousMetaData.largeShipsSunk)
    return returnStrings.sunkLarge;

  if (currentMetaData.totalSmallShipsHit > previousMetaData.totalSmallShipsHit)
    return returnStrings.hitSmall;

  if (currentMetaData.totalLargeShipsHit > previousMetaData.totalLargeShipsHit)
    return returnStrings.hitLarge;

  return returnStrings.miss;
}
