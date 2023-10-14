(async () => {
  const { open: fsOpen } = require("node:fs/promises");

  let floor = 0;
  let basementStep = 0;
  let inputData = "";
  try {
    const file = await fsOpen("./2015-01/input.txt");
    for await (const line of file.readLines()) {
      inputData += line;
    }

    for (let i = 0; i < inputData.length; i++) {
      // open bracket means going up one floor
      if (inputData[i] === "(") {
        floor += 1;
        basementStep += 1;

        // close bracket means going down one floor
      } else if (inputData[i] === ")") {
        floor -= 1;
        basementStep -= 1;
      }
      // check first time santa goes into basement
      if (basementStep < 0) {
        basementStep += Infinity;
        console.log("Santa first goes into the basement at step: ", i + 1);
      }
    }
    console.log("The floor is", floor);
  } catch (err) {
    console.log("Error reading file", err);
  }
})();
