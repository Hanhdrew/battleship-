import type { BoardMetaData, GameState, OptionsMenu } from "../types";
import chalk from "chalk";
import { detectHit } from "./detect-hit";
import { detectSink } from "./detect-sink";
import { options } from "../input-functions/options-menu";
import { storeInput } from "../input-functions/store-input";
import { inputVerification } from "../helper-functions/input-validation";
import { printBoard } from "../board-functions/printboard";
import { endGame } from "../input-functions/endgame";
import { getBoardState } from "../helper-functions/get-metadata";
import { turnPrompts } from "./turn-prompts";

export async function playerTurn(
  gameState: GameState,
  previousMetaData: BoardMetaData,
  optionsMenu: OptionsMenu,
) {
  const previousData = previousMetaData;
  if (gameState.firstGuessPrompt) {
    console.log(chalk.bgBlack.redBright("Enemy board"));
    printBoard(gameState.enemyBoard, false);
    console.log(
      chalk.bgBlack.cyanBright("Alright, lets make your first guess"),
    );
    console.log(chalk.bgBlack.cyanBright(gameState.availableInputs));
    gameState.firstGuessPrompt = false;
  } else {
    console.log(chalk.bgBlack.redBright("Enemy board"));
    printBoard(gameState.enemyBoard, false);
    console.log(chalk.bgBlack.cyanBright("Make your next guess"));
    console.log(chalk.bgBlack.cyanBright(gameState.availableInputs));
  }

  while (true) {
    let playerInput = await storeInput("Input your answer here:");
    let cleanInput = playerInput.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (cleanInput === "options") {
      const playerOptions = await options("Select an option below:");
      if (playerOptions === 1) continue;
      if (playerOptions === 2) return optionsMenu.restart();
      if (playerOptions === 3) {
        await endGame("Okay lets continue", "oh no bro");
      }
      if (playerOptions === 4) {
        console.log(chalk.bgBlack.cyanBright("Enemy Board"));
        printBoard(gameState.enemyBoard, true);
        console.log(chalk.bgBlack.cyanBright("Player Board"));
        printBoard(gameState.playerBoard, true);
      }
      if (playerOptions === 5) console.clear();
      if (playerOptions === 6) {
        console.log(chalk.bgBlack.cyanBright("Enemy Board"));
        console.log(getBoardState(gameState.enemyBoard));
        console.log(chalk.bgBlack.cyanBright("Player Board"));
        console.log(getBoardState(gameState.playerBoard));
      }
    } else if (gameState.playerState.tried.has(cleanInput)) {
      console.log("You already tried that, try a different selection");
    } else {
      const isValid = inputVerification(cleanInput, gameState.boardSize);

      if (isValid) {
        gameState.enemyBoard = detectHit(gameState.enemyBoard, cleanInput);
        gameState.enemyBoard = detectSink(gameState.enemyBoard);
        gameState.playerState.tried.add(cleanInput);
        break;
      } else {
        console.log(
          chalk.bgBlack.cyanBright("Not a recognized input please try again"),
        );
        console.log(chalk.bgBlack.cyanBright(gameState.availableInputs));
        continue;
      }
    }
  }

  const currentData = getBoardState(gameState.enemyBoard);
  const prompt = turnPrompts(gameState.userName, previousData, currentData);
  console.log(chalk.bgBlack.cyanBright.bold(prompt));
}

// const gameState: GameState = {
//   playerBoard: playerBoard,
//   enemyBoard: enemyBoard,
//   availableInputs: availableInputs,
//   aiState: aiState,
//   boardSize: boardSize,
//   userName: userName
//   firstGuessPrompt: firstGuessPrompt
// };
