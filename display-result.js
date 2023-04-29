const displayResults = function(state) {
  const  {results, codes} = state;

  return results.forEach(function(result, index) {
    if(result === "") return;

    const streamToUse = codes[index] === 0 ? console.log : console.error;
    streamToUse(result);
  });
}

exports.displayResults = displayResults;
