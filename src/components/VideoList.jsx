import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList(props) {
  const { videos, onVideoSelect } = props;
  return (
    <div className="ui relaxed divided list">
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          vid={video}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </div>
  );
}
