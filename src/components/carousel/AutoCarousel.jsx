import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import clsx from "clsx";
import lalloCover from "../../media/lallo-cover-art.png"


const useStyles = makeStyles((theme) => ({
  slideArrows: {
    color: "#424242",
    fontSize: 100,
    // position: "absolute",
    "&:hover": {
      color: "#0099ff",
      cursor: "pointer",
      transition: "ease-in-out 1s",
    },
  },
  SlideImg: {
    height: 350,
    width: 350,
    objectFit: "contain",
  },
}));

const AutoCarousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playlist, setPlaylist] = useState([]);
  const classes = useStyles();

  const albums = 1

  useEffect(() => {
    setPlaylist(props.songs);
  }, [props.songs]);

  const changeSlide = (amount) => {
    if (currentSlide <= 0 && amount === -1) {
      setCurrentSlide(playlist.length - 1);
      return;
    }
    if (currentSlide === playlist.length - 1 && amount === 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prevState) => prevState + amount);
  };

  if (playlist.length < 1) return null;
  return (
    <>
      <Grid
        container
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {albums > 1 && (
          <Grid>
            <MdKeyboardArrowLeft
              onClick={() => changeSlide(-1)}
              className={clsx([classes.slideArrows, classes.slideArrowLeft])}
            />
          </Grid>
        )}
        <Grid item key={currentSlide}>
          <img
            // className="d-block w-100"
            // className="d-block w-100"
            className={classes.SlideImg}
            // src={require(`../../media/${playlist[currentSlide].image}`)}
            src={lalloCover}
            alt={playlist[currentSlide].image.title}
          />
        </Grid>
        {albums > 1 && (
          <Grid>
            <MdKeyboardArrowRight
              onClick={() => changeSlide(1)}
              className={clsx([classes.slideArrows, classes.slideArrowRight])}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default AutoCarousel;
