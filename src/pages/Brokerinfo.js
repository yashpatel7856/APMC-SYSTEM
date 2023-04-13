import Navbar from "../componantes/Navbar"

function Brokerinfo() {
  return (
    <div>
       <>
       <Navbar/>
       </>
    <div className="container">
    <table class="table">
  <caption>List of all brokers</caption>
  <thead>
    <tr>
      <th scope="col">Shop no</th>
      <th scope="col">Shop name</th>
      <th scope="col">Owner name</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">10</th>
      <td>abc shop</td>
      <td>Otto</td>
      <td>1234565441</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ja shop</td>
      <td>Thornton</td>
      <td>1234565441</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry shop</td>
      <td>the Bird</td>
      <td>1234565441</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
  )
}

export default Brokerinfo
