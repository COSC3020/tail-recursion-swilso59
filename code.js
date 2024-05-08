function fib(n, a = 0, b = 1, fibArr = []) {
    if (n === 0) {
        fibArr.push(a);
        return fibArr;
    } else {
        fibArr.push(a);
        return fib(n - 1, b, a + b, fibArr);
    }
}

// for the tail recursion function I looked at a couple repositories to gain an
// of what to do. 
// tail-recursion-Dhruv8806
// tail-recursion-IshitaPatel18




