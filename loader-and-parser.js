const fs = require('fs');

const parse = function(commandLines) {
  return commandLines.split('\n').slice(0, -1);
}

const loadScript = function(scriptPath) {
  return commandLines = fs.readFileSync(scriptPath, 'utf-8');
}

exports.parse = parse;
exports.loadScript = loadScript;
