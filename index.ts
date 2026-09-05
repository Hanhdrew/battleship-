import { enemyGuessRandom } from "./enemy-ai-logic/enemy-guess-random";
import type { EnemyAIState } from "./types";

console.log("Hello via Bun!");

//todo
//high priority :
// - create red x for spaces missed ✅
// - need to add new type definition for misses in getBoardState() ✅
// - need to create a new parameter for meta data for misses in board ✅
// - need to add logic for getBoardState() for misses ✅
// - need to add logic to printBoard() to accommodate misses ✅
// - need to modify detectHit() for misses ✅
// (could be as simple as adding another conditional statement) (it was :D)

//medium priority:
// - need a new type definition for more ships ✅
// - need to overhaul generatePlayerBoard() to accommodate new ship types✅
// - printBoard() needs to accommodate new ship types
// - turn prompts to be edited as well ✅

//low priority:
// - refactor playerBoard generation instead of one million loops

//additional notes:
// - askBoardSize no longer supports 4, 5 => is now 6, 8, 10
