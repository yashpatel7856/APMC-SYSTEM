import React from 'react'

function Dnavbar() {
  return (
    <div>
        <nav>
      <div className="container-fluid bg-success"><nav className="navbar bg-success text-white navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        Dealer
      {/* <img src={organic} alt="Veg" className="img-thumbnail img-fluid mx-width:10% "/> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="Dealerdash">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="prevbill">
              Prev Bills <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="findveg">
              Buy veg.<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Log out <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
      </nav>
    </div>
  )
}

export default Dnavbar
