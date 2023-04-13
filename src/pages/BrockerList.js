import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import '../CSS/style.css'
import axios from "axios"
import '../CSS/brk.css'
import Bnavbar from '../componantes/Bnavbar'
import Cookies from 'js-cookie';
import Dnavbar from '../componantes/Dnavbar';
import Fnavbar from '../componantes/Fnavbar';
import Navbar from '../componantes/Navbar';
import { useContext } from 'react'
import farmContext from '../context/ycontext'
import '../CSS/brokerlist.css'
// const express = require("express")
// const router = express.Router();
// const bodyParser = require("body-parser");
// // const User = require("../../models/User");
// // const cors = require("cors");

// var jsonParser = bodyParser.json()
// router.use(jsonParser);

function BrockerList()  {
//   const location = useLocation();
//   console.log(location);
  
//   const list = location._docs;
const {Login} = useContext(farmContext);
  console.log(Login);
  const [myData,setmyData] =useState([]);
  const [iserr,setError] =useState("");
    const getBrokerdata= async ()=>{
        try{
            const res = await axios.get('http://localhost:3001/brokerlist');
            console.log(res.data);
            setmyData(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=> {
        // axios
        // .get('http://localhost:3001/brokerlist')//,{role: "farmer"}
        // .then((res)=>
        //     // if(res.data.success){
        //     // console.log(res.data);
        //     // res.json(res.data);
        //     setmyData(res.data)
        //     // }
        // )
        // .catch((err)=>setError(err.message))
        getBrokerdata();
    },[]);


    var result = Object.entries(myData);
    console.log(result);
    const rl = Cookies.get('role');
    // var nr = result.map(obj=>Object.entries(obj));
        return (
            <>
            <nav className="navbar bg-success text-white navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        Navbar
      {/* <img src={organic} alt="Veg" className="img-thumbnail img-fluid mx-width:10% "/> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="brokerlist">
              Brokers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="findveg">
              Buy
            </a>
          </li>
          <li className="nav-item">
            {!Login?<a className="nav-link" href="login">
            login/signup
            </a>:<a className="nav-link" href="/">Logout</a>}
          </li>
        </ul>
      </div>
    </nav>
           
              <div className="body">
              <h4 className='cnt p-5 m-3 bg-dark text-danger'>Available Brokers</h4>
              {/* {console.log(typeof mydata)} */}

              <div className="flex-container p-3 m-3 w-30">
                {
                result.map((post)=>{
                    const {id,name,email,role,date} = post[1];
                    return (
                        <div className='flex-item bg-dark p-3 m-3 bb' key={id}>
                        <p>Name: <span className='text-white'>{name}</span></p>
                        <p>email : <span className='text-white'>{email}</span></p>
                        <p>role : <span className='text-white'>{role}</span></p>
                        <hr/>
                    </div>
                    );
                })}

              </div>
              </div>
            </>
        )
};

export default BrockerList
