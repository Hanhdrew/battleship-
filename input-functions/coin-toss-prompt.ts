import chalk from "chalk";
import inquirer from "inquirer";

export async function coinTossPrompt(message: string): Promise<boolean> {
  const options = await inquirer.prompt([
    {
      type: "rawlist",
      name: "toss",
      message: chalk.bgBlack.cyanBright(message),
      choices: [
        { name: chalk.bgBlack.cyanBright("Heads"), value: true },
        { name: chalk.bgBlack.cyanBright("Tails"), value: false },
      ],
    },
  ]);

  return options.toss;
}
