(async () => {
  const { open: fsOpen } = require("node:fs/promises");
  let inputArray: string[] = [];
  let paperRequired: number = 0;
  let ribbonRequired: number = 0;

  try {
    const file = await fsOpen("./2015-02/input.txt");
    for await (const line of file.readLines()) {
      inputArray.push(line);
    }

    for (const line of inputArray) {
      const [l, h, w] = line.split("x").map(Number);

      let smallEnd: number = Math.min(l * h, l * w, h * w);
      let paper = 2 * l * w + 2 * w * h + 2 * h * l + smallEnd;
      paperRequired += paper;

      let volume: number = l * h * w;
      let ribbonRound: number = Math.min(2 * (l + h), 2 * (l + w), 2 * (w + h));
      const ribbonPerPressie: number = volume + ribbonRound;
      ribbonRequired += ribbonPerPressie;
    }
    console.log(`The total paper required in feet is: ${paperRequired} sq ft`);
    console.log(`The total ribbon required in feet is: ${ribbonRequired} ft`);
  } catch (err) {
    console.log("Error reading file", err);
  }
})();
