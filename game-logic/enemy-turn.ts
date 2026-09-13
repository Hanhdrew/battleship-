import type { BoardMetaData, GameState } from "../types";
import chalk from "chalk";
import { printBoard } from "../board-functions/printboard";
import { delay } from "../helper-functions/delay";
import { turnPromptsEnemy } from "./turn-prompts-enemy";
import { enemySmartGuess } from "../enemy-ai-logic/enemy-smart-guess";
import { detectHit } from "./detect-hit";
import { detectSink } from "./detect-sink";
import { getBoardState } from "../helper-functions/get-metadata";
import { checkHit } from "../enemy-ai-logic/check-hit";
import { getAdjacentCoordinates } from "../enemy-ai-logic/get-adjacent-coordinates";
import { checkSink } from "../enemy-ai-logic/check-sink";

export async function enemyTurn(
  gameState: GameState,
  previousMetaData: BoardMetaData,
) {
  const previousData: BoardMetaData = previousMetaData;
  const delayRandom: number = Math.random() * (5000 - 1000) + 1000;

  console.log(
    chalk.bgBlack.greenBright.bold.underline(
      `✅ ${gameState.userName}'s Board ✅`,
    ),
  );
  printBoard(gameState.playerBoard, false);
  console.log(chalk.bgBlack.redBright("Your enemy is thinking... 🔍🧠"));
  await delay(delayRandom);

  const enemyGuess: string = enemySmartGuess(
    gameState.boardSize,
    gameState.aiState,
  );

  gameState.aiState.tried.add(enemyGuess);

  gameState.playerBoard = detectHit(gameState.playerBoard, enemyGuess);
  gameState.playerBoard = detectSink(gameState.playerBoard);

  const currentData: BoardMetaData = getBoardState(gameState.playerBoard);

  const isHit: boolean = checkHit(previousData, currentData);
  const isSunk: boolean = checkSink(enemyGuess, gameState.playerBoard);

  if (isHit === true && isSunk === false) {
    const nextTargets: string[] = getAdjacentCoordinates(
      enemyGuess,
      gameState.boardSize,
      gameState.playerBoard,
    );

    for (let guess of nextTargets) {
      gameState.aiState.huntQ.push(guess);
    }
  }

  const prompt = turnPromptsEnemy(
    gameState.enemyName,
    previousData,
    currentData,
  );

  printBoard(gameState.playerBoard, false);
  console.log(chalk.bgBlack.redBright.bold.underline(prompt));
  console.log(
    chalk.bgBlack.redBright(
      `${gameState.userName}, has ${currentData.totalShipsRemaining} vessels remaining! 🚢`,
    ),
  );
  console.log(chalk.bgBlack.cyanBright("💬 Awaiting Turn... ➡️"));
  await delay(5000);
  console.clear();
  if (currentData.totalShipsRemaining === 0) {
    gameState.aiState.winner = true;
  }
}
