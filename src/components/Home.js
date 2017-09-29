import React from 'react';
import Grid from 'material-ui/Grid';

import Pitch from './Pitch'
import IntroShort from './IntroShort'
import OfferForm from './OfferForm'
import ProcessShort from './ProcessShort'
import Situation from './Situation'
import Expectation from './Expectation'
import Testimony from './Testimony'
import FaqShort from './FaqShort'

const PPL = () => (
  <div>
    <Pitch />
    <Grid container
          align='flex-start'
          direction='row'
          justify='space-around'>
      <Grid item xs={11} md={5}>
        <IntroShort />
        <ProcessShort />
        <Situation />
      </Grid>
      <Grid item xs={11} md={5}>
        <OfferForm />
        <Expectation />
      </Grid>
      <Grid item xs={11} md={11}>
        <Testimony />
      </Grid>
      <Grid item xs={11} md={11}>
        <FaqShort />
      </Grid>
    </Grid>
  </div>
);
 
export default PPL;