const fs = require('fs');

const getLines = function(string) {
  return string.split('\n').slice(0, -1);
}

const parse = function(script) {
  const string = fs.readFileSync(`./${script}`, 'utf-8');
  const commandLines = getLines(string);

  return commandLines;
}

exports.parse = parse;
