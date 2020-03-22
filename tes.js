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


// Subject 5
function tailSwap(arr) {
  let result = []
  let newArr = arr
  .map(string => string.split(':'))
  
  for (let i = 0; i < newArr.length; ++i) {
    result.push(newArr[i][0] + ':' + newArr[newArr.length -1 -i][1]);
  }

  return result
}

console.log(tailSwap(["HACK:SIA", "VA:DO", "IN:TE", "NE:TI"]))
