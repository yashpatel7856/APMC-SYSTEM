import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../componantes/Navbar';
import { useNavigate } from 'react-router-dom';
import '../CSS/sendmail.css'
import { useContext } from 'react'
import farmContext from '../context/ycontext'
const SendMail = () => {
    const {Login} = useContext(farmContext);
  console.log(Login);
    const navigate = useNavigate();
  const[mail,setMail]=useState("");
  const submitThis = async(e)=>{
    e.preventDefault();
    try{
        await axios.post('http://localhost:3001/sendmail',{mail})
        .then((res)=>{
            if(res.data.success){
                console.log(res.data);
                navigate('/epass');
            }
        })
        .catch((err)=>{
            console.log(err);
        }) 
    }
    catch(error){
        console.log(error);
    }
}

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
    <div className="fullbody">
    <div className="sendcont">
      <h3 className='bolder m-3 p-5 text-align-center'>Enter your email id to Reset your PassWord</h3>
      <form className="form-horizontal ml-3" onSubmit={submitThis}>
                 <fieldset>
                 <div className="form-group">
                        <label className="col-sm-2 m-2" htmlFor="textinput">Email </label>
                        <div className="col-sm-6 m-3  ">
                        <input type="text" placeholder="Enter Your Mail Id" className="form-control"  required value={mail}onChange={(e)=>setMail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8 ">
                        <div className="pull-right m-3">
                            <button type="submit" className="btn btn-primary" >Send</button>
                        </div>
                        
                        </div>
                    </div>
                </fieldset>
        </form>
        </div>
        </div>
    </>
  )
}

export default SendMail
