export function generateCoinToss(guess: boolean): boolean {
  const toss = Math.random() < 0.5;

  return toss === guess ? true : false;
}
