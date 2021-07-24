import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './chat.css';
// import InfoBar from '../infobar/infobar.js';
import Input from '../input/input.js';
import Messages from '../messages/messages.js';
// import TextContainer from '../textContainer/textContainer.js';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  //array that stores all messages
  const [users, setUsers] = useState('')
  const [messages, setMessages] = useState([]);
  //specificy each message
  const [message, setMessage] = useState('');
  //only if these two things change then useEffect will re-render

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     setMessages([...messages, message])
  //   });

  //   socket.on("roomData", ({users}) => {
  //     setUsers(users)
  //   })
  // }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
      console.log(message);
      // socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        {/* <InfoBar room={room}/> */}
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  )
}

export default Chat;