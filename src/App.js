import React from 'react'
import './App.css'
import Card from './components/Card'
import { ThemeProvider } from '@material-ui/core/styles'
import { myTheme } from './Theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default App;
