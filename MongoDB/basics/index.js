// mongod --dbpath=C:\data\db  --use this to

// in other new terminal wirte mongosh
// use test :used to open db test
// show dbs :used to check the current database that exists
// use studentDB :this will shift is to student database
// db.createCollection('students') : will create a collection name students in studentDB

// Methods to Insert
// db.collection.insertOne()
// db.collection.insertMany()
// Example:db.students.insertOne({name: "John",age: 20})
// db.students.insertMany([{name: 'Mosina',subject: 'C++'},{name: 'Varun',subject:'Data'}])

// Method to Read
// db.collection.find()


// 1. Show current databases = show dbs;
// 2. Create a databse = use databaseName;
// 3. Create a collection = db.createCollection('collectionName');
// 4. Show current collections = show collections;


// Database → Like a folder.
// Collection → Like a table (but in NoSQL).
// Document → Like a row (in JSON format).
// Field → Like a column (key-value pair inside a document).

// 1. Show current databases = show dbs;
// 2. Create a databse = use databaseName;
// 3. Create a collection = db.createCollection('collectionName');
// 4. Show current collections = show collections;

// 5. There are two ways to insert data into DB using shell
// insertOne()
// insertMany()

// 6. Show data inside a collection = db.collectionName.find()

let users = [
    {name: 'Kartik', subject: 'Web development'},
    {name: 'Monu', subject: 'Java'},
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}
]; // This is just for example.


// use mentors;
db.createCollection('teachers');
db.teachers.insertOne({name: 'Kartik', subject: 'Web development'});
db.teachers.insertOne({name: 'Monu', subject: 'Java'});

db.teachers.insertMany([
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'},
    {name: 'Monu', subject: 'Web'},
    {name: 'Vasu', subject: 'Science'}
])

db.teachers.find()

// 2nd video
db.createCollection('products');

db.products.insertMany([
    {name:'Laptop', features:['Touchpad','i-6'], company:'Dell', price:20},
    {name:'Laptop', features:['4K Screen','i-7'], company:'HP', price:30},
    {name:'Laptop', features:['SSD','i-9'], company:'Apple', price:100},
    {name:'Laptop', features:['Antiglare','i-7'], company:'Lenovo', price:50},
    {name:'Mobile', features:['Touchscreen','256GB'], company:'Samsung'},
    {name:'Keyboard', features:['RGB Lighting','Mechanical'], company:'Logitech'},
]);



// Find data using key
mentors> db.products.find({name:'Laptop'});

// find using price and $in sign
db.products.find({price:{$in:[20,50]}}); //$in sign checks wheteher the either of the value is present
db.products.find({features:'4K Screen'});

// To find data using (AND) operation
db.products.find({name:'Laptop',features:['Antiglare','i-7'],company:'Lenovo'});

// Find data using OR operation
db.products.find();


// Find laptop whose price is greater than 25
db.products.find({name:'Laptop',price:{ $gt:25  }});


// to create a collection: characters
db.createCollection('characters');

// Insert them inside characters
db.characters.insertMany([
    {name: 'Tony Stark'},
    {name: 'Sherlock'},
    {name: 'Jon Snow'},
    {name: 'Robb Stark'},
    {name: 'Ross'},
    {name: 'Monica'},
    {name: 'Ted Mosby'},
    {name: 'Barney'},
    {name: 'Jack'},
    {name: 'Richards'},
    {name: 'Professor Mc Ganecal'},
    {name: 'Wolves'},
    {name: 'Bruce Lee'},
    {name: 'Clark Kent'},
    {name: 'Diana Prince'},
    {name: 'Bro'},
    {name: 'John'},
    {name: 'Luke Skywalker'},
    {name: 'Jethalal'},
    {name: 'Jackie Chan'},
    {name: 'Spiderman'},
    {name: 'Hermione'},
    {name: 'Harry Potter'},
    {name: 'Ron Weasley'},
    {name: 'Albus Dumbledore'},
    {name: 'Severus Snape'},
    {name: 'Joey Tribbiani'},
    {name: 'Chandler Bing'},
])

// this method returns a cursor,and the cursor automatically iterate up to 20 times
db.characters.find();

// type 'it' to print all the elements

// we can use toArray() to get all data that is available
db.characters.find().toArray(); 

// Other way to do this is to use forEach
// db.characters.find().forEach(ch => printjson(ch));
db.characters.find().forEach((character) => {printjson(character)});

// Update operation
// 1. updateOne() - to update only one data
// Lets Update the price to 120 of the laptop which has feature as touchpad
db.products.updateOne(
    {
        features:'Touchpad'
    },
    {
        $set:{price:120}
    }
);

// 2. updateMany() - to update the price to all items
// Adding price to other items 
db.products.updateMany(
    {
        name:{
            $ne:'Laptop'
        }
},
    {
        $set:{
            price:99
        }
    }
)
// $ne means not equal to
// $set is used to set


// Pagination
db.characters.find().limit(5); // this will return first 5 elements
db.characters.find().skip(5).limit(5); // this will skip first 5 items and return next 5 items


// Delete operation
// 1. deleteOne() - this will delete only the element that we select and do not affect any other element
db.characters.deleteOne(
    {name:'Gandalf'}
);

db.characters.drop(); // this will delete the collection
db.dropDatabase(); // this will delete the whole database

// 2. deleteMany() - this will delete all items inside collection but not the collection
db.deleteMany({});