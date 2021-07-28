import React  from 'react';
import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Colab from './pages/colab/colab.js';
import Lobby from './pages/lobby/lobby.js';
import CreateNew from './pages/createnew/createnew.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import AboutUs from './pages/aboutus/aboutus.js';

import Signup from './components/signup/signup.js'

import socket from 'socket.io-client'




function App() {

  const [colabSocket, setColabSocket] = useState()
  const [user, setUser] = useState('')
  const [serverUser, setServerUser] = useState()
  const [openRooms, setOpenRooms] = useState([])
  const [roomUrl, setRoomUrl] = useState('')
  
  const captureUrl = (url) => {
    console.log('URL FROM LOBBY', url)
    setRoomUrl(url)
  }
  const userData = (username) => {
    setUser(username)
  }


  useEffect(() => {
    const s = socket.connect("https://codecolab-api.herokuapp.com/")

    setColabSocket(s)


    return () => {

      s.disconnect()

    }
  }, [])


  useEffect(() => {
    if (colabSocket) {

      colabSocket.on('room-data', payload => {
        setOpenRooms(payload)
        console.log('OPEN ROOMS', payload)
      })
    }
  }, [colabSocket])


  useEffect(() => {
    if (user) {
      colabSocket.emit('user-signup', user)
    }
  }, [user])


  useEffect(() => {
    if (user) {

      colabSocket.on('user-return', payload => {
        setServerUser(payload)

        console.log('NEW USER', payload)

      })

      
    }
  }, [colabSocket, user])

 
  return (

    <div>
      <Header socket={colabSocket} />
      <Signup userSubmit={userData} />
      <Route path="/" exact render={props =>
      (<Lobby {...props} rooms={openRooms} data={colabSocket} url={captureUrl} />
      )} />
      { openRooms.map((room) => <Route path={`/colab/${room.room_id}`} exact render={props =>
        (<Colab {...props} data={colabSocket} question={openRooms} url={roomUrl}/>
        )} />)
      }

      <Route path="/create" exact render={props =>
      (<CreateNew {...props} data={colabSocket} user={serverUser} url={captureUrl} />
      )} />
      <Route path="/aboutus" exact component={AboutUs} />
      <Footer />
    </div>

  )
}

export default App;
