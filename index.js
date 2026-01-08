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
