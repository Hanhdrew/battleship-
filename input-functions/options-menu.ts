import chalk from "chalk";
import inquirer from "inquirer";

export async function options(message: string): Promise<number> {
  const options = await inquirer.prompt([
    {
      type: "rawlist",
      name: "options",
      message: chalk.bgBlack.whiteBright(message),
      choices: [
        { name: chalk.bgBlack.whiteBright("Continue Game"), value: 1 },
        { name: chalk.bgBlack.whiteBright("Restart Game"), value: 2 },
        { name: chalk.bgBlack.whiteBright("End game"), value: 3 },
        { name: chalk.bgBlack.whiteBright(`Debug (view ships)`), value: 4 },
        { name: chalk.bgBlack.whiteBright("Clear Console"), value: 5 },
        { name: chalk.bgBlack.whiteBright("Show board stats"), value: 6 },
      ],
    },
  ]);

  return options.options;
}
