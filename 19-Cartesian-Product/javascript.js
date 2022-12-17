/*
Problem: Given two finite non-empty sets, find their Cartesian Product.

Input: arr1[m] m>=1, arr2[n] n>=1,
Output: arr[m*n]
*/

function cartesian(arr1, arr2) {

    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let temp = [];
            temp.push(arr1[i]);
            temp.push(arr2[j]);
            res.push(temp);
        }
    }
    return res;
}

console.log(cartesian([1, 2], [3, 4]));
console.log(cartesian([1, 2], [3, 4, 5]))
/*
Big O: O(mn)
*/