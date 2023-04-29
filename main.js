const fs = require('fs');
const { execute } = require('./executer.js');
const { displayResults } = require('./display-result.js');
const { parse } = require('./parser.js');

const main = function() {
  const scriptPath = process.argv[2];

  if(!fs.existsSync(scriptPath)) {
    console.error('File Does not Exist');
    return;
  }

  const executableScript = parse(scriptPath);
  const results = execute(executableScript);

  displayResults(results);
}

main();
