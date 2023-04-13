import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../componantes/Navbar';
import { useNavigate } from 'react-router-dom';

const Epass = () => {
    const[pass,setpass]=useState("");
    const[cp,setcp]=useState("");
    const navigate = useNavigate();
    
    const submitThis = async(e)=>{
      if(cp!=pass) console.log("Pass Not matching ")
      else{
        e.preventDefault();
        try{
            
            await axios.post('http://localhost:3001/newpass',{pass})
            .then((res)=>{
                if(res.data.success){
                    console.log(res.data);
                    navigate('/login');
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
  }
    return (
      <>
        <Navbar/>
        <h3 className='bolder m-3 p-5 text-align-center text-danger'>Enter New PassWord</h3>
        <form className="form-horizontal ml-3" onSubmit={submitThis}>
                   <fieldset>
                   <div className="form-group">
                          <label className="col-sm-2 m-3" for="textinput">Password </label>
                          <div className="col-sm-2 m-3  ">
                          <input type="text" placeholder="Enter password" className="form-control"  required value={pass}onChange={(e)=>setpass(e.target.value)}/>
                          </div>
                      </div>
                      <div className="form-group">
                          <label className="col-sm-2 m-3" for="textinput">Confirm Password </label>
                          <div className="col-sm-2 m-3  ">
                          <input type="text" placeholder="Confirm Password" className="form-control"  required value={cp}onChange={(e)=>setcp(e.target.value)}/>
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
  
      </>
    )
  }
  
  export default Epass
  
