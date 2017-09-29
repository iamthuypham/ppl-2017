import React from 'react';

import OfferForm from './OfferForm';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Faq = () => (
  <Grid container
          align='flex-start'
          direction='row'
          justify='space-around'>
    <Grid item xs={11} md={6}>
      <Typography type="headline" component="h3">
        About Me
      </Typography>
      <Typography type="display2">
        
      </Typography>
      <Typography type="body1">
        My name is ----- and I moved to Seattle when I was 13 years old. I have been living in the West Seattle and proudly claiming Seattle as my home for the past 25 years. I started my professional career working as an Information Technology Analyst for Weyerhaeuser.    However, I found my passion in Real Estate when I helped my mother purchase our first house back in 2002. I saw how fun and fulfilling it was to help my father remodel that house while living in it. It was then, when I decided to look further into Real Estate. 
      </Typography>
    </Grid>
    <Grid item xs={11} md={4}>
      <OfferForm />
    </Grid>
  </Grid>
);
 
export default Faq;