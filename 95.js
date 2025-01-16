function firstNonRepeatingChar(str) {
    const charCount = {};
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  const input = "ram rawat";
  const result = firstNonRepeatingChar(input);
  console.log(result);