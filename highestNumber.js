let highestNumList = [67,888,34,56,98,23];

let highestNum = 0;

highestNumList.forEach(function(e){
  if(e > highestNum){
    highestNum = e;
  }
});
console.log(`Highest Number is ${highestNum}`);

// -----------------------------------------------------
// -----------------------------------------------------
// Second Highest Num-----------------------------------

let secondHighestNumList = [67,888,34,56,98,23];

let secondHighestNum = 0;

secondHighestNumList.forEach(function(e){
  if(e > highestNum){
    secondHighestNum = highestNum;
    highestNum = e;
  } else if (e > secondHighestNum && e < highestNum){
    secondHighestNum = e;
  }
});
console.log(`Second Highest Number is ${secondHighestNum}`);
