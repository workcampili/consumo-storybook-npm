import React from 'react';
import { MyLabel, Button } from 'eac-my-storybook-components'
import './App.css';

function App() {
  return (
    <div className="App App-header">
      <MyLabel
        label={"Hello World"}
        size={"h1"}
        allCaps={true}
        backgroundColor={"red"}
        fontColor={"white"}
      />
      <div style={{ marginTop: '10px' }}>
        <Button label={"Click Me"} primary />
      </div>
    </div>
  );
}

export default App;
