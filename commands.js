const fs = require('fs');

const showPwd = function(arg, pwd) {
  return {pwd, output: pwd};
}

const listEntries = function(dirName, pwd) {
  const directory = pwd;
  const output = fs.readdirSync(directory).join('  ');
  return {pwd, output};
}

const changeDir = function(directory, pwd) {
  pwd = `${pwd}/${directory}`;
  return {pwd, output: ""};
}

exports.showPwd = showPwd;
exports.listEntries = listEntries;
exports.changeDir = changeDir;
