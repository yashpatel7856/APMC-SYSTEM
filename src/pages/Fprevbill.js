import React from 'react'
import Fnavbar from '../componantes/Fnavbar'

function fprevbill() {
  return (
    <div>
      <>
      <Fnavbar/>
      <h2 className="container">Previous Bills : </h2>
      <div className="container">
    <table class="table">
  <caption>List of your Previous bills</caption>
  <thead>
    <tr>
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
      <td id="date">10/07/22</td>
      <td id="brokerid">141</td>
      <td id="vegname">Mango</td>
      <td id="vegweight">570</td>
      <td id="vegquote">50</td>
      <td id="total">28500</td>
      <td id='status'>paid</td>
    </tr>
    <tr>
      <td id="date">10/07/22</td>
      <td id="brokerid">001</td>
      <td id="vegname">cucumber</td>
      <td id="vegweight">300</td>
      <td id="vegquote">20</td>
      <td id="total">6000</td>
      <td id='status'>paid</td>
    </tr>
  </tbody>
</table>
    </div>
       </>
    </div>
  )
}

export default fprevbill
