import inquirer from "inquirer";

export async function askBoardSize(): Promise<number> {
  const result = await inquirer.prompt([
    {
      type: "rawlist",
      name: "size",
      message: "Choose a board size:",
      choices: [
        { name: "6x6", value: 6 },
        { name: "8x8", value: 8 },
        { name: "10x10", value: 10 },
      ],
    },
  ]);

  return result.size;
}
