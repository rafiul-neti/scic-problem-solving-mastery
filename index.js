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

/*
Problem 4: Find the Maximum Number
Write a function that takes an array of numbers and returns the largest number.
*/
const largestNum = (arrOfNum) => {
  let highestNum = 0;
  for (const num of arrOfNum) {
    if (num > highestNum) highestNum = num;
  }
  return highestNum;
};

/*
Problem 5: Remove Duplicates from an Array
Write a function that removes all duplicate numbers from an array.
*/

const removeDuplicate = (arr) => {
  const newArr = [...new Set(arr)].sort((a, b) => a - b);

  return newArr;
};

/*
Problem 6: Sum of All Numbers in an Array
Write a function that returns the sum of all numbers in an array.
*/

const sumOfNums = (arrOfNums) => {
  const sum = arrOfNums.reduce((total, num) => total + num, 0);
  return sum;
};

/*
Problem 7: Find Even Numbers in an Array
Write a function that returns all even numbers from a given array.
*/
const findEvens = (arrOfNums) => {
  const arrOfEvens = arrOfNums.filter((num) => num % 2 === 0);
  return arrOfEvens;
};

