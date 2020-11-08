import './VideoItem.css';
import React from 'react';

export default function VideoItem(props) {
  const { vid, onVideoSelect } = props;
  return (
    <div onClick={() => onVideoSelect(vid)} className="video-item item">
      <img
        className="ui image"
        src={vid.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{vid.snippet.title}</div>
      </div>
    </div>
  );
}
