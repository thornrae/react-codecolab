import React from 'react';
import { useEffect, useState } from 'react'
import Chat from '../../components/chat/chat/chat';
import Whiteboard from '../../components/whiteboard/whiteboard.js';
import Resources from '../../components/resources/resources.js';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../colab/colab.css'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    color: "black"
  },

  button: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "55px"
  }

}));

const Colab = (props) => {
  const socket = props.data;
  let questions = props.question;
  let url = props.url
  console.log('url', url)
  const [questionName, setQuestionName] = useState()
  const [questionDescription, setQuestionDescription] = useState()
  const [questionResources, setQuestionResources] = useState([])
  const [board, setBoard] = useState()

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  

  useEffect(() => {
    console.log('COLAB QUESTION ARRAY', questions)
    console.log('URL', url)

    questions.forEach(question => {
      if (question.room_id === url) {
        console.log('COLAB QUESTION', question)
        console.log('QUESTION RESOURCES', question.question.resources)
        setQuestionName(question.question.name)
        setQuestionDescription(question.question.description)
        setQuestionResources(question.question.resources)
        setBoard(question.board)
      }
    })
  }, [])


  return (
    <>
    <h1>{questionName}</h1>


<div className={classes.button}>
      <Button  aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        CHALLENGE QUESTION
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>{questionDescription}</Typography>
      </Popover>
  </div>
      <div className="share-features">
        <Chat socket={socket} user={props.user} />
        <Whiteboard board={board} />
        <Resources resources={questionResources}/>
      </div>

    </>
  )

}

export default Colab;