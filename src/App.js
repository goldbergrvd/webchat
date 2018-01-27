import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <p className="messages">
          <span className="line">lineline2222</span>
          <span className="line">lineline1111</span>
        </p>
        <form>
          <input id="input" type="text" placeholder="尼想說什麼？" />
          <button id="submit">送出</button>
        </form>
      </div>
    );
  }
}

export default App;
