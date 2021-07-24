import React from 'react';
import img from './assets/taylor.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'; 


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    alignItems: 'center'
  },
  media: {
    height: 300,
  },
  grid:{
    alignContent: 'flex-end'
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>

<Grid container className={classes.grid} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Taylor Thornton
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Short Bio About Taylor
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image={img}
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Taylor Thornton
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Short Bio About Taylor
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
</Card>

<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image={img}
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Taylor Thornton
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Short Bio About Taylor
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
</Card>

<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image={img}
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Taylor Thornton
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Short Bio About Taylor
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
</Card>

</Grid>
</Grid>
</Grid> 
</>
    
  );
}