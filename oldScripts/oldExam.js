module.exports = [
  {
    question: `<h1 class="examTitle">Javascript is Awesome!</h1><p class="examBody">Your task is to write a function that return a phrase "Javascript is awesome".</p>`,
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
  },
  {
    question:`<h1 class="examTitle">Guess the Word!</h1><p class="examBody">Complete the function that takes an array of words.</p><p class="examBody">You must concatenate the <code class="examCode">n</code>th letter from each word to construct a new word which should be returned as a string, where <code class="examCode">n</code> is the position of the word in the list.</p><p class="examBody">For example:</p><pre class="examPre"><code class="examCode">["yoda", "best", "has"]  --&gt;  "yes"
  ^        ^        ^
  n=0     n=1     n=2</code></pre>`,
    skeleton:
`function nthChar(words) {
  return
}

const words = ['Humble', 'Bamboo', 'Back', 'Book', 'Built', 'Monolith', 'Sportive']
nthChar(words)`,
    answer: 'Hacktiv',
    SubjectId: 3
  },
  {
    question:`<h1 class="examTitle">Split the Chocolate!</h1><p class="examBody">Your task is to split the chocolate bar of given dimension <code class="examCode">n</code> x <code class="examCode">m</code> into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.</p><p class="examBody">For example if you are given a chocolate bar of size <code class="examCode">2</code> x <code class="examCode">1</code> you can split it to single squares in just one break, but for size <code class="examCode">3</code> x <code class="examCode">1</code> you must do two breaks.</p><p class="examBody">If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.</p>`,
    skeleton:
`// function

breakChocolate(4, 7) -
breakChocolate(3, 5) -
breakChocolate(3, 2)`,
    answer: '8',
    SubjectId: 4
  },
  {
    question:`<p class="examBody">You'll be given a list of two strings, and each will contain exactly one colon (<code>":"</code>) in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.</p><p class="examBody">Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.</p><p class="examBody">For example:</p>
<pre class="examPre"><code class="examPre">["abc:123", "cde:456"]  --&gt;  ["abc:456", "cde:123"]
  ["a:12345", "777:xyz"]  --&gt;  ["a:xyz", "777:12345"]</code></pre>`,
    skeleton:
`// function

tailSwap(["HACK:SIA", "VA:DO", "IN:TE", "NE:TI"])`,
    answer: 'HACK:TI,VA:TE,IN:DO,NE:SIA',
    SubjectId: 5
  },
  {
    question:``,
    skeleton:
``,
    answer: '8',
    SubjectId: 6
  },
  {
    question:``,
    skeleton:
``,
    answer: '8',
    SubjectId: 7
  },
  {
    question:``,
    skeleton:
``,
    answer: '8',
    SubjectId: 8
  },
  {
    question:``,
    skeleton:
``,
    answer: '8',
    SubjectId: 9
  }
]