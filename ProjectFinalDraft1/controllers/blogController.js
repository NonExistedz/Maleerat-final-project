const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err);
            res.render('404', { title: 'Blog not found' });
        });
}

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
    console.log(req.body)
    const blog = new Blog(req.body);
    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
}

const blog_update_get = (req, res, next) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            console.log(result)
            res.render('edit', { blog: result, title: 'Edit blog' });
        })
        .catch(err => {
            console.log(err);
            res.render('404', { title: 'Blog not found' });
        });
}

const blog_update_post = (req, res) => {
    console.log(req.body)
    const blog = new Blog(req.body);
    blog.save()
        .then(result => {
            const id = req.params.id;
            Blog.findByIdAndDelete(id)
                .then(result => {
                    res.json({ redirect: '/blogs' });
                })
                .catch(err => {
                    console.log(err);
                });
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}

const blog_about = (req, res) => {
    res.render('about', { title: 'Blog About' });
}


module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_update_get,
    blog_update_post,
    blog_delete,
    blog_about
}