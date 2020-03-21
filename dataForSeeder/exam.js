module.exports = [
  {
    question: `<h1 class="examTitle">Javascript is Awesom!</h1><p class="examBody">Your task is to write a function that return a phrase "Javascript is awesome".</p>`,
    skeleton:
`function simpleString() 


  return first + ' ' + second + ' ' + third
}

simpleString()

// output: Javascript is awesome`,
    answer: 'Javascript is awesome',
    SubjectId: 1
  },
  {
    question:`<h1 class="examTitle">Make a Function that Does Arithmetic!</h1><p class="examBody">Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.</p><p class="examBody"><code class="examCode">a</code> and <code class="examCode">b</code> will both be positive integers, <code class="examCode">a</code> will always be the first number in the operation and <code class="examCode">b</code> always the second.</p><p class="examBody">The four operators are "add", "subtract", "divide", "multiply".</p>`,
    skeleton:
`function arithmetic(a, b, operator){
  return
}

arithmetic(6, 4, "add") +
arithmetic(1, 4, "subtract") *
arithmetic(5, 2, "multiply") /
arithmetic(15, 3, "divide")`,
    answer: '4',
    SubjectId: 2
  }
]