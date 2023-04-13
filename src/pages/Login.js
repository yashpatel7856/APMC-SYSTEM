import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/style.css'
import axios from "axios"
import { useState } from 'react';
import farmContext from '../context/ycontext';
import { useContext } from 'react';
import Cookies from 'js-cookie';

export const Login = () => {
  const {Login} = useContext(farmContext);
  console.log(Login);
  const a = useContext(farmContext);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();
    const submitThis = async(e)=>{
        e.preventDefault();

        try{
            await axios.post('http://localhost:3001/login',{email,password})
            .then((res)=>{
                if(res.data.success){
                  a.setLogin(res?.data?._doc);
                  sessionStorage.setItem("user",res?.data?._doc?._id);
                  sessionStorage.setItem("name",res?.data?._doc?.name);
                    Cookies.set('role', res.data._doc.role);
                    if(res.data._doc.role === "farmer") navigate('/farmerdash', {
                      state:{
                        name: res.data._doc.name,
                        email: res.data._doc.email
                      }
                    });
                    if(res.data._doc.role === "broker") navigate('/Brokerdash', {
                      state:{
                        name: res.data._doc.name,
                        email: res.data._doc.email
                      }
                    });
                    if(res.data._doc.role === "dealer") navigate('/Dealerdash', {
                      state:{
                        name: res.data._doc.name,
                        email: res.data._doc.email
                      }
                    });
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
    <div className='new' scope="row">
      <div className="image">
        <img src="D:\0000000react_faltu\APMC11.0\11-4\11-4\public\img\organic-food.png" alt="" />
      </div>
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={submitThis}>
        <div className="txt_field">
          <input type="text" name="email"required value={email}onChange={(e)=>setemail(e.target.value)}/>
          <span></span>
          <label>email</label>
        </div>
        <div className="txt_field">
          <input type="password" name="password" required value={password}onChange={(e)=>setpassword(e.target.value)}/>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass"><a href="/sendmail">Forgot Password?
          </a></div>
        <input type="submit" value="Login" />
        {/* <a href="/farmerdash">
          <p>Submit</p>
        </a> */}
        <div className="signup_link">
          Not a member? <a href="/signup">Signup</a>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}
