Evaluate the performance of an algorithm in terms of its input size.

Time complexity: Amount of time taken by an algorithm to run, as a function of input size.

Space complexity: Amount of memory taken by an algorithm to run, as a function of input size.



Big O - worst

Omega - best

Theta - average



Time Complexity: Count the number of times a statement execute based on the input size.



![someTimeComplexity](E:\JS-Algorithms\img\someTimeComplexity.png)

![BigOTrend](E:\JS-Algorithms\img\BigOTrend.png)

![JSObjectTC](E:\JS-Algorithms\img\JSObjectTC.png)

![JSArrayTC](E:\JS-Algorithms\img\JSArrayTC.png)



Recursion:

- Need a base case

- not always translate to a faster solution
- Not straight forward to understand

## Sort

### Bubble Sort

- Compare adjacent elements in the array and swap the position if they are not in the intended order. 

- Repeat the instruction as you step through each element in the array.

- Once you step thought the whole array with no swaps, the array is sorted.

  （假设目标ascending, 每轮会把一个不守规矩的最大数放在正确的位置上， 所以是要走n-1轮，每轮有n-1次比较）

  ```javascript
  function bubbleSort(arr) {
      if (arr.length === 1) return arr;
      
      for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < arr.length - 1 - i; j++) { 
              //why minus i? since i turns of sorting has been finished. At the end of arr, i numbers are in the intended order. 
              if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
                  var temp = arr[j + 1];        //元素交换
                  arr[j + 1] = arr[j];
                  arr[j] = temp;
              }
          }
      }
      return arr;
  }
  ```

**改进冒泡排序： **设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。

**Improve bubble sort: **Set a variable named pos, which is used to record the position of the last swap in each turn of sort. Since the numbers after pos are already swapped, the next turn of sort will simply scan to pos.

```javascript
function bubbleSort(arr) {
    if (arr.length === 1) return arr;
    
    let i = arr.length - 1;
    while(i > 0) {
        let pos = 0; //假设已经都sort好了
        for(let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
                var temp = arr[j + 1];        //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
                pos = j;
            }
        }
        i = pos; //还有多少位数没有排列好
    }
    return arr;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));
```

- 最佳情况：T(n) = O(n)

> 当输入的数据已经是正序时（都已经是正序了，为毛何必还排序呢....）

- 最差情况：T(n) = O(n2)

> 当输入的数据是反序时(卧槽，我直接反序不就完了....)

- 平均情况：T(n) = O(n2)

### Insertion Sort

![InsertionSortIdea](E:\JS-Algorithms\img\InsertionSortIdea.png)

![InsertionSortExample](E:\JS-Algorithms\img\InsertionSortExample.png)

```javascript
function insertionSort(arr) {
    // console.log(arr)
    if (arr.length === 1) return arr;
    for (let i = 1; i < arr.length; i++) {
       let target = arr[i];
       let j = i - 1;
       while (target < arr[j] && j>=0) {
           arr[j+1] = arr[j];
        //   console.log(arr)
           j--;
       }
       arr[j+1] = target
    //   console.log(arr)
    }
    return arr;
}

var arr=[3,44,38,27,45,5];
console.log(insertionSort(arr));


/*
[ 3, 44, 38, 27, 45, 5 ]
[ 3, 44, 38, 27, 45, 5 ]
[ 3, 44, 44, 27, 45, 5 ]
[ 3, 38, 44, 27, 45, 5 ]
[ 3, 38, 44, 44, 45, 5 ]
[ 3, 38, 38, 44, 45, 5 ]
[ 3, 27, 38, 44, 45, 5 ]
[ 3, 27, 38, 44, 45, 5 ]
[ 3, 27, 38, 44, 45, 45 ]
[ 3, 27, 38, 44, 44, 45 ]
[ 3, 27, 38, 38, 44, 45 ]
[ 3, 27, 27, 38, 44, 45 ]
[ 3, 5, 27, 38, 44, 45 ]
[ 3, 5, 27, 38, 44, 45 ]
*/
```

**改进插入排序：** 查找插入位置时使用二分查找的方式

```javascript

```



- 最佳情况：输入数组按升序排列。T(n) = O(n)
- 最坏情况：输入数组按降序排列。T(n) = O(n2)
- 平均情况：T(n) = O(n2)

### Quick Sort

![QuickSortIdea](E:\JS-Algorithms\img\QuickSortIdea.png)

![QuickSortExample](E:\JS-Algorithms\img\QuickSortExample.png)

### Merge Sort

![MergeSortIdea](E:\JS-Algorithms\img\MergeSortIdea.png)

![MergeSortExample-1](E:\JS-Algorithms\img\MergeSortExample-1.png)

![MergeSortExample-2](E:\JS-Algorithms\img\MergeSortExample-2.png)

![MergeSortExample-3](E:\JS-Algorithms\img\MergeSortExample-3.png)

### Tower of Hanoi

![TowerOfHanoiIdea](E:\JS-Algorithms\img\TowerOfHanoiIdea.png)

![TowerOdHanoiExample](E:\JS-Algorithms\img\TowerOdHanoiExample.png)

## Algorithm Techniques

![AlgorithmTechniques](E:\JS-Algorithms\img\AlgorithmTechniques.png)

### JS Data Structure

![JSDataStructure](E:\JS-Algorithms\img\JSDataStructure.png)

#### Array

![ArrayTimeComplexity](E:\JS-Algorithms\img\ArrayTimeComplexity.png)

#### Object

![Object](E:\JS-Algorithms\img\Object.png)

#### Set

![SetVSArray](E:\JS-Algorithms\img\SetVSArray.png)

#### Map

![ObjectVSMap](E:\JS-Algorithms\img\ObjectVSMap.png)

#### Stack

![Stack](E:\JS-Algorithms\img\Stack.png)

<img src="E:\JS-Algorithms\img\StackUsage.png" alt="StackUsage" style="zoom: 60%;" />

#### Queue

![Queue](E:\JS-Algorithms\img\Queue.png)

<img src="E:\JS-Algorithms\img\QueueUsage.png" alt="QueueUsage" style="zoom:50%;" />

#### Circle Queue

![CircleQ-1](E:\JS-Algorithms\img\CircleQ-1.png)

![CicleQ-2](E:\JS-Algorithms\img\CicleQ-2.png)

<img src="E:\JS-Algorithms\img\CircleQUsage.png" alt="CircleQUsage" style="zoom:50%;" />
