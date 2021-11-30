import React from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom';
import OfferModal from './OfferModal';
import logo from '../assets/logo.png';

function Navbar() {
    return (
      <>
        <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
            <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">

    <Link to="/" className="navbar-brand">
      <img id="nav-logo" src={logo} alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
      <span className="nav-title">Bendus</span><span className="nav-title-to"></span>
    </Link>
    
    </nav>
    <div className="d-inline-flex m-2 logincategory">
        <div className="nav col-md-5 d-inline-flex flex-fill align-items-center justify-content-end link-light text-decoration-none">
            <Link to="/" className="nav-link px-2 text-light">Home</Link>
            <Link to="/menu" className="nav-link px-2 text-light">Menu</Link>
        </div>
      <div className="">\
      <Link to="/login"><button type="button" className="btn btn-outline-light btn-lg text-white loginbtn me-2">Login</button></Link></div>
      <div className="">
      <Link to="/register"><button type="button" className="btn btn-light btn-lg me-2">Sign up</button></Link>
        </div>
        </div>
      </div>
      <OfferModal/>
      </>
    )
}

export default React.memo(Navbar)
