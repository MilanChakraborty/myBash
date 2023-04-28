const {deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");

const {run} = require('./my-shell.js');

describe("my-shell", function() {
  it("Testing for pwd in my shell", function() {
    deepStrictEqual(run(['pwd']), {pwd: '/Users/milan18102002/workspace/nodeJS/projects/myBash',
      output: ['/Users/milan18102002/workspace/nodeJS/projects/myBash']});
  })

  it("Testing for ls in my shell", function() {
    deepStrictEqual(run(['ls']), {pwd: '/Users/milan18102002/workspace/nodeJS/projects/myBash',
      output: ['.git  my-shell-script.mysh  my-shell-test.js  my-shell.js  somewhere']});
  })

  it("Testing for cd in my shell", function() {
    deepStrictEqual(run(['cd somewhere']), {pwd: '/Users/milan18102002/workspace/nodeJS/projects/myBash/somewhere',
      output: []});
  })

})


