import React from 'react';
import { useEffect, useState } from 'react'
import Chat from '../../components/chat/chat/chat';


//import socket.io
//pass socket.id as props to chat 

const Colab = (props) => {

  const socket = props.data;
  let questions = props.question
  let url = props.url
  const [questionName, setQuestionName] = useState()
  const [questionDescription, setQuestionDescription] = useState()
  const [questionResources, setQuestionResources] = useState([])

  useEffect(() => {
    console.log('COLAB QUESTION ARRAY', questions)
    console.log('URL', url)
    questions.forEach(question => {
      if (question.room_id === url) {
        console.log('COLAB QUESTION', question)
        setQuestionName(question.question.name)
        setQuestionDescription(question.question.description)
        setQuestionResources(question.question.resources)
      }
    })
  }, [])


  return (
    <>
      <h1>{questionName}</h1>
      <p>{questionDescription}</p>
      <Chat socket={socket} />
    </>
  )

}

export default Colab;