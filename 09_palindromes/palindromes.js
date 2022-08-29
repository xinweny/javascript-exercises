const palindromes = function (string) {
  const arr = string.toLowerCase() // Convert all letters to lowercase
              .split('') // Split into array
              .filter(char => char.match('[a-z]')) // Keep letters only

  const len = arr.length;
  const midpoint = Math.floor((len / 2) - 1);
  
  for (let i = 0; i <= midpoint; i++) {
    if (arr[i] != arr[len - (i + 1)]) return false;
  }
  return true
};

// Do not edit below this line
module.exports = palindromes;
