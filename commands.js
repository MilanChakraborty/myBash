const fs = require('fs');

const showPwd = function(pwd) {
  const code = 0;

  return [pwd, {output: pwd, exitCode: code }];
}

const listEntries = function(pwd) {
  const directory = pwd;
  const result = fs.readdirSync(directory).join('  ');
  const code = 0;

  return [pwd, { output: result, exitCode: code}];
}

const changeDir = function(pwd, directory) {
  const state = [pwd, {output: "", exitCode: 1}];

  if(!fs.existsSync(directory)) { 
    state[1].output = "Directory Doesnot exists";
    return state; 
  }

  state[0] = `${pwd}/${directory}`;
  state[1].exitCode = 0;

  return state;
}

exports.showPwd = showPwd;
exports.listEntries = listEntries;
exports.changeDir = changeDir;
