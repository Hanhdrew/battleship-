import type { EnemyAIState } from "../types";
import { enemyGuessRandom } from "./enemy-guess-random";

export function enemySmartGuess(
  boardSize: number,
  aiState: EnemyAIState,
): string {
  while (aiState.huntQ.length > 0) {
    const guess = aiState.huntQ.shift()!;
    if (!aiState.tried.has(guess)) {
      aiState.tried.add(guess);
      return guess;
    }
  }

  let randomGuess = enemyGuessRandom(boardSize);

  while (aiState.tried.has(randomGuess)) {
    randomGuess = enemyGuessRandom(boardSize);
  }

  return randomGuess;
}
