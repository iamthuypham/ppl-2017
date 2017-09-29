import React from 'react';

import OfferForm from './OfferForm';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const PPL = () => (
  <Grid container
          align='flex-start'
          direction='row'
          justify='space-around'>
    <Grid item xs={11} md={6}>
      <Typography type="headline" component="h3">
        What I Do
      </Typography>
      <Typography type="body1" component="p">
        My 12 years of living and breathing real estate have given me the experience and knowledge to deal with even the most difficult real estate transactions. This have enabled me to buy a wide variety of properties with even the most difficult problems associated with them. Here are some of things I can assist with:
      </Typography>
      <Typography type="display2">
        Short Sales
      </Typography>
      <Typography type="body1">
        I have specialized knowledge in dealing with short sales or properties that have no equity or negative equity. I work with dedicated attorneys an extremely experienced short sale negotiator to negotiate with your lenders and buy these properties at no costs to you. Oftentimes they would even negotiate Relocation fee as part of the short sale process to enable you, as the seller, moving expenses from $3,000 to $10,000. You would also be able to safely and comfortably stay in your property until it is sold.  
      </Typography>
      <Typography type="display2">
        Major Fixers
      </Typography>
      <Typography type="body1">
        With my extensive experience in renovation, I would love to have a chance to buy even the ugliest one. I do not expect you to fix anything or removing any trash within the property. Simply take what you wish and leave the rest. 
      </Typography>
      <Typography type="display2">
        Tenants Problems
      </Typography>
      <Typography type="body1">
        I can buy properties with difficult tenants or tenants who haven’t paid rent. You would not have go through the trouble of evicting them prior to closing with me. 
      </Typography>
      <Typography type="display2">
        Probates
      </Typography>
      <Typography type="body1">
        I can work with the executor of the estate or the attorney involved to purchase your property. Even if the probate process hasn’t yet started, I could refer you to experienced and affordable probate attorneys to help you with the process. 
      </Typography>
      <Typography type="display2">
        Bankruptcy
      </Typography>
      <Typography type="body1">
        I can work with your bankruptcy attorney to buy your property. 
      </Typography>
      <Typography type="display2">
        Everything Else
      </Typography>
      <Typography type="body1" component="p">
        I buy houses that are already in good condition. I buy real estate notes. I buy condos, mobile homes or even raw land.
      </Typography>
      <Typography type="headline" component="h3">
        As Part Of Selling Your House To Me
      </Typography>
      <Typography type="body1" component="p">
        I can close quickly or can work with you to find the most ideal closing time and date for you.
      </Typography>
      <Typography type="body1" component="p">
        I can provide money before closing in order to help ease potential financial burdens.
      </Typography>
      <Typography type="body1" component="p">
        We can close the transaction and allow you to remaining in the house for a reasonable amount of time should you need more time to make other living arrangements.
      </Typography>
      <Typography type="body1" component="p">
        I’m not an agent and I’m not looking to list your house and do not charge any commission.
      </Typography>
      <Typography type="body1" component="p">
        I shall keep all conversations we have in regard to selling your house confidential.
      </Typography>
    </Grid>
    <Grid item xs={11} md={4}>
      <OfferForm />
    </Grid>
  </Grid>
    
);
 
export default PPL;