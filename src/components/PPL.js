import React from 'react';
import Grid from 'material-ui/Grid';

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

const PPL = () => (
  <Grid container 
        style={{height: '100%', backgroundColor:'grey'}}
        align='stretch'
        direction='row'
        justify='center'>
    <Grid item xs={12} md={10} style={{backgroundColor:'white', padding:'0'}}>
      <Header />
      <MainContent />
      <Footer />
    </Grid>
  </Grid>
);
 
export default PPL;