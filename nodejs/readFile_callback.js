const {readFile} = require('fs');

readFile(
    "Hello.txt",
    {
        encoding: "utf8",
    },
    (err,data)=>{
        if(err) return console.log(err);
        // console.log(data.toString());
        console.log(data);
    }
)

// node js is basically used to create a server