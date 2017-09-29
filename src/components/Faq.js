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
        Common Questions And Answers
      </Typography>
      <Typography type="display2">
        Are you a real estate agent?
      </Typography>
      <Typography type="body1">
        I’m not a real estate agent. My plan is not to list your house. I simply would like to personally make an offer and buy your house or property and close quickly. 
      </Typography>
  
      <Typography type="display2">
        Where do we conduct the closing?
      </Typography>
      <Typography type="body1">
        Upon mutual agreement, we can use an escrow company of your choosing to make sure the transaction is carried out in a safe and professional manner. There are several nationwide escrow companies that we could use including Fidelity, Transnation, or First American Title and Escrow.  
      </Typography>
      <Typography type="display2">
        Would you buy houses that are currently occupied by tenants?
      </Typography>
      <Typography type="body1">
        I have and do buy such houses. I will make sure to be discreet when visiting the house and on some occasions have bought houses without seeing the inside. 
      </Typography>
      <Typography type="display2">
        My house is in foreclosure and I’m completely upside down. Can you buy my house?
      </Typography>
      <Typography type="body1">
        I actually specialize in buying properties with negative equity and take great pride in being able to help sellers out of such a difficult situation. I work with a reputable and proven negotiator to negotiate with lenders on these type of properties. I have bought over 20 of these so called “short sale” properties just last year. 
      </Typography>
    </Grid>
    <Grid item xs={11} md={4}>
      <OfferForm />
    </Grid>
  </Grid>
);
 
export default Faq;