// Write a function that translate this object into an array where the array would only print out the value. 

let x = {
  a: 1,
  b: 2
}


const xArr = [];

for(let i in x){
  xArr.push(x[i])
}
console.log(xArr);


//Answer Prints: [1, 2]
