import React from "react";
import Audio from "./Audio";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  imgTitleHeader: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  authorTitle: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-even",
    margin: "0 5px",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: "5px",
  },
}));

const PlayerHeader = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.imgTitleHeader}>
        <Avatar
          className={classes.avatar}
          src={require(`../../media/${props.track.image}`)}
          alt="cover"
          variant="square"
        />
        <Box className={classes.authorTitle}>
          {/* <Box mx={2}>
            <Typography>{props.track.author}</Typography>
          </Box> */}
          <Box>
            <Typography>{props.track.title}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Audio
          handleNextTrack={props.handleNextTrack}
          handlePrevTrack={props.handlePrevTrack}
          url={props.track.file}
        />
      </Box>
    </>
  );
};

export default PlayerHeader;
