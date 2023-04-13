import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Bnavbar from '../componantes/Bnavbar'
import Cookies from 'js-cookie';
import Dnavbar from '../componantes/Dnavbar';
import Fnavbar from '../componantes/Fnavbar';
import BillComponent from './BillComponent';

function Prevbills() {

  const [check,setcheck]=useState(false);
  const [userArray, setUserArray] = useState(null);

  const getData = async () => {
    let id = sessionStorage.getItem("user");
    console.log("ogg")
    const user = await axios.post("http://localhost:3001/getuser", { id: id });
    console.log(user?.data?.buyed_vegies);
    setUserArray(user?.data?.buyed_vegies);
    setcheck(true);
    // userArray=user?.data?.buyed_vegies;
    
  }

  useEffect(() => {
    console.log("USeffect")
    if(!check)
    getData();

    console.log("hforvuv")
    console.log("Array->", userArray)
  }, [check])
  const rl = Cookies.get('role');
  return (
    <>
    {rl ==='dealer' && <Dnavbar/>}
     {rl === 'broker' && <Bnavbar/>}
     {rl==='farmer' && <Fnavbar/>}
    <div>
      <h2 className="container">Previous Bills : </h2>
      <div className="container">
        <table class="table table-striped">
          <caption>List of your Previous bills</caption>
          <thead className='thead-dark'>
            <tr>
              <th scope="col">Bill id</th>
              <th scope="col">Date</th>
              <th scope="col">farmer</th>
              <th scope="col">Veg name</th>
              <th scope="col">Veg weight(kg)</th>
              <th scope="col">Veg quote(/kg)</th>
              <th scope="col">Total</th>
              <th scope="col">Status</th>
              <th scope="col">Download</th>
            </tr>
          </thead>
          <tbody>
            
            {
              userArray && userArray.map((ele,ind)=>{
                return(
                <tr>
                   <BillComponent element ={ele}   />
                 
                  </tr>
                )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Prevbills
