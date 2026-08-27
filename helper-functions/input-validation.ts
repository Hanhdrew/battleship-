//input: string and boardSize
//output: boolean => verifies if the users input is valid
//Examples A3, A0, D3, D2 etc.

export function inputVerification(input: string, boardSize: number): boolean {
  const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (!/^[a-z][0-9]$/.test(cleanInput)) {
    return false;
  }

  const firstIndex: number = cleanInput[0]!.charCodeAt(0) - 97;
  const secondIndex: number = Number(cleanInput[1]!);

  return firstIndex < boardSize && secondIndex < boardSize ? true : false;
}
