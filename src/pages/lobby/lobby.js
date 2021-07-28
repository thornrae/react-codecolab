import { React, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import img from './assets/logo.jpg';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./Lobby.css";

const Lobby = (props) => {
  const history = useHistory();

  const socket = props.data;

  const banner = {
    title: "Welcome",
    text: ""
  }

  const link = () => {
    history.push('/create')
  }

  const roomSelect = (e) => {
    let roomName = e.target.childNodes[0].textContent.split(' || ')
    props.url(roomName[1])
    socket.emit('join-room', roomName[1])


    history.push(`/colab/${roomName[1]}`)

  }

  // const navy = () => {
  //   <List component="nav">
  //   {props.rooms.map((room) =>
  //     <ListItem button onClick={roomSelect} value={room.name} key={room.room_id}>
  //       <ListItemText primary={`${room.question.name} || ${room.room_id} || ${room.activeUsers}`} />
  //     </ListItem>)}
  //  </List>
  // }

  useEffect(() => {


  }, [props.rooms])

  return (
    <>
      <div className="container main-banner-container my-4">
        <div className="main-banner-content">
          <div className="main-banner-text">
            <h4 className="display-4 main-banner-title">{banner.title}</h4>
            <p className="lead">{banner.text}</p>
            <p>
              <List component="nav">
                {props.rooms.map((room) =>
                  <ListItem button onClick={roomSelect} value={room.name} key={room.room_id}>
                    <ListItemText primary={`${room.question.name} || ${room.room_id} || ${room.activeUsers}`} />
                  </ListItem>)}
              </List>
              {/* <Button className="btn btn-primary btn-lg" onClick={link}>Create New Room!</Button> */}
              <NavLink className="btn btn-primary btn-lg" onClick={link} to="/create" exact>Create New Room!
              </NavLink>
            </p>
          </div>
          {/* <img
            className="main-banner-image"
            src={img}
            alt="Logo"
          /> */}
        </div>
      </div>

      {/* <div className="container products-section mb-4">
        <div className="products-section-title pb-3">
        
          <List component="nav">
            {props.rooms.map((room) =>
              <ListItem button onClick={roomSelect} value={room.name} key={room.room_id}>
                <ListItemText primary={`${room.name} || ${room.room_id} || ${room.activeUsers}`} />
              </ListItem>)}
          </List>
        </div>
        <div className="products-container"><Button onClick={link}>Create New Lobby</Button></div> */}

      {/* </div> */}
      {/* <h3>LOBBY</h3>

      <List component="nav">
        {props.rooms.map((room) =>
          <ListItem button onClick={roomSelect} value={room.name} key={room.room_id}>
            <ListItemText primary={`${room.name} || ${room.room_id} || ${room.activeUsers}`} />
          </ListItem>)}
      </List>

      <div> */}



      {/* <ul>
      <li>SAMPLE: Room || Question: Linked Lists || 2 users present</li>
      <li>Information above needs to be managed in some kind of state</li>
      <li>We will need a function that holds reference to all questions currently being worked on</li>
      <li>Perhaps we determine this by adding an "active" property to our question objects that changes depending on if their are users interacting with that question</li>
    </ul> */}

      {/* </div> */}
    </>
  )



}

export default Lobby;