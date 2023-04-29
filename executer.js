const {listEntries, changeDir, showPwd} = require('./commands.js');

const getExecuter = function(commandCode) {
  const executers = {
    pwd: showPwd,
    ls: listEntries,
    cd: changeDir
  };

  return executers[commandCode];
}

const executeCommand = function(state, command) {
  const [cmdName, cmdArgs] = command.split(' ');

  const executer = getExecuter(cmdName);
  const [pwd, result] = executer(state.pwd, cmdArgs);

  return {pwd, results: [...state.results, result]};
}

const execute = function(commands) {
  const initialState = {pwd: process.env.PWD, results: []}

  return commands.reduce(executeCommand, initialState)
}

exports.execute = execute;
