//method 1

function reverseString(arr){
  let answer = '';

  for(let char of arr){
    answer = char + answer;
  }
  return answer;
}
console.log(reverseString('Hello'));


-----------------------------------
// Quick Method 2

function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('hello'));
