//takes a guess from huntQueue and adds it to tried
// if huntQueue is empty it will guess random

import type { EnemyAIState } from "../types";
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

  let randomGuess = enemyGuessRandom(boardSize);

  while (aiState.tried.has(randomGuess)) {
    randomGuess = enemyGuessRandom(boardSize);
  }

  return randomGuess;
}

// let aiState: EnemyAIState = {
//   tried: new Set(),
//   huntQueue: [],
//   currentGuess = string;
//   lastHit: null,
// };

//step [1]
//declare outside while loop so it can update every turn

//step [2]
//enemyGuess
// - takes from huntQ ✅
// - also needs to check if the random guess is in tried ✅
// - if empty will give random guess ✅

//step[3]
// - function that if a hit is true it will select adjacent coordinates and place it in hunt queue

//step[4]
// - all strings will be pushed to tried before executing the turn probably?
