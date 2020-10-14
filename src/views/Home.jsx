import React from "react";
import mainImg from "../media/lbx-ig-cover-dark.png";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius: "50%",
    margin: 0,
    objectFit: "contain",
    // width: "100%",
    width: 450,
    height: 450,
  },
  title: {
    fontFamily: "Permanent Marker !important",
    fontSize: 48,
  },
  large: {
    width: theme.spacing(100),
    height: theme.spacing(100),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
    <Grid container justify="center" direction="row">
      <Grid container justify="center" direction="column">
      <Grid item>
        <Typography className={classes.title} variant="h5" align="center">
          Auteur-Compositeur-Interprète
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.title} variant="h6" align="center">
          Montréal, QC
        </Typography>
      </Grid>
      </Grid>
   
    </Grid>
    <Grid container justify="center" direction="row">
    <Grid item>
        <Avatar
        alt="Lairebaux"
        className={classes.large}
        src={mainImg}
        />
      </Grid>

    </Grid>
    </>
  );
};

export default Home;
