const {listEntries, changeDir, showPwd} = require('./commands.js');

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
  const pwd = process.env.PWD;

  return commands.reduce(executeCommand, {pwd, output: []})
}

exports.execute = execute;
