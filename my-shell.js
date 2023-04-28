const fs = require('fs');

const script = process.argv[2];

const stringifiedCommands = fs.readFileSync(`./${script}`, 'utf-8');
const commands = stringifiedCommands.split('\n').slice(0, -1);

const listEntries = function(directory) {
  return fs.readdirSync(directory).join('  ');
}

const changeDir = function(directory, pwd) {
  return `${pwd}/${directory}`
}

const runCommand = function(pwd, command) {
  let newPwd = pwd;
  const cmdName = command.split(' ')[0];
  const cmdArgs = command.split(' ')[1];

  if(cmdName === 'pwd') {
    console.log(pwd);
  }

  if(cmdName === 'ls') {
    console.log(listEntries(pwd));
  }

  if(cmdName === 'cd') {
    newPwd = changeDir(cmdArgs, pwd);
  }
  return newPwd;
}

const run = function(commands) {
  const pwd = process.env.PWD;

  return commands.reduce(runCommand, pwd)
}

run(commands);

exports.run = run;
