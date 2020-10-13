import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { fetchAudioSliceState } from "../app/redux/fetchAudio";
import { AiOutlineFileText } from "react-icons/ai";
import { GiMusicSpell } from "react-icons/gi";
import _ from "lodash";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    minWidth: 350,
  },
  download: {
    color: "#424242 !important",
    fontSize: "40px",
  },
}));

const SOCAN = () => {
  const classes = useStyles();
  const [playlist, setPlaylist] = useState([]);
  const songs = useSelector(fetchAudioSliceState);

  useEffect(() => {
    setPlaylist(songs);
  }, [songs]);

  return (
    <>
      <Grid container justify="center" direction="row">
        {_.sortBy(playlist, [
          (i) => {
            return i.title;
          },
        ]).map((track, idx) => (
          <>
            <Grid key={idx} className={classes.title} item>
              <Box m={3}>
                <Typography>{track.title}</Typography>
              </Box>
              <Grid item>
                <IconButton>
                  <a href={require(`../media/${track.file}`)} download>
                    <GiMusicSpell className={classes.download} />
                  </a>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <a href={require(`../media/${track.text}`)} download>
                    <AiOutlineFileText className={classes.download} />
                  </a>
                </IconButton>
              </Grid>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default SOCAN;
