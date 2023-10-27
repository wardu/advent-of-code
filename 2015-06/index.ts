(async () => {
  const { open: fsOpen } = require("node:fs/promises");

  try {
    const file = await fsOpen("./2015-06/input.txt");
    for await (const line of file.readLines()) {
const newLine = line.split(' ')
      if (newLine[0] === 'turn'){
          let coordOne = newLine[2]
          let coordTwo = newLine[4]

        let action = newLine[0] + ' ' + newLine[1]
        if (action === 'turn off'){
           console.log(coordOne)
        }
        
        if ( action === 'turn on'){
          console.log(coordTwo)
        }
      }
      
    }
// split input 
  
  } catch (err) {
    console.log("Error reading file", err);
  }
})();
