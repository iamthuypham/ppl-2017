import React from 'react';
import {render} from 'react-dom';
import PPL from './components/PPL'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomTheme from './CustomTheme'

render(
    <MuiThemeProvider theme={CustomTheme}>
        <PPL />
    </MuiThemeProvider>
    , document.querySelector('#root'));