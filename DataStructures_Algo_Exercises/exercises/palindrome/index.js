// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    revStr += str[i];
  }

  return revStr === str;
}

// function palindrome(str) {
//   let revStr = "";
//   for (let char of str) {
//     revStr = char + revStr;
//   }
//   return revStr == str ? true : false;
// }

// function palindrome(str) {
//   const revStr = str
//     .split("")
//     .reverse()
//     .join("");
//   return revStr === str ? true : false;
// }
// complete

module.exports = palindrome;
