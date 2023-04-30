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

  if(hasHomeShorthand(resolvedPath)) {
    resolvedPath =  path.replace('~', environment.home); 
  }

  return resolvedPath;
}

const resolvePath = function(path, environment) {
  let absolutePath = isAbsolutePath(path) ? path : `${environment.pwd}/${path}`; 

  return resolveShortHands(absolutePath);
}

exports.resolvePath = resolvePath;
