function count(array){
  let result = {};
  array.forEach(value=> {
    result[value] = (result[value] || 0) + 1;
  });
  return result;
}
