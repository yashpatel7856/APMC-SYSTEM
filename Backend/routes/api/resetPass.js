const nodemailer = require("nodemailer");

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../../models/User");
const cors = require("cors");
let email = '';

var jsonParser = bodyParser.json();
let OTP = '';

router.use(jsonParser);

const corsOptions ={
  headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

router.use(cors());

var urlencodedParser = bodyParser.urlencoded({ extended: false })  
router.post('/sendmail', async (req,res) => {
  console.log(req.body);
  OTP = '';
  var digits = '0123456789';
  for (let i = 0; i < 4; i++ ) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }

  let testAccount = await nodemailer.createTestAccount();
  email = req.body.mail;

  console.log(email);

  // connect with the smtp
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kyra72@ethereal.email',
        pass: 'MT8YkCb7eQnRnuMwZS'
    }
});

  let info = await transporter.sendMail({
    from: "tot", // sender address,
    to: email, // list of receivers
    subject: "OTP le", // Subject line
    text: OTP, // plain text body
    html: OTP, // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json({success: "true"});
});

router.post('/resetpass', (req,res) => {
  console.log(req.body);
  if(OTP == req.body.otp){
    res.json({success:"true"});
  }else{
    res.send("Auth failed");
  }
});

router.post('/newpass',async (req,res) => {
  try {
    console.log(req.body);
    const user = await User.findOneAndUpdate({email: email}, {password: req.body.pass});
    console.log(user);
    res.json({success:"true"});
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
