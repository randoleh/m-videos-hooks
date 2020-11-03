import React, { useState } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

export default function App() {
  const [videoList, setVideoList] = useState([]);
  async function onTermSubmit(term) {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideoList(response.data.items);
  }
  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={onTermSubmit} />
      <VideoList videos={videoList} />
    </div>
  );
}
