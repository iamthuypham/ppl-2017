import React from 'react';
import Grid from 'material-ui/Grid';

import Logo from '../images/logo.png';

const PPL = () => (
  <Grid container 
        align='baseline'
        direction='row'
        justify='space-between'>
    <Grid item xs={12} md={6}>
      <img src={Logo}/>
    </Grid>
    <Grid item xs={12} md={6}>
      <div>Call Zelenka Stacey</div>
    </Grid>
  </Grid>
);
 
export default PPL;