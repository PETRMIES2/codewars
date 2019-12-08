inclusionExclusionFormula = sumForm => {
  let variables = sumForm.trim().replace(/U /g, '').split(' ');
  let sumOfEveryCase = union(variables);
  let intersectionPairs = intersection(variables);
  let restOfIntersections = intersectionAlgorithm(variables.length - 1, variables);
  let intersectionOfAll = variables.join(' \u2229 ');
  let lastOperation = sign(variables.length - 1) + ` P(${intersectionOfAll})`;

  console.log(`${sumOfEveryCase} - (${intersectionPairs}) ${restOfIntersections} ${lastOperation}`);
}
union = values => {
  return values.map(value => `P(${value})`).join(' + ');
}
intersection = values => {
  let pairs = [];
  for(let i = 0; i < values.length - 1; ++i) {
      pairs.push(intersectionRecursion(values[i], values.slice(i+1, values.length)));
  }
  return pairs.join(' + ');
}

intersectionRecursion = (intersectWith, values) => {
  let pairs = [];
    for (let j = 0; j < values.length; ++j) {
      pairs.push(`${intersectWith} \u2229 ${values[j]}`);
    }
  return pairs.map(p=> `P(${p})`).join(' + ');
}


intersectionAlgorithm = (groupSize, values) => {
  let combinationCount = combinations(values,groupSize);
  let arrayOfCombinations = [];
  for (let i = 0; i <=  combinationCount; ++i){
    console.log('combinations function here');
  }
  if (groupSize <= 2) {
    return '';
  }

  return sign(groupSize - 1) + intersectionAlgorithm(groupSize - 1, values);
}

sign = powerTo =>  Math.pow(-1, powerTo) > 0? '+': '-';
combinations = (values, group) => {
  let groupCount = factorial(values.length) / (factorial(group)*factorial(values.length - group));
  console.log('Combinations will be ' + groupCount + ' with group size of ' + group);
  return groupCount;
}

factorial = n=>n?factorial(n-1)*n:1;


inclusionExclusionFormula(' A U B U C U D');
