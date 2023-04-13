import React from 'react'
import Dnavbar from '../componantes/Dnavbar'
import farming from '../img/pfar.jfif'
import broker from '../img/broker.jfif'
import { Routes,BrowserRouter as Router,Route,Link, useLocation} from "react-router-dom"
import tarbuch from "../img/watermelon.jfif"

function Dealerdash() {
  const location = useLocation();
  return (
    
    <>
    <Dnavbar/>
    <div className="bx mx-3 p-5w-100 bg-dark">
        <div className="row">
          <div className="col-4 mt-1">
            <div className="text-center sidebar">
              <div className="dt mt-2 p-2 ">
                <img src={farming} alt="img is here " className="img-fluid"/>
                <div className="mt-3">
                  <h3>Dealer NAME</h3>
                  <li><a href="">Home</a></li>
                  <li><a href="">Fill Your Demand</a></li>
                  <li><a href="">Broker's Info</a></li>
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
                {location.state.name}
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-3">
                  <h5>Email</h5>
                </div>
                <div className="col-9">{location.state.email}</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-3">
                  <h5>Adress</h5>
                </div>
                <div className="col-9">Khergam </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-3">
                  <h5>Phone</h5>
                </div>
                <div className="col-9">+91 9996959569</div>
              </div>
              <hr/>
              <h3 className="demad bg-none text-black text-align-center">Broker's Upload</h3>
              <div className="row demand">
              
              <div className="col-4 mt-3">
                  <div className="card" >
                  <img src={broker} alt="tarbuch" className="card-img-top" />
                    <div className="card-body">
                      <ul>
                        <p>Phone : +91 8981284512</p>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4 mt-3">
                  <div className="card" >
                  <img src={broker} alt="tarbuch" className="card-img-top" />
                    <div className="card-body">
                      <ul>
                        <p>Phone :+91 4541842481</p>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4 mt-3">
                  <div className="card" >
                  <img src={broker} alt="tarbuch" className="card-img-top" />
                    <div className="card-body">
                      <ul>
                        <p>Phone: +91 6326349743</p>
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

export default Dealerdash
