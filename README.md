[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

- The asymptotic complexity of tail-recursive fibonacci is different from the non-recrrsive version.
- This is caused by the way the recursive calls are made for each implementation.
  Tail-recursive Fibonacci involves making a single recursive call at the end of each function iteration.
  This simplifies memory management since it doesn't need to combine multiple recursive calls. 
- The time complexity for tail-recursive fibonacci takes linear time $\Theta(n)$ because in the worst case, it needs to run through all elements.
  At each recursive step the algorithm computes the next fib number. Since it is tail recursive there is only one recursive call made at each iteration.
- The time complexity for the non-tail-recursive fibonacci $Theta(2^{n})$. This is because in the worst case the algorithm takes 2 reursive calls
  $(n - 1)$ and $(n - 2)$, The call will bracnch into two more call resulting in $2^{n}$ recursive calls total. 


// https://www.geeksforgeeks.org/tail-vs-non-tail-recursion/#
// For the runtime analysis I also looked at the repoisitories from:
// tail-recursion-ziyuWang6666
// tail-recursion-IshitaPatel18
// tail-recursion-j-halladay5
