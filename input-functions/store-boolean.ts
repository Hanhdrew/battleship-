import inquirer from "inquirer";
import chalk from "chalk";

export async function storeBoolean(message: string): Promise<boolean> {
  const result = await inquirer.prompt([
    {
      type: "confirm",
      name: "boolean",
      message: chalk.bgBlack.cyanBright(message),
      default: true,
    },
  ]);

  return result.boolean;
}
