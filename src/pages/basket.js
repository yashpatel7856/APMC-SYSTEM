import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/basket.css'

// app.use (express.json())

export const Basket = () => {
  const location = useLocation();
  const vegetable = location._doc;
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
            <a className="nav-link" href="basket">vegetable</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="billing">Billing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login">
              login/signup
            </a>
          </li>
        </ul>
      </div>
    </nav>

    //display vegetable 
    <div>
      {vegetable.map(product => (
        <div key={product._id}>
          <h2>{product.vegetablename}</h2>
          <p>{product.desc}</p>
          <p>Price: {product.price}</p>
          <p>Stocks : {product.stocks}</p>
        </div>
      ))}
    </div>
      
    </>
  )
}

export default Basket
