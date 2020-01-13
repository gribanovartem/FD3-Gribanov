import React, {Fragment} from 'react';
import './App.css';
import withRainbowFrame from './withRainbowFrame'

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedFragment=withRainbowFrame(colors)(Fragment);

class App extends React.Component {
  render() {
    return (
        <FramedFragment>
          Hello!
        </FramedFragment>
    )
  }
}

export default App;
