const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
let _db;

// Database Name
const dbName = 'todoApp';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// function main() {
//     return new Promise((resolve,reject)=>{
//          client.connect()
//   .then(()=>{
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     resolve(db);
//   })
//   .catch((err)=>{
//     reject(err); 
//   }) 
//  })
 
// }

function main(){
  return client.connect()
  .then(()=>{
    //  const db = client.db(dbName);
     _db = client.db(dbName);
  })
  .catch((err)=>{
      reject(err); 
  }) 
}

function getDB(){
    if(_db) return _db;
    return null;
}

module.exports.mongoConnect = main;
// to connect it to mongoDB database we have to call the main function
module.exports.getDB = getDB;