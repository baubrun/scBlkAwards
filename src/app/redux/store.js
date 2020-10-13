import { configureStore } from '@reduxjs/toolkit';
import messageModalSliceReducer from "./messageModal"
import fetchAudioSliceReducer from "./fetchAudio"
import authSliceReducer from "./auth"



export default configureStore({
  reducer: {
    msgModal: messageModalSliceReducer,
    fetchAudio: fetchAudioSliceReducer,
    auth: authSliceReducer,
  },
});
