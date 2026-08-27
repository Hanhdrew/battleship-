import inquirer from "inquirer";

export async function startGame(message: string): Promise<boolean> {
  console.log(message);

  const result = await inquirer.prompt([
    {
      type: "confirm",
      name: "start",
      message: "Would you like to begin?",
      default: true,
    },
  ]);

  return result.start;
}
