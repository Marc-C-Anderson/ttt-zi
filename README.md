# Tic Tac Toe on a Zero Instruction Machine

This is an implementation of a Tic Tac Toe game on a Zero Instruction Machine

## Web Site

<https://marc-c-anderson.github.io/ttt-zi/>

## Sparse Memory Implementation 

To encode all possible combinations in memory requires something in the order of 19,000 locations. As it turns out, not all locations would actually be addressable in the course of an actual game. Many locations ar redundant.

Even in a real game there are really only 5,000 combinations.

