//! 1.Anonymous functions & IIFE
//! 2.Arrow function

//! A.Print odd numbers in an array
//! Using Anonymous function
var result = []
var a =function(arr)
{
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2!==0) 
    {
      result.push(arr[i])
    }
  }
  return result
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//! Using IIFE function
var result1 = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result1.push(arr[i]);
    }
  }
  console.log(result1);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//! Using Arrow function
var result2 = [];
var odd= (arr)=> {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result2.push(arr[i]);
    }
  }
  return result2;
}
console.log(odd([11,12,13,14,15,16,17,18,19,20]));
//! B.Convert all the strings to title caps in a string array
//! Using Anonymous function
var arr = ["hello world", "car racer", "cricket lover", "bMW car"];

let titleCaseArray = arr.map(function (s) {
  return s.toLowerCase().replace(/\b\w/g, function (c) {
    return c.toUpperCase();
  });
});
console.log(titleCaseArray);
//! Using IIFE function
var arr = ["hello world", "car racer", "cricket lover", "bMW car"];

let titleCaseArray1 = (function (array) {
  return array.map(function (s) {
    return s.toLowerCase().replace(/\b\w/g, function (c) {
      return c.toUpperCase();
    });
  });
})(arr);

console.log(titleCaseArray1);
 //! Using Arrow funcftion
 var arr = ["hello world", "car racer", "cricket lover", "bMW car"];

 let titleCaseArray2 = arr.map(s =>
   s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
 );
 console.log(titleCaseArray2);
 
//! C.Sum of all numbers in an array
//! Using Anonymouse function
var sumArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

var arr = [11, 12, 13, 14, 15, 16];
console.log(sumArray(arr));
//! Using IIFE function
var arr = [11, 12, 13, 14, 15, 16];
var sum = (function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
})(arr);

console.log(sum);
//! Using Arrow function
var arr = [11, 12, 13, 14, 15, 16];
var sum = ((arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
})(arr);

console.log(sum);
//! D.Return all the prime numbers in an array
//! Using Anonymouse function
var getPrimes = function (numArray) {
  return numArray.filter((number) => {
    if (number < 2) return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
};
var arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(getPrimes(arr));
//! Using IIFE function
var arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

(function(numArray) {
  var primes = numArray.filter((number) => {
    if (number < 2) return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(primes);
})(arr);
//! Using Arrow function
var arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

(() => {
  var primes = arr.filter(number => {
    if (number < 2) return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(primes);
})();
//! E.Return all the palindromes in an array
//! Using Anonymouse function
function isPalindrome(N) {
  let str = "" + N;
  let len = str.length;
  for (let i = 0; i < parseInt(len / 2, 10); i++) {
    if (str[i] != str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
var words = ["level", "mom", "orange", "wow", "noon", "apple"];
var palindromes = words.filter(function (word) {
  return isPalindrome(word);
});
console.log(palindromes);
//! Using IIFE function
function isPalindrome(N) {
  let str = "" + N;
  let len = str.length;
  for (let i = 0; i < parseInt(len / 2, 10); i++) {
    if (str[i] != str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
var words = ["level", "mom", "orange", "wow", "noon", "apple"];
var palindromes = (function () {
  return words.filter(function (word) {
    return isPalindrome(word);
  });
})();
console.log(palindromes);
//! USing Arrow function
function isPalindrome(N) {
  let str = "" + N;
  let len = str.length;
  for (let i = 0; i < parseInt(len / 2, 10); i++) {
    if (str[i] != str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
var words = ["level", "mom", "orange", "wow", "noon", "apple"];
var palindromes = words.filter(word => isPalindrome(word));
console.log(palindromes);
//! F.Return median of two sorted arrays of the same size
//! Using ANonymouse function
const findMedian = function (arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  mergedArray.sort((a, b) => a - b);
  const n = mergedArray.length;
  const median = (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;

  return median;
};
const arr1 = [1, 5, 9, 12, 15];
const arr2 = [3, 4, 7, 10, 11];
console.log(findMedian(arr1, arr2));
//! Using IIFE function
const median= (function(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2];
  mergedArray.sort((a, b) => a - b);
  const n = mergedArray.length;
  const median = (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;

  return median;
})([1, 5, 9, 12, 15], [3, 4, 7, 10, 11]);

console.log(median);
//! G.Remove duplicates from an array
//! USing Anonymouse function
let input = [11, 12, 12, 11, 13, 22, 22, 10, 10, 13];
const removeDuplicates = function () {
  let ans = [];
  ans = input.filter((a, b) => input.indexOf(a) == b);
  console.log(ans);
};
removeDuplicates();
//! Using IIFE function
let input1 = [11, 12, 12, 11, 13, 22, 22, 10, 10, 13];

(function () {
  let ans = [];
  ans = input1.filter((a, b) => input1.indexOf(a) === b);
  console.log(ans);
})();
//! H.Rotate an array by k times
//! Using ANonymouse function
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 5;

const rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.push(arr[0]);
        arr.shift();
    }
    console.log(arr);
};
rotateArray(arr, k);

//! Using IIFE function
let arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let k2 = 5;

(function(arr3, k2) {
    for (let i = 0; i < k2; i++) {
        arr3.push(arr3[0]);
        arr3.shift();
    }
    console.log(arr3);
})(arr3, k2);


