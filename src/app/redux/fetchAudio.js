import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAudioRequest = createAsyncThunk(
    "/api/load-songs",
    async () => {
        try {
            const response = await axios.get("/api/load-songs")
            return response.data
        } catch (error) {
            return error.message
        }
    }
)




export const fetchAudioSlice = createSlice({
    name: "fetchAudio",
    initialState: {
        audioTracks: [],
        error: false,
        errorMsg: ""
},
    
    reducers: {
        getSongs: (state, action) => {
            state.audioTracks = action.payload
        }
    },
    extraReducers: {
        [fetchAudioRequest.fulfilled]: (state, action) => {
            state.audioTracks = action.payload.data
            if(!action.payload.success){
                state.error = !action.payload.success
                state.errorMsg = action.payload.message
            }

        },
        [fetchAudioRequest.rejected]: (state, action) => {
            state.audioTracks = []
            state.error = !action.payload.success
            state.errorMsg = action.payload.message
        },

    }
})


export const {
    getSongs,
} = fetchAudioSlice.actions;
export const fetchAudioSliceState = (state) => state.fetchAudio.audioTracks;
export default fetchAudioSlice.reducer;