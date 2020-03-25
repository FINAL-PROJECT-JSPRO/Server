module.exports = [
  {
    question: `<h1 class="examTitle">Javascript is Awesome</h1><p class="examBody">Your task is to write a function that return a phrase "Javascript is awesome".</p>`,
    skeleton:
`function simpleString(){
  // write your code here

  return first + ' ' + second + ' ' + third
}`,
    SubjectId: 1
  },
  {
    question:`<h1 class="examTitle">Make a Function that Does Arithmetic!</h1><p class="examBody">Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.</p><p class="examBody"><code class="examCode">a</code> and <code class="examCode">b</code> will both be positive integers, <code class="examCode">a</code> will always be the first number in the operation and <code class="examCode">b</code> always the second.</p><p class="examBody">The four operators are "add", "subtract", "divide", "multiply".</p>`,
    skeleton:
`function arithmetic(a, b, operator){
  // write your code here

  return
}`,
    answer: '4',
    SubjectId: 2
  },
  {
    question:`<h1 class="examTitle">Guess the Word!</h1><p class="examBody">Complete the function that takes an array of words.</p><p class="examBody">You must concatenate the <code class="examCode">n</code>th letter from each word to construct a new word which should be returned as a string, where <code class="examCode">n</code> is the position of the word in the list.</p><p class="examBody">For example:</p><pre class="examPre"><code class="examCode">["yoda", "best", "has"]  --&gt;  "yes"
   ^        ^        ^
  n=0      n=1      n=2</code></pre>`,
    skeleton:
`function nthChar(words) {
  // write your code here

  return
}`,
    SubjectId: 3
  },
  {
    question:`<h1 class="examTitle">Split the Chocolate!</h1><p class="examBody">Your task is to split the chocolate bar of given dimension <code class="examCode">n</code> x <code class="examCode">m</code> into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.</p><p class="examBody">For example if you are given a chocolate bar of size <code class="examCode">2</code> x <code class="examCode">1</code> you can split it to single squares in just one break, but for size <code class="examCode">3</code> x <code class="examCode">1</code> you must do two breaks.</p><p class="examBody">If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.</p>`,
    skeleton:
`// function, write your code here

`,
    SubjectId: 4
  },
  {
    question:`<h1 class="examTitle">Tail Swap!</h1><p class="examBody">You'll be given a list of two strings, and each will contain exactly one colon (<code>":"</code>) in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.</p><p class="examBody">Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.</p><p class="examBody">For example:</p>
<pre class="examPre"><code class="examPre"> ["abc:123", "cde:456"]  --&gt;  ["abc:456", "cde:123"]
  ["a:12345", "777:xyz"]  --&gt;  ["a:xyz", "777:12345"]</code></pre>`,
    skeleton:
`// function, write your code here

`,
    SubjectId: 5
  },
  {
    question:`<h1 class="examTitle">Return Specifics from an Object</h1><p class="examBody">Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.</p><ul class=examUnorderedList><li class="examList">array should return numbers first then all the method names in the order they are in the object</li><li class="examList">strings, booleans, arrays should be ignored. </li><li class="examList">if the object is empty, then the array should return the following string: "The Object is Empty"</li></ul><p class="examBody">Example: </p>
<pre class="examPre"><code class="examCode">returnSpecifics({ a: 1, b: 'str', c: 2, d: true, e: a => a, f: 3 })</code></pre>
<p class="examBody">This would return <code class="examCode">[1,2,3,'e']</code></p>`,
    skeleton:
`function returnSpecifics(obj) {
  // write your code here

  return
}`,
    SubjectId: 6
  },
  {
    question:`<h1 class="examTitle">Transformation Iteration</h1><p class="examBody">Write function with 2 parameters (source, target) that takes in 2 strings and transforms <code>source</code> into the <code>target</code> string.</p><p class="examBody">For example :</p>
<pre class="examPre"><code class="examCode">function transform(source, target) {}</code></pre><br>
<pre class="examPre"><code class="examCode">transform('car','see') === ["car", "sar", "ser", "see"]
 transform('floor','brake') === ["floor", "bloor", "broor", "braor", "brakr", "brake"]
 transform('kata','math') === ["kata", "mata", "math"]</code></pre>
<p class="examBody"><code class="examCode">source</code> and <code class="examCode">target</code> will always be of the same length</p>`,
    skeleton:
`function transform(source, target) {
  // write your code here

  return
}`,
    SubjectId: 7
  },
  {
    question:`<h1 class="examTitle">Javascript Namespacing</h1><p class="examBody">Define a class named MyClass inside a namespace MyNamespace. The class constructor should accept a single string argument. It should also have a function named sayHello that returns the string passed into the constructor.</p><p class="examBody">Example :</p>
<pre class="examPre"><code class="examCode">const myObject = new MyNamespace.MyClass(word)

 const phrase = myObject.sayWord(); // phrase should be value of word argument</code></pre><p class="examBody">The interesting part is that MyClass should only be accessible via the namespace and should not define any extra global variables. Code should not redefine an existing namespace, but should also function if the namespace is not previously defined.</p>`,
    skeleton:
`function simpleClass(word) {
  let MyNamespace = {}

  MyNamespace.MyClass = class {
    // write your code here

  }

  const myObject = new MyNamespace.MyClass(word);
  return myObject.sayWord()
}`,
    SubjectId: 8
  },
  {
    question:`<h1 class="examTitle">FINAL LIVE CODE!</h1><p class="examTitle">There is an array with some numbers. All numbers are equal except for one.</p><p class="examTitle">You have one simple job, find the special one!</p>
<pre class="examPre"><code class="examCode">findUnique([ 3, 3, 3, 5, 3, 3 ]) === 5
 findUnique([ 2, 2, 0.15, 2, 2 ]) === 0.15</code></pre>
<p class="examTitle">It’s guaranteed that array contains at least 3 numbers.</p>`,
    skeleton:
`function findUnique(arr) {
  // write your code here

  return
}`,
    SubjectId: 9
  }
]