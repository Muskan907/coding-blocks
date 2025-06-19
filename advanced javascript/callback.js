// Callback function :A function that is passed as an argument to another function,
//  and it is executed after some operation is completed.

// function cb(){
//     console.log("Inside cb()");
// }
// function fun(f){
//     console.log('Inside Fun')
//     f();
// }
// fun(cb);

function fun(f){
    console.log('Inside Fun')
    f();
}
fun(()=>{ //this is a callback function
    console.log("Inside cb()");
}
);

