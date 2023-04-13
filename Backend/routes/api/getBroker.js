const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../../models/User");
const cors = require("cors");

var jsonParser = bodyParser.json()

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
router.get('/brokerlist', async (req,res) => {
  console.log("Got")
  // console.log(req.body);
  const role ="broker"
  let roleExist = await User.find({role: role});
  if(roleExist){
      console.log(roleExist);
      roleExist.password = "GM";
      // res.redirect('http://localhost:3000');
      return res.send({... roleExist, success : true});
  }else{
      return res.send("I dont give Fuck");
  }
 
  // async function getUsersByRole(role) {
  //     try {
  //       // Use the User model to query the database for all users with the specified role
  //       const users = await User.find({ role: req.bodyrole });
        
  //       // Return the list of users with the specified role
  //     //   return users;
  //     } catch (err) {
  //       // Handle any errors that occurred during the database query
  //       console.error(err);
  //       throw err;
  //     }
  //   }
    
  //   // Example usage: retrieve all users with the role 'admin'
  //   const list = getUsersByRole('broker');
  //   res.json(list);          
});



module.exports = router;