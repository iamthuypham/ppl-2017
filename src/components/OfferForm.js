import React from 'react';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const OfferForm = () => (
  <div style={{marginBottom: '20px'}}>
    <Typography type="headline">
      Get A Fair Offer Now
    </Typography>
    <Typography type="body1">
      * denotes a required field
    </Typography>
    <Grid container
          align='stretch'
          direction='row'
          justify='center'>
      <Grid item xs={6}>
        <TextField
          label="First Name*"
          margin="normal"
            />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Last Name*"
          margin="normal"
            />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Email Address*"
          margin="normal"
            />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Phone Number*"
          margin="normal"
            />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Property Address*"
          margin="normal"
            />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Property ZIP/Postal Code*"
          margin="normal"
            />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Number of Bedrooms"
          margin="normal"
            />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Number of Bathrooms"
          margin="normal"
            />
      </Grid>
      <Grid item xs={12}>
        <Button raised>Submit</Button>
      </Grid>
      <Grid item xs={12}>
        <Typography type="body1">Have Question</Typography>
        <Typography type="body1">Call me at ---.---.---  </Typography>
      </Grid>
    </Grid>
  </div>
);
 
export default OfferForm;