const fs =  require('fs');
const Jimp = require('jimp');

// fs.readFile('image.png',{
//     encoding: 'base64'
// },(err,data)=>{
//     if(err) return console.log(err);
//     console.log(data);
// })

// let file = fs.readFileSync('image.png');
// console.log(file); //this is a raw binary data we have to convert it to base[64]
// let str = file.toString('base64');
// console.log(str); //this is the base64 encoded string

// how to write the file
// fs.writeFileSync('image.txt',str); //using this image.txt file is made when node script.js is written in the terminal

// how to restore an image using its text file
// what we have done so far is we have changed image.png using base 64 to str
// a file is made image.txt which contain this str 
// we will now use reverse enginnering to get the str back

str = fs.readFileSync('image.txt',{encoding:'utf-8'});
let buffer = Buffer.from(str,'base64');
console.log(buffer);

fs.writeFileSync('image.png',buffer); //to get the image.png back using buffer

// // jimp npm site
// var Jimp = require("jimp");

// // open a file called "lenna.png"
// const jimp = require("jimp").default;

// Then use:
// const jimp = require("jimp").default;

// Then use:
Jimp.read('image.png', (err, image) => {
  if (err) throw err;
  image
    .resize(256, 256) // resize
    .quality(60)      // set JPEG quality
    .write("image-small-bw.jpg"); // save
})
 .catch(err => {
    console.error("Jimp Error:", err);
  });
