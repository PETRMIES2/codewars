
let rows = 10;
pascalsTriangleO3(rows)

//O^3
function pascalsTriangleO3(rows) {
  for(let z = 0; z <= rows; ++z) {
    let triangle = ''
    for(let column = 0; column <= z; ++column) {
      triangle += binomialCoeff(z, column) + ' ';
    }
    console.log(triangle);
  }
}

function binomialCoeff(n,k) {
    let res = 1;
    if (k > n - k)
       k = n - k;
    for (let i = 0; i < k; ++i)
    {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}
console.log('============');
//O^2
pascalsTriangleO2(rows)
function pascalsTriangleO2(rows) {
  for(let z = 0; z <= rows; ++z) {
    console.log(rowvalues(z));
  }
}

function rowvalues(row) {
  let coef = 1;
  let data = [];
  data.push(coef);
  for (let column = 1; column <= row; ++column) {
    coef = (coef * (row-column+1))/column;
    data.push(coef);
  }
  return data;
}
console.log('============');
