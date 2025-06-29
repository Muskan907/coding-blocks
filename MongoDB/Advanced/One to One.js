[
  {
    _id: ObjectId('685bf9c30497c9bb54748a5f'),
    name: 'kartik',
    subject: 'Web'
  },
  {
    _id: ObjectId('685c201a5bbac52e7c748a63'),
    name: 'Mosina',
    subject: 'C++'
  },
  {
    _id: ObjectId('685c201a5bbac52e7c748a64'),
    name: 'Varun',
    subject: 'Data Science'
  },
  {
    _id: ObjectId('685c201a5bbac52e7c748a65'),
    name: 'Monu',
    subject: 'Web'
  },
  {
    _id: ObjectId('685c201a5bbac52e7c748a66'),
    name: 'Vasu',
    subject: 'Science'
  }
]

// 1. Store data via embedded document
db.teachers.updateOne(
    {
        _id: ObjectId('685bf9c30497c9bb54748a5f') //update details for kartik
    },
    {
        $set:{
            laptop: {name:'Mobile', features:['Touchscreen','256GB'], company:'Samsung'}
        }
    }
)

// check using : db.teachers.find()