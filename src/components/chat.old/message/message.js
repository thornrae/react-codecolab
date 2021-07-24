import React from 'react';

const Message = () => {


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
      id="filled-multiline-flexible"
      label="Multiline"
      multiline
      maxRows={4}
      value={value}
      onChange={handleChange}
      variant="filled"
  />
  </form>

  )

}

export default Message;