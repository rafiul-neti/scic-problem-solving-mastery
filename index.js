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

/*
Problem 8: Capitalize First Letter of Each Word
Write a function that capitalizes the first letter of each word in a string.
*/
const capitalizeFirstLtr = (str) => {
  const arrOfWords = str.split(" ");

  let newStr = "";
  for (const word of arrOfWords) {
    const firstLtr = word.slice(0, 1).toUpperCase();
    const restLtrs = word.slice(1);
    const wordWithCapLtr = firstLtr + restLtrs;

    newStr = newStr + " " + wordWithCapLtr;
  }
  return newStr.trim();
};

/*
Problem 9: Find the Factorial of a Number
Write a function that calculates the factorial of a number using a loop.
*/
const factorial = (n) => {
  if ([0, 1].includes(n)) {
    return 1;
  }

  let factorianOfN = 1;
  for (let i = n; i > 0; i--) {
    factorianOfN *= i;
  }

  return factorianOfN;
};

/*
Problem 10: PingPong Challenge
Write a function that prints numbers from 1 to 20.
Example:
For multiples of 3, print "Ping"
For multiples of 5, print "Pong"
For multiples of both 3 and 5, print "PingPong"
If the number is not a multiple of 3 or 5, print the number itself
Example Output:
1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..
*/
const pingPong = () => {
  const result = [];

  for (let index = 1; index < 21; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      result.push("PingPong");
    } else if (index % 3 === 0) {
      result.push("Ping");
    } else if (index % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(index);
    }
  }

  return result.join(", ");
};
