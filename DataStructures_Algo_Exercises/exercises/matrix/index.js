// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let result = []; //create empty array

  for (let i = 0; i < n; i += 1) {
    result.push([]);
  }
  //create 2d array of arrays based on n [[],[],[]]
  let counter = 1; //
  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startRow; i <= endRow; i += 1) {
      result[startColumn][i] = counter;
      counter += 1;
      // debugger;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i += 1) {
      result[i][endColumn] = counter;
      counter += 1;
      // debugger;
    }
    endColumn -= 1;

    for (let i = endColumn; i >= startColumn; i -= 1) {
      result[endRow][i] = counter;
      counter += 1;
      // debugger;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; i -= 1) {
      result[i][startColumn] = counter;
      counter += 1;
      //   debugger;
    }
    startColumn += 1;
    debugger;
  }
  return result;
}

matrix(3);
module.exports = matrix;

/*
create empty array 'results'
create counter var starting at 1
as long as (start column <= end column && start row <= end row)
    loop from start column to end column
        at result[start_row[i]] assign counter variable
        increment counter
    increment start row
    loop from start row to end row
        at results[i][end_column] assign counter varible
        increment counter
    decrement end row
    repeat for other two sides
*/
