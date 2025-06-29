// many to many - Multiple documents are linked to multiple related documents
// Example: A user can have multiple friends, and a friend can have multiple users


db.createCollection('actors');

db.actors.insertMany([
    {name:'Sheldon Cooper'},
    {name:'Penny'}
])

db.createCollection('movies');
db.movies.insertMany([
    {name:'The Big Bang Theory'},
    {name:'Young Sheldon'}
])

// need to create a common collection for many to many 
db.createCollection('actors_movies');

// Actor Id : '0': ObjectId('685c36155bbac52e7c748a81'),
// '1': ObjectId('685c36155bbac52e7c748a82')

// Movies Id :'0': ObjectId('685c36505bbac52e7c748a83'),
// '1': ObjectId('685c36505bbac52e7c748a84')


// actorID: ObjectId('685c36155bbac52e7c748a81'), ObjectId('685c36155bbac52e7c748a82')
// movieId: ObjectId('685c36505bbac52e7c748a83'), ObjectId('685c36505bbac52e7c748a84')

db.actors_movies.insertMany([
    {
        actorID: ObjectId('685c36155bbac52e7c748a81'),
        movieId: ObjectId('685c36505bbac52e7c748a83')
    },
    {
        actorID: ObjectId('685c36155bbac52e7c748a81'),
        movieId: ObjectId('685c36505bbac52e7c748a84')
    },
    {
        actorID: ObjectId('685c36155bbac52e7c748a82'),
        movieId: ObjectId('685c36505bbac52e7c748a83')
    }
])

// Fetch details
db.actors_movies.aggregate(
    {
        $lookup:{
            from: 'actors',
            localField: 'actorID',
            foreignField: '_id',
            as: 'actorInfo'
        }
    },
    {
        $lookup:{
            from: 'movies',
            localField: 'movieId',
            foreignField: '_id',
            as: 'movieInfo'
        }
    }
)