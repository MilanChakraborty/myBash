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
  const {pwd, result, code} = executer(cmdArgs, state.pwd);

  state.pwd = pwd;
  state.results.push(result);
  state.codes.push(code);

  return state;
}

const execute = function(commands) {
  const initialState = {pwd: process.env.PWD, results: [], codes: []}

  return commands.reduce(executeCommand, initialState)
}

exports.execute = execute;
