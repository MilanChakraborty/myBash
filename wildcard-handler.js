const fs = require('fs');
const {resolvePath} = require('./path-handler');

const resolveEndingStar = function(absPath, relPath) {
  const absolutePath = absPath.slice(0, -2);
  const pathBeforeExpansion = relPath.slice(0, -1);
  const contents = fs.readdirSync(absolutePath);

  return contents.map(function(content) {
    return `${pathBeforeExpansion}${content}`;
  });
};

const resolveStar = function(environment, path) {
  let resolvedPath = resolvePath(path, environment);

  if(path.endsWith("*")) {
    return resolveEndingStar(resolvedPath, path);
  }

  return path;
}

exports.resolveStar = resolveStar;
