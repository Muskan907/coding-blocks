// open terminal : in first terminal do 
// in new terminal write mongosh
// use mentors : to open the mentors directory

// Embedded Documents = A nested object inside a document, used to represent related data in a structured way.
db.createCollection('students');

// Insert the documents
db.students.insertMany([
    {
        name: 'Kartik',
        subject: 'Web development',
        company:{
            name:'Coding Blocks',
            country: 'India',
            state: 'Delhi'
        }
    },
    {
        name: 'Monu',
        subject: 'Java',
        company:{
            name:'CodeSkillers',
            country: 'USA'
        }
    },
    {
        name: 'Mosina',
        subject: 'C++',
        company:{
            name:'Hacking Blocks',
            country: 'Australia'
        }
    },
    {
        name: 'Kartik',
        subject: 'Data Science',
        company:{
            name:'Online Coding Blocks',
            country: 'UK'
        }
    }
]);

// to find 
db.students.find({name: 'Monu'});

db.students.find({name: 'Monu'}).toArray() //to get the array
db.students.find({name: 'Monu'}).toArray()[0] // to get a object at index 0

// to fetch the company details only from the array
db.students.find({name: 'Monu'}).toArray()[0].company;
// we can use '.' operator for objects only;it cannot be used with array