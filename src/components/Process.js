import React from 'react';

import ProcessImg from '../images/process.png';
import OfferForm from './OfferForm';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Process = () => (
  <Grid container
          align='flex-start'
          direction='row'
          justify='space-around'>
    <Grid item xs={11} md={6}>
      <Typography type="headline" component="h3">
        I Buy Your House In 4 Steps
      </Typography>
      <img src={ProcessImg}/>
      <Typography type="body1" component="p">
        For a more detailed process, please visit <a href=''>How It Works</a>.
      </Typography>
      <Typography type="display2">
        Discussion
      </Typography>
      <Typography type="body1" component="p">
        First, we would have a brief discussion over the phone about your house, your objectives in selling the house, and when you would like to close. I would ask for an idea of what you are asking for the house to ensure that our idea of the value of the house is within range of one another.
      </Typography>
      <Typography type="display2">
        House Visit
      </Typography>
      <Typography type="body1" component="p">
        Then I would schedule a brief walk-through of the house (usually no more than 15 minutes) to determine its floor plan and true condition. If you have tenants and wish to not disclose to them your intention of selling the house, I could tell them I’m simply there to evaluate the condition of the house. You do not have to clean the house. Remember, I love houses no matter their condition.
      </Typography>
      <Typography type="display2">
        Offer
      </Typography>
      <Typography type="body1" component="p">
        After that, I would do my research and analyses and meet face to face with you within 1 day after the initial walk-through to give you a proposal or offer. You will have sufficient time to perform your own due diligence and determine what makes sense to you. If we can proceed with the sale, I shall put together a standard purchase and sale agreement that contains all the terms and conditions that we agreed upon. You can then have it reviewed and verified before signing. You could talk to your attorney, family, and friends to make sure everything is as agreed. You could ask me questions to make sure everything is clarified.
      </Typography>
      <Typography type="display2">
        Closing
      </Typography>
      <Typography type="body1" component="p">
        Once the purchase and sale agreement is signed by you and me, we shall give it to an escrow company of your choosing and then proceed with the closing.
      </Typography>
    </Grid>
    <Grid item xs={11} md={4}>
      <OfferForm />
    </Grid>
  </Grid>
);
 
export default Process;