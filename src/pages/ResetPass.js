import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../componantes/Navbar';
import { useNavigate } from 'react-router-dom';

const ResetPass = () => {
  const[otp,setOtp]=useState("");
  const navigate = useNavigate();
  const submitThis = async(e)=>{
    e.preventDefault();
    try{
        await axios.post('http://localhost:3001/resetpass',{otp})
        .then((res)=>{
            console.log(res.data)
            if(res.data.success){
                navigate('/resetpass');
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
      <Navbar/>
      <h3 className='bolder m-3 p-5 text-align-center text-danger'>Enter OTP for confirmation</h3>
      <form className="form-horizontal ml-3" onSubmit={submitThis}>
                 <fieldset>
                 <div className="form-group">
                        <label className="col-sm-2 m-3" for="textinput">OTP </label>
                        <div className="col-sm-2 m-3  ">
                        <input type="text" placeholder="Enter otp" className="form-control"  required value={otp}onChange={(e)=>setOtp(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8 ">
                        <div className="pull-right m-3">
                            <button type="submit" className="btn btn-primary" >Send OTP</button>
                        </div>
                        
                        </div>
                    </div>
                </fieldset>
        </form>

    </>
  )
}

export default ResetPass
