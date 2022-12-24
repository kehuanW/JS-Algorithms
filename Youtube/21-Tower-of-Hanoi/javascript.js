/*
Problem:Tower of Hanoi

Input:
Output:
*/

function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRode} to ${toRod}`);
        return
    }
    let stack = [];
    for (let i = 1; i <= n; i++) {
        stack.push(i); //The smaller the bigger(lower).
    }

}

towerOfHanoi(3, 'A', 'C', 'B')

/*

*/