/*
Problem: Give an integer 'n', find the factotial of that integer

Input: int n (n>0)
Output: int n
*/

function factorial(n) {
    if (n <= 0) {
        return "error";
    }

    let temp = 1;
    let i = 1;

    while (i <= n) {
        temp *= i;
        i++;
    }
    return temp;
}

let a = factorial(4);
let b = factorial(5);


/*
O(n)
*/