import React from 'react'
// import Footer from "../componantes/Footer.js"
const BillingAddress = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <a className="navbar-brand" href="/"> Dashboard</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="basket">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="billing">Billing</a>
          </li>
        </ul>
      </div>
    </nav>
      <div>
            <form className="form-horizontal bg-dark text-white">
                 <fieldset>

                    <title>Billing Address</title>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Full Name</label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="Enter Full Name" className="form-control"  required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Adress </label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="Address Line 1" className="form-control"  required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">nickname of address</label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="Address Line 2"  required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">City</label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="City" className="form-control"   required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Quantity</label>
                        <div className="col-sm-3">
                        <input type="text" placeholder="in Kg" className="form-control"   required/>
                        </div>

                        <label className="col-sm-2 control-label" for="textinput">Days of Delivery desired</label>
                        <div className="col-sm-4">
                        <input type="text" placeholder="Days-num" className="form-control"  required/>
                        </div>
                    </div>



                    <div className="form-group">
                        <label className="col-sm-2 control-label" for="textinput">Vegetable Name</label>
                        <div className="col-sm-9">
                        <input type="text" placeholder="Name" className="form-control"  required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8">
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary" >Order Now</button>
                        </div>
                        
                        </div>
                    </div>

                 </fieldset>
             </form>
            {/* <Footer/> */}
        </div>
    </>
  )
}

export default BillingAddress
