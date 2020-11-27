import React from "react";
import VideoItem from "./VideoItem";
import { useSelector, useDispatch } from "react-redux";
import { getVideosYT, selectVideos } from "./videoSlice";

const VideoList = () => {
  const videos = useSelector(selectVideos);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {videos
          ? videos.map((video, index) => (
              <VideoItem key={video.id} name={video.name} />
            ))
          : ""}
      </ul>
      <button onClick={() => dispatch(getVideosYT())}> Get Videos</button>
    </>
  );
};

export default VideoList;
