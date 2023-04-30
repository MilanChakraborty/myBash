const fs = require('fs');

const pwd = function(environment) {
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
    const error = `cd: No such File or Directory: ${destinationDir}`;

    return {environment, output: '', error, exitCode: 1}; 
  }

  const pwd = `${environment.pwd}/${destinationDir}`; 
  return  {environment: {...environment, pwd}, output: '', error: '', exitCode: 0}; 
}

exports.pwd = pwd;
exports.listEntries = listEntries;
exports.changeDir = changeDir;
