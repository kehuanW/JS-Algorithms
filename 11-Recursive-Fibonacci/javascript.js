/*
Problem: Give a number 'n', find the 'nth' element of the Fibonacci Sequence.

[0,1,1,2,3,5,8...]

CASE-1: recursiveFibonacci(0)=0; recursiveFibonacci(1)=1
CASE-2: recursiveFibonacci(2)=0+1=1; recursiveFibonacci(3)=1+1=2

Input: n (n>=0) integer
Output: integer
*/


/*
Method 1: Array
Smaller problem: Fn = Fn-1 + Fn-2
Base case: F0 = 0 and F1 = 1
*/
function recursiveFibonacciArray(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) arr[i] = 0;
        else if (i === 1) arr[i] = 1;
        else arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}
/*
Big O: O(n)
Storage: n
*/



/*
Method 2: Recursion
Smaller problem: Fn = Fn-1 + Fn-2
Base case: F0 = 0 and F1 = 1
*/

function recursiveFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

/*
Big O: O(2^n)
*/

/*
Method 3: 指针法
*/
function recursiveFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let fst = 0;
    let sec = 1;
    let sum;
    for (let i = 2; i <= n; i++) {
        sum = fst + sec;
        fst = sec;
        sec = sum;
    }
    return sum;
}
/*
Big O: O(n)
Storage:3
*/


console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(6));