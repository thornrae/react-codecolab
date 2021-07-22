import React, { useEffect } from 'react';

import io from 'socket.io-client';

let socket;


const Chat = () => {
  const ENDPOINT = "localhost:3333";

  useEffect(() => {
    socket = io(ENDPOINT)
    console.log('user added front end?')

    console.log(socket);
    
  }, )

return (
  <>
  <p>Question: Reverse a Linked List</p>
  <h2>CHAT</h2>
  <p>Chat functionality will live here</p>
  <p>Display resources for this question here</p>
</>

)

}

export default Chat;