import {React, useEffect} from 'react';
import { Route } from 'react-router-dom'

import Colab from './pages/colab/colab.js';
import Lobby from './pages/lobby/lobby.js';
import CreateNew from './pages/createnew/createnew.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import AboutUs from './pages/aboutus/aboutus.js';
import socket from 'socket.io-client'




function App() {

  useEffect(() => {
    const colabSocket = socket.connect("https://codecolab-api.herokuapp.com/")
    return () => {
      console.log('!!!!!!!!!!!!!!DISCONNECTING!!!!!')
      colabSocket.disconnect()
    }
  }, [])
  
  return (
    <div>
      <Header />
      <Route path="/" exact component={Lobby} />
      <Route path="/colab" exact component={Colab} />
      <Route path="/create" exact component={CreateNew} />
      <Route path="/aboutus" exact component={AboutUs} />
      <Footer />
    </div>
  )
}

export default App;
