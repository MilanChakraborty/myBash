const fs = require('fs');

const pwd = function(environment) {
  console.log(environment);
  const output = environment.pwd;

  return {environment, output, error: '', exitCode: 0};
}

const listEntries = function(environment) {
  const directory = environment.pwd;
  const output = fs.readdirSync(directory).join('  ');

  return {environment, output, error: '', exitCode: 0};
}

const changeDir = function(environment, args) {
  const destinationDir = args[0];

  if(!fs.existsSync(destinationDir)) { 
    const error = `cd: ${destinationDir} is not a Directory`;

    return {environment, output: '', error, exitCode: 1}; 
  }

  const newEnvironment = {...environment, pwd: `${environment.pwd}/${destinationDir}`}; 

  return {environment: {...newEnvironment}, output: '', error: '', exitCode: 0};
}

exports.pwd = pwd;
exports.listEntries = listEntries;
exports.changeDir = changeDir;
