import React from 'react'
import '../CSS/Home.css'
import matmaan from '../img/matmaan.jpg'
import market_g from '../img/market_g.webp'
import farmer from '../img/farmer.jfif'
import broker from '../img/broker.jfif'
import dealer from'../img/dealer.png'
import mango from "../img/mango.jfif"
import organic from "../img/organic-food.png"
import News from './News'
import { useContext } from 'react'
import farmContext from '../context/ycontext'
const Home = (props) => {
  const {Login} = useContext(farmContext);
  console.log(Login);
  return (
    <>
  
      <nav>
      <div className="container-fluid bg-success homecon"><nav className="navbar bg-success text-white navbar-expand-lg navbar-light">
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
            <a className="nav-link" href="findveg">
              Buy
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="brokerlist">
              brokers
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
    </div>
      </nav>
      
      
        <News/>
      
    {/* <section className="home-intro">
      <div className="container-fluid">
        <div className="row bg-light mt-3 pd-5 text-lighter justify-content-center">
          <div className="col-8">
            <div className="h1">Welcome to Online Khergam Vegetable Market</div>
            <small className="text-muted h2">Digital Platform ,</small>
            <p className='fst-italic pd-3 mt-2'>Build for Buying Selling Vegetables Online...🍃</p>
            <a href="#" className='btn btn-primary'>Know More</a>
          </div>
          <div className="col-2">
           <div className="img">
              <img src={organic} alt="Webp" className="img-fluid" />
           </div>
          </div>
        </div>
      </div>
    </section> */}


    {/* <section className="users">
      <div className="container">
      <div className="row bg-light">
        <div className="col-4">
          <p className="h3 fw-bold">Farmer</p>
        </div>
        <div className="col-4">
          <p className="h3 fw-bold">Broker</p>
        </div>
        <div className="col-4 ">
          <p className="h3 fw-bold">Dealer</p>
        </div>
      </div>
      </div>
    </section> */}

<div className="abc">
    <section className="main">
      <div className="container py-5 ">
        <div className="row pt-4 text-left">
          <div className="col-lg-7">
            <h1 className='pt-5'>Welcome to our Webpage, Shift Your Work Online! </h1>
            {/*<button className="btn-1 mt-3">More</button>*/}
          </div>
          <div className="col-lg-5">
            <img src={organic} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>

    <section className="new">
      <div className="container py-5">
        <div className="row user-2">
          <div className="col-lg-4">
            <img src={farmer} alt="" className="img-fluid my-2 p-2" />
            <a  href='farmerdash'className='btn-2'>Farmer</a>
          </div>
          <div className="col-lg-4">
            <img src={broker} alt="" className="img-fluid my-2 p-2" />
            <a href='brokerdash' className='btn-2'>Brocker</a>
          </div>
          <div className="col-lg-4">
            <img src={dealer} alt="" className="img-fluid my-2 p-2" />
            <a href='Dealerdash' className='btn-2'>Dealer</a>
          </div>
        </div>
      </div>
    </section>

    <section className="news">
      <div className="container">
        <div className="row">

          /* for links that you find helpful */
          <div className="col-lg-3">
            
          </div>


          /* for continously displaying posters */
          <div className="col-lg-6"></div>

          /* For news componante bix */
          <div className="col-lg-3"></div>
        </div>
      </div>
    </section>





    <section className="demand">
      <div className="container">
        <div className="row py-5">
          <div className="col-5 m-auto text-center">
            <h1>Demanded Veggies & Fruits</h1>
            <h6 fw-bolder text-muted>Make Sure To check This</h6>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-3 ">
            <div className="card border-0 bg-light">
              <div className="card-body">
                <img src={mango} alt="" className='img-fluid rounded' />
              </div>
            </div>
            <h6>Mango :</h6>
            <p>100 per/Kg</p>
          </div>
          <div className="col-lg-3 ">
            <div className="card border-0 bg-success">
              <div className="card-body">
                <img src={mango} alt="" className='img-fluid rounded' />
              </div>
            </div>
            <h6>Mango :</h6>
            <p>100 per/Kg</p>
          </div>
          
        </div>
        <div className="row">
          <div className="col-lg-6 text-center m-auto">
            <button className="btn-1 m-3">
              <h5>More</h5>
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <section className="ft">
    <div className='bg-dark text-white pt-5 pd-4'>
       <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-3 mx-auto mt-3 ">
          <h5 className='text-uppercase mb-4 text-warning'>Creators</h5>
            <p><a href="" className='text-white'> Yash</a></p>
            <p><a href="" className='text-white'> Parth</a></p>
          </div>
          <div className="col-3 mx-auto mt-3">
            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Company Name </h5>
            <p>Here is my footer whcih i have made with help of bootstrap and react css and js ...!</p>

          </div>
          <div className='col-2 mx-auto mt-3 '>
            <h5 className='text-uppercase mb-4 text-warning'>Products</h5>
            <p><a href="" className='text-white'> ShppoingDetails</a></p>
            <p><a href="" className='text-white'> Vendor</a></p>
            <p><a href="" className='text-white'> HowItWorks</a></p>
            <p><a href="" className='text-white'> ProductDetails</a></p>
          </div>
        </div>
       </div>
       </div>
    </section>

    </div>
    </>
    
  )
}

export default Home
