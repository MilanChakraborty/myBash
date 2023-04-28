const fs = require('fs');

const script = process.argv[2];

const stringifiedCommands = fs.readFileSync(`./${script}`, 'utf-8');
const commands = stringifiedCommands.split('\n').slice(0, -1);

const getPwd = function() {
  return process.env.PWD;
}

const listEntries = function() {
  return fs.readdirSync('.');
}

const commandSet = {
  'pwd': getPwd,
  'ls': listEntries
}

const run = function(commands) {
  let output = '';

  for(const command of commands) {
    output += commandSet[command]();
  }

  return output;
}

console.log(run(commands));

exports.run = run;
