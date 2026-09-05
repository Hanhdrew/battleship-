export function getAdjacentCoordinates(
  guess: string,
  boardSize: number,
): string {
  const firstIndex = guess[0]!.charCodeAt(0) - 97; // row
  const secondIndex = Number(guess[1]!); // col

  const directions = [
    { row: 0, col: 1 }, // right
    { row: 0, col: -1 }, // left
    { row: -1, col: 0 }, // up
    { row: 1, col: 0 }, // down
  ];

  const directionIndex = Math.floor(Math.random() * 4);
  const direction = directions[directionIndex];

  const newRow = firstIndex + direction.row;
  const newCol = secondIndex + direction.col;

  const newRowLetter = String.fromCharCode(newRow + 97);

  return `${newRowLetter}${newCol}`;
}
