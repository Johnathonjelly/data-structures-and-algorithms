// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanSentence(sentence) {
  // sentence.toLowerCase().replace(/[^a-zA-Z]/g, "");
  // sentence.toLowerCase().replace(/[^w]/g, "");
  sentence.split("");
  let cleaned = new Set(sentence);
  const nonABC = [
    ",",
    ".",
    "?",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    ":",
    ";",
    "[",
    "]",
    "{",
    "}",
    "|",
    "/",
    "\\",
    "'",
    " "
  ];

  for (let element of nonABC) {
    if (cleaned.has(element)) {
      cleaned.delete(element);
    }
  }
  return cleaned;
}

function anagrams(stringA, stringB) {
  let setA = cleanSentence(stringA);
  let setB = cleanSentence(stringB);

  if (setA.size != setB.size) return false;

  const iteratorA = setA.entries();
  for (let values of iteratorA) {
    if (setB.has(values) === setA.has(values)) {
      return true;
    }
  }
}

// -- quicker method, not as obvious to arrive here logically though
// function clean(string) {
//   return string.replace(/[^\w]/g, "").toLowerCase().split('').sort().join();
// }

function anagrams(stringA, stringB) {
  clean(stringA) === clean(stringB);
}

module.exports = anagrams;
