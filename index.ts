import type {
  BoardMetaData,
  DataBoard,
  EnemyAIState,
  GameState,
  OptionsMenu,
  PlayerState,
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
import { coinTossPrompt } from "./input-functions/coin-toss-prompt";
import { generateCoinToss } from "./helper-functions/generate-coin-toss";
import { playerTurn } from "./game-logic/player-turn";
import { enemyTurn } from "./game-logic/enemy-turn";
import { removeIndentation } from "./helper-functions/indentation-remover";
import { printBoard } from "./board-functions/printboard";

async function main() {
  console.clear();
  console.log(
    chalk.bgBlack.magentaBright.bold(
      "💬 Hello, welcome to my Battleship game! ( ͡° ͜ʖ ͡°)",
    ),
  );

  const greetUser: boolean = await storeBoolean(
    "💬 Are you ready to begin? 🚢",
  );

  if (!greetUser)
    await endGame(
      "💬 Okay, goodbye (ง ͠ಥ_ಥ)ง",
      "💬 alright lets continue! ヽ(°〇°)ﾉ",
    );

  console.log(chalk.bgBlack.magentaBright("💬 Okay, lets begin,"));

  let userName: string = "";
  while (true) {
    userName = await storeInput("💬 Lets start off with your name:");

    const confirm = await storeBoolean(
      `💬 Confirm if you want "${userName}" to be your name:`,
    );
    if (confirm) break;
  }

  let enemyName: string = "";
  while (true) {
    enemyName = await storeInput("💬 Lets also make your opponents name.");

    const confirm = await storeBoolean(
      `💬 Confirm if you want "${enemyName}" to be your opps 🎯 name:`,
    );
    if (confirm) break;
  }

  let boardSize: number | null = null;
  while (true) {
    console.clear();
    boardSize = await askBoardSize(
      `💬 Great, now lets select your board size. Here are your options:`,
    );

    const visibleBoard: VisibleBoard = generateBoard(boardSize);
    console.table(visibleBoard);

    const confirm: boolean = await storeBoolean(
      `💬 Are you sure this board is what you would like, ${userName}?`,
    );
    if (confirm) break;
  }

  console.log(
    chalk.bgBlack.magentaBright("💬 Excellent, let us begin. ᕙ(  •̀ ᗜ •́  )ᕗ "),
  );

  console.log(chalk.bgBlack.magentaBright("💬 Lets begin,"));

  const coinToss = await coinTossPrompt("💬 Choose heads or tails:");

  const winner = generateCoinToss(coinToss);

  winner
    ? console.log(chalk.bgBlack.greenBright("✅ You won the coin toss ✅"))
    : console.log(chalk.bgBlack.redBright("❌ You loss the coin toss ❌"));

  let firstGuessPrompt: boolean = true;

  console.log(chalk.bgBlack.magentaBright("💬 Initializing game ⌛"));
  await delay(3500);
  console.log(chalk.bgBlack.magentaBright("💬 Completed!"));

  let playerBoard: DataBoard = generateDataBoard(boardSize);
  let enemyBoard: DataBoard = generateDataBoard(boardSize);
  playerBoard = generatePlayerBoard(playerBoard);
  enemyBoard = generatePlayerBoard(enemyBoard);
  let availableInputs: string = removeIndentation(`
        A2, A0, B5, C6 etc...
        Or type options for more options...
        `);
  let aiState: EnemyAIState = {
    tried: new Set(),
    huntQ: [],
    lastHit: null,
    winner: false,
  };
  let playerState: PlayerState = {
    tried: new Set(),
    winner: false,
  };

  const gameState: GameState = {
    playerBoard: playerBoard,
    enemyBoard: enemyBoard,
    availableInputs: availableInputs,
    aiState: aiState,
    playerState: playerState,
    boardSize: boardSize,
    userName: userName,
    enemyName: enemyName,
    firstGuessPrompt: firstGuessPrompt,
  };

  const optionsMenu: OptionsMenu = {
    restart() {
      return main();
    },
  };

  while (true) {
    const playerDataPrevious: BoardMetaData = getBoardState(
      gameState.playerBoard,
    );
    const enemyDataPrevious: BoardMetaData = getBoardState(
      gameState.enemyBoard,
    );

    if (winner) {
      await playerTurn(gameState, enemyDataPrevious, optionsMenu);
      await enemyTurn(gameState, playerDataPrevious);
    } else {
      await enemyTurn(gameState, playerDataPrevious);
      await playerTurn(gameState, enemyDataPrevious, optionsMenu);
    }
    if (
      gameState.aiState.winner === true ||
      gameState.playerState.winner === true
    )
      break;
  }

  console.clear();
  console.log(chalk.bgBlack.whiteBright.bold.underline("GAME OVER"));
  await delay(4000);

  if (gameState.playerState.winner === true) {
    console.log(
      chalk.bgBlack.greenBright(
        "💬 Congratulations! You won the Battleship Game! ◝(ᵔᗜᵔ)◜",
      ),
    );
  } else {
    console.log(
      chalk.bgBlack.redBright(
        "💬 Oh no! You lost the Battleship game, better luck next time! (ㆆ_ㆆ)",
      ),
    );
  }

  console.log(chalk.bgBlack.magentaBright("Here are the final results:"));
  console.log(
    chalk.bgBlack.greenBright.bold.underline(`${gameState.userName}'s board`),
  );
  printBoard(gameState.enemyBoard, false);
  console.log(
    chalk.bgBlack.redBright.bold.underline(`${gameState.enemyName}'s board`),
  );
  printBoard(gameState.playerBoard, false);

  console.log(chalk.bgBlack.cyanBright("Thank you for playing, sincerely! 🤍"));
  const lastOptions: boolean = await storeBoolean(
    "💬 Would you like to restart the game?",
  );

  lastOptions ? optionsMenu.restart() : process.exit(0);
}

main();
