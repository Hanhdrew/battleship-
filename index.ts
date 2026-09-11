import type {
  BoardMetaData,
  DataBoard,
  EnemyAIState,
  VisibleBoard,
} from "./types";
import chalk, { backgroundColorNames } from "chalk";
import { storeBoolean } from "./input-functions/store-boolean";
import { endGame } from "./input-functions/endgame";
import { storeInput } from "./input-functions/store-input";
import { askBoardSize } from "./input-functions/ask-boardsize";
import { generateBoard } from "./board-functions/generate-board";
import { delay } from "./helper-functions/delay";
import { generateDataBoard } from "./board-functions/generate-databoard";
import { generatePlayerBoard } from "./board-functions/generate-playable-board";
import { getBoardState } from "./helper-functions/get-metadata";
import { printBoard } from "./board-functions/printboard";
import { coinTossPrompt } from "./input-functions/coin-toss-prompt";
import { generateCoinToss } from "./helper-functions/generate-coin-toss";
import { playerTurn } from "./game-logic/player-turn";
import { enemyTurn } from "./game-logic/enemy-turn";
import { removeIndentation } from "./helper-functions/indentation-remover";
import { options } from "./input-functions/options-menu";

async function main() {
  // console.log(
  //   chalk.bgBlack.cyanBright(
  //     "💬 Hello, welcome to my Battleship game! ( ͡° ͜ʖ ͡°)",
  //   ),
  // );

  // const greetUser: boolean = await storeBoolean("💬 Are you ready to begin?");

  // if (!greetUser)
  //   await endGame(
  //     "💬 Okay, goodbye (ง ͠ಥ_ಥ)ง",
  //     "💬 alright lets continue! ヽ(°〇°)ﾉ",
  //   );

  // let userName: string = "";
  // while (true) {
  //   console.log(chalk.bgBlack.cyanBright("💬 Okay, lets begin,"));
  //   userName = await storeInput("💬 Lets start off with your name:");

  //   const confirm = await storeBoolean(
  //     `💬 Confirm if you want ${userName} to be your name:`,
  //   );
  //   if (confirm) break;
  // }

  // let boardSize: number | null = null;
  // while (true) {
  //   console.clear();
  //   boardSize = await askBoardSize(
  //     `💬 Great, now lets select your board size. Here are your options:`,
  //   );

  //   const visibleBoard: VisibleBoard = generateBoard(boardSize);
  //   console.table(visibleBoard);

  //   const confirm: boolean = await storeBoolean(
  //     `💬 Are you sure this board is what you would like, ${userName}?`,
  //   );
  //   if (confirm) break;
  // }

  // console.log(
  //   chalk.bgBlack.cyanBright("💬 Excellent, let us begin. ᕙ(  •̀ ᗜ •́  )ᕗ "),
  // );

  let boardSize = 10;

  console.log(chalk.bgBlack.cyanBright("💬 Initializing game ⌛"));

  await delay(2000);

  let playerBoard: DataBoard = generateDataBoard(boardSize);
  let enemyBoard: DataBoard = generateDataBoard(boardSize);
  playerBoard = generatePlayerBoard(playerBoard);
  enemyBoard = generatePlayerBoard(enemyBoard);

  let availableInputs = removeIndentation(`
        A2, A0, B5, C6 etc...
        Or type options for more options...
        `);

  let aiState: EnemyAIState = {
    tried: new Set(),
    huntQ: [],
    lastHit: null,
  };

  console.log(chalk.bgBlack.cyanBright("💬 Completed!"));
  console.log(chalk.bgBlack.cyanBright("💬 Lets begin,"));

  const coinToss = await coinTossPrompt("💬 Choose heads or tails:");

  const winner = generateCoinToss(coinToss);

  winner
    ? console.log(chalk.bgBlack.greenBright("✅ You won the coin toss ✅"))
    : console.log(chalk.bgBlack.redBright("❌ You loss the coin toss ❌"));

  let firstGuessPrompt = winner;

  while (true) {
    const playerDataPrevious: BoardMetaData = getBoardState(playerBoard);
    const enemyDataPrevious: BoardMetaData = getBoardState(enemyBoard);
    let playerInput = "";

    if (winner) {
      console.log(chalk.bgBlack.redBright.bold("Enemy Board"));
      printBoard(enemyBoard, false);

      if (firstGuessPrompt) {
        console.log(chalk.bgBlack.cyanBright("Make your first guess!"));
        firstGuessPrompt = false;
      } else {
        console.log(chalk.bgBlack.cyanBright("Make your next guess!"));
      }

      while (true) {
        playerInput = await storeInput(
          `Here are your available inputs ${availableInputs}`,
        );

        const cleanInput = playerInput.toLowerCase().replace(/[^a-z0-9]/g, "");

        if (cleanInput === "options") {
          const optionsMenu = await options("Select your option below");
          if (optionsMenu === 1) continue;
          if (optionsMenu === 2) return main();
          if (optionsMenu === 3) {
            await endGame("okay lesgo", "oh no");
          }
          if (optionsMenu === 4) {
            console.log(chalk.bgBlack.cyanBright("Enemy board"));
            printBoard(enemyBoard, true);
            console.log(chalk.bgBlack.cyanBright("player board"));
            printBoard(enemyBoard, true);
          }
          if (optionsMenu === 5) console.clear();
          if (optionsMenu === 6) {
            console.log(chalk.bgBlack.cyanBright("enemy board"));
            console.log(enemyDataPrevious);
            console.log(chalk.bgBlack.cyanBright("player board"));
            console.log(playerDataPrevious);
          }
          continue;
        }

        // const isValidInput =
      }
    } else {
      console.log(chalk.bgBlack.greenBright("Player Board"));
      printBoard(playerBoard, false);
    }
  }
}

main();

// ᕙ(  •̀ ᗜ •́  )ᕗ

// (ㆆ_ㆆ)
