import React from 'react';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Logo from '../images/logo.png';

const PPL = () => (
  <Grid container 
        align='center'
        direction='column'
        justify='center'
        style={{paddingTop:'10px', paddingBottom:'10px'}}>
    <Grid item xs={11}>
      <Grid container
            align='center'
            direction='row'
            justify='space-between'>
        <Grid item xs={12} md={3}>
          <img src={Logo}/>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper style={{textAlign: 'center', padding: '8px'}}>
            <Typography type="display1">Call Zelenka Tracy</Typography>
            <Typography type="headline">---.---.---</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
 
export default PPL;