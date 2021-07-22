import React from 'react';

const Lobby = () => {

return (
  <>
  <h3>LOBBY</h3>
  <div>
    <ul>
      <li>SAMPLE: Room || Question: Linked Lists || 2 users present</li>
      <li>Information above needs to be managed in some kind of state</li>
      <li>We will need a function that holds reference to all questions currently being worked on</li>
      <li>Perhaps we determine this by adding an "active" property to our question objects that changes depending on if their are users interacting with that question</li>
    </ul>

  </div>
  </>
)

  

}

export default Lobby;