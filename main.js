const fs = require('fs');
const { loadScript, parse } = require('./loader-and-parser.js');
const { execute } = require('./executer.js');
const { displayResults } = require('./display-result.js');

const main = function() {
  const scriptPath = process.argv[2];

  if(!fs.existsSync(scriptPath)) {
    console.error('File Does not Exist');
    return;
  }

  const script = loadScript(scriptPath);
  const executableInstructions = parse(script);
  const { environment, outcomes } = execute(executableInstructions);

  displayResults(outcomes);
}

main();
