// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  if (str.toLowerCase().match(/[aeiou]/g) == null) {
    return 0;
  } else {
    return str.toLowerCase().match(/[aeiou]/g).length;
  }
}

module.exports = vowels;
