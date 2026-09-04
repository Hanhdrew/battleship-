import type { EnemyAIState, BoardMetaData } from "../../types";

export function addHit(
  aiState: EnemyAIState,
  previousMetaData: BoardMetaData,
  currentMetaData: BoardMetaData,
): EnemyAIState {
  if (
    previousMetaData.totalDestroyersHit < currentMetaData.totalDestroyersHit ||
    previousMetaData.totalSubmarinesHit < currentMetaData.totalSubmarinesHit ||
    previousMetaData.totalCruisersHit < currentMetaData.totalCruisersHit ||
    previousMetaData.totalBattleshipsHit <
      currentMetaData.totalBattleshipsHit ||
    previousMetaData.totalCarriersHit < currentMetaData.totalCarriersHit
  ) {
    aiState.lastHit = true;
    return aiState;
  } else {
    return aiState;
  }
}

// totalDestroyersHit: number;
// totalSubmarinesHit: number;
// totalCruisersHit: number;
// totalBattleshipsHit: number;
// totalCarriersHit: number;
