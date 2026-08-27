console.log("Hello via Bun!");

//todo
//high priority - create red x for spaces missed
// - need to add new type definition for misses in getBoardState() ✅
// - need to create a new parameter for meta data for misses in board ✅
// - need to add logic for getBoardState() for misses ✅
// - need to add logic to printBoard() to accommodate misses
// - need to modify detectHit() for misses ✅
// (could be as simple as adding another conditional statement)

//medium priority
// - need a new type definition for more ships
// - need to overhaul generatePlayerBoard() to accommodate new ship types
// - turn prompts to be edited as well

//additional notes:
// - askBoardSize no longer supports 4, 5 => is now 6, 8, 10
// - generate playerBoards() does not reflect changes
// - metaData should be saved for last except for misses which is priority
// - metaData also needs to be overhauled to accommodate new ship types and misses
