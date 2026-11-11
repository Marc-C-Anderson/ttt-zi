# Tic Tac Toe on a Zero Instruction Machine

This is an implementation of a Tic Tac Toe game on a Zero Instruction Machine

## Web Site

<https://marc-c-anderson.github.io/ttt-zi/>

## Sparse Memory Implementation 

To encode all possible combinations in memory requires something in the order of 19,000 locations. As it turns out, not all locations would actually be addressable in the course of an actual game. Many locations ar redundant.

Even in a real game there are really only 5,000 combinations.

The Sparse Memory version uses a map where the cell is encoded into a few characters and used as a key into a map. The value in the map is the next move.

It's sparse because the key eliminate many unreachable locations.

Using Row/Column/Piece notation.

11- | 21- | 31-  
----+-----+----  
12- | 22- | 32-  
----+-----+----  
13- | 23- | 33-  

A blank board only needs 9 keys.

