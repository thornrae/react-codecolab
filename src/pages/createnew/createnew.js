import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';





const CreateNew = (props) => {

  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState()
  const [room, setRoom] = useState()

  let url = props.url;
  const history = useHistory()

  const link = () => {
    if (room) {
      let questionRoom = {
        question: selectedQuestion,
        room: room
      }
      console.log("EMITTING", questionRoom)
      socket.emit("question", questionRoom)


      console.log('ROOM URL', room)
      url(room);
      history.push(`/colab/${room}`)
    }

    


  }

  const socket = props.data

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

    const textContent = e
    // const textContent = e.target.childNodes[0].textContent

    console.log('textContent', textContent)

    if (questions) {

      questions.forEach((question) => {
        if (question.name === textContent) {
          setSelectedQuestion(question)
        }
      })
    }
  }


  useEffect(() => {

    if (selectedQuestion) {
      console.log('SELECTED QUESTION', selectedQuestion)
      console.log('QUESTION', selectedQuestion._id)
      console.log('USER', props.user.user_id)
      setRoom(`${selectedQuestion._id}${props.user.user_id}`)

    }

  }, [selectedQuestion])


  useEffect(() => {


  }, [room])

  const useStyles = makeStyles({
    root: {
      width: 400,
      height: 400,
      display: "flex",
      flexDirection: "rows"
    },
 
    question: {
      marginRight: "30px"
    },
    description: {
      font: "10px"
    }

  });


  // ------------------------------------- MATERIAL UI ------------------
  const classes = useStyles();

 

  return (
    <>
    <div className={classes.root}>
    <List component="nav">
      <div className={classes.card}>
        {questions.map((question) =>
          <ListItem className={classes.item}button onClick={ () => onClick(question.name)} value={question} key={question._id}>
            <ListItemText className={classes.question} primary={question.name} />
            <ListItemText className={classes.description} secondary={question.description} />
            <Button onClick={link}>Create Colab</Button>
          </ListItem>)}
        </div>
      </List>
  </div> 
</>
  )
}

export default CreateNew;




   // const bull = <span className={classes.bullet}>•</span>;






{/* <div className="card">
{questions.map((question) => 
<div class="container">
  <h4><b>{question.name}</b></h4>
  <p>{question.description}</p>
</div>)}
</div> */}



// <Card className={classes.root}>
// {questions.map((question) => 
// <CardContent>
//   <Typography className={classes.title} color="textSecondary" gutterBottom>
//     {/* Code Challenge: */}
//   </Typography>
//   <Typography variant="h5" component="h2">
//     {/* {question.name} */}
//   </Typography>
//   <Typography className={classes.pos} color="textSecondary">
//     {question.type}
//   </Typography>
//   <Typography variant="body2" component="p">
//     {question.description}
//     <br />
//     {'"a benevolent smile"'}
//   </Typography>

// <CardActions>
// {/* {questions.map((question) =>  */}
//   <Button size="small" onClick={onClick} value={question} key={question._id}>CODE COLAB: {question.name}</Button>
// </CardActions> 
// </CardContent> )}
// </Card> 
 
