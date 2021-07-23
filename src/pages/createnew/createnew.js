import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios'






const CreateNew = () => {

  const [questions, setQuestions] = useState([])

  const [selectedQuestion, setSelectedQuestion] = useState()

  useEffect(() => {
    axios.get('https://codecolab-api.herokuapp.com/questions')
      .then(response => {
        let data = response.data
        setQuestions(data)
      })
      
      .catch(e => {
        console.error(e)
      })
      
  }, [])

const onClick = async (e) => {
  console.log('WHERE SOCKET ROOM NEEDS TO GO')

  const textContent = e.target.childNodes[0].textContent

  
  if(questions) {
    questions.forEach((question) => {
      if(question.name === textContent) {
        setSelectedQuestion(question)
      }
    })
  }
  
  console.log(selectedQuestion)
  console.log(textContent)
  
}

useEffect(() => {
  if(selectedQuestion) {
    console.log(selectedQuestion)
      

  let roomInfo = {
    question: selectedQuestion,
    id: selectedQuestion._id
  }
  // console.log(colabSocket.emit("question",roomInfo))
  }

},[selectedQuestion])



  return (
    <>

      <List component="nav">
        {questions.map((question) =>
          <ListItem button onClick={onClick} value={question} key={question._id}>
            <ListItemText primary={question.name} />
          </ListItem>)}
      </List>


      {/* <h3>Create New Room Here</h3>
  <ul> <p>We Need To:</p>
    <li>Make axios call to database to render list of questions, that sets state in this component using the useState hook</li>
    <li>Attach an onClick function to the rendered questions, so that, when selected will pass that question information as props to the colab lab and be used to render the question in the page</li>
  </ul> */}
    </>
  )



}

export default CreateNew;