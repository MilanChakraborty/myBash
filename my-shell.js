const fs = require('fs'); 

const getPwd = function() {
  return process.env.PWD;
}

const showPwd = function(arg, pwd) {
  return {pwd, output: pwd};
}

const listEntries = function(dirName, pwd) {
  const directory = pwd;
  const output = fs.readdirSync(directory).join('  ');
  return {pwd, output};
}

const changeDir = function(directory, pwd) {
  pwd = `${pwd}/${directory}`;
  return {pwd, output: ""};
}

const getExecuter = function(commandCode) {
  const commands = {
    pwd: showPwd,
    ls: listEntries,
    cd: changeDir
  };

  return commands[commandCode];
}

const executeCommand = function(state, command) {
  let newPwd = state.pwd;
  const [cmdName, cmdArgs] = command.split(' ');

  const executer = getExecuter(cmdName);
  const {pwd, output} = executer(cmdArgs, newPwd);

  state.pwd = pwd;
  state.output.push(output);
  return state;
}

const execute = function(commands) {
  const pwd = getPwd();

  return commands.reduce(executeCommand, {pwd, output: []})
}

exports.execute = execute;
