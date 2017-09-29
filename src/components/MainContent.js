import React from 'react';
import Grid from 'material-ui/Grid';

import Hero from './Hero'
import Nav from './Nav'
import Home from './Home'
import Intro from './Intro'
import Process from './Process'
import PastDeal from './PastDeal'
import AboutMe from './AboutMe'
import Philosophy from './Philosophy'
import Faq from './Faq'
import Contact from './Contact'


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
        <Nav onClickHandle={this.handleChange}/>
        <Hero />
        {value === 0 && 
          <Home />
        }
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
          <PastDeal />
        </div>}
        {value === 5 && <div>
          <AboutMe />
        </div>}
        {value === 6 && <div>
          <Philosophy />
        </div>}
        {value === 7 && <div>
          <Contact />
        </div>}
      </div>
    )
  }
}