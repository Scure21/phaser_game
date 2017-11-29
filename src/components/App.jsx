import React, { Component } from "react";
import { game } from "../game.js";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //when the component mounts, render the canvas
    game();
  }

  render() {
    return <div className="app-container"> </div>;
  }
}
