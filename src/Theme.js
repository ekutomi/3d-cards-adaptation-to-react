import React, {useState, useEffect} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, orange } from '@material-ui/core/colors';

export const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#7129CD',
    },
    secondary: {
      main: '#FFA500',
    },
    background: {
      main: '#E8E6E7',
    },
  },
});
