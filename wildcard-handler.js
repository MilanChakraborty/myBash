const fs = require('fs');
const {resolvePath} = require('./path-handler');

const resolveStar = function(environment, path) {
  let resolvedPath = resolvePath(path, environment);

  if(path.endsWith("*")) {
    resolvedPath = resolvedPath.slice(0, -2);
    const pathBeforeExpansion = path.slice(0, -1);

    return fs.readdirSync(resolvedPath).map(function(pathToken) {
      return `${pathBeforeExpansion}${pathToken}`;
    });
  }

  return path;
}

exports.resolveStar = resolveStar;
