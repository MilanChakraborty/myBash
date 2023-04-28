const fs = require('fs');

const script = process.argv[2];

const stringifiedCommands = fs.readFileSync(`./${script}`, 'utf-8');
const commands = stringifiedCommands.split('\n').slice(0, -1);

const getPwd = function() {
  return process.env.PWD;
}

const listEntries = function(directory) {
  return fs.readdirSync(directory).join('  ');
}

const run = function(commands) {
  let output = '';
  let pwd = process.env.PWD;

  for(const command of commands) {
    if(command === 'pwd') {
      output += pwd + '\n';
    }

    if(command === 'ls') {
      output += listEntries(pwd) + "\n";
    }
  }
  return output;
}

console.log(run(commands));

exports.run = run;
