const isError = function(exitCode) {
  return exitCode !== 0;
}

const outcomeNotPrintable = function(outcome) {
  const error = outcome.error;
  const output = outcome.output;

  return error === "" && output === "";
}

const displayResults = function(outcomesLog) {
  const  { outcomes } = outcomesLog;

  outcomes.forEach(function(outcome) {
    if(outcomeNotPrintable(outcome)) {
      return;
    }

    if(isError(outcome.exitCode)) {
      console.error(outcome.error);
      return;
    }

    console.log(outcome.output);
  });
}

exports.displayResults = displayResults;
