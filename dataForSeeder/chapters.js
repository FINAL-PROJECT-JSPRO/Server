module.exports = [
  {
    title: `<h1 class="chapterTitle">INTRODUCTION TO JAVASCRIPT</h1>`,
    body: `<h1 class="chapterSubtitle">Introduction to JavaScript</h1><p class="chapterBody">JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.</p><p class="chapterBody">It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.</p><p class="chapterBody">However, the language has continued to evolve and improve. JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond! Since JavaScript remains at the core of web development, it’s often the first language learned by self-taught coders eager to learn and build. We’re excited for what you’ll be able to create with the JavaScript foundation you gain here. JavaScript powers the dynamic behavior on most websites, including this one.</p><p class="chapterBody">In this subject, you will learn introductory coding concepts including variable, data types, operators. Make sure to take notes and pace yourself. This foundation will set you up for understanding the more complex concepts you’ll encounter later.</p><p class="chapterBody">Last year, millions of learners from our community started with JavaScript. Why? JavaScript is primarily known as the language of most modern web browsers, and its early quirks gave it a bit of a bad reputation. However, the language has continued to evolve and improve. JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond!</p><p class="chapterBody">Since JavaScript remains at the core of web development, it’s often the first language learned by self-taught coders eager to learn and build. We’re excited for what you’ll be able to create with the JavaScript foundation you gain here. JavaScript powers the dynamic behavior on most websites, including this one.</p>`,
    SubjectId: 1
  },
  {
    title: `<h1 class="chapterTitle">VARIABLE</h1>`,
    body: `<h1 class="chapterSubtitle">Introduction to Variable</h1><p class="chapterBody">In programming, a <em>variable</em> is a container for a value. You can think of variables as little containers for information that live in a computer’s memory. Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory. </p><p class="chapterBody">Variables also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.</p><p class="chapterBody">In short, variables label and store data in memory.  There are only a few things you can do with variables:</p><ol class="chapterOrderedList"><li class="chapterList">Create a variable with a descriptive name.</li><li class="chapterList">Store or update information stored in a variable.</li><li class="chapterList">Reference or “get” information stored in a variable.</li></ol><ul class="chapterUnorderedList"><li class="chapterList">Variables hold reusable data in a program and associate it with a name.</li><li class="chapterList">Variables are stored in memory.</li><li class="chapterList">The <code class="chapterCode">var</code> keyword is used in pre-ES6 versions of JS.</li><li class="chapterList"><code class="chapterCode">let</code> is the preferred way to declare a variable when it can be reassigned, and <code class="chapterCode">const</code> is the preferred way to declare a variable with a constant value.</li><li class="chapterList">Variables that have not been initialized store the primitive data type <code class="chapterCode">undefined</code>.</li><li class="chapterList">Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.</li><li class="chapterList">The <code class="chapterCode">+</code> operator is used to concatenate strings including string values held in variables</li><li class="chapterList">In ES6, template literals use backticks <code class="chapterCode">\`</code> and <code class="chapterCode">\$\{\}</code> to interpolate values into a string.</li><li class="chapterList">The <code class="chapterCode">typeof</code> keyword returns the data type (as a string) of a value.</li></ul>`,
    SubjectId: 1
  },
  {
    title: `<h1 class="chapterTitle">DATA TYPES</h1>`,
    body: `<h1 class="chapterSubtitle">Introduction to Data Types</h1><p class="chapterBody"><em>Data types</em> are the classifications we give to the different kinds of data that we use in programming.  In JavaScript, there are seven fundamental data types:</p><ol class="chapterOrderedList"><li class="chapterList"><em>Number</em>: Any number, including numbers with decimals.</li><li class="chapterList"><em>String</em>: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes. Though we prefer single quotes. Some people like to think of string as a fancy word for text.</li><li class="chapterList"><em>Boolean</em>: This data type only has two possible values — either “true” or “false” (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.</li><li class="chapterList"><em>Null</em>: This data type represents the intentional absence of a value, and is represented by the keyword “null” (without quotes).</li><li class="chapterList"><em>Undefined</em>: This data type is denoted by the keyword “undefined” (without quotes). It also represents the absence of a value though it has a different use than “null”.</li><li class="chapterList"><em>Symbol</em>: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.</li><li class="chapterList"><em>Object</em>: Collections of related data.</li></ol>`,
    SubjectId: 1
  },
  {
    title: `<h1 class="chapterTitle">IF STATEMENT</h1>`,
    body: `<h1 class="chapterSubtitle">If Statement</h1><p class="chapterBody">In life, we make decisions based on circumstances. Think of an everyday decision as mundane as falling asleep— if we are tired, we go to bed, otherwise, we wake up and start our day.</p><p class="chapterBody">These if-else decisions can be modeled in code by creating <em>conditional statements</em>.  A conditional statement checks specific condition(s) and performs a task based on the condition(s).</p><h1 class="chapterSubtitle">The if keyword</h1><p class="chapterBody">We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep.</p><p class="chapterBody">In programming, we can also perform a task based on a condition using an <code class="chapterCode">if</code> statement:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">if</span> (<span class="code-atom">true</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'This message will print!'</span>); 
} 
<span class="code-comment">// Prints "This message will print!"</span></div></span></pre>
<p class="chapterBody">Notice in the example above, we have an <code class="chapterCode">if</code> statement. The <code class="chapterCode">if</code> statement is composed of:</p><ul class="chapterUnorderedList"><li class="chapterOrderedList">The <code class="chapterCode">if</code> keyword followed by a set of parentheses <code class="chapterCode">()</code> which is followed by a <em>code block</em>, or <em>block statement</em>, indicated by a set of curly braces <code class="chapterCode">{}</code>.</li><li class="chapterOrderedList">Inside the parentheses <code class="chapterCode">()</code>, a condition is provided that evaluates to <code class="chapterCode">true</code> or <code class="chapterCode">false</code>.</li><li class="chapterOrderedList">If the condition evaluates to <code class="chapterCode">true</code>, the code inside the curly braces <code class="chapterCode">{}</code> runs, or <em>executes</em>. </li><li class="chapterOrderedList">If the condition evaluates to <code class="chapterCode">false</code>, the block won’t execute.</li></ul>`,
    SubjectId: 2
  },
  {
    title: `<h1 class="chapterTitle">IF ELSE</h1>`,
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
    title: `<h1 class="chapterTitle">IF, ELSE, ELSE IF</h1>`,
    body: `<h1 class="chapterSubtitle">If, Else, Else If</h1><p class="chapterBody">We can add more conditions to our <code class="chapterCode">if...else</code> with an <code class="chapterCode">else if</code> statement. The <code class="chapterCode">else if</code> statement allows for more than two possible outcomes. You can add as many <code class="chapterCode">else if</code> statements as you’d like, to make more complex conditionals!</p><p class="chapterBody">The <code class="chapterCode">else if</code> statement always comes after the <code class="chapterCode">if</code> statement and before the <code class="chapterCode">else</code> statement. The <code class="chapterCode">else if</code> statement also takes a condition. Let’s take a look at the syntax:</p>
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
    title: `<h1 class="chapterTitle">SWITCH</h1>`,
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
  },
  {
    title: `<h1 class="chapterTitle">FOR LOOP</h1>`,
    body: `<h1 class="chapterSubtitle">The For Loop</h1><p class="chapterBody">Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a <code class="chapterCode">for</code> loop. </p><p class="chapterBody">The typical <code class="chapterCode">for</code> loop includes an <em>iterator variable</em> that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.</p><p class="chapterBody">A <code class="chapterCode">for</code> loop contains three expressions separated by <code class="chapterCode">;</code> inside the parentheses: </p><ol class="chapterOrderedList"><li class="chapterList">an <em>initialization</em> starts the loop and can also be used to declare the iterator variable.</li><li class="chapterList">a <em>stopping condition</em> is the condition that the iterator variable is evaluated against— if the condition evaluates to <code class="chapterCode">true</code> the code block will run, and if it evaluates to <code class="chapterCode">false</code> the code will stop.</li><li class="chapterList">an <em>iteration statement</em> is used to update the iterator variable on each loop.</li></ol><p class="chapterBody">The <code class="chapterCode">for</code> loop syntax looks like this:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">for</span> (<span class="code-keyword">let</span> <span class="code-def">counter</span> <span class="code-operator">=</span> <span class="code-number">0</span>; <span class="code-variable">counter</span> <span class="code-operator">&lt;</span> <span class="code-number">4</span>; <span class="code-variable">counter</span><span class="code-operator">++</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">counter</span>);
}</div></span></pre>
<p class="chapterBody">In this example, the output would be the following:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer">0
1
2
3</div></span></pre>
<p class="chapterBody">Let’s break down the example:</p><ul class="chapterUnorderedList"><li class="chapterList">The initialization is <code class="chapterCode">let counter = 0</code>, so the loop will start counting at <code class="chapterCode">0</code>.</li><li class="chapterList">The stopping condition is <code class="chapterCode">counter &lt; 4</code>, meaning the loop will run as long as the iterator variable, <code class="chapterCode">counter</code>, is less than 4.</li><li class="chapterList">The iteration statement is <code class="chapterCode">counter++</code>. This means after each loop, the value of <code class="chapterCode">counter</code> will increase by 1. For the first iteration <code class="chapterCode">counter</code> will equal <code class="chapterCode">0</code>, for the second iteration <code class="chapterCode">counter</code> will equal 1, and so on.</li><li class="chapterList">The code block is inside of the curly braces, <code class="chapterCode">console.log(counter)</code>, will execute until the condition evaluates to <code class="chapterCode">false</code>. The condition will be false when <code class="chapterCode">counter</code> is greater than or equal to 4 — the point that the condition becomes false is sometimes called the <em>stop condition</em>.</li></ul><p class="chapterBody">This <code class="chapterCode">for</code> loop makes it possible to write <code class="chapterCode">0</code>, <code class="chapterCode">1</code>, <code class="chapterCode">2</code>, and <code class="chapterCode">3</code> programmatically.</p>`,
    SubjectId: 3
  },
  {
    title: `<h1 class="chapterTitle">WHILE LOOP</h1>`,
    body: `<h1 class="chapterSubtitle">The While Loop</h1><p class="chapterBody">You’re doing great! We’re going to teach you about a different type of loop: the <code class="chapterCode">while</code> loop. To start, let’s convert a <code class="chapterCode">for</code> loop into a <code class="chapterCode">while</code> loop:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-comment">// A for loop that prints 1, 2, and 3</span>
<span class="code-keyword">for</span> (<span class="code-keyword">let</span> <span class="code-def">counterOne</span> <span class="code-operator">=</span> <span class="code-number">1</span>; <span class="code-variable">counterOne</span> <span class="code-operator">&lt;</span> <span class="code-number">4</span>; <span class="code-variable">counterOne</span><span class="code-operator">++</span>){
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">counterOne</span>);
}

<span class="code-comment">// A while loop that prints 1, 2, and 3</span>
<span class="code-keyword">let</span> <span class="code-def">counterTwo</span> <span class="code-operator">=</span> <span class="code-number">1</span>;
<span class="code-keyword">while</span> (<span class="code-variable">counterTwo</span> <span class="code-operator">&lt;</span> <span class="code-number">4</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">counterTwo</span>);
  <span class="code-variable">counterTwo</span><span class="code-operator">++</span>;
}</div></span></pre>
<p class="chapterBody">Let’s break down what’s happening with our <code class="chapterCode">while</code> loop syntax: </p><ul class="chapterUnorderedList"><li class="chapterList">The <code class="chapterCode">counterTwo</code> variable is declared before the loop. We can access it inside our <code class="chapterCode">while</code> loop since it’s in the global scope. </li><li class="chapterList">We start our loop with the keyword <code class="chapterCode">while</code> followed by our stopping condition, or <em>test condition</em>. This will be evaluated before each round of the loop. While the condition evaluates to <code class="chapterCode">true</code>, the block will continue to run. Once it evaluates to <code class="chapterCode">false</code> the loop will stop. </li><li class="chapterList">Next, we have our loop’s code block which prints <code class="chapterCode">counterTwo</code> to the console and increments <code class="chapterCode">counterTwo</code>. </li></ul><p class="chapterBody">What would happen if we didn’t increment <code class="chapterCode">counterTwo</code> inside our block? If we didn’t include this, <code class="chapterCode">counterTwo</code> would always have its initial value, <code class="chapterCode">1</code>. That would mean the testing condition <code class="chapterCode">counterTwo &lt; 4</code> would always evaluate to <code class="chapterCode">true</code> and our loop would never stop running! This is called an <em>infinite loop</em> and it’s something we always want to <strong>avoid</strong>. Infinite loops can take up all of your computer’s processing power potentially freezing your computer. </p><p class="chapterBody">So you may be wondering when to use a <code class="chapterCode">while</code> loop! The syntax of a <code class="chapterCode">for</code> loop is ideal when we know how many times the loop should run, but we don’t always know this in advance. Think of eating like a <code class="chapterCode">while</code> loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat <code class="chapterCode">while</code> you’re hungry. In situations when we want a loop to execute an undetermined number of times, <code class="chapterCode">while</code> loops are the best choice.</p>`,
    SubjectId: 3
  },
  {
    title: `<h1 class="chapterTitle"></h1>`,
    body: `<h1 class="chapterSubtitle">Do...While Statements</h1><p class="chapterBody">In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the <code class="chapterCode">do...while</code> statement comes in.</p><p class="chapterBody">A <code class="chapterCode">do...while</code> statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a <code class="chapterCode">do...while</code> statement looks like this:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">let</span> <span class="code-def">countString</span> <span class="code-operator">=</span> <span class="code-string">''</span>;
<span class="code-keyword">let</span> <span class="code-def">i</span> <span class="code-operator">=</span> <span class="code-number">0</span>;

<span class="code-keyword">do</span> {
  <span class="code-variable">countString</span> <span class="code-operator">=</span> <span class="code-variable">countString</span> <span class="code-operator">+</span> <span class="code-variable">i</span>;
  <span class="code-variable">i</span><span class="code-operator">++</span>;title: "",
  body: "",
} <span class="code-keyword">while</span> (<span class="code-variable">i</span> <span class="code-operator">&lt;</span> <span class="code-number">5</span>);

<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">countString</span>);</div></span></pre>
<p class="chapterBody">In this example, the code block makes changes to the <code class="chapterCode">countString</code> variable by appending the string form of the <code class="chapterCode">i</code> variable to it. First, the code block after the <code class="chapterCode">do</code> keyword is executed once. Then the condition is evaluated. If the condition evaluates to <code class="chapterCode">true</code>, the block will execute again. The looping stops when the condition evaluates to <code class="chapterCode">false</code>.</p><p class="chapterBody">Note that the <code class="chapterCode">while</code> and <code class="chapterCode">do...while</code> loop are different! Unlike the <code class="chapterCode">while</code> loop, <code class="chapterCode">do...while</code> will run at least once whether or not the condition evaluates to <code class="chapterCode">true</code>.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">firstMessage</span> <span class="code-operator">=</span> <span class="code-string">'I will print!'</span>;
<span class="code-keyword">const</span> <span class="code-def">secondMessage</span> <span class="code-operator">=</span> <span class="code-string">'I will not print!'</span>; 

<span class="code-comment">// A do while with a stopping condition that evaluates to false</span>
<span class="code-keyword">do</span> {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">firstMessage</span>)
} <span class="code-keyword">while</span> (<span class="code-atom">true</span> <span class="code-operator">===</span> <span class="code-atom">false</span>);

<span class="code-comment">// A while loop with a stopping condition that evaluates to false</span>
<span class="code-keyword">while</span> (<span class="code-atom">true</span> <span class="code-operator">===</span> <span class="code-atom">false</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">secondMessage</span>)
};
</div></span></pre>`,
    SubjectId: 3
  },
  {
    title: `<h1>FUNCTION DECLARATION</h1>`,
    body: `<h1 class="chapterSubtitle">Function Declarations</h1><p class="chapterBody">In JavaScript, there are many ways to create a function. One way to create a function is by using a <em>function declaration</em>. Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an <em>identifier</em>.Take a look at the anatomy of a function declaration below:</p><img src="https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/declaration.svg" alt="Diagram showing the syntax of a function declaration" class="chapterImage"><p class="chapterBody">A function declaration consists of: </p><ul class="chapterUnorderedList"><li class="chapterList">The <code class="chapterCode">function</code> keyword.</li><li class="chapterList">The name of the function, or its identifier, followed by parentheses.</li><li class="chapterList">A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, <code class="chapterCode">{ }</code>.</li></ul><p class="chapterBody">A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body. </p><p class="chapterBody">We should also be aware of the <em>hoisting</em> feature in JavaScript which allows access to function declarations before they’re defined. </p><p class="chapterBody">Take a look at example of hoisting:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">greetWorld</span>()); <span class="code-comment">// Output: Hello, World!</span>

<span class="code-keyword">function</span> <span class="code-def">greetWorld</span>() {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">'Hello, World!'</span>);
}</div></span></pre>
<p class="chapterBody">Notice how hoisting allowed <code class="chapterCode">greetWorld()</code> to be called before the <code class="chapterCode">greetWorld()</code> function was defined! Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.</p><p class="chapterBody">If you want to read more about hoisting, check out <a href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting" target="_blank" rel="noopener">MDN documentation on hoisting</a>. </p>`,
    SubjectId: 4
  },
  {
    title: `<h1>FUNCTION EXPRESSION</h1>`,
    body: `<h1 class="chapterSubtitle">Function Expressions</h1><p class="chapterBody">Another way to define a function is to use a <em>function expression</em>. To define a function inside an expression, we can use the <code class="chapterCode">function</code> keyword. In a function expression, the function name is usually omitted. A function with no name is called an <em>anonymous function</em>. A function expression is often stored in a variable in order to refer to it.</p><p class="chapterBody">Consider the following function expression:</p><img src="https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/expression.svg" alt="defining a function expression" class="chapterImage"><p class="chapterBody">To declare a function expression:</p><ol class="chapterOrderedList"><li class="chapterList"><p class="chapterBody">Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use <code class="chapterCode">const</code> as the keyword to declare the variable. </p></li><li class="chapterList"><p class="chapterBody">Assign as that variable’s value an anonymous function created by using the <code class="chapterCode">function</code> keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.</p></li></ol><p class="chapterBody">To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-variable">variableName</span>(<span class="code-parameter">argument1</span>, <span class="code-parameter">argument2</span>)</div></span></pre>
<p class="chapterBody">Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined. </p>`,
    SubjectId: 4
  },
  {
    title: `<h1>ARROW FUNCTION</h1>`,
    body: `<h1 class="chapterSubtitle">Arrow Functions</h1><p class="chapterBody">ES6 introduced <em>arrow function syntax</em>, a  shorter way to write functions by using the special “fat arrow” <code class="chapterCode">() =&gt;</code> notation. </p><p class="chapterBody">Arrow functions remove the need to type out the keyword <code class="chapterCode">function</code> every time you need to create a function.  Instead, you first include the parameters inside the <code class="chapterCode">( )</code> and then add an arrow <code class="chapterCode">=&gt;</code> that points to the function body surrounded in <code class="chapterCode">{  }</code> like this:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">rectangleArea</span> <span class="code-operator">=</span> (<span class="code-parameter">width</span>, <span class="code-parameter">height</span>) <span class="code-operator">=&gt;</span> {
  <span class="code-keyword">let</span> <span class="code-def">area</span> <span class="code-operator">=</span> <span class="code-variable-2">width</span> <span class="code-operator">*</span> <span class="code-variable-2">height</span>;
  <span class="code-keyword">return</span> <span class="code-variable-2">area</span>;
};</div></span></pre>
<p class="chapterBody">It’s important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code. </p>`,
    SubjectId: 4
  },
  {
    title: `<h1>ANONYMOUS FUNCTION</h1>`,
    body: `<h1 class="chapterSubtitle">Anonymous Function</h1><p class="chapterBody"><em>Anonymous functions</em> in JavaScript do not have a name property. They can be defined using the <code class="chapterCode">function</code> keyword, or as an arrow function. See the code example for the difference between a named function and an anonymous function.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-comment">// Named function</span>
<span class="code-keyword">function</span> <span class="code-def">rocketToMars</span>() {
  <span class="code-keyword">return</span> <span class="code-string">'BOOM!'</span>;

<span class="code-comment">// Anonymous function</span>
<span class="code-keyword">const</span> <span class="code-def">rocketToMars</span> <span class="code-operator">=</span> <span class="code-keyword">function</span>() {
  <span class="code-keyword">return</span> <span class="code-string">'BOOM!'</span>;
}</div></span></pre>`,
    SubjectId: 4
  },
  {
    title: `<h1>PARAMETERS AND ARGUMENTS</h1>`,
    body: `<h1 class="chapterSubtitle">Parameters and Arguments</h1><p class="chapterBody">So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its <em>parameters</em>. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called. </p><p class="chapterBody">Let’s observe how to specify parameters in our function declaration:</p><img src="https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/function+parameters.svg" alt="JavaScript syntax for declaring a function with parameters" class="chapterImage"><p class="chapterBody">In the diagram above, <code class="chapterCode">calculateArea()</code>, computes the area of a rectangle, based on two inputs, <code class="chapterCode">width</code> and <code class="chapterCode">height</code>. The parameters are specified between the parenthesis as <code class="chapterCode">width</code> and <code class="chapterCode">height</code>, and inside the function body, they act just like regular variables. <code class="chapterCode">width</code> and <code class="chapterCode">height</code> act as placeholders for values that will be multiplied together. </p><p class="chapterBody">When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called <em>arguments</em>. Arguments can be passed to the function as values or variables. </p><img src="https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/by_value.svg" alt="JavaScript syntax for invoking a function with arguments as values" class="chapterImage"><p class="chapterBody">In the function call above, the number <code class="chapterCode">10</code> is passed as the <code class="chapterCode">width</code> and <code class="chapterCode">6</code> is passed as <code class="chapterCode">height</code>. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.  </p><img src="https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-functions/Diagram/by_variable.svg" alt="JavaScript syntax for invoking a function with arguments as variables" class="chapterImage"><p class="chapterBody">The variables <code class="chapterCode">rectWidth</code> and <code class="chapterCode">rectHeight</code> are initialized with the values for the height and width of a rectangle before being used in the function call. </p><p class="chapterBody">By using parameters, <code class="chapterCode">calculateArea()</code> can be reused to compute the area of any rectangle! Functions are a powerful tool in computer programming so let’s practice creating and calling functions with parameters.</p>`,
    SubjectId: 4
  },
  {
    title: `<h1 class="chapterTitle">ARRAY</h1>`,
    body: `<h1 class="chapterSubtitle">Array</h1><p class="chapterBody">To work with a chunk of digital data, we’ll first have to find a way to represent it in our machine’s memory. Say, for example, that we want to represent a collection of the numbers 2, 3, 5, 7, and 11.</p><p class="chapterBody">We could get creative with strings—after all, strings can have any length, so we can put a lot of data into them—and use "2 3 5 7 11" as our representation. But this is awkward. You’d have to somehow extract the digits and convert them back to numbers to access them.</p><p class="chapterBody">Fortunately, JavaScript provides a data type specifically for storing sequences of values. It is called an array and is written as a list of values between square brackets, separated by commas.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">let</span> <span class="code-def">listOfNumbers</span> <span class="code-operator">=</span> [<span class="code-number">2</span>, <span class="code-number">3</span>, <span class="code-number">5</span>, <span class="code-number">7</span>, <span class="code-number">11</span>];
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">listOfNumbers</span>[<span class="code-number">2</span>]);
<span class="code-comment">// → 5</span>
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">listOfNumbers</span>[<span class="code-number">0</span>]);
<span class="code-comment">// → 2</span>
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">listOfNumbers</span>[<span class="code-number">2</span> <span class="code-operator">-</span> <span class="code-number">1</span>]);
<span class="code-comment">// → 3</span></div></span></pre>
<p class="chapterBody">The notation for getting at the elements inside an array also uses square brackets. A pair of square brackets immediately after an expression, with another expression inside of them, will look up the element in the left-hand expression that corresponds to the <em>index</em> given by the expression in the brackets.</p><p class="chapterBody">The first index of an array is zero, not one. So the first element is retrieved with <code class="chapterCode">listOfNumbers[0]</code>. Zero-based counting has a long tradition in technology and in certain ways makes a lot of sense, but it takes some getting used to. Think of the index as the amount of items to skip, counting from the start of the array.</p>`,
    SubjectId: 5
  },
  {
    title: `<h1 class="chapterTitle">MULTIDIMENSIONAL ARRAY</h1>`,
    body: `<h1 class="chapterSubtitle">Multidimensional Array</h1><p class="chapterBody">Arrays can store other arrays. When an array contains another array it is known as a nested array or multidimensional array. Examine the example below:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">nestedArr</span> <span class="code-operator">=</span> [[<span class="code-number">1</span>], [<span class="code-number">2</span>, <span class="code-number">3</span>]];</div></span></pre>
<p class="chapterBody">To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">nestedArr</span> <span class="code-operator">=</span> [[<span class="code-number">1</span>], [<span class="code-number">2</span>, <span class="code-number">3</span>]];

<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">nestedArr</span>[<span class="code-number">1</span>]); <span class="code-comment">// Output: [2, 3]</span></div></span></pre>
<p class="chapterBody">Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">nestedArr</span> <span class="code-operator">=</span> [[<span class="code-number">1</span>], [<span class="code-number">2</span>, <span class="code-number">3</span>]];
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">nestedArr</span>[<span class="code-number">1</span>]); <span class="code-comment">// Output: [2, 3]</span>
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">nestedArr</span>[<span class="code-number">1</span>][<span class="code-number">0</span>]); <span class="code-comment">// Output: 2</span></div></span></pre>

<p class="chapterBody">In the second console.log() statement, we have two bracket notations chained to nestedArr. We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.</p>`,
    SubjectId: 5
  },
  {
    title: `<h1 class="chapterTitle">PUSH AND POP METHOD</h1>`,
    body: `<h1 class="contentSubtitle">The .push() and .pop() Method</h1><p class="chapterBody">Let’s learn about some built-in JavaScript methods that make working with arrays easier. These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward. </p><p class="chapterBody">One method, <code class="chapterCode">.push()</code> allows us to add items to the end of an array. Here is an example of how this is used:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">itemTracker</span> <span class="code-operator">=</span> [<span class="code-string">'item 0'</span>, <span class="code-string">'item 1'</span>, <span class="code-string">'item 2'</span>];

<span class="code-variable">itemTracker</span>.<span class="code-property">push</span>(<span class="code-string">'item 3'</span>, <span class="code-string">'item 4'</span>);

<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">itemTracker</span>); 
<span class="code-comment">// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];</span></div></span></pre>
<ul class="chapterUnorderedList"><li class="chapterList">We access the <code class="chapterCode">push</code> method by using dot notation, connecting <code class="chapterCode">push</code> to <code class="chapterCode">itemTracker</code> with a period. </li><li class="chapterList">Then we call it like a function. That’s because <code class="chapterCode">.push()</code> is a function and one that JavaScript allows us to use right on an array. </li><li class="chapterList"><code class="chapterCode">.push()</code> can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: <code class="chapterCode">'item 3'</code> and <code class="chapterCode">'item 4'</code> to <code class="chapterCode">itemTracker</code>.</li><li class="chapterList">Notice that <code class="chapterCode">.push()</code> changes, or <em>mutates</em>, <code class="chapterCode">itemTracker</code>. You might also see <code class="chapterCode">.push()</code> referred to as a <em>destructive</em> array method since it changes the initial array.</li></ul><p class="chapterBody">Another array method, <code class="chapterCode">.pop()</code>, removes the last item of an array. </p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">newItemTracker</span> <span class="code-operator">=</span> [<span class="code-string">'item 0'</span>, <span class="code-string">'item 1'</span>, <span class="code-string">'item 2'</span>];

<span class="code-keyword">const</span> <span class="code-def">removed</span> <span class="code-operator">=</span> <span class="code-variable">newItemTracker</span>.<span class="code-property">pop</span>();

<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">newItemTracker</span>); 
<span class="code-comment">// Output: [ 'item 0', 'item 1' ]</span>
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">removed</span>);
<span class="code-comment">// Output: item 2</span></div></span></pre>
<ul class="chapterUnorderedList"><li class="chapterList">In the example above, calling <code class="chapterCode">.pop()</code> on the <code class="chapterCode">newItemTracker</code> array removed <code class="chapterCode">item 2</code> from the end. </li><li class="chapterList"><code class="chapterCode">.pop()</code> does not take any arguments, it simply removes the last element of <code class="chapterCode">newItemTracker</code>. </li><li class="chapterList"><code class="chapterCode">.pop()</code> returns the value of the last element. In the example, we store the returned value in a variable <code class="chapterCode">removed</code> to be used for later. </li><li class="chapterList"><code class="chapterCode">.pop()</code> is a method that mutates the initial array. </li></ul>`,
    SubjectId: 5
  },
  {
    title: `<h1 class="chapterTitle">UNSHIFT AND SHIFT METHOD</h1>`,
    body: `<h1 class="chapterSubtitle">The .unshift() and .shift() Method </h1><p class="chapterBody">There are many more array methods than just <code class="chapterCode">.push()</code> and <code class="chapterCode">.pop()</code>.  You can read about all of the array methods that exist on the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener"> Mozilla Developer Network (MDN) array documentation</a>.</p><p class="chapterBody">Some arrays methods that are available to JavaScript developers include <code class="chapterCode">.shift()</code> and <code class="chapterCode">.unshift()</code>. Using these built-in methods make it easier to do some common tasks when working with arrays. </p><p class="chapterBody">The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">array1</span> <span class="code-operator">=</span> [<span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span>];
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">array1</span>.<span class="code-property">unshift</span>(<span class="code-number">4</span>, <span class="code-number">5</span>));
<span class="code-comment">// expected output: 5</span>
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">array1</span>);
<span class="code-comment">// expected output: Array [4, 5, 1, 2, 3]</span></div></span></pre>
<p class="chapterBody">The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">array1</span> <span class="code-operator">=</span> [<span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span>];
<span class="code-keyword">const</span> <span class="code-def">firstElement</span> <span class="code-operator">=</span> <span class="code-variable">array1</span>.<span class="code-property">shift</span>();
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">array1</span>);
<span class="code-comment">// expected output: Array [2, 3]</span>
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">firstElement</span>);
<span class="code-comment">// expected output: 1</span></div></span></pre>`,
    SubjectId: 5
  },
  {
    title: `<h1 class="chapterTitle">OBJECT LITERAL</h1>`,
    body: `<h1 class="chapterSubtitle">Object Literal</h1><p class="chapterBody">A set of daily log entries can be represented as an array. But the entries do not consist of just a number or a string—each entry needs to store a list of activities and a Boolean value that indicates whether Jacques turned into a squirrel or not. Ideally, we would like to group these together into a single value and then put those grouped values into an array of log entries.</p><p class="chapterBody">Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">let</span> <span class="code-def">spaceship</span> <span class="code-operator">=</span> {}; <span class="code-comment">// spaceship is an empty object</span></div></span></pre>
<p class="contentBody">We fill an object with unordered data. This data is organized into <em>key-value pairs</em>. A key is like a variable name that points to a location in memory that holds a value.</p><img src="https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-objects/key+value.svg" class="contentImage"><p class="contentBody">A key’s value can be of any data type in the language including functions or other objects. </p><p class="chapterBody">We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:</p><img src="https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-objects/objectliteraldiagram.svg" class="contentImage">
<pre class="contentPre"><span class="contentCodeBlock"><div class="contentCodeContainer"><span class="code-comment">// An object literal with two key-value pairs</span>
<span class="code-keyword">let</span> <span class="code-def">spaceship</span> <span class="code-operator">=</span> {
  <span class="code-string property">'Fuel Type'</span>: <span class="code-string">'diesel'</span>,
  <span class="code-property">color</span>: <span class="code-string">'silver'</span>
};</div></span></pre>
<p class="contentBody">The <code class="contentCode">spaceship</code> object has two properties <code class="contentCode">Fuel Type</code> and <code class="contentCode">color</code>. <code class="contentCode">'Fuel Type'</code> has quotation marks because it contains a space character. </p><h1 class="contentSubtitle">Accessing Properties</h1><p class="contentBody">There are two ways we can access an object’s property: dot notation and bracket notation.</p><p class="chapterBody">Here's the example of using dot notation.</p>
<pre class="contentPre"><span class="contentCodeBlock"><div class="contentCodeContainer"><span class="code-keyword">let</span> <span class="code-def">spaceship</span> <span class="code-operator">=</span> {
  <span class="code-property">homePlanet</span>: <span class="code-string">'Earth'</span>,
  <span class="code-property">color</span>: <span class="code-string">'silver'</span>
};
<span class="code-variable">spaceship</span>.<span class="code-property">homePlanet</span>; <span class="code-comment">// Returns 'Earth',</span>
<span class="code-variable">spaceship</span>.<span class="code-property">color</span>; <span class="code-comment">// Returns 'silver',</span></div></span></pre>
<p class="chapterBody">Here's the example of using bracket notation.</p>
<pre class="contentPre"><span class="contentCodeBlock"><div class="contentCodeContainer"><span class="code-keyword">let</span> <span class="code-def">spaceship</span> <span class="code-operator">=</span> {
  <span class="code-string property">'Fuel Type'</span>: <span class="code-string">'Turbo Fuel'</span>,
  <span class="code-string property">'Active Duty'</span>: <span class="code-atom">true</span>,
  <span class="code-property">homePlanet</span>: <span class="code-string">'Earth'</span>,
  <span class="code-property">numCrew</span>: <span class="code-number">5</span>
};
<span class="code-variable">spaceship</span>[<span class="code-string">'Active Duty'</span>];   <span class="code-comment">// Returns true</span>
<span class="code-variable">spaceship</span>[<span class="code-string">'Fuel Type'</span>];   <span class="code-comment">// Returns  'Turbo Fuel'</span>
<span class="code-variable">spaceship</span>[<span class="code-string">'numCrew'</span>];   <span class="code-comment">// Returns 5</span>
<span class="code-variable">spaceship</span>[<span class="code-string">'!!!!!!!!!!!!!!!'</span>];   <span class="code-comment">// Returns undefined</span></div></span></pre>`,
    SubjectId: 6
  },
  {
    title: `HIGHER-ORDER FUNCTION`,
    body: `<h1 class="chapterSubtitle">Introduction</h1><p class="chapterBody">We are often unaware of the number of assumptions we make when we communicate with other people in our native languages. If we told you to “count to three,” we would expect you to say or think the numbers one, two and three. We assumed you would know to start with “one” and end with “three”. With programming, we’re faced with needing to be more explicit with our directions to the computer. Here’s how we might tell the computer to “count to three”:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">for</span> (<span class="code-keyword">let</span> <span class="code-def">i</span> <span class="code-operator">=</span> <span class="code-number">1</span>; <span class="code-variable">i</span><span class="code-operator">&lt;=</span><span class="code-number">3</span>; <span class="code-variable">i</span><span class="code-operator">++</span>) {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">i</span>)
}</div></span></pre>
<p class="chapterBody">When we speak to other humans, we share a vocabulary that gives us quick ways to communicate complicated concepts. When we say “bake”, it calls to mind a familiar subroutine— preheating an oven, putting something into an oven for a set amount of time, and finally removing it. This allows us to <em>abstract</em> away a lot of the details and communicate key concepts more concisely. Instead of listing all those details, we can say, “We baked a cake,” and still impart all that meaning to you. </p><p class="chapterBody">In programming, we can accomplish “abstraction” by writing functions. In addition to allowing us to reuse our code, functions help to make clear, readable programs. If you encountered <code class="chapterCode">countToThree()</code> in a program, you might be able to quickly guess what the function did without having to stop and read the function’s body. </p><p class="chapterBody">We’re also going to learn about another way to add a level of abstraction to our programming: <em>higher-order functions</em>.  <em>Higher-order functions</em> are functions that accept other functions as arguments and/or return functions as output. This enables us to build abstractions on other abstractions, just like “We hosted a birthday party” is an abstraction that may build on the abstraction “We made a cake.”</p><p class="chapterBody">In summary, using more abstraction in our code allows us to write more modular code which is easier to read and debug. </p><h1 class="chapterSubtitle">Functions as Data</h1><p class="chapterBody">JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables. </p><p class="chapterBody">Below, we have an annoyingly long function name that hurts the readability of any code in which it’s used. Let’s pretend this function does important work and needs to be called repeatedly!</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">announceThatIAmDoingImportantWork</span> <span class="code-operator">=</span> () <span class="code-operator">=&gt;</span> {
  <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-string">"I’m doing very important work!"</span>);
};</div></span></pre>
<p class="chapterBody">What if we wanted to rename this function without sacrificing the source code? We can re-assign the function to a variable with a suitably short name:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">busy</span> <span class="code-operator">=</span> <span class="code-variable">announceThatIAmDoingImportantWork</span>;

<span class="code-variable">busy</span>(); <span class="code-comment">// This function call barely takes any space!</span></div></span></pre>
<p class="chapterBody"><code class="chapterCode">busy</code> is a variable that holds a <em>reference</em> to our original function. If we could look up the address in memory of <code class="chapterCode">busy</code> and the address in memory of <code class="chapterCode">announceThatIAmDoingImportantWork</code> they would point to the same place. Our new <code class="chapterCode">busy()</code> function can be invoked with parentheses as if that was the name we originally gave our function. </p><p class="chapterBody">Notice how we assign <code class="chapterCode">announceThatIAmDoingImportantWork</code> without parentheses as the value to the <code class="chapterCode">busy</code> variable. We want to assign the value of the function itself, not the value it returns when invoked. </p><p class="chapterBody">In JavaScript, functions are <em>first class objects</em>. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods. </p><p class="chapterBody">Since functions are a type of object, they have properties such as <code class="chapterCode">.length</code> and <code class="chapterCode">.name</code> and methods such as <code class="chapterCode">.toString()</code>. You can see more about the methods and properties of functions <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" target="_blank" rel="noopener">in the documentation</a>.</p><p class="chapterBody">Functions are special because we can invoke them, but we can still treat them like any other type of data.</p><h1 class="chapterSubtitle">Functions as Parameters</h1><p class="chapterBody">Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that we can also pass functions (into other functions) as parameters. A <em>higher-order function</em> is a function that either accepts functions as parameters, returns a function, or both! We call the functions that get passed in as parameters and invoked <em>callback functions</em> because they get called during the execution of the higher-order function.</p><p class="chapterBody">When we pass a function in as an argument to another function, we don’t invoke it. Invoking the function would evaluate to the return value of that function call. With callbacks, we pass in the function itself by typing the function name <em>without</em> the parentheses (that would evaluate to the result of calling the function):</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">timeFuncRuntime</span> <span class="code-operator">=</span> <span class="code-def">funcParameter</span> <span class="code-operator">=&gt;</span> {
  <span class="code-keyword">let</span> <span class="code-def">t1</span> <span class="code-operator">=</span> <span class="code-variable">Date</span>.<span class="code-property">now</span>();
  <span class="code-variable-2">funcParameter</span>();
  <span class="code-keyword">let</span> <span class="code-def">t2</span> <span class="code-operator">=</span> <span class="code-variable">Date</span>.<span class="code-property">now</span>();
  <span class="code-keyword">return</span> <span class="code-variable-2">t2</span> <span class="code-operator">-</span> <span class="code-variable-2">t1</span>;
}

<span class="code-keyword">const</span> <span class="code-def">addOneToOne</span> <span class="code-operator">=</span> () <span class="code-operator">=&gt;</span> <span class="code-number">1</span> <span class="code-operator">+</span> <span class="code-number">1</span>;

<span class="code-variable">timeFuncRuntime</span>(<span class="code-variable">addOneToOne</span>);</div></span></pre>
<p class="chapterBody">We wrote a higher-order function, <code class="chapterCode">timeFuncRuntime()</code>. It takes in a function as an argument, saves a starting time, invokes the callback function, records the time after the function was called, and returns the time the function took to run by subtracting the starting time from the ending time. </p><p class="chapterBody">This higher-order function could be used with any callback function which makes it a potentially powerful piece of code. </p><p class="chapterBody">We then invoked <code class="chapterCode">timeFuncRuntime()</code> first with the <code class="chapterCode">addOneToOne()</code> function - note how we passed in <code class="chapterCode">addOneToOne</code> and did not invoke it. </p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-variable">timeFuncRuntime</span>(() <span class="code-operator">=&gt;</span> {
  <span class="code-keyword">for</span> (<span class="code-keyword">let</span> <span class="code-def">i</span> <span class="code-operator">=</span> <span class="code-number">10</span>; <span class="code-variable-2">i</span><span class="code-operator">&gt;</span><span class="code-number">0</span>; <span class="code-variable-2">i</span><span class="code-operator">--</span>){
    <span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable-2">i</span>);
  }
});</div></span></pre>
<p class="chapterBody">In this example, we invoked <code class="chapterCode">timeFuncRuntime()</code> with an anonymous function that counts backwards from 10. Anonymous functions can be arguments too!</p>`,
    SubjectId: 7
  },
  {
    title: `<h1>ITERATORS</h1>`,
    body: `<h1 class="chapterSubtitle">Introduction to Iterators</h1><p class="chapterBody">Imagine you had a grocery list and you wanted to know what each item on the list was. You’d have to scan through each row and check for the item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array. One tool at our disposal is the <code class="chapterCode">for</code> loop. However, we also have access to built-in array methods which make looping easier.</p><p class="chapterBody">The built-in JavaScript array methods that help us iterate are called <em>iteration methods</em>, at times referred to as <em>iterators</em>. Iterators are methods called on arrays to manipulate elements and return values.</p><p class="chapterBody">In this lesson, you will learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task. </p><h1 class="chapterSubtitle">The .forEach() Method</h1><p class="chapterBody">The first iteration method that we’re going to learn is <code class="chapterCode">.forEach()</code>. Aptly named, <code class="chapterCode">.forEach()</code> will execute the same code for each element of an array.<br><img src="https://s3.amazonaws.com/codecademy-content/courses/learn-javascript-iterators/iterator+anatomy.svg" alt="Diagram outlining the parts of an array iterator including the array identifier, the section that is the iterator, and the callback function" class="chapterImage"></p><p class="chapterBody">The code above will log a nicely formatted list of the groceries to the console.  Let’s explore the syntax of invoking <code class="chapterCode">.forEach()</code>. </p><ul class="chapterUnorderedList"><li class="chapterList"><code class="chapterCode">groceries.forEach()</code> calls the <code class="chapterCode">forEach</code> method on the <code class="chapterCode">groceries</code> array. </li><li class="chapterList"><code class="chapterCode">.forEach()</code> takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function. </li><li class="chapterList"><code class="chapterCode">.forEach()</code> loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.</li><li class="chapterList">The return value for <code class="chapterCode">.forEach()</code> will always be <code class="chapterCode">undefined</code>.</li></ul><h1 class="chapterSubtitle">The .map() Method</h1><p class="chapterBody">The second iterator we’re going to cover is <code class="chapterCode">.map()</code>. When <code class="chapterCode">.map()</code> is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling <code class="chapterCode">.map()</code>:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">numbers</span> <span class="code-operator">=</span> [<span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span>, <span class="code-number">4</span>, <span class="code-number">5</span>]; 

<span class="code-keyword">const</span> <span class="code-def">bigNumbers</span> <span class="code-operator">=</span> <span class="code-variable">numbers</span>.<span class="code-property">map</span>(<span class="code-def">number</span> <span class="code-operator">=&gt;</span> {
  <span class="code-keyword">return</span> <span class="code-variable-2">number</span> <span class="code-operator">*</span> <span class="code-number">10</span>;
});</div></span></pre>
<p class="chapterBody"><code class="chapterCode">.map()</code> works in a similar manner to <code class="chapterCode">.forEach()</code>— the major difference is that <code class="chapterCode">.map()</code> returns a new array. </p><p class="chapterBody">In the example above: </p><ul class="chapterUnorderedList"><li class="chapterList"><code class="chapterCode">numbers</code> is an array of numbers. </li><li class="chapterList"><code class="chapterCode">bigNumbers</code> will store the return value of calling <code class="chapterCode">.map()</code> on <code class="chapterCode">numbers</code>.</li><li class="chapterList"><code class="chapterCode">numbers.map</code> will iterate through each element in the <code class="chapterCode">numbers</code> array and pass the element into the callback function.</li><li class="chapterList"><code class="chapterCode">return number * 10</code> is the code we wish to execute upon each element in the array. This will save each value from the <code class="chapterCode">numbers</code> array, multiplied by <code class="chapterCode">10</code>, to a new array. </li></ul><p class="chapterBody">If we take a look at <code class="chapterCode">numbers</code> and <code class="chapterCode">bigNumbers</code>:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">numbers</span>); <span class="code-comment">// Output: [1, 2, 3, 4, 5]</span>
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">bigNumbers</span>); <span class="code-comment">// Output: [10, 20, 30, 40, 50]</span></div></span></pre>
    <p class="chapterBody">Notice that the elements in <code class="chapterCode">numbers</code> were not altered and <code class="chapterCode">bigNumbers</code> is a new array. </p>
    <h1 class="chapterSubtitle">The .filter() Method</h1>
    <p class="chapterBody">Another useful iterator method is <code class="chapterCode">.filter()</code>. Like <code class="chapterCode">.map()</code>, <code class="chapterCode">.filter()</code> returns a new array. However, <code class="chapterCode">.filter()</code> returns an array of elements after filtering out certain elements from the original array. The callback function for the <code class="chapterCode">.filter()</code> method should return <code class="chapterCode">true</code> or <code class="chapterCode">false</code> depending on the element that is passed to it. The elements that cause the callback function to return <code class="chapterCode">true</code> are added to the new array. Take a look at the following example:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> <span class="code-def">words</span> <span class="code-operator">=</span> [<span class="code-string">'chair'</span>, <span class="code-string">'music'</span>, <span class="code-string">'pillow'</span>, <span class="code-string">'brick'</span>, <span class="code-string">'pen'</span>, <span class="code-string">'door'</span>]; 

<span class="code-keyword">const</span> <span class="code-def">shortWords</span> <span class="code-operator">=</span> <span class="code-variable">words</span>.<span class="code-property">filter</span>(<span class="code-def">word</span> <span class="code-operator">=&gt;</span> {
  <span class="code-keyword">return</span> <span class="code-variable-2">word</span>.<span class="code-property">length</span> <span class="code-operator">&lt;</span> <span class="code-number">6</span>;
});</div></span></pre>
<ul class="chapterUnorderedList"><li class="chapterList"><code class="chapterCode">words</code> is an array that contains string elements. </li><li class="chapterList"><code class="chapterCode">const shortWords =</code> declares a new variable that will store the returned array from invoking <code class="chapterCode">.filter()</code>. </li><li class="chapterList">The callback function is an arrow function has a single parameter, <code class="chapterCode">word</code>. Each element in the <code class="chapterCode">words</code> array will be passed to this function as an argument. </li><li class="chapterList"><code class="chapterCode">word.length &lt; 6;</code> is the condition in the callback function. Any <code class="chapterCode">word</code> from the <code class="chapterCode">words</code> array that has fewer than <code class="chapterCode">6</code> characters will be added to the <code class="chapterCode">shortWords</code> array. </li></ul><p class="chapterBody">Let’s also check the values of <code class="chapterCode">words</code> and <code class="chapterCode">shortWords</code>:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">words</span>); <span class="code-comment">// Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; </span>
<span class="code-variable">console</span>.<span class="code-property">log</span>(<span class="code-variable">shortWords</span>); <span class="code-comment">// Output: ['chair', 'music', 'brick', 'pen', 'door']</span></div></span></pre>
<p class="chapterBody">Observe how <code class="chapterCode">words</code> was not mutated, i.e. changed, and <code class="chapterCode">shortWords</code> is a new array. </p>`,
    SubjectId: 7
  },
  {
    title: `<p class="chapterTitle">CLASS</p>`,
    body: `<h1 class="chapterSubtitle">Class</h1><p class="chapterBody">JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar objects.</p><p class="chapterBody">Take, for example, an object representing a dog named halley. This dog’s name (a key) is "Halley" (a value) and has an age (another key) of 3 (another value). We create the halley object below:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">let</span> <span class="code-def">halley</span> <span class="code-operator">=</span> {
  <span class="code-property">_name</span>: <span class="code-string">'Halley'</span>,
  <span class="code-property">_behavior</span>: <span class="code-number">0</span>,

  <span class="code-property">get</span> <span class="code-property">name</span>() {
    <span class="code-keyword">return</span> <span class="code-keyword">this</span>.<span class="code-property">_name</span>;
  },

  <span class="code-property">get</span> <span class="code-property">behavior</span>() {
    <span class="code-keyword">return</span> <span class="code-keyword">this</span>.<span class="code-property">_behavior</span>;
  },

  <span class="code-property">incrementBehavior</span>() {
    <span class="code-keyword">this</span>.<span class="code-property">_behavior</span><span class="code-operator">++</span>;
  }
}</div></span></pre>
<p class="chapterBody">Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that serves as a template for creating new Dog objects. For each new dog, you can provide a value for their name.</p><p class="chapterBody">As you can see, classes are a great way to reduce duplicate code and debugging time.</p><h1 class="chapterSubtitle">Constructor</h1><p class="chapterBody">Although you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the <em>constructor</em> method. JavaScript calls the <code class="chapterCode">constructor()</code> method every time it creates a new <em>instance</em> of a class.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="cm-keyword">class</span> <span class="cm-def">Dog</span> {
  <span class="cm-property">constructor</span>(<span class="cm-def">name</span>) {
    <span class="cm-keyword">this</span>.<span class="cm-property">name</span> <span class="cm-operator">=</span> <span class="cm-variable-2">name</span>;
    <span class="cm-keyword">this</span>.<span class="cm-property">behavior</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>;
  }
}</div></span></pre>
<ul class="chapterUnorderedList"><li class="chapterList"><code class="chapterCode">Dog</code> is the name of our class. By convention, we capitalize and CamelCase class names.</li><li class="chapterList">JavaScript will invoke the <code class="chapterCode">constructor()</code> method every time we create a new instance of our <code class="chapterCode">Dog</code> class. </li><li class="chapterList">This <code class="chapterCode">constructor()</code> method accepts one argument, <code class="chapterCode">name</code>. </li><li class="chapterList">Inside of the <code class="chapterCode">constructor()</code> method, we use the <code class="chapterCode">this</code> keyword. In the context of a class, <code class="chapterCode">this</code> refers to an instance of that class. In the <code class="chapterCode">Dog</code> class, we use <code class="chapterCode">this</code> to set the value of the Dog instance’s <code class="chapterCode">name</code> property to the <code class="chapterCode">name</code> argument. </li><li class="chapterList">Under <code class="chapterCode">this.name</code>, we create a property called <code class="chapterCode">behavior</code>, which will keep track of the number of times a dog misbehaves. The <code class="chapterCode">behavior</code> property is always initialized to zero. </li></ul><h1 class="chapterSubtitle">Instance</h1><p class="chapterBody">Now, we’re ready to create class instances. An <em>instance</em> is an object that contains the property names and methods of a class, but with unique property values. Let’s look at our <code class="chapterCode">Dog</code> class example.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="cm-keyword">class</span> <span class="cm-def">Dog</span> {
  <span chapterPre="cm-property">constructor</span>(<span class="cm-def">name</span>) {
    <span class="cm-keyword">this</span>.<span class="cm-property">name</span> <span class="cm-operator">=</span> <span class="cm-variable-2">name</span>;
    <span class="cm-keyword">this</span>.<span class="cm-property">behavior</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>;
  } 
}

<span class="cm-keyword">const</span> <span class="cm-def">halley</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Dog</span>(<span class="cm-string">'Halley'</span>); <span class="cm-comment">// Create new Dog instance</span>
<span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-variable">halley</span>.<span class="cm-property">name</span>); <span class="cm-comment">// Log the name value saved to halley</span>
<span class="cm-comment">// Output: 'Halley'</span></div></span></pre>
<p class="chapterBody">Below our <code class="chapterCode">Dog</code> class, we use the <code class="chapterCode">new</code> keyword to create an instance of our <code class="chapterCode">Dog</code> class. Let’s consider the line of code step-by-step.</p><ul class="chapterUnorderedList"><li class="chapterPre">We create a new variable named <code class="chapterCode">halley</code> that will store an instance of our <code class="chapterCode">Dog</code> class.</li><li class="chapterList">We use the <code class="chapterCode">new</code> keyword to generate a new instance of the <code class="chapterCode">Dog</code> class. The <code class="chapterCode">new</code> keyword calls the <code class="chapterCode">constructor()</code>, runs the code inside of it, and then returns the new instance.</li><li class="chapterList">We pass the <code class="chapterCode">'Halley'</code> string to the <code class="chapterCode">Dog</code> constructor, which sets the <code class="chapterCode">name</code> property to <code class="chapterCode">'Halley'</code>.</li><li class="chapterList">Finally, we log the value saved to the <code class="chapterCode">name</code> key in our <code class="chapterCode">halley</code> object, which logs <code class="chapterCode">'Halley'</code> to the console.</li></ul><h1 class="chapterSubtitle">Methods</h1><p class="chapterBody">At this point, we have a <code class="chapterCode">Dog</code> class that spins up objects with <code class="chapterCode">name</code> and <code class="chapterCode">behavior</code> properties. Below, we will add getters and a method to bring our class to life. </p><p class="chapterBody">Class method and getter syntax is the same as it is for objects <strong>except you can not include commas between methods</strong>.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="cm-keyword">class</span> <span class="cm-def">Dog</span> {
  <span chapterPre="cm-property">constructor</span>(<span class="cm-def">name</span>) {
    <span class="cm-keyword">this</span>.<span class="cm-property">_name</span> <span class="cm-operator">=</span> <span class="cm-variable-2">name</span>;
    <span class="cm-keyword">this</span>.<span class="cm-property">_behavior</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>;
  }

  <span class="cm-keyword">get</span> <span class="cm-property">name</span>() {
    <span class="cm-keyword">return</span> <span class="cm-keyword">this</span>.<span class="cm-property">_name</span>;
  }

  <span class="cm-keyword">get</span> <span class="cm-property">behavior</span>() {
    <span class="cm-keyword">return</span> <span class="cm-keyword">this</span>.<span class="cm-property">_behavior</span>;
  }

  <span class="cm-property">incrementBehavior</span>() {
    <span class="cm-keyword">this</span>.<span class="cm-property">_behavior</span><span class="cm-operator">++</span>;
  }
}</div></span></pre>
<p class="chapterBody">In the example above, we add getter methods for <code class="chapterCode">name</code> and <code class="chapterCode">behavior</code>. Notice, we also prepended our property names with underscores (<code class="chapterCode">_name</code> and <code class="chapterCode">_behavior</code>), which indicate these properties should not be accessed directly. Under the getters, we add a method named <code class="chapterCode">.incrementBehavior()</code>. When you call <code class="chapterCode">.incrementBehavior()</code> on a Dog instance, it adds <code class="chapterCode">1</code> to the <code class="chapterCode">_behavior</code> property. Between each of our methods, we did <em>not</em> include commaschapterPrep>`,
    SubjectId: 8
  },
  {
    title: `<h1 class="chapterTitle">ASYNCHRONOUS JAVASCRIPT</h1>`,
    body: `<h1 class="chapterSubtitle">Asynchronus JavaScript</h1><p class="chapterBody">For reasons illustrated earlier (e.g. related to blocking), many Web API features now use asynchronous code to run, especially those that access or fetch some kind of resource from an external device, such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, or broadcasting the display to a VR headset.</p><p class="chapterBody">Why is this difficult to get to work using synchronous code? Let's look at a quick example. When you fetch an image from a server, you can't return the result immediately. That means that the following (pseudocode) wouldn't work:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">let</span> response <span class="code-operator">=</span><span class="code-function">fetch</span><span>(</span><span class="code-string">'myImage.png'</span><span>)</span><span>;</span>
  
<span class="code-keyword">let</span> blob <span class="code-operator">=</span> response<span>.</span><span class="code-function">blob</span><span>(</span><span>)</span><span>;</span><span class="code-comment"> // display your image blob in the UI somehow</span></div></span></pre>
<p class="chapterBody">That's because you don't know how long the image will take to download, so when you come to run the second line it will throw an error (possibly intermittently, possibly every time) because the response is not yet available. Instead, you need your code to wait until the response is returned before it tries to do anything else to it.</p><p class="chapterBody">There are two main types of asynchronous code style you'll come across in JavaScript code, old-style callbacks and newer promise-style code. In the below sections we'll review each of these in turn.</p>`
,
    SubjectId: 9
  },
  {
    title: `<h1 class="chapterTitle">CALLBACK</h1>`,
    body: `<h1 class="chapterSubtitle">Callback</h1><p class="chapterBody">Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback function to let you know the work is done, or to let you know that something of interest has happened. Using callbacks is slightly old-fashioned now, but you'll still see them in use in a number of older-but-still-commonly-used APIs.</p><p class="chapterBody">An example of an async callback is the second parameter of the addEventListener() method (as we saw in action above):</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer">btn<span>.</span><span class="code-function">addEventListener</span><span>(</span><span class="code-string">'click'</span><span>,</span> <span>(</span><span>)</span> <span class="code-operator">=&gt;</span> <span>{</span>
  <span class="code-function">alert</span><span>(</span><span class="code-string">'You clicked me!'</span><span>)</span><span>;</span>
  <span class="code-keyword">let</span> pElem <span class="code-operator">=</span> document<span>.</span><span class="code-function">createElement</span><span>(</span><span class="code-string">'p'</span><span>)</span><span>;</span>
  pElem<span>.</span>textContent <span class="code-operator">=</span> <span class="code-string">'This is a newly-added paragraph.'</span><span>;</span>
  document<span>.</span>body<span>.</span><span class="code-function">appendChild</span><span>(</span>pElem<span>)</span><span>;</span>
<span>}</span><span>)</span><span>;</span></div></span></pre>
<p class="chapterBody">The first parameter is the type of event to be listened for, and the second parameter is a callback function that is invoked when the event is fired.</p><p class="chapterBody">When we pass a callback function as an argument to another function, we are only passing the function's reference as an argument, i.e, the callback function is not executed immediately. It is “called back” (hence the name) asynchronously somewhere inside the containing function’s body. The containing function is responsible for executing the callback function when the time comes.</p><p class="chapterBody">You can write your own function containing a callback easily enough. Let's look at another example that loads a resource via the XMLHttpRequest API </p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">function</span> <span class="code-function">loadAsset</span><span>(</span><span class="code-parameter">url<span>,</span> type<span>,</span> callback</span><span>)</span> <span>{</span>
  <span class="code-keyword">let</span> xhr <span class="code-operator">=</span> <span class="code-keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span>(</span><span>)</span><span>;</span>
  xhr<span>.</span><span class="code-function">open</span><span>(</span><span class="code-string">'GET'</span><span>,</span> url<span>)</span><span>;</span>
  xhr<span>.</span>responseType <span class="code-operator">=</span> type<span>;</span>

  xhr<span>.</span><span class="code-function-variable function">onload</span> <span class="code-operator">=</span> <span class="code-keyword">function</span><span>(</span><span>)</span> <span>{</span>
    <span class="code-function">callback</span><span>(</span>xhr<span>.</span>response<span>)</span><span>;</span>
  <span>}</span><span>;</span>

  xhr<span>.</span><span class="code-function">send</span><span>(</span><span>)</span><span>;</span>
<span>}</span>

<span class="code-keyword">function</span> <span class="code-function">displayImage</span><span>(</span><span class="code-parameter">blob</span><span>)</span> <span>{</span>
  <span class="code-keyword">let</span> objectURL <span class="code-operator">=</span> <span class="token constant">URL</span><span>.</span><span class="code-function">createObjectURL</span><span>(</span>blob<span>)</span><span>;</span>

  <span class="code-keyword">let</span> image <span class="code-operator">=</span> document<span>.</span><span class="code-function">createElement</span><span>(</span><span class="code-string">'img'</span><span>)</span><span>;</span>
  image<span>.</span>src <span class="code-operator">=</span> objectURL<span>;</span>
  document<span>.</span>body<span>.</span><span class="code-function">appendChild</span><span>(</span>image<span>)</span><span>;</span>
<span>}</span>

<span class="code-function">loadAsset</span><span>(</span><span class="code-string">'coffee.jpg'</span><span>,</span> <span class="code-string">'blob'</span><span>,</span> displayImage<span>)</span><span>;</span></div></span></pre>
<p class="chapterBody">Here we create a displayImage() function that simply represents a blob passed to it as an object URL, then creates an image to display the URL in, appending it to the document's <body>. However, we then create a loadAsset() function that takes a callback as a parameter, along with a URL to fetch and a content type. It uses XMLHttpRequest (often abbreviated to "XHR") to fetch the resource at the given URL, before then passing the response to the callback to do something with. In this case the callback is waiting on the XHR call to finish downloading the resource (using the onload event handler) before it passes it to the callback.</p><p class="chapterBody">Callbacks are versatile — not only do they allow you to control the order in which functions are run and what data is passed between them, they also allow you to pass data to different functions depending on circumstance. So you could have different actions to run on the response downloaded, such as processJSON(), displayText(), etc.</p><p class="chapterBody">Note that not all callbacks are async — some run synchronously. An example is when we use Array.prototype.forEach() to loop through the items in an array</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">const</span> gods <span class="code-operator">=</span> <span>[</span><span class="code-string">'Apollo'</span><span>,</span> <span class="code-string">'Artemis'</span><span>,</span> <span class="code-string">'Ares'</span><span>,</span> <span class="code-string">'Zeus'</span><span>]</span><span>;</span>

gods<span>.</span><span class="code-function">forEach</span><span>(</span><span class="code-keyword">function</span> <span>(</span><span class="code-parameter">eachName<span>,</span> index</span><span>)</span><span>{</span>
  console<span>.</span><span class="code-function">log</span><span>(</span>index <span class="code-operator">+</span> <span class="code-string">'. '</span> <span class="code-operator">+</span> eachName<span>)</span><span>;</span>
<span>}</span><span>)</span><span>;</span></div></span></pre>`,
    SubjectId: 9
  },
  {
    title: `<h1 class="chapterTitle">PROMISE</h1>`,
    body: `<h1 class="chapterTitle">Promise</h1><p class="chapterBody">Promises are the new style of async code that you'll see used in modern Web APIs. A good example is the fetch() API, which is basically like a modern, more efficient version of XMLHttpRequest. Let's look at a quick example, from our Fetching data from the server article:</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-function">fetch</span><span>(</span><span class="code-string">'products.json'</span><span>)</span><span>.</span><span class="code-function">then</span><span>(</span><span class="code-keyword">function</span><span>(</span><span class="code-parameter">response</span><span>)</span> <span>{</span>
  <span class="code-keyword">return</span> response<span>.</span><span class="code-function">json</span><span>(</span><span>)</span><span>;</span>
<span>}</span><span>)</span><span>.</span><span class="code-function">then</span><span>(</span><span class="code-keyword">function</span><span>(</span><span class="code-parameter">json</span><span>)</span> <span>{</span>
  products <span class="code-operator">=</span> json<span>;</span>
  <span class="code-function">initialize</span><span>(</span><span>)</span><span>;</span>
<span>}</span><span>)</span><span>.</span><span class="code-function">catch</span><span>(</span><span class="code-keyword">function</span><span>(</span><span class="code-parameter">err</span><span>)</span> <span>{</span>
  console<span>.</span><span class="code-function">log</span><span>(</span><span class="code-string">'Fetch problem: '</span> <span class="code-operator">+</span> err<span>.</span>message<span>)</span><span>;</span>
<span>}</span><span>)</span><span>;</span></div></span></pre>
<p class="chapterBody">Here we see fetch() taking a single parameter — the URL of a resource you want to fetch from the network — and returning a promise. The promise is an object representing the completion or failure of the async operation. It represents an intermediate state, as it were. In essence, it's the browser's way of saying "I promise to get back to you with the answer as soon as I can," hence the name "promise."</p><p class="chapterBody">This concept can take practice to get used to; it feels a little like Schrödinger's cat in action. Neither of the possible outcomes have happened yet, so the fetch operation is currently waiting on the result of the browser trying to complete the operation at some point in the future. We've then got three further code blocks chained onto the end of the fetch():</p><ol class="chapterOrderedList"><li class="chapterList">Two then() blocks. Both contain a callback function that will run if the previous operation is successful, and each callback receives as input the result of the previous successful operation, so you can go forward and do something else to it. Each .then() block returns another promise, meaning that you can chain multiple .then() blocks onto each other, so multiple asynchronous operations can be made to run in order, one after another.</li><li class="chapterList">The catch() block at the end runs if any of the .then() blocks fail — in a similar way to synchronous try...catch blocks, an error object is made available inside the catch(), which can be used to report the kind of error that has occurred. Note however that synchronous try...catch won't work with promises, although it will work with async/await, as you'll learn later on.</li></ol>`,
    SubjectId: 9
  },
  {
    title: `<h1 class="chapterTitle">ASYNC-AWAIT</h1>`,
    body: `<h1 class="chapterSubtitle">Async</h1><p class="chapterBody">The async function declaration defines an asynchronous function — a function that is an AsyncFunction object. Asynchronous functions operate in a separate order than the rest of the code via the event loop, returning an implicit Promise as its result. But the syntax and structure of code using async functions looks like standard synchronous functions.</p><h1 class="chapterSubtitle">Await</h1><p class="chapterBody">The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.</p><p class="chapterBody">If the Promise is rejected, the await expression throws the rejected value.</p><p class="chapterBody">If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.</p><p class="chapterBody">An await can split execution flow, allowing the caller of the await's function to resume execution before the deferred continuation of the await's function. After the await defers the continuation of its function, if this is the first await executed by the function, immediate execution also continues by returning to the function's caller a pending Promise for the completion of the await's function and resuming execution of that caller.</p><p class="chapterBody">If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value.</p>
<pre class="chapterPre"><span class="chapterCodeBlock"><div class="chapterCodeContainer"><span class="code-keyword">function</span> <span class="code-function">resolveAfter2Seconds</span><span>(</span><span class="code-parameter">x</span><span>)</span> <span>{</span> 
  <span class="code-keyword">return</span> <span class="code-keyword">new</span> <span class="code-keyword">Promise</span><span>(</span><span class="code-parameter">resolve</span> <span class="code-operator">=&gt;</span> <span>{</span>
    <span class="code-function">setTimeout</span><span>(</span><span>(</span><span>)</span> <span class="code-operator">=&gt;</span> <span>{</span>
      <span class="code-function">resolve</span><span>(</span>x<span>)</span><span>;</span>
    <span>}</span><span>,</span> <span class="token number">2000</span><span>)</span><span>;</span>
  <span>}</span><span>)</span><span>;</span>
<span>}</span>

<span class="code-keyword">async</span> <span class="code-keyword">function</span> <span class="code-function">f1</span><span>(</span><span>)</span> <span>{</span>
  <span class="code-keyword">var</span> x <span class="code-operator">=</span> <span class="code-keyword">await</span> <span class="code-function">resolveAfter2Seconds</span><span>(</span><span class="token number">10</span><span>)</span><span>;</span>
  console<span>.</span><span class="code-function">log</span><span>(</span>x<span>)</span><span>;</span> <span class="code-comment">// 10</span>
<span>}</span>

<span class="code-function">f1</span><span>(</span><span>)</span><span>;</span></div></span></pre>`,
    SubjectId: 9
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