import React from 'react';

import OfferForm from './OfferForm';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Contacts = () => (
  <Grid container
          align='flex-start'
          direction='row'
          justify='space-around'>
    <Grid item xs={11} md={6}>
      <Typography type="headline">
        Contact
      </Typography>
      <Typography type="body1">
        Call, email, or use the contact form to get in touch.
      </Typography>
      <Typography type="body1">
        Phone: 206-203-8338
      </Typography>
      <Typography type="body1">
        Email: phong@fairhousebuyer.com
      </Typography>
      <Typography type="body1">
        Clear Vision Investments
      </Typography>
      <Typography type="body1">
        1123 Maple Avenue SW, Suite #110, Renton, WA 98057 
      </Typography>
    </Grid>
    <Grid item xs={11} md={4}>
      <OfferForm />
    </Grid>
  </Grid>
);
 
export default Contacts;