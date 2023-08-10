import React, { Component } from "react";

export class LyricsController extends Component {
  state = {
    title: "This lyrics is the first lyrics",
  };
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}

export default LyricsController;
