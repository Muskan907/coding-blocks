// const isOdd = (num) => {
//     if (num%2==0){
//         return true;
//     }
//     return false;
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const oddNums = arr.filter(isOdd);

// console.log(arr);
// console.log(oddNums);

// 2.
const fruits = ['apple','orange','guava','mango','pineapple'];

const checkFruitLen = (fruit) => {
    if (fruit.length >5){
        return true;
    }
    return false;
}
const longFruits = fruits.filter(checkFruitLen);

console.log(fruits);
console.log(longFruits);