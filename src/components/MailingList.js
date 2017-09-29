import React from 'react';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const MailingList = () => (
  <div>
    <Typography type="display2" style={{color: 'white'}}>
      Join The Mailing List
    </Typography>
    <TextField
      label="Your Email Address"
      placeholder="name@example.com"
      margin="normal"
      color="secondary"
        />
    <Button raised>Submit</Button>
  </div>
);
 
export default MailingList;