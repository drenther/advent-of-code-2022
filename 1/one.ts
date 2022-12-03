export const solution = main;

const input = await Deno.readTextFile(`./1/input.txt`);

function sum(nums: number[]) {
  return nums.reduce((sum, num) => sum + num, 0);
}

function main() {
  const separatorRegex = /(\n\n)/;
  const elves = input.split(separatorRegex);

  const separatorRemnant = "\n\n";
  return Math.max(
    ...elves
      .filter(Boolean)
      .filter((str) => str !== separatorRemnant)
      .map((str) => sum(str.split("\n").map(Number)))
  );
}

console.log(main());
