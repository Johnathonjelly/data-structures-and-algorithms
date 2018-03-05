// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let row = 0; row < n; row += 1) {
//     let stair = "";

//     for (let column = 0; column < n; column += 1) {
//       if (row >= column) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

function steps(num, row = 0, stair = "") {
  if (num === row) return;

  if (num === stair.length) {
    console.log(stair);
    return steps(num, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(num, row, stair);
}

module.exports = steps;
