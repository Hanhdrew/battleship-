//takes a guess from huntQueue and adds it to tried
// if huntQueue is empty it will guess random

import type { EnemyAIState } from "../../types";
import { enemyGuessRandom } from "./enemy-guess-random";

export function enemySmartGuess(
  boardSize: number,
  aiState: EnemyAIState,
): string {
  while (aiState.huntQueue.length > 0) {
    const guess = aiState.huntQueue.shift()!;
    if (!aiState.tried.has(guess)) {
      aiState.tried.add(guess);
      return guess;
    }
  }

  return enemyGuessRandom(boardSize);
}

// let aiState: EnemyAIState = {
//   tried: new Set(),
//   huntQueue: [],
//   lastHit: null,
// };
