/*
Problem: Give an array of integers, sort the array.

Input: arr[n], n>0
Output: sorted arr[n]
*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) continue;
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = numberToInsert;
    }
    return arr;
}

console.log(insertionSort([5, 8, -2, 7, 3]));

/*
Big O(n^2)
*/