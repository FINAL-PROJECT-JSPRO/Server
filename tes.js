// // Subject 1
// function simpleString() {
//   const first = 'Javascript'
//   const second = 'is'
//   const third = 'awesome'

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


// Subject 6
// function returnSpecifics(obj) {
//   let [arr1,arr2] = [[],[]]
//   for(let item in obj){
//     if (typeof obj[item] === 'number' ) arr1.push(obj[item])
//     if (typeof obj[item] === 'function') arr2.push(item)
//   }
//   return arr1.length < 1 && arr2.length < 1 ?  ['The Object is Empty'] : [...arr1, ...arr2]
// }

// console.log(returnSpecifics({a: 1, b: 'str', c: 2, d: true, e: a => a, f: 3}))


// Subject 7
// function transform(source, target) {
//   var result = [source];
//   for (var i = 0; i <= source.length; i++) {
//     if (source[i] !== target[i]) {
//       var newStr = source.replace(source.slice(0, i + 1), target.slice(0, i + 1));
//       result.push(newStr);
//     }
//   }
//   return result;
// }

// console.log(transform('one two three', 'four five six'))
// // [
// //   'one two three', 'fne two three',
// //   'foe two three', 'fou two three',
// //   'fourtwo three', 'four wo three',
// //   'four fo three', 'four fi three',
// //   'four fivthree', 'four fivehree',
// //   'four five ree', 'four five see',
// //   'four five sie', 'four five six'
// // ]
// console.log(transform('hacktiv', 'jscript'))
// // [
// //   'hacktiv',
// //   'jacktiv',
// //   'jscktiv',
// //   'jscrtiv',
// //   'jscriiv',
// //   'jscripv',
// //   'jscript'
// // ]


// Subject 8
// function simpleClass(word) {
//   let MyNamespace = {}

//   MyNamespace.MyClass = class {
//     constructor(arg) {
//       this.arg = arg
//     }

//     sayWord() {
//       return this.arg
//     }
//   }

//   const myObject = new MyNamespace.MyClass(word);
//   return myObject.sayWord()
// }


// console.log(simpleClass('Hacktiv8'))
// console.log(simpleClass('Final'))
// console.log(simpleClass('Project'))


// Subject 9
// function findUnique(arr) {
//   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }
