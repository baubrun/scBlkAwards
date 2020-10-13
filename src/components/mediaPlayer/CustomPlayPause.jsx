import React, { Component } from "react";
import "./mediaPlayer.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { GrVolumeMute } from "react-icons/gr";
import { withMediaProps } from "react-media-player";



class CustomPlayPause extends Component {

  constructor(props) {
    super(props);

    this.state = {
      play: false,
    };
  }
  handlePlay = () => {
    this.setState({ play: !this.state.play });
    this.props.media.playPause();
  };

  render() {
    return (
      <>
        {this.state.play ? (
          <BsPauseFill className="playBtn" onClick={this.handlePlay} />
        ) : (
          <BsPlayFill className="playBtn" onClick={this.handlePlay} />
        )}
      </>
    );
  }
}

export default withMediaProps(CustomPlayPause);

//   <audio controls="controls">
//     <source src={mza} />
//     Your browser does not support the audio element.
//   </audio>
// );
