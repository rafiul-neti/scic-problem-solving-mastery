/*
Problem 1: Reverse a String
Write a function that takes a string and returns it reversed.
*/
const reverseString = (string) => {
  const arrayOfString = string.split("");

  const reverseArray = [];
  for (const ltr of arrayOfString) {
    reverseArray.unshift(ltr);
  }

  return reverseArray.join("");
};

/*
Problem 2: Count Vowels in a String
Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
*/
const countVowels = (string) => {
  const vowels = ["a", "i", "o", "u", "e"];
  let count = 0;
  for (const vowel of string.split("")) {
    if (vowels.includes(vowel.toLowerCase())) count++;
  }

  return count;
};

/*
Problem 3: Check for Palindrome
Write a function that checks if a string is a palindrome (reads the same forward and backward).
*/
const isPalinDrome = (string) => {
  const reversed = reverseString(string);
  if (string === reversed) return true;

  return false;
};

