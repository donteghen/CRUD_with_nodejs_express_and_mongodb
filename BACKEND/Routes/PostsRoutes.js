// We need mongoose so we can use it fo our post
const mongoose = require('mongoose');
// require our post model for the route
const Posts = mongoose.model('posts');
// require express for access the router class
const express = require('express');
const router = express.Router();

// make controller available for route configuaring
const controllerRoute = require('../Controllers/PostControllers');
//use route for getting posts
router.get('/', controllerRoute.baseRoute);
    
router.get('/getPosts', controllerRoute.getPostRoute);

router.post('/createPost', controllerRoute.createPost);

router.get('/getPost/:id', controllerRoute.postById);

router.put('/getPost/:id/update', controllerRoute.updateById);

router.delete('/delete/:id', controllerRoute.deleteById);
   
 module.exports = router;  