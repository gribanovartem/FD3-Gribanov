import React from 'react';
import './App.css';
import RainbowFrame from './RainbowFrame';

class App extends React.Component {



  render() {
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    return (
        <RainbowFrame colors={colors}>
          Hello!
        </RainbowFrame>
    )
  }
}

export default App;
