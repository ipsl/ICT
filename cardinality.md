---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---
# Counting and cardinality

Recall that information is often in the form of identifying a state/outcome among a set of states/possibilities. In this context, the size of the set of the states is an important property. We devote this section to learn more about the sizes of sets. 


## Finite and infinite sets
First, let us define two types of sets. Sets containing a finite number of elements are called *finite sets*. For such sets, there is a natural number that gives the number of elements. For example, the set of prime numbers less than 10, \{2,3,5,7\}, has 4 elements.

An *infinite set* is one that has an infinite number of elements. In other words, there is no natural number that can describe the size of an infinite set; we can always present more elements than the proposed number. 


Some examples of infinite sets:
* Natural numbers: $$\mathbb N = \{0,1,2,\dotsc\}$$.
* Integers: $$\{0,1,-1,2,-2,\dotsc\}$$
* Real numbers, or equivalently  points on the real line
* The set of points in the interval from 0 to 1


## Size and Cardinality
There are different ways that we can define the notion of size for sets. The most relevant to us is *cardinality* of a set. For a finite set, the cardinality is simply the number of elements in the set. 

What about infinite sets? Do all infinite sets have the same number of elements, for example natural and real numbers? Cardinality is also generalized to infinite sets, helping us classify infinite sets in a way that has implications for storing information, as we'll discuss below. We use the terms size and cardinality interchangeably, even though one the former is an informal concept while the latter is mathematical term.

## Counting the elements of finite sets
When the elements of a finite set are not given explicitly, we may need to compute the size of the set. The following two rules can be helpful for this task.
<div class="highlight">
  <strong> The rule of sum:</strong> If action 1 can be done in \(m\) ways, action 2 can be done in \(n\) ways, and the actions cannot be performed simultaneously, then action 1 or action 2 can be done in \(m+n\) ways.
  <p>⭐<strong> The rule of product: </strong> If action 1 can be done in \(m\) ways, action 2 can be done in \(n\) ways, and actions 1 and 2 must be both performed, then there are a total of \(m\times n\) ways to perform them.</p>
</div>

<br>

<div class="exercise">
  I need to travel to Washington D.C. to meet with the president. I can either wear a blue tie or a red tie. I have 3 blue ties and 5 red ties. There are 4 ways of getting to DC (drive, fly, take the train, walk). What is the total number of options that I have? Which option should I pick?
  <button  onclick="showSolution(this,'meeting')" style="float:right;">Show Solution</button>

  <div id="meeting" style="display:none;" class="solution">
    I have \(3+5=8\) options for picking a tie (rule of sum). So I can pick a tie in 8 ways and travel via 4 modes of transportation, so in total I have \(8\times4=32\) options (rule of product).
  </div>
</div>
<br/>

<div class="exercise">
  What is the size of the set of (positive) two-digit even numbers?
  <button  onclick="showSolution(this,'evenNumbs')" style="float:right;">Show Solution</button>

  <div id="evenNumbs" style="display:none;" class="solution">
    For the first digit, we have 9 options and for the second digit we have 5 options. So in total, there are \(9\times 5=45\) two-digit even numbers.
  </div>
</div>
<br/>

## Infinite sets: countably infinite vs uncountable

Some sets are infinite, or equivalently have an infinite number of elements. Infinity is not a number, but it is convenient to treat it as a number sometimes. However, not all infinities are created equal. Some infinite sets are much bigger than the other ones. One possible way to classify infinite sets is to divide them into *countably infinite sets* and *uncountable sets*. Uncountable sets are unimaginably bigger than countably infinite sets.

To understand what the difference is, we need to learn about _bijections_. A bijection between two sets $$A$$ and $$B$$ is a function that maps each element of $$A$$ to exactly one element of $$B$$ and for each element of $$B$$, there is an element of $$A$$ that is mapped to it.

<center><svg width="400" height="200">
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
    refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" />
    </marker>
  </defs>
<ellipse cx="100" cy="100" rx="50" ry="99" style="fill:rgba(0,256,128,.5);stroke:black;stroke-width:1"/>
<ellipse cx="300" cy="100" rx="50" ry="99" style="fill:rgba(256,128,0,.3);stroke:black;stroke-width:1"/>
<text x="50" y="30" font-style="italic">A</text>
<text x="340" y="30" font-style="italic">B</text>
<text x="95" y="40">1</text>
<text x="95" y="80">2</text>
<text x="95" y="120">3</text>
<text x="95" y="160">4</text>
<text x="295" y="40">a</text>
<text x="295" y="80">b</text>
<text x="295" y="120">c</text>
<text x="295" y="160">d</text>
<line x1="105" y1="33" x2="270" y2="33" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="105" y1="73" x2="270" y2="73" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="105" y1="113" x2="270" y2="113" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="105" y1="153" x2="270" y2="153" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
</svg>
</center>



<div class="highlight"> Two sets have the same cardinality if there is a bijection between them.</div>
So roughly speaking a bijection means the same size. This is very natural for finite sets but also holds for infinite sets. For example, there is a bijection between the set of even numbers $$\mathbb E=\{0,2,4,6,8,\dotsc\}$$ and the set of natural numbers $$\mathbb N$$, as shown by the $$f(x)=2x$$. 
<center><svg width="400" height="200">
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
    refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" />
    </marker>
  </defs>
<ellipse cx="100" cy="100" rx="50" ry="99" style="fill:rgba(0,256,128,.5);stroke:black;stroke-width:1"/>
<ellipse cx="300" cy="100" rx="50" ry="99" style="fill:rgba(256,128,0,.3);stroke:black;stroke-width:1"/>
<text x="95" y="40">0</text>
<text x="95" y="70">1</text>
<text x="95" y="100">2</text>
<text x="95" y="130">𝑥</text>
<text x="95" y="160">...</text>
<text x="295" y="40">0</text>
<text x="295" y="70">2</text>
<text x="295" y="100">4</text>
<text x="295" y="130">2𝑥</text>
<text x="295" y="160">...</text>
<line x1="105" y1="33" x2="270" y2="33" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="105" y1="63" x2="270" y2="63" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="105" y1="93" x2="270" y2="93" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="115" y1="123" x2="270" y2="123" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="115" y1="153" x2="270" y2="153" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<foreignObject x="35" y="20" width="30" height="20">
    <div>
    \(\mathbb N\)
    </div>
  </foreignObject>
<foreignObject x="335" y="20" width="30" height="20">
    <div>
    \(\mathbb E\)
    </div>
  </foreignObject>
</svg>
</center>
So even numbers and natural numbers have the same cardinality. Informally, there are the same number of even numbers as there are  natural numbers 🤯.



<div class="highlight"> A set \(A\) is <em>countably infinite</em> if there is a bijection between \(A\) and the set of natural numbers \(\mathbb N\).  An <em>uncountable set</em> is an infinite set that is not countably infinite. </div>



In other words, we can "count" the elements of a countably infinite set, labeling them 0, 1, 2, and so on (you can also start counting from 1). Yet another way to show a set is countably infinite is to "list" all its elements, in a way that every element appears is the list. For even numbers, the list can be: 

$$0,2,4,\dotsc$$

A _countable set_ is either finite or countably infinite. Typically though, when people say countable, they mean countably infinite.

<div class="exercise">
  Is the set of integers countable?
  <button  onclick="showSolution(this,'solID')" style="float:right;">Show Solution</button>
  <div id="solID" style="display:none;" class="solution">
    Yes, we can list the integers as: \[0,1,-1,2,-2,3,-3,\dotsc\]
  </div>
</div>
<br/>





### Rationals and reals
So far we have only seen countable sets. Rationals and reals seem like good candidates for being uncountable. Between any two rational numbers there exists another rational number so this suggests that it might be difficult to list all rational numbers. It turns out, however, that the rational numbers are countable. 

<div class="exercise">
Can you construct a list containing all rational numbers?
<button  onclick="showSolution(this,'count_rationals')" style="float:right;">Show Solution</button>

<div id="count_rationals" style="display:none;" class="solution">
Let us only show that positive rationals are countable. Extending this to include 0 and negative rationals is straightforward. First, arrange all positive rationals as in the table below, where the number in \(i\)th row and \(j\)th column is \(i/j\).<br/>
<center>
<table border="1" cellpadding="5px" style="border-collapse:collapse;"><tbody>
<tr><td></td><td><strong>1</strong></td><td><strong>2</strong></td><td><strong>3</strong></td><td><strong>4</strong></td><td><strong>5</strong></td><td><strong>6</strong></td><td><strong>7</strong></td><td>...</td></tr>
<tr><td><strong>1</strong></td><td>1/1</td><td>1/2</td><td>1/3</td><td>1/4</td><td>1/5</td><td>1/6</td><td>1/7</td><td>...</td></tr>
<tr><td><strong>2</strong></td><td>2/1</td><td>2/2</td><td>2/3</td><td>2/4</td><td>2/5</td><td>2/6</td><td>2/7</td><td>...</td></tr>
<tr><td><strong>3</strong></td><td>3/1</td><td>3/2</td><td>3/3</td><td>3/4</td><td>3/5</td><td>3/6</td><td>3/7</td><td>...</td></tr>
<tr><td><strong>4</strong></td><td>4/1</td><td>4/2</td><td>4/3</td><td>4/4</td><td>4/5</td><td>4/6</td><td>4/7</td><td>...</td></tr>
<tr><td><strong>5</strong></td><td>5/1</td><td>5/2</td><td>5/3</td><td>5/4</td><td>5/5</td><td>5/6</td><td>5/7</td><td>...</td></tr>
<tr><td><strong>6</strong></td><td>6/1</td><td>6/2</td><td>6/3</td><td>6/4</td><td>6/5</td><td>6/6</td><td>6/7</td><td>...</td></tr>
<tr><td><strong>7</strong></td><td>7/1</td><td>7/2</td><td>7/3</td><td>7/4</td><td>7/5</td><td>7/6</td><td>7/7</td><td>...</td></tr>
<tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table>
</center>
Then start from the top left and then list all new rationals on each diagonal line:

\[\frac11,\frac12,\frac21,\frac13,\frac31,\frac14,\frac23,\frac32,\frac41,\frac15,\dotsc\]
Note that we have skipped \(\frac22\) since we have seen it as \(\frac11\) before. Every rational number appears in this list.
</div>
</div>
So the set of rational numbers and the set of natural numbers have the same size 🤯🤯
<br/>

But real numbers are uncountable. It can be proven that any strategy for listing all real numbers will fail. One way to prove this is [Cantor's diagonal argument](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument){:target="_blank"}.

<div class="note">
<h3> <span class="note_emoji"></span> Size beyond counting: measures</h3>
Does the real line have more elements than the interval \((0,1)\)? The answer is, perhaps surprisingly, no. Can you find a bijection between the two?
<button  onclick="showSolution(this,'interval_line')" style="float:right;">Show Solution</button>
<div class="solution">
<div id="interval_line" style="display:none;">
One such mapping is the function 
\[
f(x) = \frac1{1+e^{-x}}
\]
<center><div id="box" class="jxgbox" style="width:600px; height:300px;"></div></center>
<script>
var b2 = JXG.JSXGraph.initBoard('box', {boundingbox: [-10, 1.2, 10, -.2], axis: true, showCopyright: false, showNavigation: false});
b2.create('functiongraph', [function(x){return 1/(1+Math.exp(-x));},-10,10]);
</script>

Its domain is \(\mathbb R\) and its range is \((0,1)\).
</div>
</div>
So as far as cardinality is concerned, the interval \((0,1)\) has the same number of elements as \(\mathbb R\). We can even show that \(\mathbb R\) has the same number of elements as \(\mathbb C\).

This suggests that we may need a finer way of evaluating sizes of sets than simply counting. This is what <strong>measures</strong> do, which include  length, area, volume, …. While the interval \((0,1)\) has length 1, the real line has infinite length. The area of the real line is 0, but the complex plane has an infinite area.
</div>
<br>
<div class="note">
<h3> <span class="note_emoji"></span> Beyond naive set theory</h3>

<p>Set theory is a fascinating topic, with many surprising (and controversial) results, especially when dealing with uncountable sets. Click on images below to learn about the axiom of choice, and how not to carve pumpkins.</p>


<table width="980" cellspacing="0" cellpadding="0" style="border:none;">
    <tr>
        <td style="border:none;vertical-align:top;" width="18%">
<a href="https://youtu.be/hcRZadc5KpI" target="_blank"><img src="https://imgs.xkcd.com/comics/set_theory.png" width="100%"></a>
        </td>
        <td width="2%" style="border:none;vertical-align:top">

        </td>
        <td width="70%" style="border:none;vertical-align:top;">
<a href="https://youtu.be/s86-Z-CbaHA" target="_blank"><img src="https://imgs.xkcd.com/comics/pumpkin_carving.png" width="100%"></a>
        </td>
    </tr>
</table>
<br>
Image credit: <a href="http://www.xkcd.com" target="_blank">XKCD</a>
</div>

## Cardinality and information
Recall that information is determining one state/possibility among a set of states/possibilities. The cardinality of the set has implications on whether we can represent the corresponding information on a computer.
- If the set of possibilities is countable, information can be represented on a computer (or a piece of paper). That is, given sufficient memory, we can store the information.
- If the set is uncountable, like real numbers, there are going to be some possibilities for which we do not have a representation and cannot be stored on any computer. 
<div class="exercise">
  Write a question that you still have about this section.
</div>
<br/>

