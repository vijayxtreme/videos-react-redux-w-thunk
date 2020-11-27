import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "videos",
  initialState: {
    allVideos: [{
        name: 'The Little Mermaid',
        id: 0
    }]
  },
  reducers: {
    getVideos: (state, action) => {
      state.allVideos = [...state.allVideos, ...action.payload];
    }
  }
});

//export actions --> returns plain objects to be reduced into state
export const { getVideos } = videoSlice.actions;

export const getVideosYT = () => (dispatch) => {
  //can do a fetch instead here and work with a db.

  const videos = [
    {
      name: "Mulan",
      id: 1
    },
    {
      name: "Cinderella",
      id: 2
    },
    {
      name: "Beauty and the Beast",
      id: 3
    },
    {
      name: "Aladdin",
      id: 4
    }
  ];

  setTimeout(() => {
    dispatch(getVideos(videos));
  }, 1000);
};

//export selector

export const selectVideos = (state) => {
  //don't forget to return state[name] property, not state.property
  return state.videos.allVideos;
};

export default videoSlice.reducer;
