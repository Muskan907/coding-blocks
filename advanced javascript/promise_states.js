// Promises states:
// 1. Pending : when we create promise it goes into the pending state
// 2. Resolved : when the promise is fulfilled
// 3. Rejected : when the promise is rejected
// 4. Fulfilled : when the promise is resolved or rejected , we don't want to do anything else.

function willYouMarryMe(fightsCount){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        if(fightsCount >100) return reject("Not getting married");
        resolve("Getting married");
        },3000);
    })
}

willYouMarryMe(109)
.then(
    (msg) =>{
        console.log(msg);
    },
    (err)=>{
        console.log(err);
    }
)
