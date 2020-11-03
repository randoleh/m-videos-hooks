import './VideoItem.css';
import React, { Component } from 'react';

export default class VideoItem extends Component {
  render() {
    const { id, snippet } = this.props.vid;
    return (
      <div className="video-item item">
        <img className="ui image" src={snippet.thumbnails.medium.url} alt="" />
        <div className="content">
          <div className="header">{snippet.title}</div>
        </div>
      </div>
    );
  }
}
