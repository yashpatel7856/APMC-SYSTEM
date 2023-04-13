const express = require ('express');
const router =express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')
const config = require('config');
const User= require('../../models/User')
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const {check,validationResult} =require('express-validator');

router.get('/',auth,async (req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
    } catch(err){
        console.error(error.message)
        res.status(500).send('Server Error');

    }
});

router.post('/',[
    check("email","plz enter valid email").isEmail(),
    check("password","enter pass more than 4 letters").exists()
],async (req,res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password}= req.body;
    try{
        let user = await User.findOne({email:email});
        if(!user){
            res.status(400).json({errors:[{msg:'Invalid Credential'}]});
        }
        
        const isMatch =await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({errors:[{msg:'Invalid Credential'}]});
        }
        const payload ={
            user:{
                id : user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtToken'),
            {expiresIn:360000},
            (err,token)=>{
                if(err){
                    throw err;
                }
                res.json({token});
            }
            )
    }catch(err){console.error(err.message);
        res.status(500).send('Server Error');
    }
    
    
});

module.exports = router;