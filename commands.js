const fs = require('fs');

const fileExists = function(file) {
  return fs.existsSync(file);
}

const showPwd = function(arg, pwd) {
  const code = 0;

  return {pwd, result: pwd, code};
}

const listEntries = function(dirName, pwd) {
  const directory = pwd;
  const result = fs.readdirSync(directory).join('  ');
  const code = 0;

  return {pwd, result, code};
}

const changeDir = function(directory, pwd) {
  const output = {result: "", code: 1, pwd}

  if(!fileExists(directory)) { 
    output.result = "Directory Doesnot exists";
    return output; 
  }

  output.pwd = `${pwd}/${directory}`;
  output.code = 0;

  return output;
}

exports.showPwd = showPwd;
exports.listEntries = listEntries;
exports.changeDir = changeDir;
