// console.log(b);
// var b =200;

// const square = function(n){
//     console.log(n*n);
// }
// square(4);

// // Arrow Function explicit return
// const cube = n=> {
//     return n*n*n;
// }
// console.log(cube(3));

// // Arrow Function implicit return
// const cube = n=> n*n*n;
// console.log(cube(3));

// // High Order Function
// function fun(){
//     function innerFun(){
//         console.log("Inner Fun");
//     }
//     return innerFun;
// }
// const f = fun();
// console.log(f);
// f();

function multiPly2(num){
    return num * 2;
}
function a(b){
    const res = b(10);
    return res;
}
const ans = a(multiPly2);
console.log(ans);