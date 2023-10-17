const md5 = require("blueimp-md5");

const PUZZLE_INPUT = "ckczppom";

// PART 1
for (let i = 0x0; i < 0xffffffffff; i++) {
  const hash = md5(PUZZLE_INPUT + i);
  if (hash.startsWith("00000")) {
    console.log("The answer to part one is:", i);
    break;
  }
}

// PART 2
for (let i = 0x0; i < 0xffffffffff; i++) {
  const hash = md5(PUZZLE_INPUT + i);
  if (hash.startsWith("000000")) {
    console.log("The answer to part two is:", i);
    break;
  }
}
