import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import Box from "@material-ui/core/Box";

import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  avatar: {
    // alignItems: "center",
    // display: "flex",
    // justifyContent: "center",
    margin: "16px",
  },
  title: {
    minWidth: 350,
  }
}));

const Playlist = (props) => {
  const classes = useStyles();

  return (
    <>
      {_.sortBy(props.playlist, [
        (i) => {
          return i.title;
        },
      ]).map((track, idx) => (
        <Grid
          key={idx}
          container
          justify="space-evenly"
          direction="row"
        >
          <Grid
            item
            className={classes.avatar}
            key={idx}
            onClick={() => props.onChangeTrack(idx)}
          >
            <Avatar 
            className={classes.small} 
            src={require(`../../media/${track.image}`)} 
            alt="cover" />
          </Grid>
          <Grid
          className={classes.title}
          item>
            <Box m={3}>
              <Typography>{track.title}</Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Playlist
