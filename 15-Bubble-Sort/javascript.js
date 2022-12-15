/*
Problem: Give an array of integers, sort the array.

Input: arr[n], n>0
Output: sorted arr[n]
*/

function checkAscSorted(arr) {
    let flag = true
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return !flag;
    }
    return flag;
}

function bubbleSort(arr) {
    if (arr.length === 1) return arr;
    let temp;
    while (true) {
        if (checkAscSorted(arr)) return arr;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}

/*
上述写法checkAscSorted里也是通过check相邻的两个元素去判断，所以考虑和bubbleSort合并在一起
简洁写法
*/
function bubbleSort2(arr) {
    let swap = true;
    while (swap) {
        swap = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
    }
    return arr;
}

/*
BigO: O(n^2)
*/

console.log(bubbleSort2([5, 8, -2, 7, 3]));
console.log(bubbleSort2([0]));
console.log(bubbleSort2([2, -1]));