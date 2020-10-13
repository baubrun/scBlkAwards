import React from 'react';

const author = "Stak"


export const playlistData = [
    {
        id: 0,
        title: 'mza',
        author,
        url: require("../media/mza.mp3"),
        cover: require("../images/JuanAllain.jpg"),
      },
    
]


export const PlaylistContext = React.createContext();
