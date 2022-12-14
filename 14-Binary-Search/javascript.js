/*
Problem: Given an asc sorted array of 'n' elements and a target element 't', find the index of 't' in the array.
Return -1 if the target element is not found.

Binary Search only exits in sorted array.

arr = [1,2,4,6,10,15] t=10 -> return 4
arr = [1,2,4,6,10,15] t=6 -> return 3
arr = [1,2,4,6,10,15] t=0 -> return -1

Input: arr[n] (n>0); t
Output: int index
*/

/*
left和right可以被当作用来模拟一个arr, 只有arr不为空才能进行运算，所以left<=right
*/
function binarySearch(arr, t) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // console.log("left", left)
        // console.log("right", right)
        // console.log("mid", mid);
        // console.log("arr[mid]", arr[mid])
        if (t > arr[mid]) {
            left = mid + 1;
        }
        else if (t === arr[mid]) {
            return mid;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
};

/*
O(logn)
*/

/*
Method 2: recursive
*/
function recursiveBinarySearch(arr, t) {
    return search(arr, t, 0, arr.length - 1);
};

function search(arr, t, left, right) {
    if (right < left) return -1;

    let mid = Math.floor((left + right) / 2);
    if (t === arr[mid]) return mid;
    if (t > arr[mid]) return search(arr, t, mid + 1, right);
    if (t < arr[mid]) return search(arr, t, left, mid - 1);
}


console.log(recursiveBinarySearch([1, 2, 4, 6, 10, 15], 10));
console.log(recursiveBinarySearch([1, 2, 4, 6, 10, 15], 6));
console.log(recursiveBinarySearch([1, 2, 4, 6, 10, 15], 0));
