import React from 'react'

const Dealer = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <a className="navbar-brand" href="#">Dealer Dashboard</a>
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

    <div className="container mt-5">
      <h2 className="text-center mb-5">Welcome to the Dealer Dashboard</h2>

      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Transaction</h5>
              <p className="card-text">
                View Your Previous Transaction.
              </p>
              <a href="#" className="btn btn-primary">Your Transaction</a>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Make a Deal</h5>
              <p className="card-text">
               Deal here 
              </p>
              <a href="#" className="btn btn-primary">Deal</a>
            </div>
          </div>
        </div>

         </div>
    </div>
    </>
  )
}

export default Dealer
