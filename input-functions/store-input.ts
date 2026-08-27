//stores the users input as a string

import inquirer from "inquirer";

export async function storeInput(message: string): Promise<string> {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "input",
      message: message,
    },
  ]);

  return answer.input;
}
