module.exports = [
  {
    title: `<p class="chapterTitle">INTRODUCTION TO JAVASCRIPT</p>`,
    body: `<p class="chapterBody">Last year, millions of learners from our community started with JavaScript. Why? JavaScript is primarily known as the language of most modern web browsers, and its early quirks gave it a bit of a bad reputation. However, the language has continued to evolve and improve. JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond!</p><p class="chapterBody">Since JavaScript remains at the core of web development, it’s often the first language learned by self-taught coders eager to learn and build. We’re excited for what you’ll be able to create with the JavaScript foundation you gain here. JavaScript powers the dynamic behavior on most websites, including this one.</p>`,
    SubjectId: 1
  },
  {
    title: `<p class="chapterTitle">VARIABLES</p>`,
    body: `<p class="chapterBody">In programming, a <em>variable</em> is a container for a value. You can think of variables as little containers for information that live in a computer’s memory. Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory. </p><p class="chapterBody">Variables also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.</p><p class="chapterBody">In short, variables label and store data in memory.  There are only a few things you can do with variables:</p><ol class="chapterOrderedList"><li class="chapterList">Create a variable with a descriptive name.</li><li class="chapterList">Store or update information stored in a variable.</li><li class="chapterList">Reference or “get” information stored in a variable.</li></ol><ul class="chapterUnorderedList"><li class="chapterList">Variables hold reusable data in a program and associate it with a name.</li><li class="chapterList">Variables are stored in memory.</li><li class="chapterList">The <code class="chapterCode">var</code> keyword is used in pre-ES6 versions of JS.</li><li class="chapterList"><code class="chapterCode">let</code> is the preferred way to declare a variable when it can be reassigned, and <code class="chapterCode">const</code> is the preferred way to declare a variable with a constant value.</li><li class="chapterList">Variables that have not been initialized store the primitive data type <code class="chapterCode">undefined</code>.</li><li class="chapterList">Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.</li><li class="chapterList">The <code class="chapterCode">+</code> operator is used to concatenate strings including string values held in variables</li><li class="chapterList">In ES6, template literals use backticks <code class="chapterCode">\`</code> and <code class="chapterCode">\$\{\}</code> to interpolate values into a string.</li><li class="chapterList">The <code class="chapterCode">typeof</code> keyword returns the data type (as a string) of a value.</li></ul>`,
    SubjectId: 1
  },
  {
    title: `<p class="chapterTitle">DATA TYPES</p>`,
    body: `<p class="chapterBody"><em>Data types</em> are the classifications we give to the different kinds of data that we use in programming.  In JavaScript, there are seven fundamental data types:</p><ol class="chapterOrderedList"><li class="chapterList"><em>Number</em>: Any number, including numbers with decimals.</li><li class="chapterList"><em>String</em>: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes. Though we prefer single quotes. Some people like to think of string as a fancy word for text.</li><li class="chapterList"><em>Boolean</em>: This data type only has two possible values — either “true” or “false” (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.</li><li class="chapterList"><em>Null</em>: This data type represents the intentional absence of a value, and is represented by the keyword “null” (without quotes).</li><li class="chapterList"><em>Undefined</em>: This data type is denoted by the keyword “undefined” (without quotes). It also represents the absence of a value though it has a different use than “null”.</li><li class="chapterList"><em>Symbol</em>: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.</li><li class="chapterList"><em>Object</em>: Collections of related data.</li></ol>`,
    SubjectId: 1
  }
  // {
  //   title: "",
  //   body: "",
  //   SubjectId: 1
  // },
  // {
  //   title: "",
  //   body: "",
  //   SubjectId: 1
  // },
]