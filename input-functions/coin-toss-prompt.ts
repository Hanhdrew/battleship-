import chalk from "chalk";
import inquirer from "inquirer";

export async function coinTossPrompt(message: string): Promise<boolean> {
  const options = await inquirer.prompt([
    {
      type: "rawlist",
      name: "toss",
      message: chalk.bgBlack.magentaBright(message),
      choices: [
        { name: chalk.bgBlack.magentaBright("👉 Heads"), value: true },
        { name: chalk.bgBlack.magentaBright("👉 Tails"), value: false },
      ],
    },
  ]);

  return options.toss;
}
