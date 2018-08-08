//Sum of Arrays

function sonLuChallenge(arrayList) {
  let answer = 0;

  arrayList.forEach(function(e){
    answer += e;
  })

  console.log(answer);

}

sonLuChallenge([51,28,73,44,65])


---------------------------------
---------------------------------

//Highest Number

var list = [10,239,8,17,6,5,41,3,2,1]

let highestNum = 0;

list.forEach(function(e){
  if (e > highestNum){
    highestNum = e;
    console.log(e);
  }
})



console.log(highestNum);



---------------------------------
---------------------------------
