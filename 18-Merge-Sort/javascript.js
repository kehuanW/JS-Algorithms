/*
Problem: Give an array of integers, sort the array.

Input: arr[n], n>0
Output: sorted arr[n]
*/

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, midIndex);
    let rightArr = arr.slice(midIndex);
    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);
    return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length !== 0 && rightArr.length !== 0) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}


console.log(mergeSort([-6, 20, 8, -2, 4]))
/*
Big O: O(nlogn)
*/