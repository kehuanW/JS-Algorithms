/*
Problem:Given a staircase of 'n' steps, count the number of distinct ways to climb to the top.
You can either climb 1 step or 2 steps.

Input: n (n>0)
Output: int
*/


/*
Recursion
Base case: f(1)=1; f(2)=2;
f(n) = f(n-1) + f(n-2);
*/
function climbingStaircaseRecursion(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}
/*
Big O: O(2^n)
*/

function climbingStaircaseArr(n) {
    let stepsArr = [1, 2];
    for (let i = 2; i <= n; i++) {
        stepsArr[i] = stepsArr[i - 1] + stepsArr[i - 2];
    }
    return stepsArr[n - 1];
}
/*
Big O: O(n)
*/


console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));