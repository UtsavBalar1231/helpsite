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

** Solution B)**
```python
P_test1_and_test2 = 25 # Probability of both test 1 and test 2 being true
P_test1 = 42 # Probability of test 1 being true
P_test2 = (P_test1_and_test2 / P_test1) * (100) # Probability of test 2 using Bayes' Theorem
print(round(P_test2)) # Prints the probability of test 2 being true
```
