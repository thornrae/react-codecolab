import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import SignIn from '../signin/signin.js'
// import SignUp from '../signup/signup.js'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links:{
    marginRight: 20,
  }
}));

const Header = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.links}>Code CoLab</Link>
              <Link to="/aboutus" className={classes.links}>About Us</Link>
              <Link to="/create" className={classes.links}>Make New Room</Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );


  // <>
  //   <h1><Link to="/">Code CoLab</Link></h1>
  //   <h5><Link to="/aboutus">About Us</Link></h5>
  //   <h5><Link to="/create">Make New Room</Link></h5>
  // </>

}

export default Header;