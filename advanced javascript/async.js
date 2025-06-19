// Single Threaded : it can execute 1 command at a time
// Synchronous : it will execute the next command only when current command is executed

// console.log("START");

// for (let i=1;i<=10;i++){
//     console.log(i);
// }
// console.log("END");


// Asynchronous
function fun(){
    for (let i=1;i<=10;i++){
    console.log(i);
}
}
console.log("START");

// setTimeout(callback function,time in milliseconds)

setTimeout(fun, 5000); //use this as a callback function
console.log("END");
