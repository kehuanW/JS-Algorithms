/*
Problem: Given an array of 'n' elements and a target element 't', find the index of 't' in the array.
Return -1 if the target element is not found.

arr = [15, 2, 10, 4, 6], t=10 -> return 2
arr = [15, 2, 10, 4, 6], t=6 -> return 4
arr = [15, 2, 10, 4, 6], t=0 -> return -1

Input: arr[n] (n>0); t
Output: int index
*/

function linearSearch(arr, t) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i;
        }
    }
    return -1;
};

console.log(linearSearch([15, 2, 10, 4, 6], 10));
console.log(linearSearch([15, 2, 10, 4, 6], 6));
console.log(linearSearch([15, 2, 10, 4, 6], 00));
/*
O(n)
*/