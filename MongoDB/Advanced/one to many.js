// one to many - One document is linked to multiple related documents
[
  {
    _id: ObjectId('685c232d5bbac52e7c748a77'),
    name: 'Mosina',
    subject: 'C++'
  },
  {
    _id: ObjectId('685c232d5bbac52e7c748a78'),
    name: 'Varun',
    subject: 'Data Science'
  },
  {
    _id: ObjectId('685c232d5bbac52e7c748a79'),
    name: 'Monu',
    subject: 'Web'
  },
  {
    _id: ObjectId('685c232d5bbac52e7c748a7a'),
    name: 'Vasu',
    subject: 'Science'
  }
]

[
  {
    _id: ObjectId('685c24075bbac52e7c748a7b'),
    name: 'Laptop',
    features: [ 'Touchpad', 'i-6' ],
    company: 'Dell',
    price: 20
  },
  {
    _id: ObjectId('685c24075bbac52e7c748a7c'),
    name: 'Laptop',
    features: [ '4K Screen', 'i-7' ],
    company: 'HP',
    price: 30
  },
  {
    _id: ObjectId('685c24075bbac52e7c748a7d'),
    name: 'Laptop',
    features: [ 'SSD', 'i-9' ],
    company: 'Apple',
    price: 100
  },
  {
    _id: ObjectId('685c24075bbac52e7c748a7e'),
    name: 'Laptop',
    features: [ 'Antiglare', 'i-7' ],
    company: 'Lenovo',
    price: 50
  },
  {
    _id: ObjectId('685c24075bbac52e7c748a7f'),
    name: 'Mobile',
    features: [ 'Touchscreen', '256GB' ],
    company: 'Samsung'
  },
  {
    _id: ObjectId('685c24075bbac52e7c748a80'),
    name: 'Keyboard',
    features: [ 'RGB Lighting', 'Mechanical' ],        
    company: 'Logitech'
  }
]

// to delete the one to one mapping this wil delete the product id from teachers
db.teachers.updateMany({},{$unset:{productId:1}}); 

db.teachers.updateOne(
    {
        _id: ObjectId('685c232d5bbac52e7c748a77')
    },
    {
        $set:{
            product_IDs: [
                ObjectId('685c24075bbac52e7c748a7f'),
                ObjectId('685c24075bbac52e7c748a80')
            ]
        }
    }
)

db.teachers.updateOne(
    {
        _id: ObjectId('685c232d5bbac52e7c748a78')
    },
    {
        $set:{
            product_IDs: [
                ObjectId('685c24075bbac52e7c748a80'),
                ObjectId('685c24075bbac52e7c748a7e')
            ]
        }
    }
)

// one to many advanced using embedded
// fetch details 
db.teachers.aggregate({
    $lookup:{
        from: 'products',
        localField: 'productId',
        foreignField: '_id',
        as: 'productDetails'
    }
})