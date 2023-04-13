import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Dnavbar from '../componantes/Dnavbar'

function Dprevbill() {

  
  return (
    <div>
      <Dnavbar />

      <h2 className="container">Previous Bills : </h2>
      <div className="container">
        <table class="table">
          <caption>List of your Previous bills</caption>
          <thead>
            <tr>
              <th scope="col">Bill 1554d</th>
              <th scope="col">Date</th>
              <th scope="col">Broker id</th>
              <th scope="col">Veg name</th>
              <th scope="col">Veg weight(kg)</th>
              <th scope="col">Veg quote(/kg)</th>
              <th scope="col">Total</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <th id="billid" scope="row">15</th>
              <td id="date">10/07/22</td>
              <td id="brokerid">B101</td>
              <td id="vegname">Mango</td>
              <td id="vegweight">570</td>
              <td id="vegquote">50</td>
              <td id="total">28500</td>
              <td id='status'>paid</td>
            </tr><tr>
              <th id="billid" scope="row">40</th>
              <td id="date">10/07/22</td>
              <td id="brokerid">B101</td>
              <td id="vegname">Mango</td>
              <td id="vegweight">570</td>
              <td id="vegquote">50</td>
              <td id="total">28500</td>
              <td id='status'>paid</td>
            </tr><tr>
              <th id="billid" scope="row">50</th>
              <td id="date">10/07/22</td>
              <td id="brokerid">B101</td>
              <td id="vegname">Mango</td>
              <td id="vegweight">570</td>
              <td id="vegquote">50</td>
              <td id="total">28500</td>
              <td id='status'>paid</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dprevbill
