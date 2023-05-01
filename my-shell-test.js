const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {resolveStar} = require('./wildcard-handler.js');

describe("Wildcard expansion", function() {
  it("expansion of star", function() {
    let actual = resolveStar({pwd: process.env.PWD}, "*");
    let expected = [
      '.git',
      'another-somewhere',
      'commands.js',
      'display-result.js',
      'executer.js',
      'loader-and-parser.js',
      'main.js',
      'my-shell-script.mysh',
      'my-shell-test.js',
      'path-handler.js',
      'somewhere',
      'wildcard-handler.js'
    ];
    deepStrictEqual(actual, expected)
  });


  it("expansion inside another directory", function() {
    let actual = resolveStar({pwd: process.env.PWD}, "somewhere/*");
    let expected = ["somewhere/inside"];
    deepStrictEqual(actual, expected);
  });


  it("expansion inside another directory", function() {
    let actual = resolveStar({pwd: process.env.PWD}, "somewhere/inside/*");
    let expected = ["somewhere/inside/a.txt", "somewhere/inside/b.txt"];
    deepStrictEqual(actual, expected);
  });

  const environment = {pwd: process.env.PWD};
  it("Should expand multiple levels", function() {
    let actual = resolveStar(environment, "somewhere/*/*");
    let expected = ["somewhere/inside/a.txt", "somewhere/inside/b.txt"];
    deepStrictEqual(actual, expected);
  });

  // it("Should expand multiple levels", function() {
  //   let actual = resolveStar(environment, "another-somewhere/*/*/*");
  //   let expected = ["somewhere/inside/a.txt", "somewhere/inside/b.txt"];
  //   deepStrictEqual(actual, expected);
  // });
});

