// import {React, useEffect} from 'react';
import React  from 'react';
import { useEffect } from 'react'

import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Lobby = (props) => {
  const history = useHistory()

  const socket = props.data




  const link = () => {
    history.push('/create')
  }

  const roomSelect = (e) => {
    let roomName = e.target.childNodes[0].textContent.split(' || ')
    socket.emit('join-room', roomName[1])
    console.log(roomName)
    console.log(e.target.childNodes[0].textContent)
    console.log(e)

    history.push(`/colab/${roomName[1]}`)

  }

  useEffect(() => {
  

  }, [props.rooms])

  return (
    <>


      <h3>LOBBY</h3>

      <List component="nav">
        {props.rooms.map((room) =>
          <ListItem button onClick={roomSelect} value={room.name} key={room.room_id}>
            <ListItemText primary={`${room.name} || ${room.room_id} || ${room.activeUsers}`} />
          </ListItem>)}
      </List>

      <div>

        <Button onClick={link}>Create New Lobby</Button>


        {/* <ul>
      <li>SAMPLE: Room || Question: Linked Lists || 2 users present</li>
      <li>Information above needs to be managed in some kind of state</li>
      <li>We will need a function that holds reference to all questions currently being worked on</li>
      <li>Perhaps we determine this by adding an "active" property to our question objects that changes depending on if their are users interacting with that question</li>
    </ul> */}

      </div>
    </>
  )



}

export default Lobby;