const fs = require("fs");
const {resolvePath} = require("./path-handler");

const resolveEndingStar = function(absPath, relPath) {
  const absolutePath = absPath.slice(0, -2);
  const pathBeforeExpansion = relPath.slice(0, -1);
  const contents = fs.readdirSync(absolutePath);

  return contents.map(function(content) {
    return `${pathBeforeExpansion}${content}`;
  });
};

const resolveStar = function(environment, path) {
  if(!path.includes("*")) return path;

  let indexOfFirstWildCard = path.indexOf("*");
  let pathTillStar = path.slice(0, indexOfFirstWildCard + 1);
  let absPathTillStar = resolvePath(pathTillStar, environment);
  let pathAfterStar = path.slice(indexOfFirstWildCard + 1);
  const expandedPaths = resolveEndingStar(absPathTillStar, pathTillStar);

  return expandedPaths.flatMap(function(path) {
    return resolveStar(environment, `${path}${pathAfterStar}`);
  });
}

exports.resolveStar = resolveStar;
