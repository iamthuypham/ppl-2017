import React from 'react';
import Grid from 'material-ui/Grid';

import KitchenImg from '../images/kitchen.png'

const PPL = () => (
  <Grid container 
        align='baseline'
        direction='row'
        justify='space-between'>
    <Grid item xs={12}>
      <img src={KitchenImg}/>
    </Grid>
  </Grid>
);
 
export default PPL;