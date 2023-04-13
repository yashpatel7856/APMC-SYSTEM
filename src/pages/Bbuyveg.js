import React, { useEffect, useState } from 'react'
import Navbar from '../componantes/Navbar'
import '../CSS/brk.css'
import Cookies from 'js-cookie'
// const Cart = require("../../Backend/models/Cart");
// const Veg = require('../../Backend/models/Veg');
import axios from "axios"
import Bnavbar from '../componantes/Bnavbar'
import Dealerdash from './Dealerdash'
import Dnavbar from '../componantes/Dnavbar'
import Fnavbar from '../componantes/Fnavbar'

function Bbuyveg() {
  const [myData,setmyData] =useState([]);
  const [sd,setsd] =useState([]);
  const [iserr,setError] =useState("");
    const getBrokerdata= async ()=>{
        try{
            const res = await axios.get('http://localhost:3001/findveg');
            console.log("comming data ")
            console.log(res.data);
            setmyData(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
     
  const buyVeg = async(e) =>{
    console.log("data", e.target.id)
    const data =await axios.post('http://localhost:3001/buyveg',{
      id: e.target.id,
      userid: sessionStorage.getItem("user"),
      username: sessionStorage.getItem("name")
    });
    try{
      const res = await axios.get('http://localhost:3001/findveg');
      // console.log(res.data);
      setmyData(res?.data);
    }
    catch(err){
      console.log(err);
    }
  }
    

    useEffect(()=> {
      getBrokerdata();
  },[]);

  var result = Object.entries(myData);
  // console.log(result);



  //////////////////////////////////////////////
// const [Seller,SetSeller]=useState("");
// const [vegname,setveg]=useState("");

const rl = Cookies.get('role');
  
  return (

     <>
     {rl ==='dealer' && <Dnavbar/>}
     {rl === 'broker' && <Bnavbar/>}
     {rl==='farmer' && <Fnavbar/>}
     <div className="body">
     <h4 className='cnt p-5 m-3 bg-dark'>Buy your vegeies</h4>


     <div className="flex-container ">
       {
       result.map((post)=>{
       console.log(post[1]);
       const {_id,vegname,price,stock,desc,Seller} = post[1];
       return (
         <div className='flex-item bg-dark p-3 m-3 bb' key={_id}>
         {/* <p>sr :<span className='text-danger'>{sr}</span></p> */}
         <p>VegName: <span className='text-danger'>{vegname}</span></p>
         <p>Price :<span className='text-danger'> {price}</span></p>
         {/* <p>vegid: <span className='text-danger'>{_id}</span></p> */}
         <p>Stock: <span className='text-danger'>{stock}</span></p>
         <p>Seller : <span className='text-danger'>{Seller}</span></p>
         <p className='text-green'>Desc :<span className='text-danger'> {desc}</span></p>
         <a href="#" id={_id} class="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={buyVeg}>Buy</a>
         <hr/>
     </div>
     );
     })
   }
     </div>
     </div>
     
     </>
  )
}

export default Bbuyveg
