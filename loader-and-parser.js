const fs = require('fs');

const tokenize = function(script) {
  return script.trim().split('\n');
}

const parse = function(script) {
  const tokens = tokenize(script);

  return tokens.map(function(token) {
    const [ cmdName, ...args ] = token.split(" ");
    return { cmdName, args };
  })
}

const loadScript = function(scriptPath) {
  return fs.readFileSync(scriptPath, 'utf-8');
}

exports.parse = parse;
exports.loadScript = loadScript;
