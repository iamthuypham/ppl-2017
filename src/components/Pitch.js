import React from 'react';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Logo from '../images/logo.png';

const Pitch = () => (
  <Grid container
        align='center'
        direction='row'
        justify='center'
        style={{textAlign: 'center', paddingBottom:'30px'}}>
    <Grid item xs={11}>
      <Paper style={{padding: '20px'}}>
        <Typography type="display1">
          Need to sell your house fast? I can make a FAIR offer in a day and close within 2 weeks!
    Do you need some money before closing? I can assist you with that!
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
 
export default Pitch;