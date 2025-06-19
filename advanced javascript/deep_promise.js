function download(url){
    console.log("Downloading starts");
    return new Promise((resolve,reject)=>{
        let downloadedFile = url.split('/').pop();
        setTimeout(()=>{
            console.log("Downloading completed");
            resolve(downloadedFile);
            }, 2000);
        })
}

function compress(downloadedFile){}

function upload(compressedFile){}

download('http://codingblocks.com/myfile.mp4')
.then(
    (downloadedFile)=>{
        console.log( downloadedFile);
    })
    .catch((err)=>{
        console.log(err);
    }
)


// download('http://codingblocks.com/myfile.mp4')
// .then(
//     (downloadedFile)=>{
//         console.log( downloadedFile);
//     },
//     (err)=>{
//         console.log(err);
//     }
// )