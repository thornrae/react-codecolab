import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './chat.css';
// import InfoBar from '../infobar/infobar.js';
import Input from '../input/input.js';
import Messages from '../messages/messages.js';
// import TextContainer from '../textContainer/textContainer.js';



const Chat = (props) => {

  let socket = props.socket

  

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  //array that stores all messages
  const [messages, setMessages] = useState([]);
  //specificy each message
  const [message, setMessage] = useState('');
  //only if these two things change then useEffect will re-render

useEffect(() => {
  let data = props.user
  console.log('PROPS USER', props.user)
  setName(data.user_name)
  console.log('MESSAGE NAME', name)
}, [])
  useEffect(() => {
    console.log("HERE")
    socket.on('message', (message) => {
      setMessages([...messages, message])
      socket.emit('message-log', messages)
    });

  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();
    if(message) {
      console.log('MESSAGE USER', message);
      console.log(socket.emit('sendMessage', message, () => setMessage('')))
    }
  }

  console.log('MESSAGE MESSAGES',message, messages);

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