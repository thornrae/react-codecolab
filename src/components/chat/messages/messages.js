import React from 'react'
import Message from '../message/message.js'

import ScrollToBottom from 'react-scroll-to-bottom'

import './messages.css';

const Messages = ({messages, name}) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}> 
      <Message message={message} name={name}/>
    </div>)}
  </ScrollToBottom>
)

export default Messages;