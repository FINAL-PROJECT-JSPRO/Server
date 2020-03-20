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
  },
  {
    title: `<p class="chapterTitle">IF STATEMENT</p>`,
    body: `<p class="chapterBody">In life, we make decisions based on circumstances. Think of an everyday decision as mundane as falling asleep— if we are tired, we go to bed, otherwise, we wake up and start our day.</p><p class="chapterBody">These if-else decisions can be modeled in code by creating <em>conditional statements</em>.  A conditional statement checks specific condition(s) and performs a task based on the condition(s).</p><h1 class="chapterSubtitle">The if keyword</h1><p class="chapterBody">We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.</p><p class="chapterBody">In programming, we can also perform a task based on a condition using an <code class="chapterCode">if</code> statement:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">if</span> (<span class="code-atom">true</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'This message will print!'</span>); 
} 
<span class="code-comment">// Prints "This message will print!"</span></div></span></pre>
<p class="chapterBody">Notice in the example above, we have an <code class="chapterCode">if</code> statement. The <code class="chapterCode">if</code> statement is composed of:</p><ul class="chapterUnorderedList"><li class="chapterOrderedList">The <code class="chapterCode">if</code> keyword followed by a set of parentheses <code class="chapterCode">()</code> which is followed by a <em>code block</em>, or <em>block statement</em>, indicated by a set of curly braces <code class="chapterCode">{}</code>.</li><li class="chapterOrderedList">Inside the parentheses <code class="chapterCode">()</code>, a condition is provided that evaluates to <code class="chapterCode">true</code> or <code class="chapterCode">false</code>.</li><li class="chapterOrderedList">If the condition evaluates to <code class="chapterCode">true</code>, the code inside the curly braces <code class="chapterCode">{}</code> runs, or <em>executes</em>. </li><li class="chapterOrderedList">If the condition evaluates to <code class="chapterCode">false</code>, the block won’t execute.</li></ul>`,
    SubjectId: 2
  },
  {
    title: `<p class="chapterTitle">IF ELSE</p>`,
    body: `<h1 class="chapterSubtitle">If...Else Statements</h1><p class="chapterBody">In the previous exercise, we used an <code class="chapterCode">if</code> statement that checked a condition to decide whether or not to run a block of code. In many cases, we’ll have code we want to run if our condition evaluates to <code class="chapterCode">false</code>.  If we wanted to add some default behavior to the <code class="chapterCode">if</code> statement, we can add an <code class="chapterCode">else</code> statement to run a block of code when the condition evaluates to <code class="chapterCode">false</code>. Take a look at the inclusion of an <code class="chapterCode">else</code> statement: </p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">if</span> (<span class="code-atom">false</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'The code in this block will not run.'</span>);
} <span class="code-keyword">else</span> {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'But the code in this block will!'</span>);
}
<span class="code-comment">// Prints "But the code in this block will!" </span></div></span></pre>
<p class="chapterBody">An <code class="chapterCode">else</code> statement must be paired with an <code class="chapterCode">if</code> statement, and together they are referred to as an <code class="chapterCode">if...else</code> statement. In the example above, the <code class="chapterCode">else</code> statement:</p><ul class="chapterUnorderedList"><li class="chapterList">Uses the <code class="chapterCode">else</code> keyword following the code block of an <code class="chapterCode">if</code> statement.</li><li class="chapterList">Has a code block that is wrapped by a set of curly braces <code class="chapterCode">{}</code>.</li><li class="chapterList">The code inside the <code class="chapterCode">else</code> statement code block will execute when the <code class="chapterCode">if</code> statement’s condition evaluates to <code class="chapterCode">false</code>.</li></ul><p class="chapterBody"><code class="chapterCode">if...else</code> statements allow us to automate solutions to yes-or-no questions, also known as <em>binary decisions</em>.</p>`,
    SubjectId: 2
  },
  {
    title: `<p class="chapterTitle">IF, ELSE, ELSE IF</p>`,
    body: `<h1 class="chapterSubtitle">Else If Statements</h1><p class="chapterBody">We can add more conditions to our <code class="chapterCode">if...else</code> with an <code class="chapterCode">else if</code> statement. The <code class="chapterCode">else if</code> statement allows for more than two possible outcomes. You can add as many <code class="chapterCode">else if</code> statements as you’d like, to make more complex conditionals!</p><p class="chapterBody">The <code class="chapterCode">else if</code> statement always comes after the <code class="chapterCode">if</code> statement and before the <code class="chapterCode">else</code> statement. The <code class="chapterCode">else if</code> statement also takes a condition. Let’s take a look at the syntax:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">let</span> <span class="code-def">stopLight</span> <span class="code-operator">=</span> <span class="code-string">'yellow'</span>;

<span class="code-keyword">if</span> (<span class="code-variable">stopLight</span> <span class="code-operator">===</span> <span class="code-string">'red'</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Stop!'</span>);
} <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-variable">stopLight</span> <span class="code-operator">===</span> <span class="code-string">'yellow'</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Slow down.'</span>);
} <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-variable">stopLight</span> <span class="code-operator">===</span> <span class="code-string">'green'</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Go!'</span>);
} <span class="code-keyword">else</span> {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Caution, unknown!'</span>);
}</div></span></pre>
<p class="chapterBody">The <code class="chapterCode">else if</code> statements allow you to have multiple possible outcomes. <code class="chapterCode">if</code>/<code class="chapterCode">else if</code>/<code class="chapterCode">else</code> statements are read from top to bottom, so the first condition that evaluates to <code class="chapterCode">true</code> from the top to bottom is the block that gets executed. </p><p class="chapterBody">In the example above, since <code class="chapterCode">stopLight === 'red'</code> evaluates to <code class="chapterCode">false</code> and <code class="chapterCode">stopLight === 'yellow'</code> evaluates to <code class="chapterCode">true</code>, the code inside the first <code class="chapterCode">else if</code> statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to <code class="chapterCode">true</code>, then the code in the <code class="chapterCode">else</code> statement would have executed. </p>`,
    SubjectId: 2
  },
  {
    title: `<p class="chapterTitle">SWITCH</p>`,
    body: `<h1 class="chapterSubtitle">The switch keyword</h1><p class="chapterBody"><code class="chapterCode">else if</code> statements are a great tool if we need to check multiple conditions. In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">let</span> <span class="code-def">groceryItem</span> <span class="code-operator">=</span> <span class="code-string">'papaya'</span>;

<span class="code-keyword">if</span> (<span class="code-variable">groceryItem</span> <span class="code-operator">===</span> <span class="code-string">'tomato'</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Tomatoes are $0.49'</span>);
} <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-variable">groceryItem</span> <span class="code-operator">===</span> <span class="code-string">'papaya'</span>){
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Papayas are $1.29'</span>);
} <span class="code-keyword">else</span> {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Invalid item'</span>);
}</div></span></pre>
<p class="chapterBody">In the code above, we have a series of conditions checking for a value that matches a  <code class="chapterCode">groceryItem</code> variable. Our code works fine, but imagine if we needed to check 100 different values! Having to write that many <code class="chapterCode">else if</code> statements sounds like a pain!</p><p class="chapterBody">A <code class="chapterCode">switch</code> statement provides an alternative syntax that is easier to read and write. A <code class="chapterCode">switch</code> statement looks like this:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">let</span> <span class="code-def">groceryItem</span> <span class="code-operator">=</span> <span class="code-string">'papaya'</span>;

<span class="code-keyword">switch</span> (<span class="code-variable">groceryItem</span>) {
  <span class="code-keyword">case</span> <span class="code-string">'tomato'</span>:
    <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Tomatoes are $0.49'</span>);
    <span class="code-keyword">break</span>;
  <span class="code-keyword">case</span> <span class="code-string">'lime'</span>:
    <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Limes are $1.49'</span>);
    <span class="code-keyword">break</span>;
  <span class="code-keyword">case</span> <span class="code-string">'papaya'</span>:
    <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Papayas are $1.29'</span>);
    <span class="code-keyword">break</span>;
  <span class="code-keyword">default</span>:
    <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Invalid item'</span>);
    <span class="code-keyword">break</span>;
}

<span class="code-comment">// Prints 'Papayas are $1.29'</span></div></span></pre>
<ul class="chapterUnorderedList"><li class="chapterList">The <code class="chapterCode">switch</code> keyword initiates the statement and is followed by <code class="chapterCode">( ... )</code>, which contains the value that each <code class="chapterCode">case</code> will compare. In the example, the value or expression of the <code class="chapterCode">switch</code> statement is <code class="chapterCode">groceryItem</code>.</li><li class="chapterList">Inside the block, <code class="chapterCode">{ ... }</code>, there are multiple <code class="chapterCode">case</code>s. The <code class="chapterCode">case</code> keyword checks if the expression matches the specified value that comes after it. The value following the first <code class="chapterCode">case</code> is <code class="chapterCode">'tomato'</code>. If the value of <code class="chapterCode">groceryItem</code> equalled <code class="chapterCode">'tomato'</code>, that <code class="chapterCode">case</code>‘s <code class="chapterCode">console.log()</code> would run.</li><li class="chapterList">The value of <code class="chapterCode">groceryItem</code> is <code class="chapterCode">'papaya'</code>, so the third <code class="chapterCode">case</code> runs— <code class="chapterCode">Papayas are $1.29</code> is logged to the console.</li><li class="chapterList">The <code class="chapterCode">break</code> keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without the <code class="chapterCode">break</code> keyword at the end of each case, the program would execute the code for all matching cases and the default code as well. This behavior is different from <code class="chapterCode">if</code>/<code class="chapterCode">else</code> conditional statements which execute only one block of code. </li><li class="chapterList">At the end of each <code class="chapterCode">switch</code> statement, there is a <code class="chapterCode">default</code> statement. If none of the <code class="chapterCode">case</code>s are true, then the code in the <code class="chapterCode">default</code> statement will run.</li></ul>`,
    SubjectId: 2
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