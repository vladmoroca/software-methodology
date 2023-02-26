# Quadratic Equation Solver

## Description 

This is a console application designed to solve quadratic equations, it supports two modes of operation: interactive and non-interactive (file) mode.

In the interactive mode (application is launched without any arguments) application prompts user to enter the values of the coefficients a, b, and c one by one, then displays the resulting equation on the screen, and computes and displays the roots of the equation. If user enter invalid values he will see an error and application prompts him to try again. 

In the non-interactive (file) mode, application accepts a single argument, which is the path to a file with coefficients of the equation. The file should contain three numbers: a, b, and c separated by a single space.
An example of what should be the entry of numbers in the file: 1.2 228 1337

## How to Run

### To start in interactive mode:
```
$ node main.js
```

### To start in interactive mode:
```
$ node main.js /path/to/your/file
```

## Application output

### Interactive mode:

```
a = 0
Error. a cannot be 0
a = 1
b =  pdofgndg
Error. Expected a valid real number, got pdofgndg instead
b = 2
c = 1
Equation is: 1 x^2 + (2) x + (1) = 0
There is 1 root
x1 = -1
```

### Non-interactive

File test.txt: 1 2 1

```
node main.js dontexist.txt
Error: file dontexist.txt does not exist
node main.js test.txt 
Equation is: + 1x^2 + 2x + 1 = 0
There are 1 roots
x1:-1
```


File test.txt: 0 2 1

```
node main.js test.txt 
Error. a cannot be 0
```

File test.txt: fghjh 1 0

```
node main.js test.txt 
invalid file format
```

File numbers.txt: 6 4 1
pdosghopdf djfjg

```
node main.js test.txt 
invalid file format
```


File numbers.txt: 1 3.2 -3.2

```
node main.js test.txt 
Equation is: + 1x^2 + 3.2x -3.2 = 0
There are 2 roots
x1:0.8000000000000003
x2:-4
```

