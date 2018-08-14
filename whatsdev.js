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
  var reg = /[^A-Za-z0–9]/g

  var word = str.toLowerCase().replace(reg, "");

  var reversed = word.split('').reverse().join('');

  if(reversed === word) 
  return true
  return false;
}

console.log(palindrome("atoyota"))
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



// -------------------------------------------------

// #20 Bonus Round 1
// What output it will produce?
for(var k = 0; k < 3; k++) {
  setTimeout(function() {
      console.log('RESULT', k);
  });
}

// -------------------------------------------------

// #21 Bonus Round

// Extract name, price values and populate them into an array
// @param {Array} array of objects
// @return {Array} array of arrays
function renderInventory(inventory) {
  //your code here
  
  let list = [];
  
  inventory.forEach(function(e) {
    
    
    e.shoes.forEach(function(x) {
    
        list.push([e.name, x.name, x.price]);
        
    });
  });
  return list;
  
}
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
// Output
// [ [ 'Brunello Cucinelli', 'tasselled black low-top lace-up', 1000 ],
//   [ 'Brunello Cucinelli', 'tasselled green low-top lace-up', 1100 ],
//   [ 'Brunello Cucinelli', 'plain beige suede moccasin', 950 ],
//   [ 'Brunello Cucinelli', 'plain olive suede moccasin', 1050 ],
//   [ 'Gucci', 'red leather laced sneakers', 800 ],
//   [ 'Gucci', 'black leather laced sneakers', 900 ] ]



console.log(renderInventory(currentInventory))


// -------------------------------------------------
// Bonus Round 3
// Extract name, price values and populate them into an array
// @param {Array} array of objects
// @return {Array} array of arrays
function renderInventory(inventory) {
  //your code here
}
var currentInventory = [
{
name: 'Brunello Cucinelli',
shoes: [
  {name: 'tasselled black low-top lace-up', price: 1000},
  {name: 'tasselled green low-top lace-up', price: 1100},
  {name: 'plain beige suede moccasin', price: 950},
  {name: 'plain olive suede moccasin', price: 1050}
]
},
{
name: 'Gucci',
shoes: [
  {name: 'red leather laced sneakers', price: 800},
  {name: 'black leather laced sneakers', price: 900}
]
}
];
Output
[ [ 'Brunello Cucinelli', 'tasselled black low-top lace-up', 1000 ],
[ 'Brunello Cucinelli', 'tasselled green low-top lace-up', 1100 ],
[ 'Brunello Cucinelli', 'plain beige suede moccasin', 950 ],
[ 'Brunello Cucinelli', 'plain olive suede moccasin', 1050 ],
[ 'Gucci', 'red leather laced sneakers', 800 ],
[ 'Gucci', 'black leather laced sneakers', 900 ] ]
console.log(renderInventory(currentInventory))