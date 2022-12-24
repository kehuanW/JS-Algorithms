/*
Problem: Give an array of integers, sort the array.

Input: arr[n], n>0
Output: sorted arr[n]
*/

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    leftArr = quickSortBase(leftArr);
    rightArr = quickSortBase(rightArr);

    return [...leftArr, pivot, ...rightArr];
}

/*
Big O: 
worst: O(n^2)
avg: O(nlogN)
*/

console.log(quickSort([-6, 20, 8, -2, 4]))