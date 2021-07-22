import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AboutUs from '../aboutus/aboutus.js'
import SignIn from '../signin/signin.js'
import SignUp from '../signup/signup.js'

const Header = () => {

return (
  <Router>
    <h1>Header</h1>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/aboutus" exact component={AboutUs} />
  </Router>
)

}

export default Header;