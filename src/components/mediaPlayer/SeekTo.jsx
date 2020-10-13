import React, { Component } from "react";
import "./mediaPlayer.css";
import { withMediaProps } from "react-media-player";



class SeekTo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      seek: null,
    };
  }
  handlePlay = () => {
    this.props.media.seekTo()
  };

  render() {
    return (
      <>
      </>
    );
  }
}

export default withMediaProps(SeekTo);

