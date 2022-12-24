/*
Problem: Given an integer 'n', find the factorial of that number(n!).

CASE 1: n=0; factorial(0)=1
CASE 2: .....

Input: n (n>=0)
Output: int
*/

/*
Method 1: Recursion
base case: factorial(0)=1
F(n) = n * F(n-1)
*/
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

/*
Big O: O(n)
*/


/*
Method 2: Iteration
*/
function factorial(n) {
    if (n === 0) return 1;
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum = sum * i;
    }
    return sum;
}

/*
Big O: O(n)
*/


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(7));

/*

*/