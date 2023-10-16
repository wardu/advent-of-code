(async () => {
  const { open: fsOpen } = require("node:fs/promises");
  let inputArray: string[] = [];

  try {
    const file = await fsOpen("./2015-03/input.txt");
    for await (const line of file.readLines()) {
      inputArray.push(line);
    }
    let currentPosition: number[] = [0, 0];
    let visited = new Set<string>();

    for (const dir of inputArray) {
      for (const direction of dir) {
        switch (direction) {
          case "^":
            currentPosition[1]++;
            break;
          case "v":
            currentPosition[1]--;
            break;
          case ">":
            currentPosition[0]++;
            break;
          case "<":
            currentPosition[0]--;
            break;
        }
        visited.add(currentPosition.toString());
      }
    }
    const numberOfHousesVisited = visited.size;
    console.log(`The number of houses visited is: ${numberOfHousesVisited}`);
  } catch (err) {
    console.log("Error reading file", err);
  }
})();
