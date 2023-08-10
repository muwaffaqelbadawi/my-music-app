import React, { Component } from "react";

class SongController extends Component {
  state = {
    title: "First song",
  };

  render() {
    return <h1
    className="song"
    >{this.state.title}</h1>;
  }
}

export default SongController;
