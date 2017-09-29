import React from 'react';
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'

import Hero from './Hero'

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  
  render() {
    const { value } = this.state;
    return (
      <AppBar position="static" color="primary">
        <Tabs value={value} 
              onChange={this.props.onClickHandle}
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
    )
  }
}