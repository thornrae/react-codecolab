import React from 'react';
import { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import axios from 'axios'






const CreateNew = (props) => {

  

  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState()
  const [room, setRoom] = useState()

  let url = props.url;
  const history = useHistory()

  const link = () => {
    console.log('ROOM URL', room)
    url(room);
    history.push(`/colab/${room}`)
  }

  const socket = props.data

  useEffect(() => {
    axios.get('https://codecolab-api.herokuapp.com/questions')
      .then(response => {
        let data = response.data
        setQuestions(data)
      })

      .catch(e => {
        console.error(e)
      })
  }, [])

  const onClick = async (e) => {

    const textContent = e.target.childNodes[0].textContent


    if (questions) {

      questions.forEach((question) => {
        if (question.name === textContent) {
          setSelectedQuestion(question)
        }
      })

      
    }

  }


  useEffect(() => {
    
    if (selectedQuestion) {
      console.log('SELECTED QUESTION', selectedQuestion)
      console.log('QUESTION', selectedQuestion._id)
      console.log('USER', props.user.user_id)
      setRoom(`${selectedQuestion._id}${props.user.user_id}`) 

    }
    
  }, [selectedQuestion])


  useEffect(() => {
    
    if (room) {
      let questionRoom = {
        question: selectedQuestion,
        room: room
      }
      console.log("EMITTING", questionRoom)
      socket.emit("question", questionRoom)
    }
    
  }, [room])

  return (
    <>

      <List component="nav">
        {questions.map((question) =>
          <ListItem button onClick={onClick} value={question} key={question._id}>
            <ListItemText primary={question.name} />
          </ListItem>)}
      </List>
      <Button onClick={link}>Create Colab</Button>
    </>
  )



}

export default CreateNew;