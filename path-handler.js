const fs = require('fs');

const isAbsolutePath = function(path) {
  return /^\//.test(path);
}

const hasHomeShorthand = function(path) {
  return /^~/.test(path);

}

const hasCurrentDirShortHand = function(path) {
  return /\./.test(path);
}

const hasParentDirShortHand = function(path) {
  return /\.\./.test(path);
}

const resolveHomeShortHand = function(path, environment) {
  return path.replace('~', environment.home);
}

const resolveCurrentDir = function(path) {
  return path.replace(/\/\./g, '');
}

const resolveParentDir = function(path) {
  let newPath = path;

  if(newPath === '') return '/';

  if(!newPath.includes('..')) return newPath;

  if(newPath.startsWith("/..")) {
    newPath = newPath.replace("/..", "");
  }

  newPath = newPath.replace(/\/[^\/]*\/\.\./, ''); 
  return resolveParentDir(newPath);
}

const resolveShortHands = function(path) {
  let resolvedPath = path;

  if(hasParentDirShortHand(resolvedPath)) {
    resolvedPath = resolveParentDir(resolvedPath);
  }

  if(hasCurrentDirShortHand(resolvedPath)) {
    resolvedPath = resolveCurrentDir(resolvedPath);
  }

  return resolvedPath;
}

const resolvePath = function(path, environment) {
  let absolutePath = hasHomeShorthand(path) ? resolveHomeShortHand(path, environment) : path;
  absolutePath = isAbsolutePath(absolutePath) ? absolutePath : `${environment.pwd}/${path}`; 

  return resolveShortHands(absolutePath);
}

exports.resolvePath = resolvePath;
