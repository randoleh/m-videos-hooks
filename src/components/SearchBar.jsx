import React, { useState } from 'react';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearchSubmit(searchTerm);
  }

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </form>
    </div>
  );
}
