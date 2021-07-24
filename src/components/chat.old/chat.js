import React, { useEffect } from 'react';
import Message from './message/message.js';
import Messages from './messages/messages.js';


const Chat = (props) => {
  const socket = props.socket;

  //create

return (
  <>
  <p>Question: Reverse a Linked List</p>
  <h2>CHAT</h2>
  <Messages />
  <Message />
  <p>Chat functionality will live here</p>
  <p>Display resources for this question here</p>
</>

)

}

export default Chat;