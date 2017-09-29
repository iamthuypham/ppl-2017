import React from 'react';
import Typography from 'material-ui/Typography';

import ProcessImg from '../images/process.png';

const Process = () => (
  <div>
    <Typography type="headline" component="h3">
      I Buy Your House In 4 Steps
    </Typography>
    <img src={ProcessImg}/>
    <Typography type="body1" component="p">
      For a more detailed process, please visit <a href=''>How It Works</a>.
    </Typography>
  </div>
);
 
export default Process;