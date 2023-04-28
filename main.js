const fs = require('fs');
const {execute} = require('./executer.js');

const getLines = function(string) {
  return string.split('\n').slice(0, -1);
}

const getCommandLines = function(script) {
  const string = fs.readFileSync(`./${script}`, 'utf-8');
  const commandLines = getLines(string);

  return commandLines;
}

const printOutputs = function(state) {
  const outputs = state.output;

  return outputs.forEach(function(output) {
    if(output !== "") {
      console.log(output);
    }
  })
}

const main = function() {
  const script = process.argv[2];
  const commandLines = getCommandLines(script);

  const finalState = execute(commandLines);
  printOutputs(finalState);
}

main();
