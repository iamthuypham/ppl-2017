import React from 'react';
import Typography from 'material-ui/Typography';

const Situation = () => (
  <div style={{marginBottom: '20px'}}>
    <Typography type="headline" component="h3">
      Situations I Have Worked With
    </Typography>
    <Typography type="body1" component="li">Properties in foreclosure</Typography>
    <Typography type="body1" component="li">Properties with little or no equity</Typography>
    <Typography type="body1" component="li">Properties that need major repairs</Typography>
    <Typography type="body1" component="li">Sellers with job transfers</Typography>
    <Typography type="body1" component="li">Properties with non-paying tenants</Typography>
    <Typography type="body1" component="li">Estate sales</Typography>
    <Typography type="body1" component="li">Properties in bankruptcy</Typography>
    <Typography type="body1" component="li">Properties with massive HOA dues</Typography>
  </div>
);
 
export default Situation;