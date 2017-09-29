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
        Past Deals
      </Typography>
      <Typography type="display2">
        Transaction 1: Condo in Des Moines
      </Typography>
      <Typography type="body1">
        Seller contacted me hoping to sell her condo in Des Moines, WA. It was scheduled to be auctioned off within a month due to unpaid HOA dues. I visited her condo and submitted an offer within 1 day of seeing her. She then informed me that it was about $10,000 lower than what someone else offered her. I told her I would not be able to make much of any money at a price that is $10,000 higher than my original offer. I then wished her the best of luck and hope that the transaction works out with the other buyer.
      </Typography>
      <Typography type="body1">
2 weeks later, she contacted me again informing me that the other buyer never deposited any earnest money and stopped calling her entirely. I honored my previous offer to her and we quickly signed the Purchase and Sale agreement. She then informed me that she was completely out of money and didn’t even have any money for food and heating bill. Even though it was unusual, I decided to give part of the earnest money directly to her so she could take care of her financial needs.
      </Typography>
      <Typography type="body1">
Over the course of 10 days that it took escrow to set up the transaction such as ordering a title policy, contact the foreclosure attorney for payoffs, and contacting utility companies for payoffs as well, I gave her directly over $2,500 to assist the seller in food and other expenses. We closed right before the foreclosure auction could take place and I even gave her extra time to move out of the condo.
      </Typography>
      <Typography type="body1">
I have a hunch that the other buyer wanted to tie up the property with the intention of letting it go to auction so he could possibly buy it at a much lower price. The seller was extremely appreciative due to my quick and decisive action and my ability to keep my words…
      </Typography>
    </Grid>
    <Grid item xs={11} md={4}>
      <OfferForm />
    </Grid>
  </Grid>
);
 
export default Faq;