### Counting

Enough theory. Now, we are going to learn how to countโฆ

Why are we interested in counting?
In the symmetric case, when all outcomes are equally likely,
๐(๐ด)=|๐ด|/(|ฮฉ|)
where |๐ธ| is the number of elements in ๐ธ.
We will be counting outcomes in events.
How many cards are โheartsโ in a standard deck?
How many ways can we roll a pair of dice to add up to 7?
How many possible three-person teams are there among students in this classroom?


### Examples

If a two-digit number is chosen at random, what is the probability that it is divisible by 4?



If three cards are drawn at random from a deck, what is the probability that there are at least two cards of the same suit?



### Drawing with replacement

Letโs draw from a deck of cards.
How many possibilities are there for the first card drawn?
Now, letโs replace it, reshuffle, and draw another. How many possibilities now?
How many possible pairs of cards could I have drawn?

We call this drawing with replacement.

For N things, draw K items with replacement: # of possibilities = NK


### Counting permutations

Usually, when we draw from a deck of cards, we donโt bother to replace and reshuffle before we draw another.
Letโs assume order still matters. So (Aโฅ,Kโ ) is different from (Kโ , Aโฅ)
We draw two cards. What changes with this count?
First card:
Second card:
How many ordered pairs?

We call this ordered draw without replacement a permutation of cards.
For N things, choose K items in order: # of permutations = ๐(๐โ1)โฆ(๐โ๐พ+1)=๐! / (๐โ๐พ)!, where ๐! is the factorial operator:
๐!=1ร2ร3รโฆร๐


### Permutations

We randomly shuffle five cards
What is the probability that they are in order
What is the number of possible outcomes?
5 possibilities for first card, 4 possibilities for second card, โฆ, 1 possibility for fifth card
5ร4ร3ร2ร1=5!=120
P(each outcome) = 1/120
P(sorted) = 1/120
N!= the number of ways N objects can be arranged (from N things, choose N in order)
What is the probability that a deck of 52 cards is in order after a random shuffle?
1/52!= 1.24ร10^(โ68)


### Aside: how large is 52! ?

"52! = 80658175170943878571660636856403766975289505440883277824000000000000"=8.066ร10^67
If everyone who has ever lived shuffled a deck once every second since the beginning of time, the probability that there are no decks with the same order isโฆ

โค(10^11ร"4.32 " ร"1017" )^2/(8.066ร10^67)=2.31ร10^(โ11)

How many bits do we need to represent to represent the order of a deck of cards?
Method 1: 6 ๐๐๐ก๐ /๐๐๐๐ร52 ๐๐๐๐๐ =312 ๐๐๐ก๐ 
Method 2: Give the lexicographic order of the permutation representing the deck: log_2โก52!=225.58 b


### Permutations

Suppose this time we pick three cards
What is the probability that we pick JQK, in that order?
What is the number of possible outcomes?
5 possibilities for first card, 4 possibilities for second card, 3 possibilities for third card
5!/((5โ3)!)=5ร4ร3=60
P(each outcome) = 1/60
P(JQK) = 1/60
๐!/((๐โ๐)!)=(_๐^)๐_๐ = the number of ways ๐ objects can be arranged from a ๐ objects
What is the probability that five cards drawn from deck of 52 are A,2,3,4,5 of hearts in that order?
1/(52!/47!)="3.2"ร10^(โ9) " "


### Counting combinations

Now suppose that order doesnโt matter anymore, so {Aโฅ,Kโ } is the same as {Kโ , Aโฅ}
What changes with this count?
First card:
Second card:
How many pairs?

We call this draw without replacement a combination of cards.

For N things, choose K items: # of combinations = N! / (K! (N-K)!), also shown as
(๐ยฆ๐พ)


### Combinations: explained

Suppose we pick three cards
What is the probability that we pick Jack, Queen and King (order is not important)?
What is the number of possible outcomes?
5 possibilities for first card, 4 possibilities for second card, 3 possibilities for third card
5ร4ร3=5!/2!=60
But since order is not important, we are over-counting:
eg., 10QA = 10AQ = Q10A= QA10 = AQ10 = A10Q
each case is counted 3! times
total number of outcomes = 5!/(2!ร3!)=10
P({J,Q,K}) = 1/10
๐!/(๐โ๐)!๐!=(โ(๐@๐))=(_๐^)๐ถ_๐ = the number of ways ๐ objects can be chosen from a ๐ objects
The probability that five cards drawn from deck of 52 are A,2,3,4,5 of hearts?
1/(52!/(47!ร5!))="3." 8ร10^(โ7) " "


### Combinations

If we pick three out of these five cards, what is the probability that queen is one of them?
 (5ยฆ3)=10 possible cases
If queen is one of the cards, we only need to choose 2 out of 4 cards
(4ยฆ2)=6
P(Queen) = 6/10

Relation to binary sequences:
We can list all possibilities; 1 denotes a given card is chosen
10 possible outcomes, probability of each is 1/10
In 6, a queen is chosen
P(Queen) = 6/10 



### Your turn

How many 4-bit unsigned numbers are there?

How many (unordered) pairs of unsigned 4-bit numbers are there? 
The numbers must be different
The numbers can be the same


How many ordered pairs of unsigned 4-bit numbers are there?

How many unsigned 4-bit numbers are there with 2 ones?



### Your turn

If three cards are drawn at random from a deck, what is the probability that there are at least two cards of the same suit?



### A note about duplication

Consider the word โremoveโ.
How many different letters are there?
Suppose we pick a letter. How many possible different letters?

How many different unordered pairs of letters?

How many different ordered pairs of letters? Note: (e,e) is the same as (e,e)

What changed?


### Gumball machine

Suppose a gumball machine contains red, green, pink, blue, purple, and yellow (many of each color). Each gumball costs 25 cents.
Suppose we spend a dollar. How many different combinations of gumballs are there?



How many combinations are there where at least a pair of them are the same color?


### Counting

k items out of n
Order matters
Order doesnโt matter
With replacement
n^k
((n-1+k)ยฆk)
With no replacement
n!/(n-k)!=(nยฆk)k!
(nยฆk)


### Probabilities and counting

Why are we counting again?

If an event ๐ด consists of outcomes all with the same probability ๐, then
๐(๐ด)=|๐ด|ร๐
In the symmetric case, when all outcomes are equally likely,
๐(๐ด)=|๐ด|/(|ฮฉ|)
Example: We draw a hand of five cards from a standard deck. What is the probability of drawing a flush (all five cards are the same suit)?


### Probabilities and counting

Your turn: compute the probabilities for each of the following events.
We flip a fair coin (P(heads) = P(tails) = ยฝ) 3 times. How likely is the same outcome to occur 3 times in a row?


We roll a pair of fair six-sided dice (1-6 each). What is the probability of rolling an even sum?


Suppose there are 30 students in this classroom (including you). What is the probability that at least one other student shares the same birthday with you? (assume 366 days equally likely)


### Bernoulli trials

A series of repeated, identical trials with two possible outcomes that do not influence each other in any way are called Bernoulli trials. The probability of observing a particular combination of outcomes is given by the Binomial formula:


Here, P(n) is the probability of observing n occurrences, where each occurrence has a probability of p, out of N total trials. The binomial coefficient (๐ยฆ๐) is equal to the number of combinations of choosing n items from N things (without replacement, ordering, or duplicates).


### Pascalโs triangle

Pascalโs triangle describes the number of combinations, where the row # (zero-indexed) is the total # of items, and the column # (zero-indexed) is the # of items chosen.

What is (3ยฆ1)?

Several properties of combinations are evident from the triangle:
1) (๐ยฆ0)=1				2) (๐ยฆ1)=๐
3) (๐ยฆ๐)=(๐ยฆ(๐โ๐))				4) ((๐+1)ยฆ๐)=(๐ยฆ(๐โ1))+(๐ยฆ๐)


### Divide and conquer

We flip a fair coin (P(heads) = P(tails) = ยฝ) 10 times. How likely is the same outcome to occur 5 times in a row?