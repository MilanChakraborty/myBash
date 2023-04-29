const fs = require('fs');

const getExecutableLines = function(commandLines) {
  return commandLines.split('\n').slice(0, -1);
}

const parse = function(scriptPath) {
  const commandLines = fs.readFileSync(scriptPath, 'utf-8');

  return getExecutableLines(commandLines);
}

exports.parse = parse;
