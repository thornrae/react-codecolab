import React from 'react';
import Chat from '../../components/chat/chat.js';

//import socket.io
//pass socket.id as props to chat 

const Colab = () => {


return (
  <>
  <h1>CoLab Room</h1>
  <p>this page should display question passed to this component from whatever was selected from Create component (as props) </p>
  <Chat />
  </>
)

  

}

export default Colab;