const fs = require('fs'); 

const listEntries = function(directory) {
  return fs.readdirSync(directory).join('  ');
}

const changeDir = function(directory, pwd) {
  return `${pwd}/${directory}`
}

const runCommand = function(state, command) {
  let newPwd = state.pwd;
  const cmdName = command.split(' ')[0];
  const cmdArgs = command.split(' ')[1];

  if(cmdName === 'pwd') {
    state.output.push(newPwd);
  }

  if(cmdName === 'ls') {
    state.output.push(listEntries(newPwd));
  }

  if(cmdName === 'cd') {
    newPwd = changeDir(cmdArgs, newPwd);
  }

  state.pwd = newPwd;
  return state;
}

const run = function(commands) {
  const pwd = process.env.PWD;

  return commands.reduce(runCommand, {pwd, output: []})
}

exports.run = run;
