const {listEntries, changeDir, pwd} = require('./commands.js');

const getExecuter = function(commandCode) {
  const executers = {
    pwd: pwd,
    ls: listEntries,
    cd: changeDir
  };

  return executers[commandCode];
}

const executeCommand = function({environment, outcomes}, {cmdName, args}) {
  const executer = getExecuter(cmdName);

  if(executer === undefined) {
    const output = '';
    const error = `Bash: ${cmdName} is not a valid command`; 
    const exitCode = 1;

    return {environment, outcomes: [...outcomes, {output, error, exitCode}]};
  }

  const {environment: newEnvironment, output, error, exitCode} = executer(environment, args);
  return {environment: {...newEnvironment}, outcomes: [...outcomes, {output, error, exitCode}]};
}

const execute = function(instructions) {
  const environment = {
    pwd: process.env.PWD,
  }; 

  return instructions.reduce(executeCommand, {environment, outcomes: []});
}

exports.execute = execute;
