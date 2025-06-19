// compareFunction(a,b) return value
// 0: a == b : keeo original order of a and b
// <0 : sort a before b 
// >0 : sort b before a

const arr = [1,2,10,11,12,8,9];
arr.sort((a,b)=>a-b); //ascending
arr.sort((a,b)=>b-a); //descending
console.log(arr);