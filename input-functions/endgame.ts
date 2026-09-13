import inquirer from "inquirer";
import chalk from "chalk";

export async function endGame(
  messageSad: string,
  messageGood: string,
): Promise<boolean> {
  const result = await inquirer.prompt([
    {
      type: "confirm",
      name: "end",
      message: chalk.bgBlack.magentaBright("Would you like to end game?"),
      default: true,
    },
  ]);

  if (result.end === true) {
    console.log(chalk.bgBlack.redBright(messageSad));
    process.exit(0);
  } else {
    console.log(chalk.bgBlack.greenBright(messageGood));
    return false;
  }
}
