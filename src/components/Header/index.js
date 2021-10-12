import React from 'react';
import "./style.css";
import Cart from "./Cart";

const Header = () => (
    <>
        
        <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        Oldie's Movie Buster 
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">VHS</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Classic Movie</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About Us</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Contact</a></li>
        </ul>

        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning me-2">Sign-up</button>
          <button type="button" className="btn btn-success"><Cart/></button>
        </div>
      </div>
    </div>
  </header>
    </>
);
export default Header;