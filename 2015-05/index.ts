(async () => {
  const { open: fsOpen } = require("node:fs/promises");

  let inputData: string[] = [];
  let naughtys = 0;
  let nices = 0;

  try {
    const file = await fsOpen("./2015-05/input.txt");
    for await (const line of file.readLines()) {
      inputData = [...inputData, line];
    }

    inputData.forEach((str) => {
      // PART 1
      const forbidden = /ab|cd|pq|xy/.test(str);
      const twoSameTogether = /(.)\1/.test(str);
      const containsThreeVowls = /(?:\w*[aeuio]\w*){3,}/.test(str);

      if (forbidden === true) {
        naughtys += 1;
        return;
      }
      if (twoSameTogether === false) {
        naughtys += 1;
        return;
      }
      if (containsThreeVowls === false) {
        naughtys += 1;
        return;
      } else {
        nices += 1;
      }
    });
    console.log(`total length of input = ${inputData.length}`);
    console.log(`Naughtys: ${naughtys}`);
    console.log(`Nices: ${nices}`);

    // PART 2
    let naughtySecond = 0;
    let niceSecond = 0;
    inputData.forEach((str) => {
      const repeatingTwo = /(..).*\1/.test(str);
      const letterSandwich = /(.)(.)\1/.test(str);

      if (repeatingTwo === false) {
        naughtySecond += 1;
        return;
      }
      if (letterSandwich === false) {
        naughtySecond += 1;
        return;
      } else {
        niceSecond += 1;
      }
    });

    console.log(`2nd Naughtys: ${naughtySecond}`);
    console.log(`2nd Nices: ${niceSecond}`);
  } catch (err) {
    console.log("Error reading file", err);
  }
})();
