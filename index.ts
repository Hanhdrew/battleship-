import type {
  BoardMetaData,
  DataBoard,
  EnemyAIState,
  VisibleBoard,
} from "./types";
import chalk from "chalk";
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

  console.log(chalk.bgBlack.cyanBright("Initializing game..."));

  await delay(3000);

  let playerBoard: DataBoard = generateDataBoard(boardSize);
  let enemyBoard: DataBoard = generateDataBoard(boardSize);
  playerBoard = generatePlayerBoard(playerBoard);
  enemyBoard = generatePlayerBoard(enemyBoard);
  let playerDataPrevious: BoardMetaData = getBoardState(playerBoard);
  let enemyDataPrevious: BoardMetaData = getBoardState(enemyBoard);

  let aiState: EnemyAIState = {
    tried: new Set(),
    huntQ: [],
    lastHit: null,
  };

  printBoard(playerBoard, true);
  printBoard(enemyBoard, true);
}

main();

// ᕙ(  •̀ ᗜ •́  )ᕗ

// (ㆆ_ㆆ)
