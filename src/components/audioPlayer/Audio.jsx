import React, { useState, useEffect, useLayoutEffect } from "react";
import { IconButton } from "@material-ui/core";
import { ProgressBar } from "./ProgressBar";
import { FaStopCircle, FaPlayCircle } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import { getSecondsToMinutesAndSeconds } from "./helper";
import Box from "@material-ui/core/Box";
import {
  MdSkipPrevious,
  MdPauseCircleFilled,
  MdSkipNext,
} from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  audioContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0 16px",
  },
  audioIconStyles: {
    cursor: "pointer",
    color: "#424242",
    [theme.breakpoints.down("xs")]: {
      // fontSize: "16px"
    },
    fontSize: 32,
  },
  duration: {
    fontSize: 20,
  },
  progressBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",

  }
}));

 const Audio = (props) => {
  const [currentTrackDuration, setCurrentTrackDuration] = useState(0);
  const [currentTrackMoment, setCurrentTrackMoment] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);
  const classes = useStyles();
  const [changedTrack, setChangedTrack] = useState(false)


  useEffect(() => {
    setCurrentTrackDuration(0);
    setCurrentTrackMoment(0);
    setProgressBarWidth("0");
    // handlePlay();
  }, [props.url]);

  useLayoutEffect(() => {
    initPlayer();
  });

  useEffect(() => {
    if (!isPlaying && changedTrack){
      handlePlay()
    }
  }, [changedTrack, isPlaying])


  let audioPlayer;

  const initPlayer = () => {
    audioPlayer = document.getElementById("audioPlayer");
  };

  const handleStop = () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0.0;
    setIsPlaying(false);
    setCurrentTrackMoment(0);
    setChangedTrack(false)

  };

  const handlePlay = () => {
    if (audioPlayer.paused || audioPlayer.ended) {
      audioPlayer.play();
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

 
  const handleMetadata = () => {
    const duration = Math.floor(audioPlayer.duration);
    setCurrentTrackDuration(getSecondsToMinutesAndSeconds(duration));
  };

  const handleTimeupdate = (playNext) => {
    setCurrentTrackMoment(Math.floor(audioPlayer.currentTime));
    setProgressBarWidth(
      Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100)
    );
    if (audioPlayer.currentTime === audioPlayer.duration) {
      playNext();
    }
  };


  // if(!props.url) return null
  return (
    <>
      <div key={props.url}>
        <audio
          id="audioPlayer"
          preload="metadata"
          onLoadedMetadata={handleMetadata}
          onTimeUpdate={() => handleTimeupdate(props.handleNextTrack)}
        >
          <source 
          src={require(`../../media/${props.url}`)} 
          type="audio/mpeg" />
          Veuillez mettre à jour votre navigateur.
        </audio>
        <Box className={classes.audioContainer}>
          <IconButton
            className={classes.audioIconStyles}
            onClick={() => {
              handleStop();
              props.handlePrevTrack();
              setChangedTrack(true)
            }}
          >
            <MdSkipPrevious />
          </IconButton>

          <IconButton
            className={classes.audioIconStyles}
            onClick={handlePlay}
            
          >
            {isPlaying ? <MdPauseCircleFilled /> : <FaPlayCircle />}
          </IconButton>

          <IconButton 
          className={classes.audioIconStyles} 
          onClick={handleStop}>
            <FaStopCircle />
          </IconButton>

          <IconButton
            className={classes.audioIconStyles}
            onClick={() => {
              handleStop();
              props.handleNextTrack();
              setChangedTrack(true)
            }}
          >
            <MdSkipNext />
          </IconButton>
        </Box>

        <Box className={classes.progressBar}>
          <Box
           className={classes.duration}
           >
            {getSecondsToMinutesAndSeconds(currentTrackMoment)}
          </Box>

          <ProgressBar progressPercent={progressBarWidth} />

          <Box 
          className={classes.duration}
          >
            {currentTrackDuration || "0 : 00"}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Audio