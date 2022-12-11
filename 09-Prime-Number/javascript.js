/*
Problem: Given a natural number 'n', determin the number is prime or not

Prime number: [1] >1 . [2] cannot be a product of 2 smaller numbers.

Input: n (n>1)
Output: boolean

*/

function isPrime(n) {
    let flag = true;
    let i = 2;
    while (i !== n && i < n) {
        if (n % i === 0) {
            return !flag;
        }
        i++;
    }
    return flag;
}

let a = isPrime(2)
let b = isPrime(3)
let c = isPrime(4)
let d = isPrime(8)

/*
O(n)
*/