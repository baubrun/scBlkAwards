import React, {useEffect} from "react";
import {useDispatch,} from "react-redux"
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { I18nextProvider } from 'react-i18next';
import i18n from './locale/i18n';
// import {fetchAudioRequest} from "./app/redux/fetchAudio"
import {getSongs} from "./app/redux/fetchAudio"

import {songs} from "./data/songData"

const App = () => { 
  const dispatch = useDispatch()


  useEffect(() => {
    // dispatch(fetchAudioRequest())
    dispatch(getSongs(songs))

  }, [songs])

  return (
    <div >
      <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      </I18nextProvider>
    </div>
  );
};

export default App;
