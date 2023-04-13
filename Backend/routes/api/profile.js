const express = require ('express');
const router =express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const {check,validationResult} = require('express-validator/check');
//@route get api/profile
//@desc TEst routes 
//@access public 
router.get('/me',auth,async (req,res)=>{
    try{
        const profile = await Profile.findOne({user: req.user.id}).populate('user',['name','avtar']);
        if(!profile){
            res.status(400).json({msg: 'No profile found'})
        }

        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/',[auth,[
    check('status','Status is required ')
    .not()
    .isEmpty(),
    check('skills','skills are required')
    .not()
    .isEmpty()
]], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({errors:errors.array()})
    }

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = req.body;

    const profileField={};
    profileField.user = req.user.id
    if(company) profileField.company=company;  
    if(website) profileField.website=website;  
    if(location) profileField.location=location;  
    if(bio) profileField.bio=bio;  
    if(status) profileField.status=status;  
    if(githubusername) profileField.githubusername=githubusername; 
    
    if(skills){
        profileField.skills = skills.split(',').map(skills=>skills.trim());
    }

    profileField.social ={};
    if(youtube) profileField.social.youtube=youtube;  
    if(twitter) profileField.social.twitter=twitter;  
    if(facebook) profileField.social.facebook=facebook;  
    if(linkedin) profileField.social.linkedin=linkedin;  
    if(instagram) profileField.social.instagram=instagram;  

    try{
        let profile = await Profile.findOne({user:req.user.id});

        if(profile){
            profile = await Profile.findOneAndUpdate(
                {user: req.user.id},
                {$set:profileField},
                {new: true}
            );

            return res.json(profile);
        }

        profile = new Profile(profileField);

        await profile.save();
        res.json(profile);
    } catch(err){
        console.error(err.message);
        return res.status(500).send("Server error");
    }
    res.send('hello');
});

router.get('/',async (req,res)=>{
    try{
        const profiles = await Profile.find().populate('user',['name','email','avtar']);
        res.json(profiles);
    }catch(err){
        console.error(err.message);
        return res.status(500).send('server error');
    }
});

router.get('/user/:user_id',async (req,res)=>{
    try{
        const profile = await Profile.findOne({user: req.params.user_id}).populate('user',['name','avtar']);
        if(!profile) return res.status(500).json({msg:'Not valid user'});
        res.json(profile);
    }catch(err){
        console.error(err.message);
        if(err.kind == 'ObjectId') return res.status(500).json({msg:'Not valid user'});
        return res.status(500).send('server error');
    }
});

router.delete('/',auth,async (req,res)=>{
    try{
        await Profile.findOneAndRemove({user: req.user.id});
        await User.findOneAndRemove({_id: req.user.id});
        res.json({msg:'User deleted'});
    }catch(err){
        console.error(err.message);
        if(err.kind == 'ObjectId') return res.status(500).json({msg:'Not valid user'});
        return res.status(500).send('server error');
    }
});

router.put('/experience',[auth,[
    check('title','Title is required')
    .not()
    .isEmpty(),
    check('company',"Company is required")
    .not().
    isEmpty(),
    check('from',"from date is required")
    .not()
    .isEmpty()
    ]],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(500).json({errors:errors.array()});
    }

    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body;

    const exp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    };
    try{
        const profile = await Profile.findOne({user: req.user.id});
        // profile.experience.unshift(exp);
        profile.experience.push(exp);
        await profile.save();
        res.json(profile);
    } catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
});

router.delete('/experience/:exp_id',auth,async (req,res)=>{
    try {
        const profile = await Profile.findOne({user: req.user.id});
        // get remove index
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);
        profile.experience.splice(removeIndex,1);
        await profile.save();
        res.json(profile);
    } catch (err) {
        
        console.error(err.message);
        res.status(500).send("server error");
    }
})

module.exports = router;