import Fnavbar from "../componantes/Fnavbar"
import React from "react"
import '../CSS/fardash.css'
import { Routes,BrowserRouter as Router,Route,Link, useLocation} from "react-router-dom"
import farming from '../img/pfar.jfif'
import tarbuch from "../img/watermelon.jfif"
function Farmerdash({name, email}) {
  if(name == undefined){
    name= "Ramesh";
  }
  if(email == undefined){
    email="rmaesh@gmail.com";
  }
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Fnavbar/> 
      <div className="bx mx-3 p-5 w-100 bg-dark">
        <div className="row">
          <div className="col-4 mt-1">
            <div className="text-center sidebar">
              <div className="dt mt-2 p-2 ">
                <img src={farming} alt="img is here " className="img-fluid"/>
                <div className="mt-3">
                  <h3>parth patel</h3>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Sell</a></li>
                  <li><a href="">History</a></li>
                  <li><a href="">Logout</a></li>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 content mt-2">
            <div className="info mb-3 content">
              <h3 className="m-3 pt-3">Your Profile</h3>
              <div className="row">
                <div className="col-3">
                  <h5>Full Name</h5>
                </div>
                <div className="col-9 text-secondary">
                    { location.state.name} 
                    
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-3">
                  <h5>email</h5>
                </div>
                
                <div className="col-9">
                {location.state.email}
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-3">
                  <h5>Adress</h5>
                </div>
                <div className="col-9">Lunavad</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-3">
                  <h5>Phone</h5>
                </div>
                <div className="col-9">+91 9548242114</div>
              </div>
              <hr/>
              <h3 className="demad bg-none text-black text-align-center">Demads</h3>
              <div className="row demand">
              
              <div className="col-4 mt-3">
                  <div className="card" >
                  <img src={tarbuch} alt="tarbuch" className="card-img-top" />
                    <div className="card-body">
                      <ul>
                        <p>Price : 70rs /kg</p>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4 mt-3">
                  <div className="card" >
                  <img src={tarbuch} alt="tarbuch" className="card-img-top" />
                    <div className="card-body">
                      <ul>
                        <p>Price : 70rs /kg</p>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4 mt-3">
                  <div className="card" >
                  <img src={tarbuch} alt="tarbuch" className="card-img-top" />
                    <div className="card-body">
                      <ul>
                        <p>Price : 70rs /kg</p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Farmerdash
