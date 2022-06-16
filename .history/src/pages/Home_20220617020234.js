/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

function Home() {
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onKeyDown = ev => {
    console.log(ev.keyCode);
  };
  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=man
    fetch(`https://api.tvmaze.com/search/shows?q=$(input)`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
}

export default Home;
