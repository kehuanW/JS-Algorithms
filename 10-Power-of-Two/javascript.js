/*
Problem: Given a positive integer n, determine if the number is power of 2 or not.

isPowerOfTwo(1) = true(2^0)
isPowerOfTwo(2) = true(2^1)
isPowerOfTwo(5) = false

Input: n (n>0)
Output: boolean
*/

// Method 1
function isPowerOfTwo(n) {
	
	while(n >= 1) {
		
		if (n === 1) {
			return true;
		}
		
		if(n%2 === 0) {
			n = n / 2;
			isPowerOfTwo(n);
		}else {
			return false;
		}
	}
}

// Method 2

function isPowerOfTwoWiseBit(n) {
	
	if(n < 1) {
		return false;
	}
	
	return (n & (n - 1)) === 1
}

/*
Binary is base two - every new digit introduced with the rest being zeros represents a number which is a power of two; and every previous number is the largest possible number that can be expressed with one less digit (i.e. all digits are 1). So, the bitwise "and"  cancels them out:

2 & 1:         10       01
4 & 3:         100      011
8 & 7:         1000     0111
16 & 15:       10000    01111
*/

let a = isPowerOfTwo(1);
let b = isPowerOfTwo(2);
let c = isPowerOfTwo(7);
let d = isPowerOfTwo(32);

console.log(a,b,c,d)


/*
O(n)
*/