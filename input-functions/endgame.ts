import inquirer from "inquirer";

export async function endGame(
  messageSad: string,
  messageGood: string,
): Promise<boolean> {
  const result = await inquirer.prompt([
    {
      type: "confirm",
      name: "end",
      message: "Would you like to end game?",
      default: true,
    },
  ]);

  if (result.end === true) {
    console.log(messageSad);
    process.exit(0);
  } else {
    console.log(messageGood);
    return false;
  }
}
