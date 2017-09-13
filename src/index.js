import React from 'react';
import {render} from 'react-dom';
import AsylumConnectCatalog from './components/AsylumConnectCatalog';
import asylumConnectCatalogTheme from './theme/asylumConnectCatalogTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * App entry file
 */

//load our css
//require('../../web/src/stylesheets/main.scss');
//require('../../node_modules/react-quill/dist/quill.snow.css');

const rootElement = document.getElementById('main');

render(
  <MuiThemeProvider muiTheme={getMuiTheme(asylumConnectCatalogTheme)}>
    <AsylumConnectCatalog />
  </MuiThemeProvider>,
  rootElement);