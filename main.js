const fs = require('fs');
const {run} = require('./my-shell.js');

const getCommands = function(script) {
  const stringifiedCommands = fs.readFileSync(`./${script}`, 'utf-8');
  const commands = stringifiedCommands.split('\n').slice(0, -1);

  return commands;
}

const printOutput = function(state) {
  const output = state.output.join("\n");
  console.log(output);
}

const main = function() {
  const script = process.argv[2];
  const commands = getCommands(script);

  const finalState = run(commands);
  printOutput(finalState);
}

main();
