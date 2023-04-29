const displayResults = function(state) {
  const  { results } = state;

  return results.forEach(function(result) {
    if(result.output === "") return;

    const streamToUse = result.exitCode === 0 ? console.log : console.error;
    streamToUse(result.output);
  });
}

exports.displayResults = displayResults;
