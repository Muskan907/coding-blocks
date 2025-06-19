// map 
const square = num => num * num;

const nums = [1,2,3,4,5,6,7];
const squareNums = nums.map(square);
console.log(squareNums);  

const squareRoot = n => Math.sqrt(n);
const squareRootNums = nums.map(squareRoot);
console.log(squareRootNums);
