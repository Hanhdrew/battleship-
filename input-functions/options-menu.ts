import chalk from "chalk";
import inquirer from "inquirer";

export async function options(message: string): Promise<number> {
  const options = await inquirer.prompt([
    {
      type: "rawlist",
      name: "options",
      message: chalk.bgBlack.cyanBright(message),
      choices: [
        { name: chalk.bgBlack.cyanBright("Continue Game"), value: 1 },
        { name: chalk.bgBlack.cyanBright("Restart Game"), value: 2 },
        { name: chalk.bgBlack.cyanBright("End game"), value: 3 },
        { name: chalk.bgBlack.cyanBright(`Debug (view ships)`), value: 4 },
        { name: chalk.bgBlack.cyanBright("Clear Console"), value: 5 },
        { name: chalk.bgBlack.cyanBright("Show board stats"), value: 6 },
      ],
    },
  ]);

  return options.options;
}
