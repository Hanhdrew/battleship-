import type { BoardMetaData } from "../types";

export function checkHit(
  previousMetaData: BoardMetaData,
  currentMetaData: BoardMetaData,
): boolean {
  return (
    previousMetaData.totalDestroyersHit < currentMetaData.totalDestroyersHit ||
    previousMetaData.totalSubmarinesHit < currentMetaData.totalSubmarinesHit ||
    previousMetaData.totalCruisersHit < currentMetaData.totalCruisersHit ||
    previousMetaData.totalBattleshipsHit <
      currentMetaData.totalBattleshipsHit ||
    previousMetaData.totalCarriersHit < currentMetaData.totalCarriersHit
  );
}
