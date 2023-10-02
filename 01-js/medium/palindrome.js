/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function transform(str){
  let answer = ""
  for(let i=0;i<str.length;i++){
    if(str[i]!==" "&&str[i]!=='?'&&str[i]!==','&&str[i]!=='!'&&str[i]!=='.'){
      answer+=str[i]
    }
  }
  return answer
}

function isPalindrome(str) {
  let str1 = str;
  str1 = str.toLowerCase();
  str1 = transform(str1);
  let reversedString = str1.split("").reverse().join("");
  if (reversedString === str1) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
