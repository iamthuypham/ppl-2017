import React from 'react';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'

import Logo from '../images/logo.png';

import Hero from './Hero'
import Pitch from './Pitch'
import IntroShort from './IntroShort'
import Intro from './Intro'
import Process from './Process'
import Situation from './Situation'
import Expectation from './Expectation'
import Testimony from './Testimony'
import Faq from './Faq'
import Links from './Links'
import Contact from './Contact'
import MailingList from './MailingList'
import Footer from './Footer'

export default class MainContent extends React.Component {
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
        <AppBar position="static" color="default">
          <Tabs value={value} 
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
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
        <Hero />
        {value === 0 && <div>
          <Pitch />
          <Grid container>
            <Grid item xs={12} md={6}>
              <IntroShort />
            </Grid>
            <Grid item xs={12} md={6}>
              <Process />
            </Grid>
            <Grid item xs={12} md={6}>
              <Situation />
            </Grid>
            <Grid item xs={12} md={6}>
              <Expectation />
            </Grid>
          </Grid>
          <Testimony />
          <Faq />
          <Grid container>
            <Grid item xs={12} md={4}>  
              <Links />
            </Grid>
            <Grid item xs={12} md={4}>
              <Contact />
            </Grid>
            <Grid item xs={12} md={4}>
              <MailingList />
            </Grid>
          </Grid>
        </div>}
        {value === 1 && <div>
          <Intro />
        </div>}
        {value === 2 && <div>
          <Process/>
        </div>}
        {value === 3 && <div>
          <Faq />
        </div>}
        {value === 4 && <div>
          {"Past Deal"}
        </div>}
        {value === 5 && <div>
          {"About Me"}
        </div>}
        {value === 5 && <div>
          {"My philosophy"}
        </div>}
        {value === 5 && <div>
          <Contact />
        </div>}
        <Footer />
      </div>
    )
  }
}