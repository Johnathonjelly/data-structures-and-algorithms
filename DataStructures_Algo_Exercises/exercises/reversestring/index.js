// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   return str.split("").reduce((reversed, char) => {
//     return char + reversed;
//   }, "");
// }

// function reverse(str) {
//   return str.split("").reduce((reversed, char) => char + reversed, "");
// }

function reverse(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    revStr += str[i];
  }
  return revStr;
}

// function reverse(str) {
//   return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
// }

module.exports = reverse;
