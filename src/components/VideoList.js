import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getVideosYT, selectVideos } from "./videoSlice";

const VideoList = () => {
  const videos = useSelector(selectVideos);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getVideosYT())
  },[])

  return (
    <>
    <ul>
      {videos ? 
        (videos.map((video, index)=>{
          console.log(video)
          return (
              <li key={index}>{video.name}</li>
          )
           })) : ''
      }
    </ul>
    <button onClick={()=> dispatch(getVideosYT())}> Get Videos</button>
    </>
  );
};

export default VideoList;
