export function removeIndentation(input: string): string {
  return input.replace(/^\s+/gm, "");
}
