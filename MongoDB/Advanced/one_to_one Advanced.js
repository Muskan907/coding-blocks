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

// 1.One to One Mapping
db.teachers.updateOne(
    {
        _id: ObjectId('685c232d5bbac52e7c748a77'),
    },
    {
        $set:{
            productId: ObjectId('685c24075bbac52e7c748a7b')
        }
    }
)

// 2.Fetching data from two collections
db.teachers.aggregate({
    $lookup: {
        from: 'products',
        localField:'productId',
        foreignField: '_id',
        as: 'productDetails'
    }
})

