import React, { Component } from "react";

class AlbumController extends Component {
  state = {
    title: "First album",
  };

  render() {
    return <h2>{this.state.title}</h2>;
  }
}

export default AlbumController;
