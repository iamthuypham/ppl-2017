import React from 'react';

import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'

import Links from './Links'
import ContactShort from './ContactShort'
import MailingList from './MailingList'

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event, value) {
    this.setState({ value });
  };
  
  render() {
    const { value } = this.state;
    return (
      <div>
        <Grid container
                align='flex-start'
                direction='row'
                justify='center'
                style={{paddingTop:'20px', paddingBottom:'20px'}}
                >
          <Grid item xs={11} md={4}>  
            <Links />
          </Grid>
          <Grid item xs={11} md={3}>
            <ContactShort />
          </Grid>
          <Grid item xs={11} md={4}>
            <MailingList />
          </Grid>
        </Grid>
        <AppBar position="static" style={{backgroundColor: '#000023'}}>
          <Tabs value={value} 
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="secondary"
                scrollable
                scrollButtons="auto">
            <Tab label="Home" />
            <Tab label="What I Do" />
            <Tab label="How It Works"/>
            <Tab label="FAQ"/>
            <Tab label="Past Deals"/>
            <Tab label="About Me"/>
            <Tab label="My Philosophy"/>
            <Tab label="Contact"/>
          </Tabs>
        </AppBar>
      </div>
    )
  }
}