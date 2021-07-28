import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import img from './assets/logo.jpg';
import { NavLink } from "react-router-dom";
import "./Header.css";
// import SignIn from '../signin/signin.js';
// import SignUp from '../signup/signup.js';

const Header = () => {

  return (
    <div className="header-contaner">
      <div>
        <h5><NavLink to="/">Home</NavLink></h5>
      </div>
      {/* <div>
        <h5><NavLink to="/Rooms">Rooms</NavLink></h5>
      </div> */}
      {/* <div>
        <h5><NavLink to="/signup">Sign-Up</NavLink></h5>
      </div>
      <div>
        <h5><NavLink to="/Rooms">Rooms</NavLink></h5>
      </div>*/}
      <div>
        <h5>
          <img
            className="main-banner-image"
            src={img}
            alt="Logo"
          /></h5>
      </div>
    </div>

  )

}

export default Header;

    // <Router>
    //   <h1>Code CoLab: An Interactive Work Space</h1>
    //   <Route path="/signin" exact component={SignIn} />
    //   <Route path="/signup" exact component={SignUp} />
    // </Router>