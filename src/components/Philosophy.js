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
        My Philosophy
      </Typography>
      <Typography type="display2">
        Be fair and reasonable
      </Typography>
      <Typography type="body1">
        As a businessman, I need to earn a profit when I buy a house just like any other business. However, I have realized long ago, that in order to have a stable and long lasting business, the best method is to consider the needs of everyone involved and come up with solutions that are fair and justifiable for all parties. When it comes to buying a house, I would analyze all the numbers and make an offer that enables me to earn a fair yet conservative amount of profit and would leave the rest to the seller. This oftentimes resulted in me offering more money to sellers comparing to other investors. As a matter of fact, there were several instances where I ended up breaking even or making very little profits on a several transactions just last year alone.
      </Typography>
  
      <Typography type="display2">
        Keeping promises and commitments
      </Typography>
      <Typography type="body1">
        Selling a house is a serious and important process to sellers. They may base their subsequent critical decisions such as moving, renting, or buying another house on the closing of the sale of their homes. Sellers need to be able to count on me when I solidify my decision to purchase their homes. This is a commitment that I don’t take lightly and would do my very best to ensure the transaction closes as planned.  
      </Typography>
      <Typography type="display2">
        Making it hassle-free for sellers
      </Typography>
      <Typography type="body1">
        Selling a house and moving to another place is a rather stressful process. I aim to making things easy by emphasizing to my sellers that they do not have to repair, clean up, or removing trash and debris from the house. They simply take what they wish and leave the rest to me. Sometimes it’s also tough to coordinate an exact closing date that allows the seller a seamless transition to their new home. I oftentimes provide my sellers sufficient time (as much as 2 months) to remain in the house after closing in order for them to have a much smoother and less stressed transition. There were also instances where the sellers needed some capital before closing in order to deal with various issues. I provided them with a reasonable amount of money in order to help my sellers as well.
      </Typography>
    </Grid>
    <Grid item xs={11} md={4}>
      <OfferForm />
    </Grid>
  </Grid>
);
 
export default Faq;