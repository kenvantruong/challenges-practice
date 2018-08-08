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
  var answer = str.split('').reverse().join('');
  return answer;
}

console.log(reverseString('hello'));
