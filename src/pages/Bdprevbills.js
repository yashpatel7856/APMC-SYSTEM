import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Bnavbar from '../componantes/Bnavbar'


import BillComponent from './BillComponent';

function Bdprevbills() {

  const [check,setcheck]=useState(false);
  const [userArray, setUserArray] = useState(null);
  // var userArray=null;
//   const userArray=[{
//     "date": 10,
//     "farmer": null,
//     "vegname": "bhinf",
//     "stock": [
//         "150"
//     ],
//     "buyer": null,
//     "price": 1500
// },{
//   "date": 10,
//   "farmer": null,
//   "vegname": "bhinf",
//   "stock": [
//       "150"
//   ],
//   "buyer": null,
//   "price": 1500
// }];
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

  // useEffect(() => {
  //   console.log(userArray)
  // }, [userArray]);


  return (
    <div>

      <Bnavbar />

      <h2 className="container">Previous Bills Of Dealers: </h2>
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
            {/* {userArray &&
              Object.keys(userArray).length > 0 &&
              Object.keys(userArray).map((ind) => {
                console.log("ele->", ind);
                return (
                  <tr>
                    <BillComponent b={userArray[ind].billid} d={userArray[ind].date} br={userArray[ind].farmer} nm={userArray[ind].price} we={userArray[ind].vegname} q={userArray[ind].vegweight[0]} t={userArray[ind].price}/>
                  </tr>
                )
              })
            } */}
            {/* { <BillComponent b={"vfrv"} d={"vv"} br={"tgbgb"} nm={"tb"} we={"bg"} q={"bg"} t={"rg"}/>} */}
            {
              userArray && userArray.map((ele,ind)=>{
                return(
                <tr>
                  {/* {console.log(ele)} */}
                   <BillComponent element ={ele}   />
                 
                  </tr>
                )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bdprevbills
