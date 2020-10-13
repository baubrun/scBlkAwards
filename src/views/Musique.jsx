import React from "react";
// import Audio from "../components/audio/Audio"
import Player from "../components/audioPlayer/Player";
import AutoCarousel from "../components/carousel/AutoCarousel";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
  }));


const Musique = () => {
    const classes = useStyles();

  return (
    <>
      <Grid 
      className={classes.root}
      container 
      direction="row" 
      justify="center" 
      alignItems="center"
      spacing={3}
      >
        <Grid item xs={12} md={12}>
          <AutoCarousel />
        </Grid>
        <Grid item xs={12} md={12}>
          <Player />
        </Grid>
      </Grid>
    </>
  );
};

export default Musique;
