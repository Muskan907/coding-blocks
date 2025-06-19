// 1.Implicit binding

// const obj = {
//     name: 'John',
//     age: 30,
//     sayName: function(){
//         console.log(this);
//     },
// favColor: {
//     color: 'blue',
//     sayColor: function (){
//         console.log(this);
// }
// }
// };

// console.log(obj);
// console.log(obj.favColor);
// console.log(obj.favColor.sayColor);

// 2.Explicit Binding

// function fun(name,age){
//     console.log(name);
//     console.log(age);
//     console.log(this);
// }

// const a = {
//     m:'Hello',
//     n:10
// }

// // fun('Sabeel',23);
// fun.call(a,'Kartik',25);

// 3.Binding Method
  function fun(name,age){
    console.log(name);
    console.log(age);
    console.log(this);
}

const a = {
    m:'Hello',
    n:10
}
const f = fun.blind(a);
f('John',24);

// 4.default keyword winding : when the rest 3 binding do not works the this is used ;it is basically window
// using this the object will be binded to window object