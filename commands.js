const fs = require('fs');

const showPwd = function(pwd) {
  const code = 0;

  return {pwd, result: { output: pwd, exitCode: code }};
}

const listEntries = function(pwd) {
  const directory = pwd;
  const result = fs.readdirSync(directory).join('  ');
  const code = 0;

  return {pwd, result: { output: result, exitCode: code}};
}

const changeDir = function(pwd, directory) {
  const state = {pwd, result: {output: "", exitCode: 1}}

  if(!fs.existsSync(directory)) { 
    state.result.output = "Directory Doesnot exists";
    return state; 
  }

  state.pwd = `${pwd}/${directory}`;
  state.result.code = 0;

  return state;
}

exports.showPwd = showPwd;
exports.listEntries = listEntries;
exports.changeDir = changeDir;
