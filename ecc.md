---
layout: course-moi 
usemathjax: true
useJSXGraph: true
---
# Linear Algebra, Linear Codes
In this section we will introduce linear codes, a type of error-correcting codes based on linear algebra over finite fields with conceptual and computational nice properties. We will start by reviewing linear algebra over finite fields, and especially paying attention to the null space of matrices. We will then define linear codes in terms of the null space of _parity check_ matrices or the column space of the _generator matrix_. We will discuss the error-correction capabilities of linear codes and show how decoding is performed. Finally, we will introduce some common and important linear codes.

## Linear algebra over finite fields

So far we have focused on vector spaces where the elements of vectors
and matrices are real numbers. But digital codes live in discrete spaces. We need to work with vectors whose elements come from finite fields. The simplest case is binary vectors and matrices like:

$$A = \begin{pmatrix}
\begin{matrix}
1 & 0 \\
0 & 0 \\
1 & 1 \\
\end{matrix} & \begin{matrix}
0 & 1 \\
1 & 1 \\
0 & 1 \\
\end{matrix} \\
\end{pmatrix},\qquad x = \left( 1,0,1,0 \right)$$

### Matrix algebra over finite field

<div class="exercise">
	<button  onclick="showSolution(this,'FFLin')" style="float:right;">Show Solution</button>
    Consider $A$ and $x$ given  below. Computation is performed based on <a href="fields.html#bbf2">$\mathbb{F}_{2}$ rules</a>. Find $Ax$.

<!-- {:.tabDefault}
| $\oplus$ | 0 | 1 |
|:---|:--|:--|
|0|0|1|
|1|1|0|
 -->
$$A = \begin{pmatrix}
\begin{matrix}
1 & 0 \\
0 & 0 \\
1 & 1 \\
\end{matrix} & \begin{matrix}
0 & 1 \\
1 & 1 \\
0 & 1 \\
\end{matrix} \\
\end{pmatrix},\qquad x = \begin{pmatrix}
1 \\
0 \\
1 \\
0 \\
\end{pmatrix}$$
	<div id="FFLin" style="display:none;" class="solution">
Recall: We can multiply this matrix by a vector x by expressing theresult as a linear combination of column vectors:


\begin{align*}
Ax &= \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}x_{1} \oplus \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix}x_{2} \oplus \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}x_{3} \oplus \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix}x_{4} \\
&=
\begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} + \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix}
\end{align*}

	</div>
</div>
<br/>

<div class="exercise">
	<button  onclick="showSolution(this,'FFLin2')" style="float:right;">Show Solution</button>
	Find $By$ and $z^T B$ in $\mathbb F_3$, where
	$$
	B = \begin{pmatrix}1&2&0\\0&2&1\end{pmatrix}, \qquad y = \begin{pmatrix}1\\0\\1\end{pmatrix}, \qquad z = \begin{pmatrix}1\\2\end{pmatrix}.
	$$
	<div id="FFLin2" style="display:none;" class="solution">
		\begin{align*}
By & =\begin{pmatrix}1\\
0
\end{pmatrix}\oplus\begin{pmatrix}0\\
1
\end{pmatrix}=\begin{pmatrix}1\\
1
\end{pmatrix}\\
zB & =\begin{pmatrix}1 & 2\end{pmatrix}\begin{pmatrix}1&2&0\\0&2&1\end{pmatrix}=\begin{pmatrix}1 & 2 & 0\end{pmatrix}\oplus2\begin{pmatrix}0 & 2 & 1\end{pmatrix}=\begin{pmatrix}1 & 2 & 0\end{pmatrix}\oplus\begin{pmatrix}0 & 1 & 2\end{pmatrix}=\begin{pmatrix}1 & 0 & 2\end{pmatrix}
\end{align*} 
	</div>
</div>
<br/>

<div class="exercise">
	In $\mathbb F_5$ compute $A\ominus B$ and $AB$, where 
	$$A = \begin{pmatrix}1&2\\3&4\end{pmatrix},\qquad B = \begin{pmatrix}1&3\\2&4\end{pmatrix}.$$
</div>
<br/>

### Row space, column space, and null space
The row space, column space, and null space in a finite field $$\mathbb F$$ are defined in the same way as matrices over real numbers. In particular, the row space is the span of the rows of the matrix, i.e., the set of all linear combinations of the rows of the matrix, where the coefficients are also from $$\mathbb F$$ and all computations are performed in $$\mathbb F$$. For example, consider

$$A=\begin{pmatrix}1&3&4\\2&2&3\end{pmatrix}$$

in $$\mathbb F_5$$. Then the following is a linear combination of the rows of $$A$$:

$$\begin{pmatrix}3&2\end{pmatrix} \begin{pmatrix}1&3&4\\2&2&3\end{pmatrix}=3\begin{pmatrix}1&3&4\end{pmatrix}\oplus 2\begin{pmatrix}2&2&3\end{pmatrix}=\begin{pmatrix}3&4&2\end{pmatrix}\oplus \begin{pmatrix}4&4&1\end{pmatrix}=\begin{pmatrix}2&3&3\end{pmatrix}$$

Note that multiplying a row vector from the left yields a linear combination of the rows and multiplying a column vector from the right yields a linear combination of the columns.

We can find the fundamental spaces similar to real matrices. To find the **row space**, we start by multiplying the first row by a scalar to make the first element of the first row into 1. Then we add appropriate scaled versions of the first row to the other rows to make their first element 0. Then we move to the second element of the second row and so on. 

For example, a reduced basis for the row space of the matrix $B$ 

$$B = \begin{pmatrix}2&3&4\\2&2&3\end{pmatrix}$$

is obtained as

<div>
\begin{equation}\label{eq:rowBasis}
\begin{pmatrix}
2 & 3 & 4\\
2 & 2 & 3
\end{pmatrix}\xrightarrow{R_{1}\to3R_{1}}
\begin{pmatrix}
\color{brown}{1} & 4 & 2\\
2 & 2 & 3
\end{pmatrix}\xrightarrow{R_{2}\to R_{2}+3R_{1}}
\begin{pmatrix}
\color{brown}{1} & 4 & 2\\
\color{brown}{0 }& 4 & 4
\end{pmatrix}\xrightarrow{R_{2}\to R_{2}/4}
\begin{pmatrix}
\color{brown}{1} & 4 & 2\\
\color{brown}{0} & \color{brown}{1} & 1
\end{pmatrix}\xrightarrow{R_{1}\to R_{1}+R_{2}}
\begin{pmatrix}
\color{brown}{1} & \color{brown}{0} & 3\\
\color{brown}{0} & \color{brown}{1} & 1
\end{pmatrix}
\end{equation}
</div>

where in the first step, we have replaced the first row by $3\times$ the first row. Note that part of the resulting matrix is the <span style="color:brown">identity matrix</span>. The rows of this matrix form a basis for the row spaces. So we can write the row space as 

$$\left\{ \begin{pmatrix}x_1&x_2&3x_1+x_2\end{pmatrix}: x_1,x_2\in \mathbb F_4 \right\}.$$

Unlike the spaces of matrices with real elements, spaces of finite field matrices are, well, finite. The row space above has in fact 25 vectors in it. These are listed below, where for brevity we have dropped the parentheses and spaces:

$$
000,011,022,033,044,\\
103,114,120,131,142,\\
201,212,223,234,240,\\
304,310,321,332,343,\\
402,413,424,430,441.
$$

Now let us find the **null space** of this matrix. We can use the matrix obtained in \eqref{eq:rowBasis} to do so. But for our purpose, it is better to find a matrix which has the identity on its right side. To achieve this, we start from the last element of the last column and make it into a 1. Then we make the elements above this 1 into 0 and proceed backward:

$$
\begin{pmatrix}
2 & 3 & 4\\
2 & 2 & 3
\end{pmatrix}\xrightarrow{R_{2}\to2R_{2}}
\begin{pmatrix}
2 & 3 & 4\\
4 & 4 & \color{brown}{1}
\end{pmatrix}\xrightarrow{R_{1}\to R_{1}+R_{2}}
\begin{pmatrix}
1 & 2 & \color{brown}{0}\\
4 & 4 & \color{brown}{1}
\end{pmatrix}\xrightarrow{R_{1}\to3R_{1}}
\begin{pmatrix}
3 & \color{brown}{1} & \color{brown}{0}\\
4 & 4 & \color{brown}{1}
\end{pmatrix}\xrightarrow{R_{2}\to R_{1}+R_{2}}
\begin{pmatrix}
3 & \color{brown}{1} & \color{brown}{0}\\
2 & \color{brown}{0} & \color{brown}{1}
\end{pmatrix}
$$

The elements of the null space then satisfy

$$
\begin{pmatrix}
3 & \color{brown}{1} & \color{brown}{0}\\
2 & \color{brown}{0} & \color{brown}{1}
\end{pmatrix}
\begin{pmatrix}x_1\\\color{brown}{x_2}\\\color{brown}{x_3}\end{pmatrix}.
$$

We can write the elements that correspond to the identity part of the matrix in terms of the other ones:

$$
x_2 = -3x_1 = 2x_1\\
x_3 = -2x_1 = 3x_1.
$$

So the null space is 

$$NS(B) = \left\{\begin{pmatrix}x_1\\2x_1\\3x_1\end{pmatrix}:x_1\in\mathbb F_5\right\}=\{000,123,241,314,432\}.$$

Finally, a generator for the null space is 

$$G = \begin{pmatrix}1\\2\\3\end{pmatrix},\qquad NS(B) = \left\{G x_1: x_1 \in \mathbb F_5\right\}.$$

<div class="exercise">
	Find a basis for the null space and a generator matrix for each of the following matrices in $\mathbb F_5$:
$$A=\begin{pmatrix}1&3&4\\2&2&3\end{pmatrix},\qquad B=\begin{pmatrix}1&3&4\\2&1&3\end{pmatrix}.$$
</div>
<br/>

<div class="exercise">
	<button  onclick="showSolution(this,'LinFF3')" style="float:right;">Show Solution</button>
Find the null space of $$A = \begin{pmatrix}
210010 \\
211222 \\
110001 \\
\end{pmatrix}$$ in $\mathbb{F}_{3}$ (spaces between the elements are omitted in the matrix above). Also, find the generator matrix.
	<div id="LinFF3" style="display:none;" class="solution">
		$$\begin{pmatrix}
210010 \\
211222 \\
110001 \\
\end{pmatrix}\xrightarrow{R_{2} \rightarrow R_{2} + R_{3}}\begin{pmatrix}
210010 \\
021220 \\
110001 \\
\end{pmatrix}\xrightarrow{R_{2} \rightarrow 2R_{2}}\begin{pmatrix}
210010 \\
012110 \\
110001 \\
\end{pmatrix}$$

$$\xrightarrow{R_{1} \rightarrow R_{1} + 2R_{2}}\begin{pmatrix}
201200 \\
012110 \\
110001 \\
\end{pmatrix}\xrightarrow{R_{1} \rightarrow 2R_{1}}\begin{pmatrix}
102100 \\
012110 \\
110001 \\
\end{pmatrix}\xrightarrow{R_{2} \rightarrow R_{2} + 2R_{1}}\begin{pmatrix}
102100 \\
210010 \\
110001 \\
\end{pmatrix}$$

$$NS(A):\begin{pmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
-x_{1} - 2x_{3} \\
-2x_{1} - x_{2} \\
-x_{1} - x_{2} \\
\end{pmatrix} = \begin{pmatrix}
1 \\
0 \\
0 \\
-1 \\
-2 \\
-1 \\
\end{pmatrix}x_{1} + \begin{pmatrix}
0 \\
1 \\
0 \\
0 \\
-1 \\
-1 \\
\end{pmatrix}x_{2} + \begin{pmatrix}
0 \\
0 \\
1 \\
-2 \\
0 \\
0 \\
\end{pmatrix}x_{3} = \begin{pmatrix}
100 \\
010 \\
001 \\
201 \\
120 \\
220 \\
\end{pmatrix}\begin{pmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
\end{pmatrix}$$
	</div>
</div>
<br/>


## Linear Codes

<div style="float: right;">
<table class="tabDefault" id="alincode">
<tbody>
<tr>
<td><span><strong>Message</strong></span></td>
<td><span><strong>Codeword</strong></span></td>
</tr>
<tr>
<td><span style="color: #16a53f">000</span></td>
<td><span style="color: #16a53f">000</span><span style="color: #0b5ab2">000</span></td>
</tr>
<tr>
<td><span style="color: #16a53f">100</span></td>
<td><span style="color: #16a53f">100</span><span style="color: #0b5ab2">110</span></td>
</tr>
<tr>
<td><span style="color: #16a53f">010</span></td>
<td><span style="color: #16a53f">010</span><span style="color: #0b5ab2">101</span></td>
</tr>
<tr>
<td><span style="color: #16a53f">001</span></td>
<td><span style="color: #16a53f">001</span><span style="color: #0b5ab2">011</span></td>
</tr>
<tr>
<td><span style="color: #16a53f">110</span></td>
<td><span style="color: #16a53f">110</span><span style="color: #0b5ab2">011</span></td>
</tr>
<tr>
<td><span style="color: #16a53f">101</span></td>
<td><span style="color: #16a53f">101</span><span style="color: #0b5ab2">101</span></td>
</tr>
<tr>
<td><span style="color: #16a53f">011</span></td>
<td><span style="color: #16a53f">011</span><span style="color: #0b5ab2">110</span></td>
</tr>
<tr>
<td><span style="color: #16a53f">111</span></td>
<td><span style="color: #16a53f">111</span><span style="color: #0b5ab2">000</span></td>
</tr>
</tbody>
</table>
</div>
### From linear equations to the parity-check matrix


Recall the _binary_ code constructed as follows:

- Codeword: $\color{green}{x_{1}x_{2}x_{3}}\color{blue}{x_{4}x_{5}x_{6}}$
- Information bits: $\color{green}{x_{1}x_{2}x_{3}}$
- Parity bits: 
$$\begin{cases}
\color{blue}{x_{4}} = \color{green}{x_{1}} \oplus \color{green}{x_{2}} \\
\color{blue}{x_{5}} = \color{green}{x_{1}} \oplus \color{green}{x_{3}} \\
\color{blue}{x_{6}} = \color{green}{x_{2}} \oplus \color{green}{x_{3}} \\
\end{cases}$$



At the receiver, we check these three equations defining the parity bits. If they all hold, we declare that no error has occurred. But if at least one of these is not satisfied, we know an error has occurred. For example, suppose 101110 is received. Then 

$1 = 1\oplus 0$ ???<br>
$1 \neq 1\oplus 1$ ??? <br>
$0 \neq 0\oplus 1$ ??? 

So we know an error has occurred, but which bit is erroneous?

Linear algebra will be helpful for answering this question.


Note that the set of equations defining this code can be written as 

$$ \begin{cases}
\color{green}{x_{1}} \oplus \color{green}{x_{2}} \oplus \color{blue}{x_{4}} = 0 \\
\color{green}{x_{1}} \oplus \color{green}{x_{3}} \oplus \color{blue}{x_{5}} = 0 \\
\color{green}{x_{2}} \oplus \color{green}{x_{3}} \oplus \color{blue}{x_{6}} = 0 \\
\end{cases}$$

We can write these as a matrix equation:

$$\begin{cases}
\color{green}{x_{1}} \oplus \color{green}{x_{2}} \oplus \color{blue}{x_{4}} = 0 \\
\color{green}{x_{1}} \oplus \color{green}{x_{3}} \oplus \color{blue}{x_{5}} = 0 \\
\color{green}{x_{2}} \oplus \color{green}{x_{3}} \oplus \color{blue}{x_{6}} = 0 \\
\end{cases} \Longleftrightarrow 
\begin{pmatrix}
\color{green}{1} & \color{green}{1} & 0 & \color{blue}{1} & 0 & 0 \\
\color{green}{1} & 0 & \color{green}{1} & 0 & \color{blue}{1} & 0 \\
0 & \color{green}{1} & \color{green}{1} & 0 & 0 & \color{blue}{1} \\
\end{pmatrix}
\begin{pmatrix}
\color{green}{x_{1}} \\
\color{green}{x_{2}} \\
\begin{matrix}
\color{green}{x_{3}} \\
\color{blue}{x_{4}} \\
\color{blue}{x_{5}} \\
\color{blue}{x_{6}} \\
\end{matrix} \\
\end{pmatrix} = 0$$

We can thus define this code as the set of vectors $x$ such that $Hx = 0$, where

$$H = \begin{pmatrix}
\color{green}{1} & \color{green}{1} & 0 & \color{blue}{1} & 0 & 0 \\
\color{green}{1} & 0 & \color{green}{1} & 0 & \color{blue}{1} & 0 \\
0 & \color{green}{1} & \color{green}{1} & 0 & 0 & \color{blue}{1} \\
\end{pmatrix}$$

$H$ is called a parity check matrix. The code defined by $H$ is the vectors in its **null space**.

We can use $H$ to check the parity equations. For our previous example, in which 101110 was received,

$$H\begin{pmatrix}1\\0\\1\\1\\1\\0\end{pmatrix} = \begin{pmatrix}1\\1\\0 \end{pmatrix}\oplus \begin{pmatrix}0\\1\\1\end{pmatrix} \oplus \begin{pmatrix}1\\0\\0 \end{pmatrix}\oplus \begin{pmatrix}0\\1\\0\end{pmatrix} = \begin{pmatrix}0\\1\\1\end{pmatrix}.$$

Since the answer is not $\mathbf 0$, an error has occurred. We will see later how the matrix $H$ can help us find which bit is erroneous. But for the moment, let us more closely study the codes defined in this way, which are called linear codes.


<div class="highlight">
A <strong>linear code</strong> is the set of vectors in the null space of a matrix $H$, called the parity check matrix. That is, for a matrix $H$, the code 
$$C=\{x:Hx=0\}$$
is a linear code.
</div>

<br>

Why are the codes defined based on the null space of a matrix called linear codes? Because they satisfy the linear properties:
- If $x$ and $y$ are codewords, then $x\oplus y$ is also a code word.
 
  $$Hx=0,Hy=0\Rightarrow H(x\oplus y) = Hx\oplus Hy = 0.$$

- If $x$ is a codeword, then $ax$ is also a codeword for any $a\in \mathbb F$. 
 
   $$H(ax) = aHx = \mathbf 0.$$

<br>

The parity check matrix for the code is of the form
$H = \left( \color{green}{A} \vert \color{blue}{I} \right)$ where

$$\color{green}{A} = \begin{pmatrix}
\color{green}{1} & \color{green}{1} & 0 \\
\color{green}{1} & 0 & \color{green}{1} \\
0 & \color{green}{1} & \color{green}{ 1}\\
\end{pmatrix} \text{ and } \color{blue}{I} = \begin{pmatrix}
\color{blue}{1} & 0 & 0 \\
0 & \color{blue}{1} & 0 \\
0 & 0 & \color{blue}{1} \\
\end{pmatrix}$$

In general this form makes finding the parity equations easy:

$$H = \left( {\color{green}{A}}_{\left( {\color{green}{n}} - {\color{green}{k}} \right) \times {\color{green}{k}}} \middle| 
{\color{blue}{I}}_{\left( {\color{blue}{n}} - {\color{blue}{k}} \right) \times \left( {\color{blue}{n}} - {\color{blue}{k}} \right)} \right)$$

+ $A$ is arbitrary and $I$ is the identity matrix
+ $n$ is the length of the code (6 above)
+ $k$ is the number of message bits (3 above)
+ $n - k$ is the number of parity bits (3 above)


Unless otherwise stated, we assume the codes are binary and we work in $\mathbb F_2$.

<div class="exercise">
	<button  onclick="showSolution(this,'repCode')" style="float:right;">Show Solution</button>
	
Find the parity equations for the code defined by $H$,

$$H = \begin{pmatrix}
1 & 1 & 0& 0& 0\\
1 & 0& 1 &0 & 0\\
1 & 0& 0& 1 & 0\\
1 & 0& 0& 0&  1\\
\end{pmatrix}.$$
Determine all the codewords.
	<div id="repCode" style="display:none;" class="solution">
The parity equations are: $x_{1} \oplus x_{2} = 0, x_{1} \oplus x_{3} = 0,x_{1} \oplus x_{4} = 0$. These mean that$x_{1} = x_{2} = x_{3} = x_{4}$. So the codewords are $0000$ and $1111$ This is the quadruple redundancy code!	</div>
</div>
<br/>

<div class="exercise">
	<button  onclick="showSolution(this,'epCode')" style="float:right;">Show Solution</button>
Find the code defined by $H$
$$H = \begin{pmatrix}
1 & 1 & 1 & 1 \\
\end{pmatrix}.$$
	<div id="epCode" style="display:none;" class="solution">
     The parity equation is $x_1 \oplus x_2 \oplus x_3 \oplus x_4 =0$, or equivalently, $x_4 = x_1\oplus x_2\oplus x_3$. Hence, this is the even-parity code.
	</div>
</div>
<br/>



<!-- $$\begin{pmatrix}
x_1 \\
x_2 \\
x_3 \\
x_1 \oplus x_2 \oplus x_3
\end{pmatrix}
\rightarrow
G = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 1 & 1 \\
\end{pmatrix}
$$ -->


As demonstrated by the next example, the parity check matrix doesn't need to be necessarily of the form $(A\vert I)$. If it is not, we can make it so using elementary row operations, which do not alter the null space.


<div class="exercise">
	<button  onclick="showSolution(this,'2mats')" style="float:right;">Show Solution</button>
	Find and compare the codes (find all codewords) defined by $H_{1}$ and $H_{2}$? (Spaces are omitted.)
$$H_{1} = \begin{pmatrix}
1010 \\
1101 \\
\end{pmatrix},\qquad H_{2} = \begin{pmatrix}
0111 \\
1101 \\
\end{pmatrix}$$
	<div id="2mats" style="display:none;" class="solution">
		Let us find the code corresponding to $H_1$. The parity equations are $x_3 = x_1, x_4 = x_1\oplus x_2$. The codewords are 
	$$\{0000,0101,1011,1110\}.$$

	To find the null space of $H_2$, let us find a basis for it since $H$ is not of the form $(A\vert I)$.
	$$H_2\xrightarrow{R_1\to R_1\oplus R_2}H_1.$$ So the null spaces of $H_1$ and $H_2$ are the same. Thus they give the same code. 
	</div>
</div>
<br/>
<br>

<div class="exercise">
Find the parity check equations and the codewords of the code defined by $$H = \begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 0 & 1 & 1 \\
1 & 0 & 0 & 1 \\
\end{pmatrix}$$
</div>

### The generator matrix and encoding

Recall that a linear code is defined as the null space of a matrix $H$. We can also find a matrix $G$ such that the code is the column space of $G$. That is $G$ is a generator for the null space of $H$. 

Example: consider the code with message bits $x_1,x_2,x_3$ and parity bits $x_4,x_5,x_6$ with the parity check matrix $H$,

$$H = \begin{pmatrix}
\color{green}{1} & \color{green}{1} & 0 & \color{blue}{1} & 0 & 0 \\
\color{green}{1} & 0 & \color{green}{1} & 0 & \color{blue}{1} & 0 \\
0 & \color{green}{1} & \color{green}{1} & 0 & 0 & \color{blue}{1} \\
\end{pmatrix} \Rightarrow \begin{cases}
\color{green}{x_{1}} \oplus \color{green}{x_{2}} \oplus \color{blue}{x_{4}} = 0 \\
\color{green}{x_{1}} \oplus \color{green}{x_{3}} \oplus \color{blue}{x_{5}} = 0 \\
\color{green}{x_{2}} \oplus \color{green}{x_{3}} \oplus \color{blue}{x_{6}} = 0 \\
\end{cases}$$

So the null space, i.e., the code, is the set of vectors of the form:

$$
C = \left\{\ \begin{pmatrix}
\color{green}{x_{1}} \\
\color{green}{x_{2}} \\
\color{green}{x_{3}} \\
\color{blue}{x_{1}} + \color{blue}{x_{2}} \\
\color{blue}{x_{1}} + \color{blue}{x_{3}} \\
\color{blue}{x_{2}} + \color{blue}{x_{3}} \\
\end{pmatrix} 
: x_1,x_2,x_3\in \mathbb F_2\right\}.
$$

But note that 

$$
\begin{pmatrix}
\color{green}{x_{1}} \\
\color{green}{x_{2}} \\
\color{green}{x_{3}} \\
\color{blue}{x_{1}} + \color{blue}{x_{2}} \\
\color{blue}{x_{1}} + \color{blue}{x_{3}} \\
\color{blue}{x_{2}} + \color{blue}{x_{3}} \\
\end{pmatrix} 
= 
\begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
1 \\
0 \\
\end{pmatrix}x_{1} \oplus \begin{pmatrix}
0 \\
1 \\
0 \\
1 \\
0 \\
1 \\
\end{pmatrix}x_{2} \oplus \begin{pmatrix}
0 \\
0 \\
1 \\
0 \\
1 \\
1 \\
\end{pmatrix}x_{3} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 1 \\
\end{pmatrix}\begin{pmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
\end{pmatrix}.$$

If we define $G$ as 

$$G = \begin{pmatrix}
\color{blue}{1} & 0 & 0 \\
0 & \color{blue}{1} & 0 \\
0 & 0 & \color{blue}{1} \\
\color{green}{1} & \color{green}{1} & 0 \\
\color{green}{1} & 0 & \color{green}{1} \\
0 & \color{green}{1} & \color{green}{1} \\
\end{pmatrix},$$

Then 

$$
C = \left\{G\begin{pmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
\end{pmatrix}: x_1,x_2,x_3\right\}.
$$

In fact, for every set of message bits $x_1,x_2,x_3$, the corresponding codeword is given by $Gx$. For example, 

$$G\begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 1 \\
\end{pmatrix}\begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
1 \\
0 \\
\end{pmatrix} \oplus \begin{pmatrix}
0 \\
1 \\
0 \\
1 \\
0 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
0 \\
0 \\
1 \\
1 \\
\end{pmatrix}$$

<div class="exercise">
Find $HG$ for the previous example.
</div> 
<br>

<div class="exercise">
<button onclick="showSolution(this,'genmat')" style="float:right;">Show Solution</button>
Find the generator matrix and then all codewords for
$$H = \begin{pmatrix}
0111 \\
1101 \\
\end{pmatrix}$$

<div id="genmat" style="display:none;" class="solution">
Subtracting second row from the first row: $$\begin{pmatrix}
1010 \\
1101 \\
\end{pmatrix} \Rightarrow \begin{cases}
x_{3} = x_{1} \\
x_{4} = x_{1} + x_{2} \\
\end{cases}$$
The null space: $$\begin{pmatrix}
x_{1} \\
x_{2} \\
x_{1} \\
x_{1} + x_{2} \\
\end{pmatrix} = \begin{pmatrix}
1 \\
0 \\
1 \\
1 \\
\end{pmatrix}x_{1} + \begin{pmatrix}
0 \\
1 \\
0 \\
1 \\
\end{pmatrix}x_{2} \Rightarrow G = \begin{pmatrix}
10 \\
01 \\
10 \\
11 \\
\end{pmatrix}$$


$$G\begin{pmatrix}
0 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
0 \\
0 \\
\end{pmatrix}, G\begin{pmatrix}
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
0 \\
1 \\
1 \\
\end{pmatrix},G\begin{pmatrix}
0 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
1 \\
0 \\
1 \\
\end{pmatrix}, G \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
1 \\
0 \\
\end{pmatrix}.$$

</div>
</div>

#### A linear code over $\mathbb{F}_{3}$
Let $H$ be the parity check matrix of a code in $F_3$,

$$H = \begin{pmatrix}
1 & 1 & 1 & 0 \\
1 & 2 & 0 & 1 \\
\end{pmatrix}.$$

The null space:

$$\begin{pmatrix}
1 & 1 & 1 & 0 \\
1 & 2 & 0 & 1 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
x_{1} \\
x_{2} \\
x_{1} + x_{2} \\
x_{1} + 2x_{2} \\
\end{pmatrix} = \begin{pmatrix}
\begin{matrix}
1 \\
0 \\
1 \\
1 \\
\end{matrix} & \begin{matrix}
0 \\
1 \\
1 \\
2 \\
\end{matrix} \\
\end{pmatrix}\begin{pmatrix}
x_{1} \\
x_{2} \\
\end{pmatrix} \Rightarrow G = \begin{pmatrix}
\begin{matrix}
1 \\
0 \\
1 \\
1 \\
\end{matrix} & \begin{matrix}
0 \\
1 \\
1 \\
2 \\
\end{matrix} \\
\end{pmatrix}$$

Example codeword = $$G\begin{pmatrix}
1 \\
2 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
2 \\
0 \\
2 \\
\end{pmatrix}$$

<div class="highlight" markdown=1>
### Properties of linear codes

<ol>
	<li>$x$ is a codeword if and only if $Hx = 0$</li>
<li> If $H$ is of the systematic form 

$$H_{(n-k)\times n} = \left( {\color{green}{A}}_{\left( {\color{green}{n}} - {\color{green}{k}} \right) \times {\color{green}{k}}} \middle| 
{\color{blue}{I}}_{\left( {\color{blue}{n}} - {\color{blue}{k}} \right) \times \left( {\color{blue}{n}} - {\color{blue}{k}} \right)} \right),$$

then the codewords look like

$$x = \color{green}{\underset{message}{\underbrace{x_{1}\cdots x_{k}}}}\color{blue}{\underset{parity}{\underbrace{x_{k + 1}\cdots x_{n}}}},$$

where $n$ is the length of the code and $k$ is the number of its message bits. $k$ is also called the dimension of the code as it is the dimension of the null space.
</li>
<li> When $H$ has the systematic form above, we can find a generator matrix $G$,
$$G_{n\times k} = \left(\begin{array}{c}
I_{k}\\
-A_{\left(n-k\right)\times k}
\end{array}\right)$$
and encoding can be performed by
$$\begin{pmatrix}\color{green}{x_1\\\vdots\\x_k}\\\color{blue}{x_{k+1}\\\vdots\\ x_n}\end{pmatrix} = G \begin{pmatrix}\color{green}{x_1\\ \vdots \\ x_k}\end{pmatrix}.$$</li>
<li> Linear codes can be defined over any finite field (not limited to
$\mathbb{F}_{2}$)</li>
<li> Linearity: if $x$ and $y$ are codewords, then $ax$, $x + y$, and $x - y$ are also codewords</li>
</ol>
</div>

When $H$ is not in systematic form, if it is of size $\left( n - k \right) \times n$ and has $n - k$
linearly independent rows, then there are $k$ message bits and
$n - k$ parity bits, each resulting from one row of $H$.


## Error-correction and decoding of linear codes

### Hamming distance and Hamming weight

Recall: _Hamming distance_ is the number of positions in which two
codewords are different $$d_{H}\left( \mathbf{1}0\mathbf{0}11,\mathbf{0}0\mathbf{1}11 \right) = 2$$.

Definition: _Hamming weight_ of a codeword is the number of its nonzero
elements $$w_{H}\left( 10011 \right) = 3$$.

What is the relationship between the two? $d_{H}\left( x, y \right) = w_{H}\left( x - y \right)$. Note that for binary $x - y = x \oplus y$.

<div class="exercise">
<button onclick="showSolution(this,'hamd')" style="float:right;">Show Solution</button>
Find $d_{H}\left( 10011,00111 \right)$.
<div id="hamd" style="display:none;" class="solution">
$$d_{H}\left( 10011,00111 \right) = w_{H}\left( x - y \right) = w_{H}\left( x \oplus y \right) = w_{H}\left( 10100 \right) = 2$$
</div>
</div>

### Minimum distance of linear codes

Recall: The minimum distance of a code is the smallest distance between
two codewords

Do we need to compute the distance between every pair of codewords? No!

Claim: The minimum distance of a linear code is the smallest weight of a
codeword

- Suppose $x,y$ have the smallest distance
- $d_{H}\left( x,y \right) = w_{H}(x - y)$
- But $z = x - y$ is a codeword

<div class="exercise">
	<button  onclick="showSolution(this,'minDist')" style="float:right;">Show Solution</button>
	What is the minimum distance of the code given by $H$,
	$$
	H_{1} = \begin{pmatrix}
	1010 \\
	1101 \\
	\end{pmatrix}.
	$$
	<div id="minDist" style="display:none;" class="solution">
		The generator matrix is 
		$$
		G = 
		\begin{pmatrix}1&0\\
		0&1\\
		1&0\\
		1&1
		\end{pmatrix}.
		$$
		So the codewords are $\{0000,1011,0101,1110\}$. The smallest weight of a nonzero codeword is 2, which is also the minimum Hamming distance.
	</div>
</div>
<br/>

<div class="exercise" markdown=1>
What is the minimum distance of the [code discussed before](#alincode) with $H$ as shown below?

$$H = \begin{pmatrix}
1 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 & 1 \\
\end{pmatrix}$$

</div>

What does our previous claim mean in terms of the parity check matrix $H$? The smallest weight of a codeword is the smallest number $d$ such that there are $d$ columns in $H$ whose linear combination is 0.

For the matrix $H$ of the previous exercise:
- No column is 0 $\Rightarrow d > 1$
- No two column add to $0 \Rightarrow d > 2$
- Adding columns 1, 2, and 3 gives 0 $\Rightarrow d = 3$. 
- There are 3 linearly dependant columns.

What is the relationship between minimum distance and rank of $H$?
- If the rank is $r$, there are $r$ linearly independent columns
- If the minimum distance is $d$, every $d - 1$ columns are linearly
independent 
- Hence, $r \geq d - 1$ and so $d\le r+1$.

For the previous exercise, min distance is 3 and rank is also 3.

If the parity check matrix has dimensions $(n-k)\times n$, i.e., there are $n-k$ parity bits, then its rank is at most $n-k$ (why?). Hence, we find the following bound on the minimum distance of code:

<div class="highlight">
	<strong>The Singleton bound</strong>: The minimum distance of linear code satisfies $d\le n-k+1$.
</div>

<br>

<div class="exercise">
Verify that for the matrix of the previous exercise, the Singleton bound is satisfied.
</div>
<br/>




### Decoding and error correction

Suppose we receive a word $y$ at the receiver (or read it from a flash
drive). We know that there may have been errors. Assuming that the
number of errors are less than half of the minimum distance, we should
be able to correct them and find the transmitted codeword $x$. But how? This is the decoding problem.

It will be helpful to think of errors as adding a vector $e$ to $x$, $y = x + e$

<div style="float: right;"><img src="{{site.imgurl}}/xery.png" width="250px"></div>
Example:
- $x$ = 10001001
- $y$ = 10011001
- $e$ = 00010000

The number of errors equals to the weight of $e$


#### Parity check equations

Example: 

<div>
	\begin{equation}\label{eq:H}
	H = \begin{pmatrix}
1 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 & 1 \\
\end{pmatrix}.
\end{equation}
</div>

We receive $y = \text{101011}$. Is there any error? If so, what was sent?

We know that if no errors happened, then $y$ is equal to $x$ and satisfies the parity equations.
So we check to see if the parity equations are satisfied:

- $y_{1} + y_{2} + y_{4} = 1 + 0 + 0 = 1 \neq 0$ ??? 
- $y_{1} + y_{3} + y_{5} = 1 + 1 + 1 = 1 \neq 0$ ??? 
- $y_{2} + y_{3} + y_{6} = 0 + 1 + 1 = 0$ ??? 

This indicates that there was an error. But which is bit(s) is/are incorrect?

Recall that each row of the parity check matrix  corresponds to one parity equation. We can check all parity equations with matrix algebra by finding $s = Hy$. This is called the _syndrome_.

$$s = \begin{pmatrix}
1 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 & 1 \\
\end{pmatrix}\begin{pmatrix}
1 \\
0 \\
1 \\
0 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} + \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} + \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} + \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}$$

The first and second elements are nonzero, indicating first and second equations are not satisfied.

We can use this fact to find an equation which the unknown error vector must satisfy:

* We know that $y=x+e$ but both $x$ and $e$ are unknown.
* We can computed $s=Hy$. (So $s$ is known.)
* We also have $$ s = Hy = H\left( x + e \right) = Hx + He = He.$$

<div class="highlight">
So to find the error, we need to solve this equation for $e$: 

$$s = He.$$

</div>

If we can solve this equation, we can find $e$ and thus $x$.


For this example, we must solve this equation for $e$

$$He = s \Rightarrow \begin{pmatrix}
1 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 & 1 \\
\end{pmatrix}e = \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}$$

But how can we solve this equation? Is there a unique solution? To find out how to solve this, let's first see a couple of examples with known $e$.

<div class="exercise">
	<button  onclick="showSolution(this,'synsolve')" style="float:right;">Show Solution</button>
	Find $s = He$ for the following values of $e$: $$e_1 = 010000, e_2 = 000100, e_3=010001.$$
	<div id="synsolve" style="display:none;" class="solution">
	\begin{align*}	
He_1 &= \begin{pmatrix}
1 & \color{brown}{1} & 0 & 1 & 0 & 0 \\
1 & \color{brown}{0} & 1 & 0 & 1 & 0 \\
0 & \color{brown}{1} & 1 & 0 & 0 & 1 \\
\end{pmatrix}\begin{pmatrix}
0 \\
\color{brown}{1} \\
0 \\
0 \\
0 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
\color{brown}{1} \\
\color{brown}{0} \\
\color{brown}{1} \\
\end{pmatrix}
\\
\\
He_2 &= \begin{pmatrix}
1 & 1 & 0 & \color{green}{1} & 0 & 0 \\
1 & 0 & 1 & \color{green}{0} & 1 & 0 \\
0 & 1 & 1 & \color{green}{0} & 0 & 1 \\
\end{pmatrix}\begin{pmatrix}
0 \\
0 \\
0 \\
\color{green}{1} \\
0 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
\color{green}{1} \\
\color{green}{0} \\
\color{green}{0} \\
\end{pmatrix}\\
\\
\\
He_3 &= \begin{pmatrix}
1 & \color{blue}{1} & 0 & 1 & 0 & \color{red}{0} \\
1 & \color{blue}{0} & 1 & 0 & 1 & \color{red}{0} \\
0 & \color{blue}{1} & 1 & 0 & 0 & \color{red}{1} \\
\end{pmatrix}\begin{pmatrix}
0 \\
\color{blue}{1} \\
0 \\
0 \\
0 \\
\color{red}{1} \\
\end{pmatrix} = \begin{pmatrix}
\color{blue}{1} \\
\color{blue}{0} \\
\color{blue}{1} \\
\end{pmatrix}+\begin{pmatrix}
\color{red}{0} \\
\color{red}{0} \\
\color{red}{1} \\
\end{pmatrix}=\begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}
%\\
%\\
%He_4&=\begin{pmatrix}
%1 & 1 & 0 & 1 & 0 & 0 \\
%1 & 0 & 1 & 0 & 1 & 0 \\
%0 & 1 & 1 & 0 & 0 & 1 \\
%\end{pmatrix}\begin{pmatrix}
%0 \\
%1 \\
%1 \\
%0 \\
%1 \\
%0 \\
%\end{pmatrix} = \begin{pmatrix}
%1 \\
%0 \\
%1 \\
%\end{pmatrix} + \begin{pmatrix}
%0 \\
%1 \\
%1 \\
%\end{pmatrix} + \begin{pmatrix}
%0 \\
%1 \\
%0 \\
%\end{pmatrix} = \begin{pmatrix}
%1 \\
%0 \\
%0 \\
%\end{pmatrix}

	  \end{align*}
	</div>
</div>
<br/>

Base on the previous exercise, we make the following observations:
* The syndrome is equal to the sum of the columns of $H$ where the errors occurred.
* Multiple error vectors, perhaps with different number of errors in each, can lead to the same syndrome.

Back to the equation:

$$\begin{pmatrix}
1 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 & 1 \\
\end{pmatrix}e = \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}$$

The obvious solution is 100000, indicating an error in the first bit: $x = y - e = 101011 - 100000 = 001011$.

There are other solutions, but they all indicate more than one error:
011000, 000110,.... For example, if $x = 110011$ and $e = 011000$, then $y = 101011$ and
we get the same syndrome. If the probability of error is small $e = 100000$ is more likely
than $e = 011000$.

Example: Same $H$ but with $y =$100110.

The syndrome is 

$$s = \begin{pmatrix}
110100 \\
101010 \\
011001 \\
\end{pmatrix}y = \begin{pmatrix}
0 \\
0 \\
0 \\
\end{pmatrix}\Rightarrow\begin{pmatrix}
110100 \\
101010 \\
011001 \\
\end{pmatrix}e = \begin{pmatrix}
0 \\
0 \\
0 \\
\end{pmatrix}.$$

We declare no error, since $e = 000000$ is a solution.
Could there be an undetected error? Yes, if $e$ is equal to any nonzero codeword, the error will not be
detected. For example, $x = \text{01111}\text{0}$ and $e = 111000$, then $y = 100110$ and $s = Hy = 0$. But if the probability of error is small, $e = 111000$ is far more unlikely than $e = 000000$.

Syndrome decoding summary:

1.  Compute $s = Hy$
2.  If $s = 0$, declare no error!
3.  If $s \neq 0$, solve $He = s$ for $e$. There will be many possible solutions; we find the one with the smallest weight (smallest number of errors, most likely case).
4.  Find $x = y \ominus e$


<div class="exercise">
	<button  onclick="showSolution(this,'decoding')" style="float:right;">Show Solution</button>
	Consider the code given by the check matrix $H$,
	$$H = \begin{pmatrix}
1 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 & 1 \\
\end{pmatrix}.$$ Find the inptu $x$ for each of the following received bit sequences. If multiple error vectors with the same weight are possible, finding one is sufficient.
	<ul>
		<li>$y_1 = 100110$.</li>
		<li>$y_2 = 110111$</li>
		<li>$y_3 = 100001$</li>
		<li>$y_4 = 001010$</li>
	</ul>
	<div id="decoding" style="display:block;" class="solution">
		\begin{align*}
			s_1 &= Hy_1 = \begin{pmatrix}0\\0\\0\end{pmatrix},\\
			s_2 &= Hy_2 = \begin{pmatrix}1\\0\\0\end{pmatrix},\\
			s_3 &= Hy_3 = \begin{pmatrix}1\\1\\1\end{pmatrix}.
		\end{align*}
		$s_1$ indicates no errors. So $x_1 = y_1$.<br>
		$s_2$ is equal to the fourth column of $H$. So $e=000100$ is the most likely choice (only a single error). $x_2 = y \ominus e=y \oplus e = 100101$.<br>
		$s_3$ is not equal to any column. So a single error is not possible. There are multiple error vectors with two errors, including $e=010010$, in which case $x_3 = y_3\oplus 010010 = 110011$.<br>
		The last case is left to you.
	</div>
</div>
<br/>
<div class="exercise">
Pick a message and encode it (choose the corresponding codeword) using the table and transmit to your friend:
- with 1 error
- with 2 errors
- with 3 errors

Like previous exercise, except perform decoding using the generator matrix

$$x = \begin{pmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
x_{4} \\
x_{5} \\
x_{6} \\
\end{pmatrix} = G\begin{pmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
\end{pmatrix},$$

$$G = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 1 \\
\end{pmatrix}$$

Using the provided parity check matrix, determine the intended codeword, assuming the smallest number of errors that give the received word.

$$H = \begin{pmatrix}
1 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 & 1 \\
\end{pmatrix}$$
</div>

## Famous codes!

### Hamming Codes

If $e$ has at most one 1, what is the condition for being able to solve $He = s$?
If the $j$th position in $e$ is 1, then $He$ is equal to the $j$th column of $H$
To be able to find $j$, *the columns of* $H$ *must be distinct (and nonzero)*.
Let's construct such a parity check matrix when there are three parity bits (H has three rows)

$$H = \begin{pmatrix}
1 & 1 & 0 & 1 & 1 & 0 & 0 \\
1 & 0 & 1 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 1 & 0 & 0 & 1 \\
\end{pmatrix}$$

What is the minimum distance?
- $d \geq 3$, since it can correct any single error
- $d \leq 3$, since $x = 1110000$ is a Codeword
- $d = 3$

This is the (7,4,3)-Hamming code, since it has length $n = 7,k = 3$ message bits, and min dist $d = 3$ Possible codewords of the (7,4)-Hamming code are:

<pre>
0000000 0001111 0110110 1011010
1000110 1100011 0101010 1101100
0100101 1010101 0011100 1110000
0010011 1001001 0111001 1111111
</pre>

Check that $d = 3$

We can view the codewords as $d_{1}d_{2}d_{3}d_{4}p_{1}p_{2}p_{3}$
where $d_{i}$ are information bits and $p_{i}$ are parity bits.

<div style="float: right;"><img src="{{site.imgurl}}/codevn.png" width="200px"></div>
The diagram shows their relationships.

<div class="exercise">
If we have $r$ parity bits, how many distinct nonzero columns are there?
How many message bits?

<div>
$n = 2^{r} - 1$, $n - r = 2^{r} -1 - r$.
</div>
</div>

We can construct $(2^{r} - {1,2}^{r} - r - 1,3)$-Hamming codes

Example: (15,11,3)-Hamming code:

$$H = \begin{pmatrix}
1 & 1 & 1 & 0 & 0 & 0 & 1 & 1 & 1 & 0 & 1 & 1 & 0 & 0 & 0 \\
1 & 0 & 0 & 1 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 0 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 1 & 0 & 0 & 1 & 0 \\
0 & 0 & 1 & 0 & 1 & 1 & 0 & 1 & 1 & 1 & 1 & 0 & 0 & 0 & 1 \\
\end{pmatrix}$$

## Correcting multiple errors

Hamming code can correct one error. How to correct multiple errors with
a parity check code?

For two errors, we need a parity check matrix such that the sum of
every pair of columns is different (different syndrome for every
pair of errors). 
For three errors, we need the sum of every three columns to be
different. One solution is repetition: quintuple-redundancy check can correct two errors:
$$H = \begin{pmatrix}
1 & 1 & 0 & 0 & 0 \\
1 & 0 & 1 & 0 & 0 \\
1 & 0 & 0 & 1 & 0 \\
1 & 0 & 0 & 0 & 1 \\
\end{pmatrix}$$

But these are very wasteful.

Such codes can be designed based on finite fields of size $2^{m}$, which have more complex structures

Examples include BCH (see matrix below) and Reed-Solomon codes (MDS).

$$H = \begin{pmatrix}
100010011010111 \\
010011010111100 \\
001001101011110 \\
000100110101111 \\
100011000110001 \\
000110001100011 \\
001010010100101 \\
011110111101111 \\
\end{pmatrix}$$

### MDS codes

### The Singleton bound

For a code of length $n$ and dimension $k$, how large can we make the
minimum distance?

$$d \leq n - k + 1$$



Codes that achieve the Singleton bound are called "maximum distance
separable" (MDS)

The are very common in data storage, where hard drives may fail
<div style="float: center;"><img src="{{site.imgurl}}/hddkd.png" width="500px"></div>

As long as any $k$ drives are operating, we can recover our
data!

### Reed-Solomon codes

### Back to the data center

Let's look at some of the ways we could protect Facebook's data. 
- EX 1: Replication with two copies (triple redundancy).
- EX 2: Single Parity: group hard drives into sets of 6 drives. Add a
7th drive that stores the parity bits. For example, Drive 1 = 101... Drive 2 = 111... Drive 3 = 011... Drive 4 = 001...
Drive 5 = 110... Drive 6 = 101 Drive 7 = 011. If any drive is lost, we can recover its data.
- EX 3: (7,4)-Hamming code. If up to two drives are lost, we can
recover the data.
- EX 4: Reed-Solomon code: $k$ data drives and $r$ parity drives. Data
can be recovered from *any* $k$ drives.

In the Facebook warehouse, frequently accessed data is protected by
replication and less frequently accessed data uses Reed-Solomon with
$k = 10,r = 4$.
- 40% more storage used
- Out of a group of 14 drives, if any 4 fail, we won't lose any data.

<div class="exercise">
How does EX 4 compare with EX 3?
</div>




<div style="float: right;"><img src="{{site.imgurl}}/codevn.png" width="200px"></div>
This Venn diagram portrays the possible error states of four bits $d_1$,
$d_2$, $d_3$, and $d_4$, using three "parity" checks with check digits
$p_1$, $p_2$, and $p_3$.

<!-- Image credit: Colin M. L. Burnett/Wikipedia -->