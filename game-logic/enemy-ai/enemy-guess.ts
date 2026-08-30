import type { EnemyAIState, DataBoard } from "../../types";
import { enemyGuessRandom } from "./enemy-guess-random";

export function enemySmartGuess(board: DataBoard, ai: EnemyAIState): string {
  // If we have queued guesses (adjacent cells), use them first
  while (ai.huntQueue.length > 0) {
    const guess = ai.huntQueue.shift()!;
    if (!ai.tried.has(guess)) {
      ai.tried.add(guess);
      return guess;
    }
  }

  const size = board.length;

  while (true) {
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);
    const guess = `${String.fromCharCode(97 + row)}${col}`;

    if (!ai.tried.has(guess)) {
      ai.tried.add(guess);
      return guess;
    }
  }
}
