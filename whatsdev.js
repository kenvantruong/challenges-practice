// #1 Reverse a String
function reverseAString(str){
  var answer = '';

  for(var i = str.length - 1; i >= 0; i--){
    answer += str[i]
  }

  return answer;
}
console.log(reverseAString('Ken'));

/* ------------------------- */

// #2 Factorialize
function factorialize(num){
  let result = 1;

  for(var i = 1; i <= num; i++){
    result *= i;
  }

  return result;
}

console.log(factorialize(5));
/* ------------------------- */

// #3 Palindrome Check
function palindrome(str) {
  var reversed = str.split('').reverse().join('');

  if(reversed === str) 
  return true
  return false;
}

console.log(palindrome("racecar"))
/* ------------------------- */

// #4 Find Longest Word
/* ------------------------- */

// #5 Titlecase
/* ------------------------- */

// #6 Largest Numbers in
/* ------------------------- */

// #7 Confirm the
/* ------------------------- */

// #8 Repeat String Num Times
/* ------------------------- */

// #9 Truncate a String
/* ------------------------- */

// #10 Chunky Monkey
/* ------------------------- */

// #11 Slasher
/* ------------------------- */

// #12 Mutations
/* ------------------------- */

// #13 Falsy Bouncer
/* ------------------------- */

// #14 Seek and Destroy
/* ------------------------- */

// #15 Where do I belong
/* ------------------------- */

// #16 Caesars Cipher
/* ------------------------- */

// #17 Sum All the Numbers in
/* ------------------------- */

// #18 DiffArray
/* ------------------------- */

// #19 Roman Numeral
/* ------------------------- */
