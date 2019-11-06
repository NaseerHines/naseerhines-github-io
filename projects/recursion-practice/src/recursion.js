// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if (n < 0) return null;
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // if array has no length return 0
  if (!array.length) return 0;
  // add the element in the first index (0) with the return
  // of sum called with that first elemeent sliced off
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  
};

// 4. Check if a number is even.
var isEven = function(n) {
  // Base Case
  // if number is equal to 0 it is even return true
  if (n === 0) return true;
  // if number is equal to 1 it is not even return false
  else if (n === 1) return false;
  // handles negative number
  if (n < 0) return isEven(n + 2);
  // recursive call 
  else return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // if n is equal to 0 return 0
  if (n === 0) return 0;
  // if number is negative use this recursive call 
  if (n < 0) return n + 1 + sumBelow(n + 1);
  // if number is positive use this recursive call
  if (n > 0) return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // if first is bigger
  if (x > y) {
  let arr = [];
  if (x === y + 1) return arr; 
  //recursive case
  return arr.concat(x - 1).concat(range(x - 1, y));
  } 
  // if the second is bigger
  else if (x < y) {
  let arr = [];
  if (y - 1 === x) return arr; 
  //recursive case
  return arr.concat(x + 1).concat(range(x + 1, y));
  } 
  // if not in range 
  else {
  let arr = [];
  return arr;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // Base Case
  if (exp === 0) return 1;
  
  else if (exp > 0) {
  // recursive case
    return base * exponent(base, exp - 1);
  }
  else if (exp < 0) {
    if (exp < 0) {
    // recursive case
    return 1 / exponent(base, -exp); 
    }
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // Base Case
  if (n === 2 || n === 1) return true;
  else if (n <= 0) return false;
  
  //recursive statement
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (!string.length) {
    return '';
  }
  return reverse(string.substr(1)) + string.charAt(0); 
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // set string to not have spaces and to be lowercase
  string = string.toLowerCase().replace(' ', '');
  // Base Case
  if (string.length === 1 || string.length === 0) return true;
  if (string[0] === string[string.length - 1]) {
    // Recursive call
    return palindrome(string.slice(1, -1));
  } 
  // it is not a palindrome 
  else return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (y >= 0 || y === 1) {
    if (y === 1) return x;
    return x + multiply(x, y - 1);
  } 
  else if (y <= 0 || y === -1) {
    if (y === -1) return -x;
    return -x + multiply(x, y + 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) return true;
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, newArray = []){
  // use a default param 
  // Base Case
  if (!str.length) return newArray;
  // Recursive Call
  return createArray(str.slice(1), newArray.concat(str[0]));
};

// 17. Reverse the order of an array
var reverseArr = function (array, newArray = []) {
  // use a default param
  // Base Case
  if (!array.length) return newArray;
  // Recursive Call
  return reverseArr(array.slice(0, -1), newArray.concat(array[array.length - 1]));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // value is what we want to duplicate
  // length is amount of  duplication
  // Base Case
  if (length === 0) return [];
  // Recursive Case
  if (value !== []) {
    return [value].concat(buildList(value, length - 1));
  }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
  // count occurence of a value inside a list
  // Base Case
  //if there is no array anymore return count
  if (!array.length) return count;
  //if  the first index is equal to value add 1
  if (array[0] === value) count++; 
  // Recursive Call
  // needs to keep returning value and count each time
  // slice array to keep recursively calling from reach max call stack
  return countOccurrence(array.slice(1), value, count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    // map recursively
    // BaseCase
    // see if the arr still has a length if no return array literal
    if (!array.length) return []; 
    // Recursive Call
    // if length is still there  wrap the function call in an array 
    // concat it with the return of 
    // map recursively called slice of one part each run untill BaseCase is met
    return [callback(array[0])].concat(rMap(array.slice(1), callback)); 
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  //Base Case 
  if (n <= 1) return n;
  // Recursive Call
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // handles negative numbers
  if (n < 0) return null;
  // 
  if (n <= 1) return n;
  // Recursive Call
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // Base Case
  if (!input.length) {
    return [];
  } 
  // Recursive Call
  return [input[0].toUpperCase()].concat((capitalizeWords(input.slice(1))));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // Base Case
  if (!array.length) {
    return [];
  } 
  // Recursive Call
  return [array[0][0].toUpperCase() + array[0].slice(1)].concat((capitalizeFirst(array.slice(1))));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  // Base Case
  if (str.length === 0) {
    return obj;
  } 
  // if object has property of letter, add 1 to tally while removing it from the string
  if (obj.hasOwnProperty(str[0])) {
    obj[str[0]] += 1;
    // Recursive Call
    return letterTally(str.slice(1), obj);
  // else give the propety a value of 1
  } 
  else { 
    obj[str[0]] = 1;
  }
  // Recursive Call
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if (list.length > 1) {
    if (list[0] === list[1]) {
      return compress(list.slice(1));
    }
    return [list[0], ...compress(list.slice(1))];
  }
  return list;
};
// var compress = function(list, array = []) {
//   // base case
//   if (!list.length) {
//     return array;
//   } 
//   if (!array.length) {
//     return (compress(list.slice(1), array.concat(list[0])));
//   } if (array[array.length - 1] === list[0]) {
//     return compress(list.slice(1), array);
//   } 
//   if (array[array.length - 1] !== list[0]) {
//     return (compress(list.slice(1), array.concat(list[0]))); 
//   }
// };

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length > 1) {
    if (array[0] === 0) {
      return compress(array.slice(1));
    }
    return [array[0], ...minimizeZeroes(array.slice(1))];
  }
  return array;
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, array2 = []) {
  if (!array.length) {
    return array2;
  } 
  // if length of newArray is even, then the next number should be positive. 
  if (array2.length % 2 === 0) {
    // so if first element of <array> is positive, push that number to end of newArray
    if (array[0] > 0) {
      array2.push(array[0]);
      return alternateSign(array.slice(1), array2);
    }
    // if first element of <array> is negative, multiply that by -1 and push it to newArray
    if (array[0] < 0) {
      array[0] *= -1;
      array2.push(array[0]);
      return alternateSign(array.slice(1), array2);
    }
  } 
  // if length of newArray is odd, then the next number should be negative. 
  if (array2.length % 2 === 1) {
    // So if first element of <array> is negative, push that number to the end of newArray
    if (array[0] < 0) {
      array2.push(array[0]);
      return alternateSign(array.slice(1), array2);
    }
    // if first element of <array> is positive, multiply it by -1 before pushing
   if (array[0] > 0) {
    array[0] *= -1;
    array2.push(array[0]);
    return alternateSign(array.slice(1), array2);
   }
  }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, str2 = "") {
  // base case
  //when we have no more original string return second string
  if (!str.length) {
    return str2;
  } 
  //check each call for if
if (str[0] === "0") {
    return str2.concat("zero").concat(numToText(str.slice(1), str2));  
  } if (str[0] === "1") {
    return str2.concat("one").concat(numToText(str.slice(1), str2));  
  } if (str[0] === "2") {
    return str2.concat("two").concat(numToText(str.slice(1), str2));  
  } if (str[0] === "3") {
    return str2.concat("three").concat(numToText(str.slice(1), str2));  
  } if (str[0] === "4") {
    return str2.concat("four").concat(numToText(str.slice(1), str2));  
  } if (str[0] === "5") {
    return str2.concat("five").concat(numToText(str.slice(1), str2));  
  } if (str[0] === "6") {
    return str2.concat("six").concat(numToText(str.slice(1), str2));  
  } if (str[0] === "7") {
    return str2.concat("seven").concat(numToText(str.slice(1), str2));  
  } if (str[0] === "8") {
    return str2.concat("eight").concat(numToText(str.slice(1), str2));  
  } if (str[0] === "9") {
    return str2.concat("nine").concat(numToText(str.slice(1), str2));  
  } 
  // return this current string and conact ir back with recursive call of slice str1 and str2
  return str2.concat(str[0]).concat(numToText(str.slice(1), str2));  
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
