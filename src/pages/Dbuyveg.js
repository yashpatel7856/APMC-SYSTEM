import React from 'react'
import Dnavbar from '../componantes/Dnavbar'

function Dbuyveg() {
  return (
    <div>
       <Dnavbar/>
      <div className="pl-5 pt-2"> 
        <h1>Buy veg.</h1>
      </div>

          <div className=" bg-secondary text-white">
             <hr/>
             <h3 className="ml-4">Recently Uploaded Veg</h3>
             <hr/>
          </div>
          <div className="table container">
          <table class="table">
             <thead>
                <tr>
                 <th scope="col">Date</th>
                 <th scope="col">Time</th>
                 <th scope="col">Farmer id</th>
                 <th scope="col">Veg name</th>
                 <th scope="col">Veg weight</th>
                 <th scope="col">Approx price</th>
                 <th scope="col">Offer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               
                <td scope="row" id="date">10/07/22</td>
                <td id="time">11.45 AM</td>
                <td id="fid">B101</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="offer"><button className='btn btn-primary'>offer</button></td>
            </tr>
            <tr>
            <td scope="row" id="date">10/07/22</td>
                <td id="time">11.45 AM</td>
                <td id="fid">B101</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="offer"><button className='btn btn-primary'>offer</button></td>
            </tr>
            <tr>
            <td scope="row" id="date">10/07/22</td>
                <td id="time">11.45 AM</td>
                <td id="fid">B101</td>
                <td id="vegname">Mango</td>
                <td id="vegweight">570</td>
                <td id="vegquote">50</td>
                <td id="offer"><button className='btn btn-primary'>offer</button></td>
            </tr>
           </tbody>
          </table>
         </div>



    </div>

         
  )
}

export default Dbuyveg
