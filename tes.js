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
function arithmetic(a, b, operator){
  return operator === "add" ? a+b : operator === "subtract" ? a-b : operator === "multiply" ? a*b : operator === "divide" ? a/b : "wrong operator"
}

(arithmetic(1, 4, "add") + arithmetic(1, 4, "subtract")) * arithmetic(5, 2, "multiply") / arithmetic(15, 3, "divide")