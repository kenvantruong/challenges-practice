function multiplySkipSecond(arr){
  let product = 1;

  arr.forEach(function(e, i){
    if(i !== 1) {
      product *= e;
    }
  })
  return product;


}
console.log(multiplySkipSecond([1,2,3,4]));










