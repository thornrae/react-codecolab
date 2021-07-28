// import { React, useState } from 'react';
import React from 'react';
import { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { render } from 'react-dom';
// import { LiveTvRounded } from '@material-ui/icons';

export default function FormDialog(props) {

  const [open, setOpen] = useState(true);
  const [signUp, setSignUp] = useState('')
  let data

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleSubmit = () => {
    setOpen(false);
    setSignUp(data)
    props.userSubmit(data)
  };

  useEffect(() => {
    if (!signUp) {
      setOpen(true)
    }
  }, [])

  const handleChange = (e) => {

    data = e.target.value
  }
  function renderSignup() {
    if (!signUp || signUp === '') {
      return <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}

        <Dialog open={open} onClose={handleSubmit} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create a User Name</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a Username
            </DialogContentText>
            <TextField onChange={handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="username"
              type="user"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    } else {
      return null
    }
  }
  return renderSignup()
}

