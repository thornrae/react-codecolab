import React from 'react';

const CreateNew = () => {

return (
  <>
  <h3>Create New Room Here</h3>
  <ul> <p>We Need To:</p>
    <li>Make axios call to database to render list of questions, that sets state in this component using the useState hook</li>
    <li>Attach an onClick function to the rendered questions, so that, when selected will pass that question information as props to the colab lab and be used to render the question in the page</li>
  </ul>
  </>
)

  

}

export default CreateNew;