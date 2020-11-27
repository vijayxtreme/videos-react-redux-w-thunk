import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        allVideos: []
    },
    reducers: {
        getVideos: (state, action) => {
            state.allVideos = action.payload
            
        }
    }
});

//export actions --> returns plain objects to be reduced into state
export const { getVideos } = videoSlice.actions;

export const getVideosYT = () => dispatch => {

    const videos = [
        {
           name: 'Mulan',  
           id: 1
        }, 
        {
            name: 'Cinderella',
            id: 2
        },
        {
            name: 'Beauty and the Beast',
            id: 3
        },
        {
            name: 'Aladdin',
            id: 4
        }
    ]
    
    setTimeout(()=>{        
       //console.log('hello')
        dispatch(getVideos(videos))
    }, 1000);
};

//export selector

export const selectVideos = (state) => {
    return state.videos.allVideos
}

export default videoSlice.reducer;