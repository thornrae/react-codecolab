// import {React, useEffect} from 'react';
import React from 'react';
import { useEffect } from 'react'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import "./Lobby.css";
import { NavLink } from "react-router-dom";

const Lobby = (props) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      maxHeight: 400,
      display: "flex",
      alignContent: "center",
      
      

    },
    item: {
      boxShadow: "10px 5px 5px gray",
      marginBottom: "20px",
      // alignContent: "center",
      // justifyContent:"center",
      marginLeft: "460px"


    },
    button: {
      alignContent: "center",
      marginLeft: "500px",
      width: "150px",
      maxHeight: "100px",
      marginTop: "20px",
      boxShadow: "10px 5px 5px gray",

    },
 
    question: {
      height: "100px",
    },

    description: {
      font: "10px",
    }

  });

  const classes = useStyles();


  const banner = {
    title: "Welcome",
    text: ""
  }
  
  const history = useHistory()

  const socket = props.data


  const link = () => {
    history.push('/create')
  }

  const roomSelect = (e) => {
    // let roomName = e.target.childNodes[0].textContent.split(' || ')
    let roomName = e
    console.log('roomname????', roomName)

    console.log('room name:', roomName)
    props.url(e)
    socket.emit('join-room', e)

    history.push(`/colab/${e}`)

  }

  // if (questions) {
  //   questions.forEach((question) => {
  //     if (question.name === textContent) {
  //       selection(question)
  //     }
  //   })
  // }


  return (
    <>

    <div className={classes.root}>
    <List component="nav">
      
      {props.rooms.map((room) =>
          <ListItem className={classes.item} button onClick={() => roomSelect(room.room_id)} value={room.name} key={room.room_id}>
              <ListItemText className={classes.question} primary={`${room.question.name} `} secondary={`${room.question.description}`} />
              
              <ListItemText className={classes.question} secondary={`Users in CoLab: ${room.activeUsers}`} />
              <ListItemText className={classes.question} secondary={"Click to Join"} />

          </ListItem>)}
    </List>
    {/* <Button className="btn btn-primary btn-lg" onClick={link}>Create New Room!</Button> */}
        <Button className={classes.button} variant="contained" color="secondary">
        <NavLink onClick={link} to="/create" exact>Create New Room!</NavLink>
      </Button>
    </div>
    </>

  )
}

export default Lobby;


{/* <div className="container main-banner-container my-4">
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
//       <NavLink className="btn btn-primary btn-lg" onClick={link} to="/create" exact>Create New Room!
//       </NavLink>
//     </p>
//   </div>
// </div>
// </div> */}