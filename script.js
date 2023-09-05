"use script";

// 11. Write a JavaScript program to find all the unique values in a set of numbers.

const uniqueNum = (arr) => {
  let uniqueArr = [];
  arr.forEach((ele) => {
    if (!uniqueArr.includes(ele)) {
      uniqueArr.push(ele);
    }
  });
  return uniqueArr;
};

console.log(`The answer for 1st problem is -->`);
console.log(uniqueNum([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueNum([1, 2, 3, 4, 5]));
console.log(uniqueNum([1, -2, -2, 3, 4, -5, -6, -5]));

// 12. Write a JavaScript program to check if a given number is positive, negative, or zero.

const checkNumber = (num) => {
  if (num > 0) {
    return "Positive";
  } else if (num === 0) {
    return "Zero";
  } else {
    return "Negative";
  }
};

console.log(`The answer for 2nd problem is -->`);
console.log(checkNumber(5));
console.log(checkNumber(-2));
console.log(checkNumber(0));

// 13. Write a JavaScript program to find the sum of all the numbers in an array.

const findSum = (arr) => {
  return arr.reduce((acc, ele) => (acc += ele), 0);
};

console.log(`The answer for 3rd problem is -->\n${findSum([1, 2, 3, 4, 5])}`);

// 14. Write a program that converts a time in 12-hour format to 24-hour format.

const convertTime = (str) => {
  let finalStr = str.slice(2, str.length - 2);
  let numConversion = str.slice(0, 2);
  if (str.includes("PM")) {
    if (numConversion.includes("12")) {
    } else {
      numConversion = Number(numConversion) + 12;
      numConversion = String(numConversion);
    }
  }
  finalStr = numConversion + finalStr;
  return finalStr;
};

console.log(`The answer for 4th problem is -->\n${convertTime("03:45 PM")}`);

// 15. Create a &quot;Scroll to Top&quot; button that appears when the user scrolls down and takes them to the top of the page when clicked.

/* 16. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the
results. */

//17. Write a JavaScript program to reverse a string without using the built-in reverse() method.
const reverseString = (str) => {
  let revStr = "";
  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }
  return revStr;
};
console.log(`The answer for 7th problem is -->\n${reverseString("Hello")}`);

// 18. Write a program that takes an object, creates a copy of it, and extends it with new properties using the spread syntax.

const extendObject = (obj) => {
  let copyObj = { ...obj };
  copyObj["city"] = "New York";
  copyObj["profession"] = "Engineer";
  console.log(copyObj);
};
console.log(`The answer for 8th problem is -->`);
extendObject({ name: "john", age: 30 });

/* 19. Write a program that validates user input and provides feedback or defaults.. */

// 20 Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

const productThreeNo = (one, two, three) => {
  let num = one * two * three;
  if (num > 0) {
    return `The sign is +`;
  } else {
    return `The sign is -`;
  }
};

console.log(`The answer for 10th problem is -->\n${productThreeNo(3, -7, 2)}`);
