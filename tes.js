// // Subject 1
// function simpleString() {
//   const first = 'JavaScript';
//   const second = 'is';
//   const third = 'awesome';

//   return first + ' ' + second + ' ' + third
// }

// simpleString()

// // output: Javascript is Awesome


// Subject 2
// function arithmetic(a, b, operator){
//   return operator === "add" ? a+b : operator === "subtract" ? a-b : operator === "multiply" ? a*b : operator === "divide" ? a/b : "wrong operator"
// }

// arithmetic(6, 4, "add") +
// arithmetic(1, 4, "subtract") *
// arithmetic(5, 2, "multiply") /
// arithmetic(15, 3, "divide")


// Subject 3
// function nthChar(words) {
//   let str = '';
//   for (let i = 0; i < words.length; i++) str += words[i][i]
//   return str
// }

// const words = ['Humble', 'Bamboo', 'Back', 'Book', 'Built', 'Monolith', 'Sportive']
// console.log(nthChar(words))


// Subject 4
// const breakChocolate = (n,m) => n * m - 1 <= 0 ? 0 : n * m -1

// console.log(breakChocolate(4, 7) - breakChocolate(3, 5) - breakChocolate(3, 2))
// // const assert = require('assert')
// // assert(breakChocolate(4,7) === 27,);


// Subject 5
// function tailSwap(arr) {
//   let result = []
//   let newArr = arr
//   .map(string => string.split(':'))
  
//   for (let i = 0; i < newArr.length; ++i) {
//     result.push(newArr[i][0] + ':' + newArr[newArr.length -1 -i][1]);
//   }

//   return result
// }

// console.log(tailSwap(["HACK:SIA", "VA:DO", "IN:TE", "NE:TI"]))


// console.log((function breakChocolate (n,m) {
//   return n * m - 1 <= 0 ? 0 : n * m -1
// })(2,3))

// console.log((breakChocolate = (n,m) => n * m - 1 <= 0 ? 0 : n * m -1)(2,3))

// console.log((tailSwap = function tailSwap (arr) {
//   let result = []
//   let newArr = arr
//   .map(string => string.split(':'))
  
//   for (let i = 0; i < newArr.length; ++i) {
//     result.push(newArr[i][0] + ':' + newArr[newArr.length -1 -i][1]);
//   }

//   return result
// })(["HACK:SIA","VA:DO","IN:TE","NE:TI"]))


// Subject 6
function returnSpecifics(obj) {
  let [arr1,arr2] = [[],[]]
  for(let item in obj){
    if (typeof obj[item] === 'number' ) arr1.push(obj[item])
    if (typeof obj[item] === 'function') arr2.push(item)
  }
  return arr1.length < 1 && arr2.length < 1 ?  ['The Object is Empty'] : [...arr1, ...arr2]
}

console.log(returnSpecifics({a: 1, b: 'str', c: 2, d: true, e: a => a, f: 3}))