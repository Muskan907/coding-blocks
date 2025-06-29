// const express=require('express');
// const app=express();
// const path = require('path');
// const PORT = 4444;
// const mongoose = require('mongoose');

// app.use(express.urlencoded({extended:true}));
// app.set('view engine','hbs');
// app.set('views', path.join(__dirname, 'views'));

// const blogSchema = new mongoose.Schema({
//     title: String,
//     description: String
// });
// const Blog = mongoose.model('Blog', blogSchema);

// app.get('/blogs',(req,res)=>{
//     res.render('blogs');
// });

// app.post('/blogs', async (req, res) => {
//     const { title, description } = req.body;
//     try {
//         const newBlog = new Blog({ title, description });
//         await newBlog.save();
//         res.send('Blog added successfully ✅');
//     } catch (err) {
//         res.send('❌ Error saving blog');
//     }
// });

// mongoose.connect('mongodb://127.0.0.1:27017/blogsDB')
//    .then(() =>{
//         app.listen(PORT,()=>{
//             console.log(`http://localhost: `+PORT);
//         });
    
//     }).catch(err=>{
//         console.log("Mongoose couldnt connect");
//     });

const express = require('express');
const app = express();
const path = require('path');
const PORT = 4440;
const mongoose = require('mongoose');
const hbs = require('hbs');
// const Blogs = require('./models/blogs')

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Server running ✅');
});

const routeHandler = require('./routes/blogsRoute');
app.use('/',routeHandler);

// MongoDB Connection + Server Start
mongoose.connect('mongodb://127.0.0.1:27017/blogsDB')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ Server running: http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.log("❌ MongoDB Connection Error", err);
    });


// GET /blogs → render the form page
// app.get('/blogs',async (req, res) => {
//     let blogs = await Blogs.find();
//     console.log(blogs);
//     res.render('blogs',{
//         blogs
//     });
    
//     // res.send('✅ Blogs printed in terminal');
// });

// // POST /blogs → handle form submission
// app.post('/blogs', async (req, res) => {
//     const { title, description,actor } = req.body;
//     await Blogs.create({title,description,actor})
//     res.redirect('/blogs');
//     res.send('Request Success');
    
// });


    
// test> show collections;
// blogs
// students
// test> use blogsDB
// switched to db blogsDB
// blogsDB> show collections;
// blogs
// blogsDB> db.blogs.find()
// [
//   {
//     _id: ObjectId('685d651fb3c0580e0a304267'),
//     title: '',
//     description: '',
//     __v: 0
//   },
//   {
//     _id: ObjectId('685d71460f9d62ddb03f8951'),
//     title: 'food',
//     description: 'amaze',
//     __v: 0
//   },
//   {
//     _id: ObjectId('685d715b0f9d62ddb03f8953'),
//     title: 'fodd',
//     description: 'tasty',
//     __v: 0
//   }
// ]
