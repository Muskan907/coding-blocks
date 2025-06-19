const {readFile} = require('fs/promises');

async function readData(){
    let data = await readFile('hello.txt');
    console.log(data.toString());
}

readData();
console.log("Running")

// let file = readFile('hello.txt',{encoding:'utf-8'}) //Promise

// file.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })