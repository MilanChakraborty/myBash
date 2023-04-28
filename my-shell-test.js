const {strictEqual} = require("assert");
const {describe, it} = require("node:test");

const {run} = require('./my-shell.js');

describe("my-shell", function() {
  it("Testing for pwd in my shell", function() {
    strictEqual(run('pwd'), '/Users/milan18102002/workspace/nodeJS/projects/myBash');
  })
})

