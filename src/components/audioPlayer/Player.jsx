import React, {
  useState,
  useEffect,
} from "react";
import PlayerHeader from "./PlayerHeader";
import Loader from "react-loader-spinner";
import Grid from "@material-ui/core/Grid";
import Playlist from "./Playlist";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchAudioSliceState } from "../../app/redux/fetchAudio";
import Spinner from "../spinner/Spinner"
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
  spinner: {
    marginTop: "50%",
  }
}));

export const Player = (props) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  // const songs = useSelector(fetchAudioSliceState);

  useEffect(() => {
    // setPlaylist(props.songs);
    setPlaylist(_.sortBy(props.songs, [
      (i) => {
        return i.title;
      },
    ]));
  }, [props.songs]);

 
  const handleChangeTrack = (id) => {
    setCurrentTrack(id);
  };

  const handleNextTrack = () => { 
    if (currentTrack === playlist.length - 1) {
      setCurrentTrack(0);
      return;
    }
    setCurrentTrack(currentTrack + 1);
  };

  const handlePrevTrack = () => {

    if (currentTrack === 0) {
      setCurrentTrack(playlist.length - 1);
      return;
    }
    setCurrentTrack(currentTrack - 1);
  };

  if (playlist.length === 0) {
    return (
      <Spinner />
    );
  }

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <PlayerHeader
          handleNextTrack={handleNextTrack}
          handlePrevTrack={handlePrevTrack}
          playlist={playlist}
          track={playlist[currentTrack]}
        />
      </Grid>
      <Grid item item xs={12} md={12}>
        <Playlist 
        onChangeTrack={handleChangeTrack} 
        playlist={playlist} />
      </Grid>
    </Grid>
  );
};


export default Player;
