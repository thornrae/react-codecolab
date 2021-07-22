import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Colab from './components/colab/colab.js';
import Lobby from './components/lobby/lobby.js';
import CreateNew from './components/createnew/createnew.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';


function App() {
  return (

   
  <Router> 
    <Header />
    <Route path="/" exact component={Lobby} />
    <Route path="/colab" exact component={Colab} />
    <Route path="/create" exact component={CreateNew} />
    <Footer />
  </Router>

  )
}

export default App;
