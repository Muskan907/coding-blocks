// reduce :prev and curr
// prev: here is 1
// curr: here is 2 
// 1+2=3 ;3+3=6;4+6=10;10+5=15

const arr = [1,2,3,4,5];

const sum = arr.reduce((prev,curr) => prev+curr);