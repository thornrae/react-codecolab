import React from 'react';
import { useEffect, useState } from 'react'
import Chat from '../../components/chat/chat/chat';
import Whiteboard from '../../components/whiteboard/whiteboard.js'

import '../colab/colab.css'


//import socket.io
//pass socket.id as props to chat 

const Colab = (props) => {

  const socket = props.data;
  let questions = props.question;
  let url = props.url
  console.log('url', url)
  const [questionName, setQuestionName] = useState()
  const [questionDescription, setQuestionDescription] = useState()
  const [questionResources, setQuestionResources] = useState([])
  const [board, setBoard] = useState()

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
      <p>{questionDescription}</p>
      <div className="share-features">
      <Chat socket={socket} />
      <Whiteboard board={board}/>
      </div>

    </>
  )

}

export default Colab;