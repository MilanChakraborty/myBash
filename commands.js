const fs = require('fs');

const pwd = function(pwd) {
  return {pwd, result: {output: pwd, exitCode: 0}};
}

const listEntries = function(pwd) {
  const directory = pwd
  const files = fs.readdirSync(directory).join('  ');
  const code = 0;

  return {pwd, result: { output: files, exitCode: code}};
}

const changeDir = function(pwd, directory) {
  const state = {pwd, result: {output: "", exitCode: 1}};

  if(!fs.existsSync(directory)) { 
    state.result.output = "Directory Doesnot exists";
    return state; 
  }

  state.pwd = `${pwd}/${directory}`;
  state.result.exitCode = 0;

  return state;
}

exports.pwd = pwd;
exports.listEntries = listEntries;
exports.changeDir = changeDir;
