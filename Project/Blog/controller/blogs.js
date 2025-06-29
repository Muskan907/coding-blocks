const Blogs = require('../models/blogs')
const Actors = require('../models/actors')

module.exports.getBlogs = async (req, res) => {
    let blogs = await Blogs.find();
    // console.log(blogs);
    res.render('blogs',{
        blogs
    });
}

module.exports.postBlogs = async (req, res) => {
    const { title, description,actor } = req.body;
    // await Blogs.create({title,description,actor})
    res.redirect('/blogs');
}

module.exports.getDelete = async (req, res) => {
    const { id } = req.query;
    await Blogs.deleteOne({_id: id});
    res.redirect('/blogs');
}

module.exports.getUpdate = async (req, res) => {
    const { id } = req.query;
    let blog = await Blogs.find({_id :id}); //as i have to read the id to get the item and the update it
    console.log(blog);
    res.render('updateBlog',{
        blog: blog[0]
    });
    
}

module.exports.postUpdate = async (req, res) => {
    const{title,description,actor,id} = req.body;
    //console.log(title,description,actor,id);
    let blog = await Blogs.findOne({_id: id});
    blog.title = title;
    blog.description = description;
    blog.actor = actor;
    await blog.save();
    res.redirect('/blogs');
}

module.exports.getDetails = async (req, res) => {
    const{id} = req.query;
    
    let blog = await Blogs.findOne({_id: id});
    res.render('blogDetails',{
        blog
    })
}

module.exports.getActors = async (req, res) => {
    let actors = await Actors.find({});
    res.render('actors',{
        actors
    })
}

module.exports.postActors = async (req, res) => {
    const {actorImageUrl,name,age} = req.body;
    await Actors.create({imageUrl: actorImageUrl,name,age});
    res.redirect('/actors');

}

