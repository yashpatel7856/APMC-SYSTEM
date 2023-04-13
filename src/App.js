import './App.css';
import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Cookies from 'js-cookie';
import Baskets from './pages/basket';
import Navbar from './componantes/Navbar';
import Home from './componantes/Home';
import About from './componantes/About';
import News from './componantes/News';
import BillingAddress from './pages/billing';
import Offerscard from './pages/OfferCard';
import Dealer from './pages/Dealer';
import Farmerdash from './pages/Farmerdash';
import Brokerinfo from './pages/Brokerinfo';
import Fprevbill from './pages/Fprevbill';
import Fuploadveg from './pages/Fuploadveg';
import Brokerdash from './pages/Brokerdash';
import Prevbills from './pages/Prevbills';
import Bdprevbills from './pages/Bdprevbills';
import Bbuyveg from './pages/Bbuyveg';
import Buploadveg from './pages/Buploadveg';
import Dealerdash from './pages/Dealerdash';
import Dprevbill from './pages/Dprevbill';
import Dbuyveg from './pages/Dbuyveg';
import SendMail from './pages/SendMail';
import ResetPass from './pages/ResetPass';
import {Login} from './pages/Login';
import Signup from './pages/Signup';
import FarmState from './context/ystate';
import Basket from './pages/basket';
import BrockerList from './pages/BrockerList';
import Epass from './pages/Epass';
// import Cart from './componantes/Cart.js'


function App() {
  return (
    <>
      <FarmState>
      <Router>
        <Routes>
          <Route  exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/billing" element={<BillingAddress/>}></Route>
          <Route exact path="/dealer" element={<Dealer/>}></Route>
          <Route exact path="/shop" element={<Offerscard/>}></Route>
          <Route exact path="/basket" element={<Baskets/>}></Route>
          <Route exact path="/Brokerinfo" element={<Brokerinfo/>}></Route>
          <Route exact path="/farmerdash" element={<Farmerdash/>}></Route>
          <Route exact path="/fprevbill" element={<Fprevbill/>}></Route>
          <Route exact path='/Fuploadveg' element={<Buploadveg/>}></Route>
          <Route exact path="/Brokerdash" element={<Brokerdash/>}></Route>
          <Route exact path="/prevbill" element={<Prevbills/>}></Route>
          <Route exact path="/Bdprevbill" element={<Bdprevbills/>}></Route>
          <Route exact path="/brokerlist" element={<BrockerList/>}></Route>
          <Route exact path="/findveg" element={<Bbuyveg/>}></Route>
          <Route exact path="/sendmail" element={<SendMail/>}></Route>
          <Route exact path="/epass" element={<ResetPass/>}></Route>
          <Route exact path="/resetpass" element={<Epass/>}></Route>
          <Route exact path="/Bbuyveg" element={<Bbuyveg/>}></Route>
          <Route exact path="/Buploadveg" element={<Buploadveg/>}></Route>
          <Route exact path="/Dealerdash" element={<Dealerdash/>}></Route>
          <Route exact path="/Dprevbill" element={<Dprevbill/>}></Route>
          <Route exact path="/Dbuyveg" element={<Dbuyveg/>}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/Signup" element={<Signup/>}></Route>
          <Route exact path="/basket" element={<basket/>}></Route>
          {/* <Route exact path="/cart" element={<Cart/>}></Route> */}
          <Route exact path="*" element={<div>Page not found</div>}></Route>
          
        </Routes>
      </Router>
      </FarmState>
    </>
  );
}

export default App;
