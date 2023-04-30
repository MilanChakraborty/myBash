const isError = function(exitCode) {
  return exitCode !== 0;
}

const streamsEmpty = function({output, error}) {
  return error === "" && output === "";
}

const displayResults = function(outcomes) {

  outcomes.forEach(function(outcome) {
    if(streamsEmpty(outcome)) return;

    if(isError(outcome.exitCode)) {
      console.error(outcome.error);
      return;
    }

    console.log(outcome.output);
  });
}

exports.displayResults = displayResults;
