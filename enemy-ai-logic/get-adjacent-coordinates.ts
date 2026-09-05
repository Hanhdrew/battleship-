export function getAdjacentCoordinates(
  guess: string,
  boardSize: number,
): string {
  const direction: { row: number; col: number }[] = [
    { row: 0, col: 1 }, //right
    { row: 0, col: -1 }, //left
    { row: -1, col: 0 }, //up
    { row: 1, col: 0 }, //down
  ];

  const row: number = Math.floor(Math.random() * boardSize);
  const column: number = Math.floor(Math.random() * boardSize);
  const directionIndex: number = Math.floor(Math.random() * 4);
  const randomDirection = direction[directionIndex];
}
