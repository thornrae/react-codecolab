import React from 'react';
import '../whiteboard/whiteboard.css';


const Whiteboard = (props) => {

  let key = props.board;
  console.log('key', key);

  let source = `//www.groupboard.com/gb/${key}`
  console.log('source', source)
  return (

  <iframe key={key} title="board" src={source} width="100%" height="600" scrolling="no" frameborder="0"></iframe>

  )

}

export default Whiteboard;










