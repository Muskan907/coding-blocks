// const fs = require('fs');
// fs.writeFile
// const path = require('path');
// fs.writeFile()

const {writeFile} = require('fs');
let data = "We are learning";
writeFile(
    'hello.txt',
    data,
    {
        encoding: 'utf8',
        flag:'w',
    },
    (err)=>{
        if(err) return console.log("Error:",err);
        console.log("File created successfully");
    }
)