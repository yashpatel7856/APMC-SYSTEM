const express = require ('express');
const router =express.Router();
const {check,validationResult} =require('express-validator/check');
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const Post = require('../../models/Postt');
const User = require('../../models/User');

//@route post api/post
//@desc post user
//@access public 
router.post('/',[auth,[
    check('text','Invalid msg......').not().isEmpty()
]], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
    }
    try {
        const user = await User.findById(req.user.id).select('-password');
        const newPost= new Post({
            text : req.body.text,
            name : user.name,
            avtar: user.avtar,
            user : user.id
        });
        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

router.get('/',auth,async (req,res)=>{
    try {
        const posts = await Post.find().sort({date:-1});
        res.json(posts);
        
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

router.delete("/:id",auth, async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({msg : "post not found !!!"});
        }
        if(post.user.toString!=req.user.id){
            return res.status(401).json({msg:"You are not Authorized"});
        }

        await post.remove();
        res.json({msg:"Post is Removed"});
    } catch (err) {
        console.error(err.message);
        if(err.kind == "ObjectId"){
            return res.status(404).json({msg:"Post not found"});
        }
        return res.status(500).send("Server error");
    }

});

router.put("/like/:id",auth,async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.likes.filter(like => like.user.toString()===req.user.id).length>0){
            return res.status(401).json({ msg:"Alredy liked"});
        }
        post.likes.unshift({user:req.user.id});
        await post.save();
        res.json(post.likes);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

router.put("/unlike/:id",auth,async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.likes.filter(likes=> likes.user.toString()===req.user.id).length===0){
            return res.status(401).json({ msg:"not yet liked "});
        }
        const index = post.likes.map(like=>like.user.toString()).indexOf(req.user.id);
        post.likes.splice(index,1);
        await post.save();
        res.json(post.likes);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
});

router.post('/comments/:id',[auth,[
    check('text','Invalid msg ').not().isEmpty()
]], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
    }
    try {
        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(req.params.id);
        const newcomment ={
            text : req.body.text,
            name : user.name,
            avtar: user.avtar,
            user : user.id
        };
        post.comments.unshift(newcomment);
        await post.save();
        res.json(post.comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});


module.exports = router;