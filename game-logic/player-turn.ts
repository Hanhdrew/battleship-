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
import { turnPromptsPlayer } from "./turn-prompts.player";
import { delay } from "../helper-functions/delay";

export async function playerTurn(
  gameState: GameState,
  previousMetaData: BoardMetaData,
  optionsMenu: OptionsMenu,
) {
  const previousData = previousMetaData;
  if (gameState.firstGuessPrompt) {
    console.log(
      chalk.bgBlack.redBright.bold.underline(
        `❌ ${gameState.enemyName}'s board ❌`,
      ),
    );
    printBoard(gameState.enemyBoard, false);
    console.log(
      chalk.bgBlack.magentaBright("💬 Alright, lets make your first guess"),
    );
    console.log(chalk.bgBlack.whiteBright(gameState.availableInputs));
    gameState.firstGuessPrompt = false;
  } else {
    console.log(chalk.bgBlack.redBright.bold.underline("❌ Enemy board ❌"));
    printBoard(gameState.enemyBoard, false);
    console.log(chalk.bgBlack.magentaBright("💬 Make your next guess"));
    console.log(chalk.bgBlack.whiteBright(gameState.availableInputs));
  }

  while (true) {
    let playerInput = await storeInput("🎲 Input your answer here:");
    let cleanInput = playerInput.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (cleanInput === "options") {
      const playerOptions = await options("Select an option below:");
      if (playerOptions === 1) continue;
      if (playerOptions === 2) return optionsMenu.restart();
      if (playerOptions === 3) {
        await endGame(
          "💬 Okay, goodbye (ง ͠ಥ_ಥ)ง",
          "💬 alright lets continue! ヽ(°〇°)ﾉ",
        );
      }
      if (playerOptions === 4) {
        console.log(
          chalk.bgBlack.redBright.bold.underline("❌ Enemy board ❌"),
        );
        printBoard(gameState.enemyBoard, true);
        console.log(
          chalk.bgBlack.greenBright.bold.underline("✅ Player Board ✅"),
        );
        printBoard(gameState.playerBoard, true);
      }
      if (playerOptions === 5) console.clear();
      if (playerOptions === 6) {
        console.log(
          chalk.bgBlack.redBright.bold.underline("❌ Enemy board ❌"),
        );
        console.log(getBoardState(gameState.enemyBoard));
        console.log(
          chalk.bgBlack.greenBright.bold.underline("✅ Player Board ✅"),
        );
        console.log(getBoardState(gameState.playerBoard));
      }
    } else if (gameState.playerState.tried.has(cleanInput)) {
      console.log(
        chalk.bgBlack.yellowBright(
          "⚠️ You already tried that, try a different selection ⚠️",
        ),
      );
    } else {
      const isValid = inputVerification(cleanInput, gameState.boardSize);

      if (isValid) {
        gameState.enemyBoard = detectHit(gameState.enemyBoard, cleanInput);
        gameState.enemyBoard = detectSink(gameState.enemyBoard);
        gameState.playerState.tried.add(cleanInput);
        break;
      } else {
        console.log(
          chalk.bgBlack.yellowBright(
            "❗ Input not a recognized input please try again ❗",
          ),
        );
        console.log(chalk.bgBlack.magentaBright(gameState.availableInputs));
        continue;
      }
    }
  }

  const currentData = getBoardState(gameState.enemyBoard);
  const prompt = turnPromptsPlayer(
    gameState.userName,
    previousData,
    currentData,
  );
  printBoard(gameState.enemyBoard, false);
  console.log(chalk.bgBlack.greenBright.bold.underline(prompt));
  console.log(
    chalk.bgBlack.greenBright(
      `${gameState.enemyName}, has ${currentData.totalShipsRemaining} vessels remaining! 🚢`,
    ),
  );
  console.log(chalk.bgBlack.cyanBright("💬 Awaiting Turn... ➡️"));
  await delay(5000);
  console.clear();
  if (currentData.totalShipsRemaining === 0) {
    gameState.playerState.winner = true;
  }
}
