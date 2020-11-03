import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList(props) {
  //props.videos
  return (
    <div className="ui relaxed divided list">
      {props.videos.map((video) => (
        <VideoItem key={video.id.videoId} vid={video} />
      ))}
    </div>
  );
}
