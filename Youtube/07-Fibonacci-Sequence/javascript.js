/*
Problem: Give a number 'n', find the first 'n' element of the Fibonacci Sequence.

Fabonacci sequence:A sequence in which each number is the sume of the two preceding ones.
The first two numbers in the sequence are 0 and 1.

Input: n, n>=2
Output: array, len(array)=n

fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
fibonacci(7) = [0,1,1,2,3,5,8]

*/

function fabonacci(n) {
    let temp = [0, 1]
    if (n < 2) {
        return "error";
    } else {
        for (let i = 2; i < n; i++) {
            temp[i] = temp[i - 1] + temp[i - 2];
        }
    }
    return temp;
}

let a0 = fabonacci(1);
let a1 = fabonacci(2);
let a2 = fabonacci(3);
let a3 = fabonacci(4);
let a4 = fabonacci(7);

/*
    O(n)
*/