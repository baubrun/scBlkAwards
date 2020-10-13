import React from "react";
import { useSelector } from "react-redux";
import Player from "../components/audioPlayer/Player";
import AutoCarousel from "../components/carousel/AutoCarousel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { fetchAudioSliceState } from "../app/redux/fetchAudio";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
  }));


const Music = () => {
  // const [loading, setLoading] = useState(true);
    const classes = useStyles();
    const songs = useSelector(fetchAudioSliceState);

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
          <AutoCarousel songs={songs} />
        </Grid>
        <Grid item>
          <Player songs={songs}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Music;
