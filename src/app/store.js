import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../components/videoSlice';

export default configureStore({
    reducer: {
        videos: videoReducer
    }
})