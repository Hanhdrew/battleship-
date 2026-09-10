import inquirer from "inquirer";
import chalk from "chalk";

export async function askBoardSize(message: string): Promise<number> {
  const result = await inquirer.prompt([
    {
      type: "rawlist",
      name: "size",
      message: chalk.bgBlack.cyanBright(message),
      choices: [
        { name: chalk.bgBlack.cyanBright("6x6"), value: 6 },
        { name: chalk.bgBlack.cyanBright("8x8"), value: 8 },
        { name: chalk.bgBlack.cyanBright("10x10"), value: 10 },
      ],
    },
  ]);

  return result.size;
}
