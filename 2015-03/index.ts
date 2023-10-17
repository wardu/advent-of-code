(async () => {
  const { open: fsOpen } = require("node:fs/promises");
  let inputArray: string[] = [];

  try {
    const file = await fsOpen("./2015-03/input.txt");
    for await (const line of file.readLines()) {
      inputArray.push(line);
    }
    let currentPosition: number[] = [0, 0];

    // PART 01
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

    //PART 02
    let santaVisited = new Set<string>();
    let roboVisited = new Set<string>();

    let santaPosition: number[] = [0, 0];
    let roboPosition: number[] = [0, 0];

    for (const dir of inputArray) {
      for (let i = 0; i < dir.length; i++) {
        if (i % 2 === 0) {
          switch (dir[i]) {
            case "^":
              santaPosition[1]++;
              break;
            case "v":
              santaPosition[1]--;
              break;
            case ">":
              santaPosition[0]++;
              break;
            case "<":
              santaPosition[0]--;
              break;
          }
          santaVisited.add(santaPosition.toString());
        } else {
          switch (dir[i]) {
            case "^":
              roboPosition[1]++;
              break;
            case "v":
              roboPosition[1]--;
              break;
            case ">":
              roboPosition[0]++;
              break;
            case "<":
              roboPosition[0]--;
              break;
          }
          roboVisited.add(roboPosition.toString());
        }
      }
    }

    const housesVisitedByBoth = new Set([
      ...santaVisited.values(),
      ...roboVisited.values(),
    ]);

    console.log(
      `The total number of houses visited is: ${housesVisitedByBoth.size}`
    );
  } catch (err) {
    console.log("Error reading file", err);
  }
})();
