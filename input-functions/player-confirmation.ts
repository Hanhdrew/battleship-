import inquirer from "inquirer";

export async function confirm(message: string): Promise<boolean> {
  const result = await inquirer.prompt([
    {
      type: "confirm",
      name: "ok",
      message: message,
      default: true,
    },
  ]);

  return result.ok;
}
