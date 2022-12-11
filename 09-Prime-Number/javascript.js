/*
Problem: Given a natural number 'n', determin the number is prime or not

Prime number: [1] >1 . [2] cannot be a product of 2 smaller numbers.

Input: n (n>1)
Output: boolean

fixed input: n (n可以是任何实数）
要分清楚prime和range和input n的range.
最小的Prime数是2不代表n的最小值是2
*/

function isPrime(n) {
    let flag = true;

    if (n < 2) {
        return !flag;
    }

    let i = 2;
    while (i !== n && i < n) {
        if (n % i === 0) {
            return !flag;
        }
        i++;
    }
    return flag;
}

let a = isPrime(2) //true
let b = isPrime(3) //true
let c = isPrime(4) //false
let d = isPrime(8) //false

/*
O(n)
*/