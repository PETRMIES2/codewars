/*
Let (i, j) be the square in column i and row j on the n × n chessboard, k an integer.

If n is even and n ≠ 6k + 2, then place queens at (i, 2i) and (n/2 + i, 2i - 1) for i = 1, 2, ..., n / 2.
If n is even and n ≠ 6k, then place queens at (i, 1 + (2i + n/2 - 3 (mod n))) and (n + 1 - i, n - (2i + n/2 - 3 (mod n))) for i = 1, 2, ..., n / 2.
If n is odd, then use one of the patterns above for (n − 1) and add a queen at (n, n).
*/

function nQueens(queens){
  let chessBoardSize = 8;
  let chessBoard = create(chessBoardSize);
  let isEvenChessBoard =  chessBoardSize % 2 ===0;

  let k = 6*queens;
  if (isEvenChessBoard && chessBoardSize != k+2) {
    chessBoard =  setQueens(chessBoard, chessBoardSize);
  }
  let string = "";
  for (let x = 0 ; x < chessBoardSize; ++x) {
    for (let y = 0 ; y < chessBoardSize; ++y) {
      string = string.concat(chessBoard[x][y]);
    }
    string = string.concat("\n");
  }
  console.log(string);
  return chessBoard;
}

setQueens= (chessBoard,size)=> {
  for (let i = 1; i <= size/2; ++i) {
    console.log(i-1, 2*i-1);
    chessBoard[i-1][2*i-1] = "Q";
    console.log(size/2+i-1, 2*i-2);
    chessBoard[size/2+i-1][2*i-2] = "Q";
  }
  console.log(chessBoard);
  return chessBoard;
}

create = square => {
  let rows = [];
  for(let i = 0 ; i < square;++i) {
    let columns = [];
    for (let x = 0; x < square; ++x) {
      columns.push("-");
    }
    rows.push(columns);
  }
  return rows;
}

console.log(nQueens(8));
