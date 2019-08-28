//Libraries
import React from "react";
import { render } from "react-dom";

//Style
// import style from '../styles/main.css';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="app">
        HI
      </div>
    )
  }
}

render(<App/>, document.getElementById("root"));
