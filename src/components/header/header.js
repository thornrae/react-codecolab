import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from '../signin/signin.js'
import SignUp from '../signup/signup.js'

const Header = () => {

return (
  <Router>
    <h1>Code CoLab: An Interactive Work Space</h1>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
  </Router>
)

}

export default Header;