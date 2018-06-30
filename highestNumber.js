let highestNumList = [67,888,34,56,98,23];

let highestNum = 0;

highestNumList.forEach(function(e){
  if(e > highestNum){
    highestNum = e;
  }
});
console.log(highestNum);