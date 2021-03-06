import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Links = () => (
  <div>
    <Typography type="display2" style={{color: 'white'}}>
      Recent Transactions
    </Typography>
    <Typography type="body1" component="li" style={{color: 'white'}}>
      Condo in Des Moines 
    </Typography>
    <Typography type="body1" component="li" style={{color: 'white'}}>
      House Tear-down in Lynnwood 
    </Typography>
    <Typography type="body1" component="li" style={{color: 'white'}}>
      Major Fixer in North Seattle 
    </Typography>
    <Typography type="body1" component="li" style={{color: 'white'}}>
      Short Sale in Snohomish 
    </Typography>
    <Typography type="body1" component="li" style={{color: 'white'}}>
      Joint Venture with Seller in Federal Way
    </Typography>
  </div>
);
 
export default Links;