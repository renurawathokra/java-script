function removeDuplicateChars(str) {
  return [...new Set(str)].join("");
}
let rs= removeDuplicateChars("abcabc");
console.log(rs);