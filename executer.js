const {listEntries, changeDir, pwd} = require('./commands.js');

const getExecuter = function(commandCode) {
  const executers = {
    pwd: pwd,
    ls: listEntries,
    cd: changeDir
  };

  return executers[commandCode];
}

const executeCommand = function(state, command) {
  const [cmdName, cmdArgs] = command.split(' ');
  const executer = getExecuter(cmdName);

  if(executer === undefined) {
    return state;
  }

  const {pwd, result} = executer(state.pwd, cmdArgs);
  return {pwd, results: [...state.results, result]};
}

const execute = function(commands) {
  const initialState = {pwd: process.env.PWD, results: []}

  return commands.reduce(executeCommand, initialState)
}

exports.execute = execute;
