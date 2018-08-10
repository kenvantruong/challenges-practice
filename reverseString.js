//-----------------------------------
//method 1 [for loop]

function reverseString(str) {
  let answer = '';

  for(var i = str.length - 1; i >= 0; i--){
    answer += str[i]
  }

  return answer
}

console.log(reverseString('!olleH'));

//-----------------------------------
//method 2 [let of]

function reverseString(arr){
  let answer = '';

  for(let char of arr){
    answer = char + answer;
  }
  return answer;
}
console.log(reverseString('Hello'));


//-----------------------------------
// Quick Method 3 [shortcut]

function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('hello'));
