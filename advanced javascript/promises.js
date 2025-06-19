// Commitments that you make to others that will be fulfilled in the future
// can be fulfilled or get rejected

let watchingMovies = true;
function delay(){
    let currentTime = new Date().getTime();
    // console.log(currentTime);
    while (currentTime+1000>new Date().getTime()){

    }
} 

let p = new Promise(function(resolve,reject){
    if(!watchingMovies) return reject("No Popcorn");

    resolve("Yay Popcorns");
});

p.then(
    // Tis function will run on success
    function(msg)
{
    console.log("success",msg);
},
// this function will run on failure
function(err){
    console.log("error",err);
}
)