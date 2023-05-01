const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');
const {resolveStar} = require('./wildcard-handler.js');

describe("Wildcard expansion", function() {
  const environment = {pwd: process.env.PWD};

  it("expansion of star", function() {
    let actual = resolveStar("*", environment);
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
    let actual = resolveStar("somewhere/*", environment);
    let expected = ["somewhere/inside"];
    deepStrictEqual(actual, expected);
  });


  it("expansion inside another directory", function() {
    let actual = resolveStar("somewhere/inside/*", environment);
    let expected = ["somewhere/inside/a.txt", "somewhere/inside/b.txt"];
    deepStrictEqual(actual, expected);
  });

  it("Should expand multiple levels", function() {
    let actual = resolveStar("somewhere/*/*", environment);
    let expected = ["somewhere/inside/a.txt", "somewhere/inside/b.txt"];
    deepStrictEqual(actual, expected);
  });

  it("Should expand multiple levels", function() {
    let actual = resolveStar("another-somewhere/*/*/*", environment);
    let expected = [
      "another-somewhere/somewhere/inside/a.txt", 
      "another-somewhere/somewhere/inside/b.txt"
    ]; 
    deepStrictEqual(actual, expected);
  });

  it("Should give the contents of the root directory", function() {
    let actual = resolveStar("/*", environment);
    let expected = [
      '/.VolumeIcon.icns',
      '/.file',
      '/.vol',
      '/Applications',
      '/Library',
      '/System',
      '/Users',
      '/Volumes',
      '/bin',
      '/cores',
      '/dev',
      '/etc',
      '/home',
      '/opt',
      '/private',
      '/sbin',
      '/tmp',
      '/usr',
      '/var'
    ]
    deepStrictEqual(actual, expected);
  })
});

