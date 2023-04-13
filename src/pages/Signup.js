import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/style1.css'
import axios from "axios"
import { useState } from 'react';
import { useContext } from 'react';
import farmContext from '../context/ycontext'
export const Signup = () => {
  const {Login} = useContext(farmContext);
  console.log(Login);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [role, setrole] = useState("farmer");
  const [name, setname] = useState("");

  const navigate = useNavigate();
  const submitThis = async(e)=>{
  
      e.preventDefault();
      try{
          await axios.post('http://localhost:3001/signup',{email,password,name,role})
          .then((res)=>{
              if(res.data.success){
                  navigate('/');
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
    <div>
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
    <div class="center">
      <h1>SignUp</h1>
      <form onSubmit={submitThis}>
        <div className="txt_field">
          <input type="text" name="name" required value={name}onChange={(e)=>setname(e.target.value)}/>
          <span></span>
          <label>name</label>
        </div>
        <div className="txt_field">
            <input type="text" name="email"required value={email}onChange={(e)=>setemail(e.target.value)}/>
            <span></span>
            <label>email</label>
          </div>
          <div className="txt_field">
            <input type="password" name="password"required value={password}onChange={(e)=>setpassword(e.target.value)}/>
            <span></span>
            <label>password</label>
          </div>
        <div className="txt_field">
        <input type="password" name="cpassword"required value={cpassword}onChange={(e)=>setcpassword(e.target.value)}/>
          <span></span>
          <label>confirm password</label>
        </div>
        <div className="txt_field">
        <div className="type"><span></span>
          <label></label>
          <select name="role" id="type" onChange={(e)=>setrole(e.target.value)}>
            <option value="farmer">Farmer</option>
            <option value="broker">Broker</option>
            <option value="dealer">Dealer</option>
          </select>
          </div>
        </div>
        <input type="submit" value="Submit"/>
        <div className="login_link">
          already have account? <a href="/login">Login</a>
        </div>  
      </form>
    </div>
    </div>
  )
}

export default Signup
