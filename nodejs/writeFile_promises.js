// Promises : Rejected - {.catch};Resolved - .then();Waiting : by default
const { writeFile } = require('fs/promises');

let data = "I am writing data using Async await";

async function writeData(data) {
    try {
        await writeFile(
            "world.txt",
            data,
            {
                encoding: 'utf8',
                flag: 'wx', // Corrected here
            }
        );
        console.log("File created successfully");
    } catch (err) {
        console.log("Error in creating file:", err.message);
    }
}

writeData(data);

console.log("Running statement here below");

// let write = writeFile(
//     "world.txt",
//     data,
//     {
//         encoding:'utf8',
//         flag: 'x',
//     }
// )

// write.then(()=>{
//     console.log("File created successfully");
// })
// .catch((err)=>{
//     console.log("Error in creating file");
// })

console.log("Running statement here below");
