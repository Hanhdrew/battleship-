export function enemyGuessRandom(boardSize: number): string {
  const row = Math.floor(Math.random() * boardSize);
  const col = Math.floor(Math.random() * boardSize);

  const letter = String.fromCharCode(97 + row);

  return `${letter}${col}`;
}
