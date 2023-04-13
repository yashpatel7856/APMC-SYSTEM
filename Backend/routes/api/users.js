const express = require ('express');
const router =express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const con = '../../config'
const{check,validationResult} =require('express-validator')
const User = require('../../models/User');

//@route get api/users
//@desc TEst routes 
//@access public 
// now you have to apply middleware
router.post('/',[
    check("name","Name required").not().isEmpty(),
    check("email","plz enter valid email").isEmail(),
    check("password","enter pass more than 4 letters").isLength({min:4}),
    check("role","enter the role ").isEmpty()
],async (req,res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name,email,password}= req.body;
    try{
        let user = await User.findOne({email:email});
        if(user){
            res.status(400).json({errors:[{msg:'User already exist'}]});
        }
        // get users gravtar
        const avtar = gravatar.url(email,{
            s:'200',
            r:'pg',
            d:'mm'
        })

        user = new User({
            name,
            email,
            avtar,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt);

        await user.save();
        
        const payload ={
            user:{
                id : user.id
            }
        }

        jwt.sign(
            payload,
            con.get('jwtToken'),
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