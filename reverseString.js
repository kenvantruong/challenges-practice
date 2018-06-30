//method 1

function reverseString(arr){
  let answer = '';

  for(let char of arr){
    answer = char + answer;
  }
  return answer;
}
console.log(reverseString('Hello'));
