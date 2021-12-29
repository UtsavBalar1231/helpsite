## Write a python program to solve the following problems:
### A) Find the probability of drawing two kings from a deck
### B) A math teacher gave her class two tests. 25% of the class passed both tests and 42% of the class passed the first test. What percent of those who passed the first test also passed the second test?

** Solution A)**
```python
kings = 4  # number of kings in one deck
cards = 52  # number of cards in one deck
P_king_1 = kings / cards  # probability of getting a king in one deck
P_king_2 = (kings - 1) / (cards - 1)  # probability of getting another king from the deck after getting a king

Probability = (P_king_1 * P_king_2)  # probability of drawing two kings in one deck

print("Probability of drawing two kings from a deck: ",
      round(Probability * 100, 2), "%")
```

```python
** Solution A) Dynamic**
import math

kings = 4
cards = 52
n_kings = int(input("Enter no of kings you want to take: "))

if n_kings > 4:
	raise Exception("Kings cannot be greater than 4! try again.")
C_kings = math.factorial(kings) / (math.factorial(kings - n_kings) * math.factorial(n_kings))
C_cards = math.factorial(cards) / (math.factorial(cards - n_kings) * math.factorial(n_kings))

P = (C_kings / C_cards)

print("Probability of finding {} kings is {}%"
	.format(str(n_kings), str(round(P*100, 3)))
     )
```

** Solution B)**
```python
P_test1_and_test2 = 25 # Probability of both test 1 and test 2 being true
P_test1 = 42 # Probability of test 1 being true
P_test2 = (P_test1_and_test2 / P_test1) * (100) # Probability of test 2 using Bayes' Theorem
print(round(P_test2)) # Prints the probability of test 2 being true
```

** Solution B) Dynamic**
```python
P_A_and_B = float(input("Enter probability of both the events: "))
P_A = float(input("Enter probability of any one event: "))
P_BA = P_A_and_B / P_A

if (P_A_and_B or P_A) > 1:
	raise Exception("Probabilty of any event cannot exceed 1 !")

print("Probability of getting other event when first event already occurred is {}"
	.format(round(P_BA, 3))
     )
```
