// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  for (let char of str) {
    charMap[char] != null ? (charMap[char] += 1) : (charMap[char] = 1);
  }

  return Object.keys(charMap).reduce(
    (a, b) => (charMap[a] > charMap[b] ? a : b)
  );
}

module.exports = maxChar;
// could I refactor this further? Yes, I could. However, I believe in keeping the code as readable as possible. Refactoring further might introduce unneeded compleity.
// for (let char of str) {
//     //     if (charMap[char] != null) {
//     //       charMap[char] += 1;
//     //     } else {
//     //       charMap[char] = 1;
//     //     }
