import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

export default function useVideos(defaultSearchTerm) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  async function search(term) {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideoList(response.data.items);
  }

  return [videoList, search];
}
