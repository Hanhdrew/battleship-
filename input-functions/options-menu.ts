import inquirer from "inquirer";

export async function options(): Promise<number> {
  const options = await inquirer.prompt([
    {
      type: "rawlist",
      name: "options",
      message: "Select an option below:",
      choices: [
        { name: "Continue Game", value: 1 },
        { name: "Restart Game", value: 2 },
        { name: "End game", value: 3 },
        { name: "Debug (View Ships)", value: 4 },
        { name: "Clear Console", value: 5 },
        { name: "Show board stats", value: 6 },
      ],
    },
  ]);

  return options.options;
}
