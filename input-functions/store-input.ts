import inquirer from "inquirer";
import chalk from "chalk";

export async function storeInput(message: string): Promise<string> {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "input",
      message: chalk.bgBlack.cyanBright(message),
    },
  ]);

  return answer.input;
}
